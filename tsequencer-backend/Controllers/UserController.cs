using System;
using Microsoft.AspNetCore.Mvc;
using TSequencer.Models;
using TSequencer.Services;

namespace TSequencer.Controllers;

[Controller]
[Route("api/[controller]")]
public class UserController : Controller
{
  private readonly MongoDBService _mongoDBService;

  public UserController(MongoDBService mongoDBService) {
    _mongoDBService = mongoDBService;
  }

  [HttpGet]
  public async Task<List<User>> Get() 
  {
    return await _mongoDBService.GetAsync();
  }

  [HttpPost]
  public async Task<IActionResult> Post([FromBody] User user) 
  {
    await _mongoDBService.CreateAsync(user);
    return CreatedAtAction(nameof(Get), new { id = user.Id }, user );
  }

  [HttpPut("{id}")]
  public async Task<IActionResult> UpdateUsername(string id, [FromBody] string username) 
  {
    await _mongoDBService.UpdateUsername(id, username);
    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(string id)
  {
    await _mongoDBService.DeleteAsync(id);
    return NoContent();
  }
}
