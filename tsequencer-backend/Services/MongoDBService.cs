using Microsoft.Extensions.Options;
using MongoDB.Driver;
using TSequencer.Models;

namespace TSequencer.Services;

public class MongoDBService<T> where T : class
{
  protected readonly IMongoCollection<T> _collection;

  public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings, string collectionName) 
  {
    var mongoUri = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production" ? Environment.GetEnvironmentVariable("MONGO_URI") : "mongodb://dev_user:dev_password@mongo:27017?authSource=admin";
    MongoClient client = new MongoClient(mongoUri);
    IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
    _collection = database.GetCollection<T>(collectionName);

  }
}