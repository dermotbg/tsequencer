import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const WhatIsStepSeqAccordian = () => {
  return (
    <Accordion className="mb-10" type="single" collapsible>
      <AccordionItem value="sequencer-overview">
        <AccordionTrigger
          style={{
            color: "#d6d3d1",
          }}
          className="items-center justify-center text-center text-4xl text-stone-300"
        >
          <h1 className="shadow-black text-shadow-sm">What is a Step Sequencer?</h1>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col items-center bg-black/25 font-semibold">
            <p className="max-w-4/5 p-5 text-stone-300 shadow-black text-shadow-sm">
              A sequencer, in broader terms is a tool that is used to playback notes of an
              instrument. This can be a real-time sequencer, which would be ideal for recording a
              keyboard melody from a synthesizer, or a step sequencer which offers a set grid of
              places where instruments or samples can be played.
              <br />
              Step sequencers are used in the overwhelming majority of drum machines and samplers in
              electronic music, as the desired patterns are usually static and don't fall outside of
              the grid.
            </p>
            <p className="max-w-4/5 p-5 text-stone-300 shadow-black text-shadow-sm">
              The grid, as mentioned above, consist of the divisions of the time across the span of
              the full sequence. In the example of this sequencer, we are using a single measure 4/4
              time signature with subdivisions of 1/16th notes. In most cases of electronic music
              that you hear daily, the subdivisions used won't go past the 1/16th note grid, but
              doing so can create interesting results.
              <br />
              These subdivisions are commonly called steps of the sequencer. The speed of the
              sequence is set by the BPM or Beats Per Minute.
            </p>
            <p className="max-w-4/5 p-5 text-stone-300 shadow-black text-shadow-sm">
              Each row of four steps in our sequencer represents one beat of the 4/4 measure. This
              is then broken into four columns for each row on the grid, all representing
              subdivisons of that one beat measure per row. This results in the 4x4 or 1/16th grid.
              By placing an instrument or sample within a step, you tell the sequencer to play that
              instrument when the step is reached. You can see each step being called by its visual
              cue. The sequencer will loop continuously, playing the notes in order from step one to
              sixteen.
            </p>
            <p className="max-w-4/5 p-5 text-stone-300 shadow-black text-shadow-sm">
              If you're still here, congrats! That was very wordy. The best way to get your head
              around it is just to experiment. Start off with the Kickdrum sample in this sequencer
              and place it on the on-beats of the bar, these are the steps in the leftmost column
              (1, 5, 9, 13). Now you have a 4/4 drum beat which is 90% of modern electronic music.
              <br />
              Then select a different sample for the off-beats, and your ears will tell you more
              than text on a screen ever will.
              <br />
              Most importantly, have fun. That's what it's about. For more info on what exactly each
              button and option does on the interface, see below.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default WhatIsStepSeqAccordian;
