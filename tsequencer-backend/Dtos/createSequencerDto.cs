namespace TSequencer.Dtos;

public class CreateSequencerDto
{
  public string? Name { get; set; }
  public string Username { get; set; } = null!;
  public List<SequencerStepDto> Sequence { get; set; } = null!;
}