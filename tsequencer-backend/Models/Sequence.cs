using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TSequencer.Dtos;

namespace TSequencer.Models;

public class Sequencer
{
  [BsonId]
  [BsonRepresentation(BsonType.ObjectId)]
  public string Id { get; set; } = null!;
  public string? Name { get; set; }
  public List<SequencerStepDto> Sequence { get; set; } = null!;
}