using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TSequencer.Dtos;

namespace TSequencer.Models;

public class Sequencer
{
  [BsonId]
  [BsonRepresentation(BsonType.ObjectId)]
  public string? Id { get; set; }
  [Required]
  public string? Name { get; set; }
  public List<SequencerStepDto> Sequence { get; set; } = null!;
  [BsonRepresentation(BsonType.ObjectId)]
  public string UserId { get; set; } = null!;
}