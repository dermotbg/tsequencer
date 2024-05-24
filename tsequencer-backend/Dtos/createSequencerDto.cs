using System.ComponentModel.DataAnnotations;

namespace TSequencer.Dtos;

public class CreateSequencerDto
{
  [Required]
  public string? Name { get; set; }
  public string Username { get; set; } = null!;
  public List<SequencerStepDto> Sequence { get; set; } = null!;
}