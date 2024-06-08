import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tutorial = () => {
  return (
    <div>
      <div className="flex flex-row justify-center">
        <img
          src="https://github.com/dermotbg/tsequencer/assets/123154617/112d843d-6f44-43f7-9498-1eadb80e8b50"
          alt="TSequencer Logo"
          className="mt-10"
        />
      </div>
      <div className="flex flex-row justify-center">
        <Tabs defaultValue="instrument-pad" className="bg-stone-800 w-11/12 h-full rounded-md">
          <TabsList className="grid w-full grid-cols-4 bg-inherit text-stone-300  ">
            <TabsTrigger value="instrument-pad">Pads</TabsTrigger>
            <TabsTrigger value="sequencer">Sequencer</TabsTrigger>
            <TabsTrigger value="mixing-desk">Mixing Desk</TabsTrigger>
            <TabsTrigger value="global-options">Controls</TabsTrigger>
          </TabsList>
          <TabsContent value="instrument-pad">
            <div className="relative text-center">
              <div
                className="bg-repeat bg-center min-h-dvh"
                style={{
                  backgroundImage:
                    "url(https://github.com/dermotbg/tsequencer/assets/123154617/b0b98744-fd72-4656-9a23-265009743355",
                }}
              >
                {/* <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/b0b98744-fd72-4656-9a23-265009743355"
                  alt="Instrument Pad background image"
                  className="opacity-20 "
                /> */}
                {/* <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/0dfb49b3-a049-4e07-9c74-6400c6cb4e71"
                  alt="Instrument Pad background image 2"
                  className="opacity-20"
                /> */}
              </div>
              <div className="w-full text-white absolute top-0 left-0 text-center mt-10">
                <h2 className="font-bold text-2xl sm:text-6xl p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                  INSTRUMENT PAD
                </h2>
                <div className="flex flex-col items-center p-4 ">
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    Each instrument has a dedicated pad. Clicking on the pad will launch the sample
                    and assign that sample to be the “active pad”.
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    You can tell which pad is active as the pad will be highlighted.
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    To add an instrument to a step in the sequencer, ensure the desired instrument
                    is set as the active pad, then click the desired sequencer step.
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    To default to no active pad, click on the currently active pad.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="sequencer">
            <div className="relative text-center">
              <div
                className="bg-repeat bg-left-top sm:bg-center min-h-dvh"
                style={{
                  backgroundImage:
                    "url(https://github.com/dermotbg/tsequencer/assets/123154617/62e3fedb-fa16-4552-b689-7a5d00f4192d",
                }}
              >
                {/* <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/62e3fedb-fa16-4552-b689-7a5d00f4192d"
                  alt="sequencer background image"
                  className="opacity-20"
                /> */}
              </div>
              <div className="w-full text-white absolute top-0 left-0 text-center mt-10">
                <h2 className="font-bold text-2xl sm:text-6xl p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md ">
                  SEQUENCER
                </h2>
                <div className="p-4 overflow-y-scroll">
                  <p className="p-4 mb-1 sm:m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    The sequencer is a one bar length 4/4 grid, split into 16ths, with the leftmost
                    buttons being the on-beat steps.
                  </p>
                  <p className="p-4 mb-1 sm:m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    It shows the currently playing step by changing the border color, the
                    highlighted border colors represent how many samples are loaded into the step.
                  </p>
                  <p className="p-4 mb-1 sm:m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    When you assign instruments to a step, you will see the first and last letter of
                    those instruments populate the step button.{" "}
                  </p>
                  <p className="p-4 mb-1 sm:m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    When you click a specific step without an active pad, it will load the mixing
                    desk for that step, where you can assign different volumes to all the
                    instruments of that step.{" "}
                  </p>
                  <p className="p-4 mb-1 sm:m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    The launch controls are found underneath the sequencer, recording toggles if key
                    press recording is active, and trash clears the sequencer to a blank slate.{" "}
                  </p>
                  <p className="p-4 mb-1 sm:m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    The sequencer can be launched using the launch controls below the steps.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="mixing-desk">
            <div className="relative text-center">
              <div
                className="bg-repeat bg-center min-h-dvh"
                style={{
                  backgroundImage:
                    "url(https://github.com/dermotbg/tsequencer/assets/123154617/83f18af9-2111-4f70-9024-90f5cfcd4d23",
                }}
              >
                {/* <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/83f18af9-2111-4f70-9024-90f5cfcd4d23"
                  alt="Mixing Desk background image"
                  className="opacity-20"
                />
                <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/83f18af9-2111-4f70-9024-90f5cfcd4d23"
                  alt="Mixing Desk background image-2"
                  className="opacity-20"
                /> */}
              </div>
              <div className="w-full text-white absolute top-0 left-0 text-center mt-10">
                <h2 className="font-bold text-2xl sm:text-6xl p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                  MIXING DESK
                </h2>
                <div className="p-4">
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    Each step has its own selection of volume controls.
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    You can access each steps controls by clicking on a step without having an
                    instrument active Any adjustments to individual instrument levels will only
                    apply to that specific step.
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    As the number of samples grow within a step, the number of volume faders will
                    too.
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    By default, only the pad channel will be visible. This is the volume of how the
                    instrument pads are both launched, and assigned to the sequencer. For example,
                    when you have kick as the active pad, and the PAD level at 50%, pressing the
                    kick pad will play the sample at 50% volume, and assigning that sample to a step
                    assigns it at 50% volume. To then increase the volume in that step, it must be
                    done by the "kick" volume control of the step itself.{" "}
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="global-options">
            <div className="relative text-center">
              <div
                className=" bg-center min-h-dvh bg-repeat-y"
                style={{
                  backgroundImage:
                    "url(https://github.com/dermotbg/tsequencer/assets/123154617/b1533131-f516-4fa0-94b5-c8f7e3cbe449",
                }}
              >
                {/* <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/40cd4781-ed68-413e-9220-4d4bb5a672e3"
                  alt="Global Options background image"
                  className="opacity-20"
                />
                <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/6306df09-3e81-4ebd-b519-112e3d38e5da"
                  alt="Global Options background image 2"
                  className="opacity-20"
                />
                <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/40cd4781-ed68-413e-9220-4d4bb5a672e3"
                  alt="Global Options background image"
                  className="opacity-20"
                />
                <img
                  src="https://github.com/dermotbg/tsequencer/assets/123154617/6306df09-3e81-4ebd-b519-112e3d38e5da"
                  alt="Global Options background image 2"
                  className="opacity-20"
                /> */}
              </div>
              <div className="w-full text-white absolute top-0 left-0 text-center mt-10">
                <h2 className="font-bold text-2xl sm:text-6xl p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                  GLOBAL CONTROLS
                </h2>
                <div className="p-4">
                  <h3>Key Tracking</h3>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    {" "}
                    *Key Tracking is only available on Desktop
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    The key tracking feature allows you to assign instruments to keys on your
                    keyboard, allowing you to launch the samples by hitting keys and record to the
                    sequencer.{" "}
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    Press the assign keys button to map keys to instruments.{" "}
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    Keys must be alphanumeric, you can only assign one sample to each key.{" "}
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    When the sequencer is not playing key press plays samples
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    When the sequencer is playing and recording is active key press does not play
                    samples but assigns them to the sequencer grid.
                  </p>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                    The sequencer will quantize the key press to the closest step as per the audio
                    playback at the time, so results may be unexpected.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Tutorial;
