namespace TSequencer.Helpers;

public class Logger()
{
  public static void Log(object log)
  {
      var jsonString = System.Text.Json.JsonSerializer.Serialize(log);
      Console.WriteLine(jsonString);
  }
}