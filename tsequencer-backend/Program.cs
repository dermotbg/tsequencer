using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using TSequencer.Helpers;
using TSequencer.Models;
using TSequencer.Services;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();


// JWT Config
builder.Services.AddAuthentication(options => 
{
  options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
  options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
  options.RequireHttpsMetadata = false;
  options.SaveToken = true;
  options.TokenValidationParameters = new TokenValidationParameters
  {
    ValidateIssuerSigningKey = true,
    ValidIssuer = builder.Configuration.GetSection("JWT_ISSUER").Value,
    ValidAudience = builder.Configuration.GetSection("JWT_AUDIENCE").Value,
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration.GetSection("JWT_SECRET").Value!)),
    ClockSkew = TimeSpan.Zero
  };
});

// Config default authorization policy

builder.Services.AddAuthorization(options =>
{
  options.DefaultPolicy = new AuthorizationPolicyBuilder()
    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
    .RequireAuthenticatedUser()
    .Build();
});

// Get Mongo settings from settings etc
var mongoConfig = builder.Configuration.GetSection("MongoDB").Get<MongoDBSettings>();
var mongoConnectionURI = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") == "Production" ? Environment.GetEnvironmentVariable("MONGO_URI") : "mongodb://dev_user:dev_password@mongo:27017?authSource=admin";

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

builder.Services.AddHealthChecks();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder.Services.AddSingleton<UserService>();
builder.Services.AddSingleton<UserAuthenticationService>();
builder.Services.AddSingleton<JwtHandler>();
builder.Services.AddSingleton<SequencerService>();

var app = builder.Build();

app.MapHealthChecks("/healthcheck");

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseRouting();
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
