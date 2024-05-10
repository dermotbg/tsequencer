using System.ComponentModel.DataAnnotations;

namespace TSequencer.Dtos;

public record class UpdateUserNameDto(
  [Required]
  string password,
  [StringLength(15, MinimumLength =3)]
  [Required]
  string newUsername
);