import { createFileRoute } from "@tanstack/react-router";

import Tutorial from "../components/TutorialContainer";

export const Route = createFileRoute("/tutorial")({
  component: () => <Tutorial />,
});
