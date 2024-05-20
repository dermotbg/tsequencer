using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TSequencer.Models;
using TSequencer.Services;

namespace TSequencer.Controllers;

[Controller]
[Route("api/[controller]")]
public class SequencerController : Controller
{
  private readonly SequencerService _sequencerService;
  private readonly UserAuthenticationService _authService;

  public SequencerController(SequencerService sequencerService, UserAuthenticationService authService)
  {
    _sequencerService = sequencerService;
    _authService = authService;
  }

  [HttpGet]
  // GET /api/sequencer
  public async Task<List<Sequencer>> Get()
  {
    return await _sequencerService.GetSequencersAsync();
  }

  [HttpGet]
  [Route("user/{id}")]
  // GET /api/sequencer/user/{UserId}
  public async Task<List<Sequencer>> Get(string id)
  {
    return await _sequencerService.GetUserSequencersAsync(id);
  }

  [HttpPost]
  // POST /api/sequencer
  public async Task<IActionResult> Post([FromBody] Sequencer newSequence)
  {
    if(!_authService.UserisAuthenticated(Request.Headers["Authorization"].ToString().Replace("Bearer ", "")))
    {
      Unauthorized("User token is missing or expired.");
    }
    await _sequencerService.CreateSequencerAsync(newSequence);
    return CreatedAtAction(nameof(Get), new { id = newSequence.Id }, newSequence );
  }

  [HttpDelete("{id}")]
  // DELETE /api/sequencer/{id}
  public async Task<IActionResult> Delete(string id)
  {
    await _sequencerService.DeleteAsync(id);
    return NoContent();
  }
  
}