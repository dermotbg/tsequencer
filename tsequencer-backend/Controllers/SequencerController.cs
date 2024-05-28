using Microsoft.AspNetCore.Mvc;
using TSequencer.Dtos;
using TSequencer.Helpers;
using TSequencer.Models;
using TSequencer.Services;

namespace TSequencer.Controllers;

[Controller]
[Route("api/[controller]")]
public class SequencerController : Controller
{
  private readonly SequencerService _sequencerService;
  private readonly UserAuthenticationService _authService;
  private readonly UserService _userService;

  public SequencerController(SequencerService sequencerService, UserAuthenticationService authService, UserService userService)
  {
    _sequencerService = sequencerService;
    _authService = authService;
    _userService = userService;
  }

  [HttpGet]
  // GET /api/sequencer
  public async Task<List<Sequencer>> Get()
  {
    return await _sequencerService.GetSequencersAsync();
  }

  [HttpGet]
  [Route("{username}")]
  // GET /api/sequencer{Username}
  public async Task<ActionResult<List<Sequencer>>> Get(string username)
  {
    var user = await _userService.GetUserByUsernameAsync(username);
    if(user == null || user.Id == null)
    {
      return Unauthorized("Request must be made by a valid user");
    }
    return await _sequencerService.GetUserSequencersAsync(user.Id);
  }

  [HttpPost]
  // POST /api/sequencer
  public async Task<IActionResult> Post([FromBody] CreateSequencerDto newSequenceBody)
  {
    // TODO: handle case where seq name already exists
    if(!ModelState.IsValid || newSequenceBody.Name == null)
    {
      return BadRequest("Please enter a sequencer name");
    }
    if(!Request.Cookies.TryGetValue("token", out var token))
    {
      return Unauthorized("No token found");
    }

    var user = await _userService.GetUserByUsernameAsync(newSequenceBody.Username);
    if(user == null || user.Id == null)
    {
      return Unauthorized("Request must be assigned to a user");
    }

    if(await _sequencerService.CheckUsersSequencerNamesAsync(user.Id, newSequenceBody.Name)){
      return BadRequest("Sequencer already exists, please update below");
    }

    Sequencer newSequence = new Sequencer
    {
      Name = newSequenceBody.Name.ToLower(),
      Sequence = newSequenceBody.Sequence,
      UserId = user.Id
    };
    
    await _sequencerService.CreateSequencerAsync(newSequence);
    return CreatedAtAction(nameof(Get), new { id = newSequence.Id }, newSequence );
  }

  [HttpPut("{id}")]
  // PUT /api/sequencer/id
  public async Task<IActionResult> UpdateSequence([FromBody] UpdateSequencerDto seqObj)
  {
    if(!Request.Cookies.TryGetValue("token", out var token))
    {
      return Unauthorized("No user token found");
    }
    if(!ModelState.IsValid){
      return BadRequest("Malformed or Missing Data");
    }

    if(await _userService.GetUserAsync(seqObj.UserId) == null)
    {
      return Unauthorized("Request must be sent with valid userId");
    }

    await _sequencerService.UpdateSequenceAsync(seqObj);
    return NoContent();
  }
  [HttpDelete("{id}")]
  // DELETE /api/sequencer/{id}
  public async Task<IActionResult> Delete(string id)
  {
    await _sequencerService.DeleteAsync(id);
    return NoContent();
  }
  
}