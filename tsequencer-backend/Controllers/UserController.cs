using Microsoft.AspNetCore.Mvc;
using TSequencer.Dtos;
using TSequencer.Helpers;
using TSequencer.Models;
using TSequencer.Services;

namespace TSequencer.Controllers;

[Controller]
[Route("api/[controller]")]
public class UserController : Controller
{
  private readonly UserService _userService;
  private readonly UserAuthenticationService _userAuthService;

  public UserController(UserService userService, UserAuthenticationService userAuthService) 
  {
    _userService = userService;
    _userAuthService = userAuthService;
  }

  [HttpGet]
  // GET /api/user  
  public async Task<List<User>> Get() 
  {
    return await _userService.GetAsync();
  }

  [HttpGet("{id}")]
  // GET /api/user/{id}
  public async Task<User> Get(string id) 
  {
    return await _userService.GetUserAsync(id);
  }

  [HttpPost]
  // POST /api/user
  public async Task<IActionResult> Post([FromBody] CreateUserDto newUserBody ) 
  {
    if(!ModelState.IsValid){
      return BadRequest("Malformed Data");
    }

    if(!ConfirmPassword.PasswordMatch(newUserBody.Password, newUserBody.ConfPassword))
    {
      return BadRequest("Passwords do not match");
    }

    if(await _userService.CheckUsername(newUserBody.Username)){
      return Conflict("Username already exists");
    }
    User user = new User{
      Username = newUserBody.Username,
      PasswordHash = _userAuthService.CreatePasswordHash(newUserBody)
    };
    
    await _userService.CreateAsync(user);
    return CreatedAtAction(nameof(Get), new { id = user.Id }, user );
  }

  [HttpPut("{id}")]
  // PUT /api/user/{id}
  public async Task<IActionResult> UpdateUsername(string id, [FromBody] UpdateUserNameDto user)
  {
    if(!ModelState.IsValid){
      return BadRequest("Malformed or Missing Data");
    }
    if(!await _userAuthService.PasswordIsCorrect(id, user.password)){
      return BadRequest("Incorrect Password");
    }
    await _userService.UpdateUsername(id, user.newUsername);
    return NoContent();
  }

  [HttpDelete("{id}")]
  // DELETE /api/user/{id}
  public async Task<IActionResult> Delete(string id)
  {
    await _userService.DeleteAsync(id);
    return NoContent();
  }
}
