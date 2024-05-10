using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TSequencer.Dtos;
using TSequencer.Models;
using TSequencer.Services;

namespace TSequencer.Controllers;

[Controller]
[Route("api/[controller]")]
public class UserController : Controller
{
  private readonly UserService _userService;

  public UserController(UserService userService) {
    _userService = userService;
  }

  [HttpGet]
  public async Task<List<User>> Get() 
  {
    return await _userService.GetAsync();
  }

  [HttpPost]
  public async Task<IActionResult> Post([FromBody] CreateUserDto newUserBody ) 
  {
    if(!ModelState.IsValid){
      return BadRequest("Malformed Data");
    }

    if(await _userService.CheckUsername(newUserBody.username)){
      return Conflict("Username already exists");
    }
   
    var passwordHasher = new PasswordHasher<CreateUserDto>();
    string hashedPassword = passwordHasher.HashPassword(newUserBody, newUserBody.password);

    User user = new User{
      Username = newUserBody.username,
      PasswordHash = hashedPassword
    };
    
    await _userService.CreateAsync(user);
    return CreatedAtAction(nameof(Get), new { id = user.Id }, user );
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> UpdateUsername(string id, [FromBody] string username) 
  {
    await _userService.UpdateUsername(id, username);
    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(string id)
  {
    await _userService.DeleteAsync(id);
    return NoContent();
  }
}
