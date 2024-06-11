import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
      <div className="flex flex-col items-center text-center">
        <Accordion className="mb-10" type="single" collapsible>
          <AccordionItem value="sequencer-overview">
            <AccordionTrigger
              style={{
                color: "#d6d3d1",
              }}
              className="text-4xl text-stone-300 shadow-black text-shadow-md items-center justify-center text-center"
            >
              <h1>What is a Step Sequencer?</h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col bg-black/25 items-center ">
                <p className="text-stone-300 shadow-black text-shadow-md max-w-4/5 p-5">
                  A sequencer, in broader terms is a tool that is used to playback notes of an
                  instrument. This can be a real-time sequencer, which would be ideal for recording
                  a keyboard melody from a synthesizer, or a step sequencer which offers a set grid
                  of places where instruments or samples can be played.
                  <br />
                  Step sequencers are used in the overwhelming majority of drum machines and
                  samplers in electronic music, as the desired patterns are usually static and don't
                  fall outside of the grid.
                </p>
                <p className="text-stone-300 shadow-black text-shadow-md max-w-4/5 p-5 text-pretty">
                  The grid, as mentioned above, consist of the divisions of the time across the span
                  of the full sequence. In the example of this sequencer, we are using a single
                  measure 4/4 time signature with subdivisions of 1/16th notes. In most cases of
                  electronic music that you hear daily, the subdivisions used won't go past the
                  1/16th note grid, but doing so can create interesting results.
                  <br />
                  These subdivisions are commonly called steps of the sequencer. The speed of the
                  sequence is set by the BPM or Beats Per Minute.
                </p>
                <p className="text-stone-300 shadow-black text-shadow-md max-w-4/5 p-5 text-pretty">
                  Each row of four steps in our sequencer represents one beat of the 4/4 measure.
                  This is then broken into four columns for each row on the grid, all representing
                  subdivisons of that one beat measure per row. This results in the 4x4 or 1/16th
                  grid. By placing an instrument or sample within a step, you tell the sequencer to
                  play that instrument when the step is reached. You can see each step being called
                  by its visual cue. The sequencer will loop continuously, playing the notes in
                  order from step one to sixteen.
                </p>
                <p className="text-stone-300 shadow-black text-shadow-md max-w-4/5 p-5 text-pretty">
                  If you're still here, congrats! That was very wordy. The best way to get your head
                  around it is just to experiment. Start off with the Kickdrum sample in this
                  sequencer and place it on the on-beats of the bar, these are the steps in the
                  leftmost column (1, 5, 9, 13). Now you have a 4/4 drum beat which is 90% of modern
                  electronic music.
                  <br />
                  Then select a different sample for the off-beats, and your ears will tell you more
                  than text on a screen ever will.
                  <br />
                  Most importantly, have fun. That's what it's about. For more info on what exactly
                  each button and option does on the interface, see below.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion className="mb-10" type="single" collapsible>
          <AccordionItem value="yt-vid">
            <AccordionTrigger
              style={{
                color: "#d6d3d1",
              }}
            >
              Prefer video format for information? Check out the great overview by Roland here
            </AccordionTrigger>
            <AccordionContent>
              <div className="aspect-video w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/09zHp2xzErA"
                  title="How To Use A Step Sequencer...Electronic Music For Beginners!"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
                className="bg-repeat bg-center opacity-15 min-h-dvh"
                style={{
                  backgroundImage:
                    "url(https://github.com/dermotbg/tsequencer/assets/123154617/b0b98744-fd72-4656-9a23-265009743355",
                }}
              ></div>
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
                className="bg-repeat bg-left-top opacity-15 sm:bg-center min-h-dvh"
                style={{
                  backgroundImage:
                    "url(https://github.com/dermotbg/tsequencer/assets/123154617/62e3fedb-fa16-4552-b689-7a5d00f4192d",
                }}
              ></div>
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
                className="bg-repeat bg-center opacity-15 min-h-dvh"
                style={{
                  backgroundImage:
                    "url(https://github.com/dermotbg/tsequencer/assets/123154617/83f18af9-2111-4f70-9024-90f5cfcd4d23",
                }}
              ></div>
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
                className=" bg-center opacity-15 min-h-dvh bg-repeat-y"
                style={{
                  backgroundImage:
                    "url(https://github.com/dermotbg/tsequencer/assets/123154617/b1533131-f516-4fa0-94b5-c8f7e3cbe449",
                }}
              ></div>
              <div className="w-full text-white absolute top-0 left-0 text-center mt-10">
                <h2 className="font-bold text-2xl sm:text-6xl p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
                  GLOBAL CONTROLS
                </h2>
                <div className="p-4">
                  <h3>Key Tracking</h3>
                  <p className="p-4 m-4 inline-flex bg-black/75 text-shadow-lg rounded-md">
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
