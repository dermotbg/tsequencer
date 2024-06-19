import { Route } from "@/routes/user/$userId";

import useMessageStore from "@/hooks/StateHooks/useMessageStore";
import useSequencerActions from "@/hooks/useSequencerActions";
import useSequencerActionsDataStore from "@/hooks/StateHooks/useSequencerActionsStore";
import useUserStore from "@/hooks/StateHooks/useUserStore";
import useUserActions from "@/hooks/useUserActions";
import useUserAuthStore from "@/hooks/StateHooks/useUserAuthStore";

import LoadingSpinner from "../UtilityComponents/LoadingSpinner";
import PageNotFoundComponent from "../UtilityComponents/PageNotFoundComponent";
import TabsContainer from "./components/TabsContainer";
import UserGreeting from "./components/UserGreeting";

const UserSettingsContainer = () => {
  const { userId } = Route.useParams();

  const user = useUserStore();
  const { message: errorMessage } = useMessageStore();
  const { deleteSeqHandler } = useSequencerActions();
  const { loadedSequences } = useSequencerActionsDataStore();
  const userActions = useUserActions();
  const userAuthStore = useUserAuthStore();

  if (!user || !user.username) return <LoadingSpinner />;
  if (userId !== user.userId) return <PageNotFoundComponent />;

  return (
    <div className="flex flex-col items-center text-stone-300 shadow-black text-shadow-sm">
      <UserGreeting username={user.username} />
      <TabsContainer
        loadedSequences={loadedSequences}
        deleteSeqHandler={deleteSeqHandler}
        errorMessage={errorMessage}
        userAuthStore={userAuthStore}
        userActions={userActions}
      />
    </div>
  );
};

export default UserSettingsContainer;
