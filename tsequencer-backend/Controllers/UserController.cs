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
  private readonly UserAuthenticationService _authService;

  public UserController(UserService userService, UserAuthenticationService authService) {
    _userService = userService;
    _authService = authService;
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
    User user = new User{
      Username = newUserBody.username,
      PasswordHash = _authService.CreatePasswordHash(newUserBody)
    };
    
    await _userService.CreateAsync(user);
    return CreatedAtAction(nameof(Get), new { id = user.Id }, user );
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> UpdateUsername(string id, [FromBody] UpdateUserNameDto user)
  {
    if(!ModelState.IsValid){
      return BadRequest("Malformed or Missing Data");
    }
    if(!await _authService.PasswordIsCorrect(id, user.password)){
      return BadRequest("Incorrect Password");
    }
    await _userService.UpdateUsername(id, user.newUsername);
    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(string id)
  {
    await _userService.DeleteAsync(id);
    return NoContent();
  }
}
