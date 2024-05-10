using Microsoft.AspNetCore.Mvc.ModelBinding.Binders;
using TSequencer.Models;
using TSequencer.Services;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);

// Get Mongo settings from settings etc
var mongoConfig = builder.Configuration.GetSection("MongoDB").Get<MongoDBSettings>();
var mongoConnectionURI = builder.Configuration["MONGO_URI"];

if(mongoConfig == null || mongoConnectionURI == null)
{
  throw new InvalidOperationException("MongoDB configuration section or Mongo_URI is missing or null.");
}

builder.Services.Configure<MongoDBSettings>(options =>
{
  options.ConnectionURI = mongoConnectionURI;
  options.DatabaseName = mongoConfig.DatabaseName;
  options.CollectionName = mongoConfig.CollectionName;
});

builder.Services.AddSingleton<MongoDBService>();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapControllers();

app.Run();
