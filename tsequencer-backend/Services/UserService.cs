using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using TSequencer.Models;

namespace TSequencer.Services;

public class UserService : MongoDBService<User>
{
  public UserService(IOptions<MongoDBSettings> mongoDBSettings, IConfiguration configuration) 
    : base(mongoDBSettings, "users") {}

  public async Task<List<User>> GetAsync() 
  {
    return await _collection.Find(new BsonDocument()).ToListAsync();
  }
  public async Task<User> GetUserAsync(string id) 
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Id", id);
    return await _collection.Find(filter).FirstOrDefaultAsync();
  }
  public async Task<User> GetUserByUsernameAsync(string username) 
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Username", username);
    return await _collection.Find(filter).FirstOrDefaultAsync();
  }
  public async Task CreateAsync(User user) 
  {
    await _collection.InsertOneAsync(user);
    return;
  }
  public async Task<bool> CheckUsernameAsync(string username)
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Username", username);
    var result = await _collection.Find(filter).FirstOrDefaultAsync();
    return result != null;
  }
  public async Task UpdateUsernameAsync(string id, string username) 
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Id", id);
    UpdateDefinition<User> updatedUser = Builders<User>.Update.Set("Username", username);
    await _collection.UpdateOneAsync(filter, updatedUser);
    return;
  }
  public async Task UpdatePasswordAsync(string id, string passwordHash) 
  {
    FilterDefinition<User> filter = Builders<User>.Filter.Eq("Id", id);
    UpdateDefinition<User> updatedUser = Builders<User>.Update.Set("PasswordHash", passwordHash);
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