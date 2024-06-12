import UserSettingsContainer from "@/components/UserSettingsContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/user/$userId")({
  component: () => <UserSettingsContainer />,
});
