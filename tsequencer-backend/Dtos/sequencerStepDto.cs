namespace TSequencer.Dtos;

public record class SequencerStepDto{
  string? ExtraCSS {get; set; }
  Dictionary<string, int> Gain { get; set; } = null!;
  List<string> Instruments { get; set; } = null!;
  List<string> Metronomes { get; set; } = null!;
}