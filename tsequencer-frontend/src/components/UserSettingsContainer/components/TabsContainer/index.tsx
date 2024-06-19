import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import AccountTabContent from "../AccountTabContent";
import SequencerTabContent from "../SequencersTabContent";

import type { UserAuthStoreType } from "@/hooks/StateHooks/useUserAuthStore";
import type { LoadedSeqType } from "@/services/sequencerService";

export type AccountTabContentType = {
  errorMessage: string | undefined;
  userAuthStore: Omit<
    UserAuthStoreType,
    "username" | "newUsername" | "password" | "newPassword" | "confPassword"
  >;
  userActions: {
    changePasswordHandler: (e: React.FormEvent<Element>) => Promise<void>;
    changeUsernameHandler: (e: React.FormEvent<Element>) => Promise<void>;
  };
};

export type SequencerTabContentType = {
  loadedSequences: LoadedSeqType[] | undefined;
  deleteSeqHandler: (seqId: string) => Promise<void>;
};
type TabsContainerType = AccountTabContentType & SequencerTabContentType;

const TabsContainer = ({
  errorMessage,
  userAuthStore,
  userActions,
  loadedSequences,
  deleteSeqHandler,
}: TabsContainerType) => {
  return (
    <Tabs defaultValue="sequences" className="flex flex-col justify-center">
      <TabsList className="rounded-none border-b-2 bg-inherit text-stone-300">
        <TabsTrigger className="rounded-md" value="sequences">
          Sequences
        </TabsTrigger>
        <TabsTrigger className="rounded-md" value="account">
          Account Details
        </TabsTrigger>
      </TabsList>
      <SequencerTabContent loadedSequences={loadedSequences} deleteSeqHandler={deleteSeqHandler} />
      <AccountTabContent
        errorMessage={errorMessage}
        userAuthStore={userAuthStore}
        userActions={userActions}
      />
    </Tabs>
  );
};

export default TabsContainer;
