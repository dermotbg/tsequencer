import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const YouTubeAccordian = () => {
  return (
    <Accordion className="mb-10" type="single" collapsible>
      <AccordionItem value="yt-vid">
        <AccordionTrigger
          style={{
            color: "#d6d3d1",
          }}
        >
          <span className="shadow-black text-shadow-sm">
            Prefer video format for information? Click here for a great overview by Roland!
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="aspect-video h-full w-full">
            <iframe
              className="h-full w-full"
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
  );
};
export default YouTubeAccordian;
