using Microsoft.AspNetCore.Mvc;
using TSequencer.Dtos;
using TSequencer.Helpers;
using TSequencer.Services;

namespace TSequencer.Controllers;
[Controller]
[Route("api/[controller]")]
public class LoginController : Controller
{
  private readonly UserService _userService;
  private readonly UserAuthenticationService _userAuthService;
  private readonly JwtHandler _jwtHandler;

  public LoginController(UserService userService, UserAuthenticationService userAuthService, JwtHandler jwtHandler)
  {
    _userService = userService;
    _userAuthService = userAuthService;
    _jwtHandler = jwtHandler;
  }
  [HttpPost]
  public async Task<IActionResult> Post([FromBody] LoginDto login)
  {
    if(!ModelState.IsValid){
      return BadRequest("Please enter a Username & Password");
    }

    var user = await _userService.GetUserByUsernameAsync(login.Username);

    if(user == null || user.Id == null){
      return Conflict("User not found");
    }

    if(!await _userAuthService.PasswordIsCorrect(user.Id, login.Password)){
      return Conflict("Incorrect Password");
    }

    var token = _jwtHandler.GenerateJwtToken(user.Id, "user");
    // append to cookies
    Response.Cookies.Append("token", token, _jwtHandler.createTokenCookie(60));

    return Ok(token);
  }
  [HttpPost("validate-token")]
  public IActionResult ValidateToken()
  {
    if(!Request.Cookies.TryGetValue("token", out var token))
    {
      return Unauthorized("No token found");
    }
    if(!_userAuthService.UserisAuthenticated(token))
    {
      return Unauthorized("Token has expired");
    }
    return Ok();
  }
  [HttpPost("logout")]
  public IActionResult RemoveToken()
  {
    if(!Request.Cookies.TryGetValue("token", out var token))
    {
      return NoContent();
    }
    Response.Cookies.Append("token", token, _jwtHandler.createTokenCookie(-1));
    return NoContent();
  }
}