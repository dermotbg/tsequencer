import useSequencerActionsDataStore from "@/hooks/StateHooks/useSequencerActionsStore";
import useUserStore from "@/hooks/StateHooks/useUserStore";
import { Route } from "@/routes/user/$userId";
import LoadingSpinner from "../UtilityComponents/LoadingSpinner";
import type { LoadedSeqType } from "@/services/sequencerService";
import { Button } from "../ui/button";
import PageNotFoundComponent from "../UtilityComponents/PageNotFoundComponent";

const UserSettingsContainer = () => {
  const { userId } = Route.useParams();
  const user = useUserStore();
  const { loadedSequences } = useSequencerActionsDataStore();
  if (userId !== user.userId) return <PageNotFoundComponent />; // should be redirect
  if (!user) return <LoadingSpinner />;

  return (
    <div className="text-stone-300">
      <h1 className="text-4xl">Hello {user.username}</h1>
      <h2>Here are your sequences</h2>
      {loadedSequences?.map((s: LoadedSeqType) => {
        return (
          <div key={s.id}>
            {s.name}
            <Button>Delete</Button>
          </div>
        );
      })}
      <h2>Change Username</h2>
      <h2>Change Password</h2>
    </div>
  );
};

export default UserSettingsContainer;
