using System.ComponentModel.DataAnnotations;

namespace TSequencer.Dtos;

public record class CreateUserDto(
  [Required]
  [StringLength(15, MinimumLength =3)]
  string Username,
  [Required]
  [MinLength(8, ErrorMessage = "Password must be at least 8 characters long.")]
  string Password
);