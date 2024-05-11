using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization.Serializers;
using TSequencer.Dtos;
using TSequencer.Models;
using TSequencer.Services;

namespace TSequencer.Controllers;

[Controller]
[Route("api/[controller]")]
public class SequencerController : Controller
{
  private readonly SequencerService _sequencerService;

  public SequencerController(SequencerService sequencerService)
  {
    _sequencerService = sequencerService;
  }

  [HttpGet]
  public async Task<List<Sequencer>> Get()
  {
    return await _sequencerService.GetSequencersAsync();
  }

  [HttpPost]
  public async Task<IActionResult> Post([FromBody] Sequencer newSequence)
  {
    var options = new JsonSerializerOptions { 
      WriteIndented = true
    };
    string jsonString = JsonSerializer.Serialize(newSequence, options);
    Console.WriteLine(jsonString);
    await _sequencerService.CreateSequencerAsync(newSequence);
    return CreatedAtAction(nameof(Get), new { id = newSequence.Id }, newSequence );
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> Delete(string id)
  {
    await _sequencerService.DeleteAsync(id);
    return NoContent();
  }
  
}