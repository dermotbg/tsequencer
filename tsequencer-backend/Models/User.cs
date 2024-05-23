
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TSequencer.Models;

public class User
{
  [BsonId]
  [BsonRepresentation(BsonType.ObjectId)]
  public string? Id { get; set; }
  [StringLength(15, MinimumLength =3)]
  [Required]
  public string Username { get; set; } = null!;
  [JsonIgnore]
  public string PasswordHash { get; set; } = null!;
}