namespace TSequencer.Dtos;

public record class SequencerStepDto
{
  public List<string> Instruments { get; set; } = null!;
  public List<string> Metronomes { get; set; } = null!;
  public string ExtraCSS {get; set; } = null!;
  public Dictionary<string, double> Gain { get; set; } = null!;
}