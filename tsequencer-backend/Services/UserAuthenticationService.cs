
using Microsoft.AspNetCore.Identity;
using TSequencer.Dtos;
using TSequencer.Models;

namespace TSequencer.Services;

public class UserAuthenticationService
{
  private readonly UserService _userService;
  public UserAuthenticationService(UserService userService)
  {
    _userService = userService;
  } 
  public string CreatePasswordHash(CreateUserDto newUserBody)
  {
    var passwordHasher = new PasswordHasher<CreateUserDto>();
    string hashedPassword = passwordHasher.HashPassword(newUserBody, newUserBody.password);
    return hashedPassword;
  }
  public async Task<bool> PasswordIsCorrect(string id, string password)
  {
    var targetUser = await _userService.GetUserAsync(id);
    var passwordHasher = new PasswordHasher<User>();
    var passwordCorrect = passwordHasher.VerifyHashedPassword(targetUser, targetUser.PasswordHash, password);
    return passwordCorrect == PasswordVerificationResult.Success;
  }
}