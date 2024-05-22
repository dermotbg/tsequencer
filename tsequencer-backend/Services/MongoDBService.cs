
using System.Security.Cryptography.X509Certificates;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using TSequencer.Models;

namespace TSequencer.Services;

public class MongoDBService<T> where T : class
{
  protected readonly IMongoCollection<T> _collection;

  public MongoDBService(IOptions<MongoDBSettings> mongoDBSettings, string collectionName) 
  {
    var mongoUri = Environment.GetEnvironmentVariable("MONGO_URI");
    MongoClient client = new MongoClient(mongoUri);
    IMongoDatabase database = client.GetDatabase(mongoDBSettings.Value.DatabaseName);
    _collection = database.GetCollection<T>(collectionName);

  }
}