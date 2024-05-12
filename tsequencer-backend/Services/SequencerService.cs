using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using TSequencer.Models;

namespace TSequencer.Services;

public class SequencerService : MongoDBService<Sequencer>
{
  public SequencerService(IOptions<MongoDBSettings> mongoDBSettings, IConfiguration configuration) 
    : base(mongoDBSettings, configuration, "sequencers") {}
  
  public async Task<List<Sequencer>> GetSequencersAsync()
  {
    return await _collection.Find(new BsonDocument()).ToListAsync();
  }
    public async Task<List<Sequencer>> GetUserSequencersAsync(string id)
  {
    FilterDefinition<Sequencer> filter = Builders<Sequencer>.Filter.Eq("UserId", id);
    return await _collection.Find(filter).ToListAsync();
  }

  public async Task CreateSequencerAsync(Sequencer sequencer)
  {
    await _collection.InsertOneAsync(sequencer);
  }
  public async Task DeleteAsync(string id)
  {
    FilterDefinition<Sequencer> filter = Builders<Sequencer>.Filter.Eq("Id", id);
    Console.WriteLine(filter);
    await _collection.DeleteOneAsync(filter);
  }
}