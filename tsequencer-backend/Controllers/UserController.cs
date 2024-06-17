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
      if(newUserBody.Username.Length < 3 )
      {
        return BadRequest("Username must be at least 3 characters");
      }
      else if(newUserBody.Password.Length < 8 )
      {
        return BadRequest("Password must be at least 8 characters");
      }
      else 
      {
        return BadRequest("Invalid Data. Please enter a username, password and password confirmation");
      }
    }

    if(!ConfirmPassword.PasswordMatch(newUserBody.Password, newUserBody.ConfPassword))
    {
      return BadRequest("Passwords do not match");
    }

    if(await _userService.CheckUsernameAsync(newUserBody.Username)){
      return Conflict("Username already exists");
    }
    User user = new User{
      Username = newUserBody.Username,
      PasswordHash = _userAuthService.CreatePasswordHash(newUserBody, newUserBody.Password)
    };
    
    await _userService.CreateAsync(user);
    return CreatedAtAction(nameof(Get), new { id = user.Id }, user );
  }

  [HttpPut("pw/{id}")]
  // PUT /api/user/pw/{id}
  public async Task<IActionResult> UpdatePassword(string id, [FromBody] UpdatePasswordDto user)
  {
    if(!ModelState.IsValid){
      return BadRequest("Malformed or Missing Data");
    }

    var userToUpdate = await _userService.GetUserByUsernameAsync(user.Username);

    if(userToUpdate == null)
    {
      return BadRequest("User not found");
    }
    if(!await _userAuthService.PasswordIsCorrect(id, user.Password))
    {
      return BadRequest("Incorrect Password");
    }

    var PasswordHash = _userAuthService.CreatePasswordHash(user, user.NewPassword);

    await _userService.UpdatePasswordAsync(id, PasswordHash);

    return NoContent();
  }

  [HttpPut("un/{id}")]
  // PUT /api/user/un/{id}
  public async Task<IActionResult> UpdateUsername(string id, [FromBody] UpdateUsernameDto user)
  {
    if(!ModelState.IsValid){
      return BadRequest("Malformed or Missing Data");
    }
    if(!await _userAuthService.PasswordIsCorrect(id, user.Password)){
      return BadRequest("Incorrect Password");
    }

    var userAlreadyExists = await _userService.GetUserByUsernameAsync(user.NewUsername);
    
    if(userAlreadyExists != null)
    {
      return Conflict("Username is taken");
    }

    var userToUpdate = await _userService.GetUserByUsernameAsync(user.Username);

    if(userToUpdate == null)
    {
      return BadRequest("User not found");
    }
    
    await _userService.UpdateUsernameAsync(id, user.NewUsername);
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
