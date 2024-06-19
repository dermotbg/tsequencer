import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TutorialTabs = () => {
  return (
    <Tabs
      defaultValue="instrument-pad"
      className="h-full w-full rounded-md bg-stone-800 sm:w-11/12"
    >
      <TabsList className="grid w-full grid-cols-4 bg-inherit text-stone-300">
        <TabsTrigger value="instrument-pad">Pads</TabsTrigger>
        <TabsTrigger value="sequencer">Sequencer</TabsTrigger>
        <TabsTrigger value="mixing-desk">Mixing Desk</TabsTrigger>
        <TabsTrigger value="global-options">Options</TabsTrigger>
      </TabsList>
      <TabsContent value="instrument-pad">
        <div className="relative text-center">
          <div
            className="min-h-dvh bg-center bg-repeat opacity-15"
            style={{
              backgroundImage:
                "url(https://github.com/dermotbg/tsequencer/assets/123154617/b0b98744-fd72-4656-9a23-265009743355)",
            }}
          ></div>
          <div className="absolute inset-0 mt-10 flex flex-col items-center justify-start text-center text-white">
            <h2 className="m-4 rounded-md bg-black/75 p-4 text-2xl font-bold shadow-1-stack sm:text-6xl">
              INSTRUMENT PAD
            </h2>
            <div className="flex max-h-[45rem] flex-col items-center overflow-y-scroll p-4 sm:overflow-y-hidden">
              <p className="m-4 rounded-md bg-black/75 p-4">
                Each instrument has a dedicated pad. Click on the pad to launch the sample and
                assign that sample to be the “active pad”.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                You can tell which pad is active as the pad will be highlighted.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                To add an instrument to a step in the sequencer, ensure the desired instrument is
                set as the active pad, then click the desired sequencer step.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                To deactivate all pads, click on the currently active pad.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="sequencer">
        <div className="relative text-center">
          <div
            className="min-h-dvh bg-left-top bg-repeat opacity-15 sm:bg-center"
            style={{
              backgroundImage:
                "url(https://github.com/dermotbg/tsequencer/assets/123154617/62e3fedb-fa16-4552-b689-7a5d00f4192d)",
            }}
          ></div>
          <div className="absolute inset-0 mt-10 flex flex-col items-center justify-start text-center text-white">
            <h2 className="m-4 rounded-md bg-black/75 p-4 text-2xl font-bold shadow-2-stack sm:text-6xl">
              SEQUENCER
            </h2>
            <div className="flex max-h-[45rem] flex-col items-center overflow-y-scroll p-4 sm:overflow-y-hidden">
              <p className="m-4 rounded-md bg-black/75 p-4">
                The sequencer features a single-bar, 4/4 time signature grid divided into sixteenth
                notes, with the leftmost buttons being the on-beat steps.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                It shows the currently playing step by changing the border color, the highlighted
                border colors represent how many samples are loaded into the step.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                Assigning instruments to a step displays their initials on the step button.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                Clicking on a step without selecting an active pad opens its mixing desk, where you
                can assign different volumes to all the instruments of that step.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                The launch controls are located below the sequencer, recording toggles if key press
                recording is active, and trash clears the sequencer to a blank slate.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="mixing-desk">
        <div className="relative text-center">
          <div
            className="min-h-dvh bg-center bg-repeat opacity-15"
            style={{
              backgroundImage:
                "url(https://github.com/dermotbg/tsequencer/assets/123154617/863b5f42-674f-4d4e-a666-db8d262d681f)",
            }}
          ></div>
          <div className="absolute inset-0 mt-10 flex flex-col items-center justify-start text-center text-white">
            <h2 className="m-4 rounded-md bg-black/75 p-4 text-2xl font-bold shadow-3-stack sm:text-6xl">
              MIXING DESK
            </h2>
            <div className="flex max-h-[45rem] flex-col items-center overflow-auto p-4">
              <p className="m-4 rounded-md bg-black/75 p-4">
                Each step of the sequencer has its own selection of volume controls.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                To access a step&apos;s volume controls, click on it without any active instrument.
                Any adjustments you make will only apply to that specific step.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                The number of volume faders increases with the number of samples in a step.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                By default, you&apos;ll only see the pad channel&apos;s volume control. This control
                adjusts the launch and assignment volume of the active instrument pad.
              </p>
              <p className="m-4 rounded-md bg-black/75 p-4">
                To adjust the volume further within a specific step after assignment, use that
                step&apos;s individual instrument volume control.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="global-options">
        <div className="relative text-center">
          <div
            className="min-h-dvh bg-center bg-repeat-y opacity-15"
            style={{
              backgroundImage:
                "url(https://github.com/dermotbg/tsequencer/assets/123154617/b1533131-f516-4fa0-94b5-c8f7e3cbe449)",
            }}
          ></div>
          <div className="absolute inset-0 mt-10 flex flex-col items-center justify-start text-center text-white">
            <div className="max-h-[dvh] overflow-y-scroll p-4 sm:overflow-y-auto">
              <div className="flex max-h-[45rem] flex-col items-center">
                <h2 className="m-4 rounded-md bg-black/75 p-4 text-2xl font-bold shadow-4-stack sm:text-6xl">
                  METRONOME
                </h2>
                <p className="m-4 rounded-md bg-black/75 p-4">
                  This switch will play the metronome on each beat. The sequencer must be stopped to
                  launch the metronome.
                </p>
              </div>
              <div className="flex max-h-[45rem] flex-col items-center">
                <h2 className="m-4 rounded-md bg-black/75 p-4 text-2xl font-bold shadow-4-stack sm:text-6xl">
                  BPM
                </h2>
                <p className="m-4 rounded-md bg-black/75 p-4">
                  This value represents the Beats Per Minute of the sequencer. The sequencer must be
                  stopped to adjust the BPM.
                </p>
              </div>
              <div className="flex max-h-[45rem] flex-col items-center">
                <h2 className="m-4 rounded-md bg-black/75 p-4 pb-2 text-2xl font-bold shadow-4-stack sm:text-6xl">
                  KEY TRACKING
                </h2>
                <p className="m-4 rounded-md bg-black/75 p-4">
                  Key Tracking is only available on Desktop. The key tracking feature allows you to
                  assign instruments to keys on your keyboard, allowing you to launch the samples by
                  hitting keys and record to the sequencer.
                </p>
                <p className="m-4 rounded-md bg-black/75 p-4">
                  Press the assign keys button to map keys to instruments.
                </p>
                <p className="m-4 rounded-md bg-black/75 p-4">
                  Keys must be alphanumeric; you can only assign one sample to each key.
                </p>
                <p className="m-4 rounded-md bg-black/75 p-4">
                  When the sequencer is not playing, key press plays samples
                </p>
                <p className="m-4 rounded-md bg-black/75 p-4">
                  When the sequencer is playing and recording is active, key press does not play
                  samples but assigns them to the sequencer grid.
                </p>
                <p className="m-4 rounded-md bg-black/75 p-4">
                  The sequencer will quantize each key press to align with the nearest step in
                  accordance with audio playback at that moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};
export default TutorialTabs;
