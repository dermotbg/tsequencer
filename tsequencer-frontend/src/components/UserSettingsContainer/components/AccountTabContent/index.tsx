import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import DisplayErrorMessage from "@/components/UtilityComponents/DisplayErrorMessage";
import TextInput from "@/components/UtilityComponents/TextInputContainer";

import type { UserAuthStoreType } from "@/hooks/StateHooks/useUserAuthStore";

type AccountTabContentType = {
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

const AccountTabContent = ({ errorMessage, userAuthStore, userActions }: AccountTabContentType) => {
  return (
    <TabsContent value="account">
      <Tabs defaultValue="password" className="flex flex-col justify-center">
        <TabsList className="bg-inherit">
          <TabsTrigger
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-stone-300"
            value="password"
          >
            Change Password
          </TabsTrigger>
          <TabsTrigger
            className="rounded-none data-[state=active]:border-b-2 data-[state=active]:bg-inherit data-[state=active]:text-stone-300"
            value="username"
          >
            Change Username
          </TabsTrigger>
        </TabsList>
        <TabsContent value="password">
          <form onSubmit={userActions.changePasswordHandler}>
            <div className="flex max-w-1/2 flex-col">
              <TextInput
                setFormState={userAuthStore.setPassword}
                formTitle="Current Password"
                id="ch-pw-curr-password"
                type={"password"}
                className="mb-2"
                labelTextAlign="text-left"
              />
              <TextInput
                setFormState={userAuthStore.setNewPassword}
                formTitle="New Password"
                id="ch-pw-new-password"
                type={"password"}
                className="mb-2"
                labelTextAlign="text-left"
              />
              <TextInput
                setFormState={userAuthStore.setConfPassword}
                formTitle="Confirm Password"
                id="ch-pw-conf-new-password"
                type={"password"}
                className="mb-2"
                labelTextAlign="text-left"
              />
              {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null}
              <Button variant={"ghost"} className="self-end">
                Submit
              </Button>
            </div>
          </form>
        </TabsContent>
        <TabsContent value="username">
          <div className="flex flex-col items-center">
            <form onSubmit={userActions.changeUsernameHandler}>
              <div className="flex max-w-1/2 flex-col">
                <TextInput
                  setFormState={userAuthStore.setUsername}
                  formTitle="Current Username"
                  id="ch-un-username"
                  type={"text"}
                  className="mb-2"
                  labelTextAlign="text-left"
                />
                <TextInput
                  setFormState={userAuthStore.setNewUsername}
                  formTitle="New Username"
                  id="ch-un-new-username"
                  type={"text"}
                  className="mb-2"
                  labelTextAlign="text-left"
                />
                <TextInput
                  setFormState={userAuthStore.setPassword}
                  formTitle="Password"
                  id="ch-un-password"
                  type={"password"}
                  labelTextAlign="text-left"
                  className="mb-2"
                />
                {errorMessage ? <DisplayErrorMessage errorMessage={errorMessage} /> : null}
                <Button variant={"ghost"} className="self-end">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </TabsContent>
  );
};

export default AccountTabContent;
