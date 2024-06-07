<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/112d843d-6f44-43f7-9498-1eadb80e8b50" alt="TSequencer Logo" width="200" />
</div>

<h1 align="center">TSequencer</h1>

<h3 align="center">Drum / Sample sequencer made with TypeScript and the <a href="https://webaudioapi.com/">Web Audio API</a></h3>

___
## How to Run Full Dev Build:

1. **Clone Repository**
2. **Start Docker Daemon**
3. **Create a `.env` file in the root directory with the needed variables:**
   - `MONGO_URI`
   - `JWT_ISSUER`
   - `JWT_AUDIENCE`
   - `JWT_SECRET`
4. **From the root, run the following command:**
   ```
   docker compose -f docker-compose-dev.yml up --watch --build
   ```
5. **visit http://localhost:8080/ in your browser**
---

## To just play with the sequencer:

  - **`npm run dev` after install from the FE directory will work fine, excluding user or save/load functionality**
---

<h1 align="center">Current State</h1>

<h2 align="center">Landing:</h2>

<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/5c7675d8-064f-48d6-9076-b260b51b8b2b" alt="Landing" width="80%" height="80%"/>
</div>

<h2 align="center">Logged in + Playing:</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/611b2c74-75fb-42ab-95db-3ce437632afe" alt="Logged in + Playing" width="80%" height="80%" />
</div>

<h2 align="center">Mixing Desk (WIP):</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/db180368-e2c4-4432-8fc7-62f82cd97f0e" alt="Mixing Desk" width="80%" height="80%" />
</div>

<h2 align="center">Save/Update Dialog:</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/ba8477e0-f204-4e2f-b2e0-b034fbae6ebb" alt="Save/Update Dialog" width="80%" height="80%"/>
</div>

<h2 align="center">Load Dialog:</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/290f2c1c-9ccf-41cd-ba1d-05feccde334b" alt="Load Dialog" width="80%" height="80%" />
</div>

<h2 align="center">Key Mapping Dialog:</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/d48e73b9-5521-43cd-a4bd-88c23543f95a" alt="Key Mapping Dialog" width="80%" height="80%" />
</div>

<h2 align="center">Key Sequencer Dialog:</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/c3df441e-77d0-4e2a-b867-e7189fdabd7b" alt="Clear Sequencer Dialog" width="80%" height="80%" />
</div>

<h2 align="center">KeyMobile View (WIP)</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/3fc0778e-4e81-470c-b669-b5dc80f8501c" alt="Mobile View" />
</div>

<h2 align="center">Mobile View Mixing Desk (WIP)</h2>
<div align="center">
  <img src="https://github.com/dermotbg/tsequencer/assets/123154617/4c8c64fc-83ba-45c9-bff2-8ed252c3fe12" alt="Mobile View Mixing Desk"  />
</div>

---