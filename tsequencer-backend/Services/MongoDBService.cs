
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using TSequencer.Models;

namespace TSequencer.Services;

public class MongoDBService 
{
  private readonly IMongoCollection<User> _userCollection;
  private readonly IConfiguration? _configuration;

  public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings, IConfiguration configuration) 
  {
    var mongoUri = configuration["MONGO_URI"];
    MongoClient client = new MongoClient(mongoUri);
    IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
    _userCollection = database.GetCollection<User>(mongoDBSettings.Value.CollectionName);

  }
  public async Task<List<User>> GetAsync() 
  {
    return await _userCollection.Find(new BsonDocument()).ToListAsync();
  }
  public async Task CreateAsync(User user) 
  {
    await _userCollection.InsertOneAsync(user);
    return;
  }
  public async Task UpdateUsername(string id, string username) 
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Id", id);
    UpdateDefinition<User> updatedUser = Builders<User>.Update.Set("username", username);
    await _userCollection.UpdateOneAsync(filter, updatedUser);
    return;
  }
  public async Task DeleteAsync(string id) 
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Id", id);
    await _userCollection.DeleteOneAsync(filter);
    return;
  }
}