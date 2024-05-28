using System.ComponentModel.DataAnnotations;

namespace TSequencer.Dtos;

public class UpdateSequencerDto
{
  [Required]
  public string Id { get; set; } = null!;
  [Required]
  public string Name { get; set; } = null!;
  [Required]
  public List<SequencerStepDto> Sequence { get; set; } = null!;
  [Required]
  public string UserId { get; set; } = null!;
}