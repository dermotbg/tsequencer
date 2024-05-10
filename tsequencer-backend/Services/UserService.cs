using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using TSequencer.Models;

namespace TSequencer.Services;

public class UserService : MongoDBService<User>
{
  public UserService(IOptions<MongoDBSettings> mongoDBSettings, IConfiguration configuration) 
    : base(mongoDBSettings, configuration, "users") {}

  public async Task<List<User>> GetAsync() 
  {
    return await _collection.Find(new BsonDocument()).ToListAsync();
  }
  public async Task CreateAsync(User user) 
  {
    await _collection.InsertOneAsync(user);
    return;
  }
  public async Task<bool> CheckUsername(string username)
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Username", username);
    var result = await _collection.Find(filter).FirstOrDefaultAsync();
    return result != null;
  }
  public async Task UpdateUsername(string id, string username) 
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Id", id);
    UpdateDefinition<User> updatedUser = Builders<User>.Update.Set("username", username);
    await _collection.UpdateOneAsync(filter, updatedUser);
    return;
  }
  public async Task DeleteAsync(string id) 
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Id", id);
    await _collection.DeleteOneAsync(filter);
    return;
  }
  
}