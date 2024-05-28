using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using TSequencer.Dtos;
using TSequencer.Models;

namespace TSequencer.Services;

public class SequencerService : MongoDBService<Sequencer>
{
  public SequencerService(IOptions<MongoDBSettings> mongoDBSettings) 
    : base(mongoDBSettings, "sequencers") {}
  
  public async Task<List<Sequencer>> GetSequencersAsync()
  {
    return await _collection.Find(new BsonDocument()).ToListAsync();
  }
  public async Task<List<Sequencer>> GetUserSequencersAsync(string id)
  {
    FilterDefinition<Sequencer> filter = Builders<Sequencer>.Filter.Eq("UserId", id);
    return await _collection.Find(filter).ToListAsync();
  }
  public async Task<bool> CheckUsersSequencerNamesAsync(string id, string seqName)
  {
    FilterDefinition<Sequencer> filter = Builders<Sequencer>.Filter.And(
      Builders<Sequencer>.Filter.Eq("UserId", id),
      Builders<Sequencer>.Filter.Eq("Name", seqName.ToLower())
    );
    return await _collection.Find(filter).AnyAsync();
  }

  public async Task CreateSequencerAsync(Sequencer sequencer)
  {
    await _collection.InsertOneAsync(sequencer);
  }
  public async Task UpdateSequenceAsync(UpdateSequencerDto seqObj)
  {
    FilterDefinition<Sequencer> filter = Builders<Sequencer>.Filter.Eq("Id", seqObj.Id);
    UpdateDefinition<Sequencer> updatedSequencer = Builders<Sequencer>.Update.Set("Sequence", seqObj.Sequence);
    await _collection.UpdateOneAsync(filter, updatedSequencer);
  }
  public async Task DeleteAsync(string id)
  {
    FilterDefinition<Sequencer> filter = Builders<Sequencer>.Filter.Eq("Id", id);
    await _collection.DeleteOneAsync(filter);
  }
}