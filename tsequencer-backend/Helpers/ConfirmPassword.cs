namespace TSequencer.Helpers;

public class ConfirmPassword()
{
  public static bool PasswordMatch(string password, string confPassword)
  {
    return password == confPassword;
  }
};