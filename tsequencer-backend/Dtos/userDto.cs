using System.ComponentModel.DataAnnotations;

namespace TSequencer.Dtos
{
  public interface IPasswordContainer
  {
    string Password { get; }
  }
  public class BaseUserDto : IPasswordContainer
  {
    [Required]
    [StringLength(15, MinimumLength =3)]
    public string Username { get; set; } = null!;
    [Required]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters long.")]
    public string Password { get; set; } = null!;
  }
  public class CreateUserDto : BaseUserDto
  {
    [Required]
    public string ConfPassword { get; set; } = null!;
  }
  public class UpdatePasswordDto : BaseUserDto
  {
    [Required]
    [MinLength(8, ErrorMessage = "Password must be at least 8 characters long.")]
    public string NewPassword { get; set; } = null!;
  }
  public class UpdateUsernameDto : BaseUserDto
  {
    [StringLength(15, MinimumLength =3)]
    [Required]
    public string NewUsername { get; set; } =null!;
  }
}
