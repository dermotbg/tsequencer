using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace TSequencer.Dtos;

public record class LoginDto
{
  [Required]
  public string Username { get; set; } = null!;
  [Required]
  public string Password { get; set; } = null!;
}