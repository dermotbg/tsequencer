import TseqLogo from "./components/TSeqLogo";
import WhatIsStepSeqAccordian from "./components/WhatIsStepSeqAccordian";
import YouTubeAccordian from "./components/YouTubeAccordian";
import TutorialTabs from "./components/TutorialTabs";

const TutorialContainer = () => {
  return (
    <div>
      <TseqLogo />
      <div className="flex flex-col items-center text-center">
        <WhatIsStepSeqAccordian />
        <YouTubeAccordian />
      </div>
      <div className="flex flex-row justify-center">
        <TutorialTabs />
      </div>
    </div>
  );
};

export default TutorialContainer;
