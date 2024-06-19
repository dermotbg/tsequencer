import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Route } from "@/routes/user/$userId";

import useMessageStore from "@/hooks/StateHooks/useMessageStore";
import useSequencerActions from "@/hooks/useSequencerActions";
import useSequencerActionsDataStore from "@/hooks/StateHooks/useSequencerActionsStore";
import useUserStore from "@/hooks/StateHooks/useUserStore";
import useUserActions from "@/hooks/useUserActions";
import useUserAuthStore from "@/hooks/StateHooks/useUserAuthStore";

import AccountTabContent from "./components/AccountTabContent";
import LoadingSpinner from "../UtilityComponents/LoadingSpinner";
import PageNotFoundComponent from "../UtilityComponents/PageNotFoundComponent";
import SequencerTabContent from "./components/SequencersTabContent";
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
      <Tabs defaultValue="sequences" className="flex flex-col justify-center">
        <TabsList className="rounded-none border-b-2 bg-inherit text-stone-300">
          <TabsTrigger className="rounded-md" value="sequences">
            Sequences
          </TabsTrigger>
          <TabsTrigger className="rounded-md" value="account">
            Account Details
          </TabsTrigger>
        </TabsList>
        <SequencerTabContent
          loadedSequences={loadedSequences}
          deleteSeqHandler={deleteSeqHandler}
        />
        <AccountTabContent
          errorMessage={errorMessage}
          userAuthStore={userAuthStore}
          userActions={userActions}
        />
      </Tabs>
    </div>
  );
};

export default UserSettingsContainer;
