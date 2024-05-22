using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace TSequencer.Helpers;

public class JwtHandler
{
  private readonly JwtSecurityTokenHandler _jwtSecurityTokenHandler;
  private readonly IConfiguration _configuration;
  public JwtHandler(IConfiguration configuration)
  {
    _jwtSecurityTokenHandler = new JwtSecurityTokenHandler();
    _configuration = configuration;
  } 
  public string GenerateJwtToken(string userId, string role)
  {
    var key = Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET")!);
    var claims = new List<Claim>
    {
      new Claim(ClaimTypes.NameIdentifier, userId),
      new Claim(ClaimTypes.Role, role)
    };

    var identity = new ClaimsIdentity(claims);

    var tokenDescriptor = new SecurityTokenDescriptor
    {
      Issuer = Environment.GetEnvironmentVariable("JWT_ISSUER"),
      Audience = Environment.GetEnvironmentVariable("JWT_AUDIENCE"),
      Subject = identity,
      Expires = DateTime.UtcNow.AddMinutes(30),
      SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
    };

    var token = _jwtSecurityTokenHandler.CreateJwtSecurityToken(tokenDescriptor);
    return _jwtSecurityTokenHandler.WriteToken(token);
  }

  public CookieOptions createTokenCookie(int expiry) 
  {
    var cookieOptions = new CookieOptions
    {
      HttpOnly = true,
      Secure = true,
      SameSite = SameSiteMode.Strict,
      Expires = DateTime.UtcNow.AddMinutes(expiry)
    };
    return cookieOptions;
  }

  public ClaimsPrincipal ValidateJwtToken(string token)
  {
    var key = Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET")!);

    try
    {

      var tokenHandler = new JwtSecurityTokenHandler();
      var claimsPrincipal = tokenHandler.ValidateToken(token, new TokenValidationParameters
      {
        ValidateIssuerSigningKey = true,
        ValidIssuer = Environment.GetEnvironmentVariable("JWT_ISSUER"),
        ValidAudience = Environment.GetEnvironmentVariable("JWT_AUDIENCE"),
        IssuerSigningKey = new SymmetricSecurityKey(key)
      }, out SecurityToken validatedToken);

      return claimsPrincipal;
    }
    catch (SecurityTokenExpiredException)
    {
      throw new ApplicationException("Token has expired");
    }

  }
}