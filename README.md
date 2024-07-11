<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/112d843d-6f44-43f7-9498-1eadb80e8b50" alt="TSequencer Logo" width="200" />
</div>

<h1 align="center">TSequencer</h1>

<h2 align="center">Now live at <a href="https://www.tseq.xyz">www.tseq.xyz</a></h2>

<h3 align="center">Drum/Sample sequencer made with TypeScript and the <a href="https://webaudioapi.com/">Web Audio API</a></h3>

<h4 align="center">Jump to: <a href="#overview">Overview</a> | <a href="#screenshots">Screenshots</a></h4>

___
## How to run the dev build locally:

1. **Clone the repository**
2. **Start the Docker daemon**
3. **From the root directory, run the following command:**
   ```
   docker compose -f docker-compose-dev.yml up --build
   ```
5. **Visit http://localhost:8080/ in your browser**
---

<h1 align="center" id="overview">Overview:</h1>
<ul>
  <li><strong>Front-End Technologies used:</strong>
    <ul>
      <li>TypeScript</li>
      <li>React</li>
    </ul>
  </li>
  <li><strong>Back-End Technologies used:</strong>
    <ul>
      <li>C#</li>
      <li>.NET Core</li>
      <li>MongoDB</li>
    </ul>
  </li>
  <li><strong>Deployment Technologies used:</strong>
    <ul>
      <li>AWS EC2</li>
      <li>Docker Network</li>
      <li>Nginx</li>
    </ul>
  </li>
</ul>
<h2 align="center">Audio</h2>
  <p>
    The logic of the audio leverages the Web Audio API. My implementation was pretty simple as it was purely sample playback. The loop works as follows:
    <br>
    <code>Initialize the context → Fetch the sample and store in buffer  →  Connect the gain node and output destination → Playback</code>
  </p>

<h2 align="center">Sequencer</h2>
<p>The sequencer itself is simply an array of objects generated on the initial load, which is then processed through the useSequencer hook which handles the scheduling, highlighting, playback and assignment of samples. </p>
<p>Instruments are stored as an array of strings. Upon determining which instrument is due to play, the system checks for keywords like “kick” or “clap” within this array and triggers the corresponding sample.</p>
<p>The scheduling is done by comparing the Audio Context’s currentTime value plus a minimum schedule time against a set lookahead time.</p>
<p>The majority of logic in the scheduler itself is handling the UI representation, adding and removing CSS fields as time passes.</p>

<h2 align="center">API</h2>
<p>
    The Back-end features a straightforward API developed using C# and ASP.NET Core. This being a new tech for me gave me a good duction into both the language and the framework. It handles communication to a Mongo database using REST endpoints and validates the user authentication token as it’s being passed from the front end using HTTPOnly cookies. 
</p>
<p>
    Initially I had wanted to stay away from using a MongoDB integration again, but couldn’t justify storing the sequencer objects within a relational database. 
</p>

<h2 align="center">UI</h2>
<p>Using shadcn/ui as the component library along with TailwindCSS really simplified the process of getting the interface as I wanted. My main goal with it was to have the overal aesthetic as simple and neutral as possible while it's inactive, and giving anything that required attention bright colors that would pop off the screen. </p>

<p>Clear visualization of state in audio is something I really appreciate when using music technologies, without it you're effectively restricting your analysis to one sense.</p>

<h2 align="center">Concluding thoughts:</h2>
<p>The Web Audio API offers numerous features that I initially aimed to incorporate. Filtering, Panning and many different types of processing per step would have opened up the possibilities of more complex sequences. </p>

<p>Expanding the sequencer length was also something left unchecked on the list. While pretty simple to implement on the sequencer side of things, having a good UX with multiple pages of steps was not. </p>

<p>The Front-end container structure presented a few UX challenges, when the sequencer grew in size, it became awkward to launch the sequencer and assign without scrolling. This issue stemmed from the visual representation of steps in the sequencer, something that could have been handled by not showing all active instruments on the sequencer, but only the active pad selected.</p>

<p>Maybe on a future iteration...   </p>

---

<h1 id="screenshots" align="center">Screenshots</h1>

<h2 align="center">Sequencer:</h2>
<div align="center">
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/seq.png" alt="Logged in + Playing" width="80%" height="80%" />
</div>

<h2 align="center">Mixing Desk:</h2>
<div align="center">
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/mixing_desk.png" alt="Mixing Desk" width="80%" height="80%" />
</div>

<h2 align="center">Mobile View</h2>
<div align="center">
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/mobile_seq.png" alt="Mobile View" style="padding-right: 10px" />
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/mobile_mixing_desk.png" alt="Mobile View Mixing Desk"  />
</div>

<h2 align="center">Tutorial:</h2>
<div align="center">
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/Tut_1.png" alt="Tutorial" width="80%" height="80%" style="padding-bottom: 10px" />
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/Tut_2.png" alt="Tutorial-2" width="80%" height="80%" />
</div>

<h2 align="center">Tutorial (Mobile):</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/8c4a3b10-940b-4ae0-b518-fffbc7636b38" alt="Tutorial-mobile" style="padding-right: 10px" />
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/c3d2c962-2118-4fd4-b54c-3f1b30f1f565" alt="Tutorial-2-mobile" />
</div>

<h2 align="center">User Settings:</h2>
<div align="center">
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/user_settings_1.png" alt="user-settings" width="50%" height="80%" style="padding-bottom: 10px" />
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/user_settings_2.png" alt="user-settings-2" width="50%" height="80%" />
</div>

<h2 align="center">User Settings (Mobile):</h2>
<div align="center">
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/user_setting_mobile_1.png" alt="User-settings-mobile" style="padding-right: 10px" />
  <img src="https://raw.githubusercontent.com/dermotbg/tseq-audio/main/user_setting_mobile_2.png" alt="User-settings-mobile-2" />
</div>

<h2 align="center">Dialogs:</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/ba8477e0-f204-4e2f-b2e0-b034fbae6ebb" alt="Save/Update Dialog" width="20%" height="20%"/>
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/290f2c1c-9ccf-41cd-ba1d-05feccde334b" alt="Load Dialog" width="20%" height="20%" />
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/c3df441e-77d0-4e2a-b867-e7189fdabd7b" alt="Clear Sequencer Dialog" width="20%" height="20%" />
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/d48e73b9-5521-43cd-a4bd-88c23543f95a" alt="Key Mapping Dialog" width="50%" height="20%" />
</div>