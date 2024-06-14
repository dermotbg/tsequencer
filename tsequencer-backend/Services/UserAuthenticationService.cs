
using Microsoft.AspNetCore.Identity;
using TSequencer.Dtos;
using TSequencer.Helpers;
using TSequencer.Models;

namespace TSequencer.Services;

public class UserAuthenticationService
{
  private readonly UserService _userService;
  private readonly JwtHandler _jwtHandler;
  public UserAuthenticationService(UserService userService, JwtHandler jwtHandler)
  {
    _userService = userService;
    _jwtHandler = jwtHandler;
  } 
  public string CreatePasswordHash<T>(T user, string password) where T : class, IPasswordContainer
  {
    var passwordHasher = new PasswordHasher<T>();
    string hashedPassword = passwordHasher.HashPassword(user, password);
    return hashedPassword;
  }
  public async Task<bool> PasswordIsCorrect(string id, string password)
  {
    var targetUser = await _userService.GetUserAsync(id);
    var passwordHasher = new PasswordHasher<User>();
    var passwordCorrect = passwordHasher.VerifyHashedPassword(targetUser, targetUser.PasswordHash, password);
    return passwordCorrect == PasswordVerificationResult.Success;
  }
  public bool UserisAuthenticated(string token)
  {
    var claimsPrincipal = _jwtHandler.ValidateJwtToken(token);
    return claimsPrincipal?.Identity?.IsAuthenticated == true;
  }
}