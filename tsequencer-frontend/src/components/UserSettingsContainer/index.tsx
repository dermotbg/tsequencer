import useSequencerActionsDataStore from "@/hooks/StateHooks/useSequencerActionsStore";
import useUserStore from "@/hooks/StateHooks/useUserStore";
import { Route } from "@/routes/user/$userId";
import LoadingSpinner from "../UtilityComponents/LoadingSpinner";
import { deleteSequencerAsync, type LoadedSeqType } from "@/services/sequencerService";
import { Button } from "../ui/button";
import TextInput from "../UtilityComponents/TextInputContainer";
import type { FormEvent } from "react";
import { updatePasswordAsync, updateUsernameAsync } from "@/services/userService";
import { toast } from "../ui/use-toast";
import useMessageStore from "@/hooks/StateHooks/useMessageStore";
import useUserAuth from "@/hooks/useUserAuth";
import { useNavigate } from "@tanstack/react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import AlertDialogComponent from "../UtilityComponents/AlertDialogComponent";
import { validateString } from "@/utils/typeChecking";
import DisplayErrorMessage from "../UtilityComponents/DisplayErrorMessage";

const UserSettingsContainer = () => {
  const { userId } = Route.useParams();

  const user = useUserStore();
  const errorMessage = useMessageStore();
  const { loadedSequences, setLoadedSequences } = useSequencerActionsDataStore();
  const {
    username,
    setUsername,
    password,
    setPassword,
    newPassword,
    setNewPassword,
    newUsername,
    setNewUsername,
    confPassword,
    setConfPassword,
    logoutHandler,
  } = useUserAuth();

  const navigate = useNavigate({ from: "/user/$userId" });

  if (!user || !user.username) return <LoadingSpinner />;
  // if (userId !== user.userId) return navigate({ to: "/" }); TODO this redirect breaks refresh

  const changePasswordHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!user.username || !password || !newPassword)
        throw new Error("Missing Data. Please enter your current password and new password");
      if (newPassword !== confPassword) throw new Error("Confirm Password doesn't match");

      const response = await updatePasswordAsync({
        username: validateString(user.username),
        password,
        newPassword,
        id: userId,
      });
      if (!response.ok) throw new Error(`${response.text}`);

      toast({ description: "Password updated. Please login with your new password" });
      setUsername("");
      setPassword("");
      setNewPassword("");
      logoutHandler();
      navigate({ to: "/" });
    } catch (error) {
      errorMessage.set(`${error}`.slice(7));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 10000);
    }
  };

  const changeUsernameHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!username || !password || !newUsername)
        throw new Error(
          "Missing Data. Please enter your current username, password and new username",
        );
      const response = await updateUsernameAsync({
        username,
        newUsername,
        password,
        id: userId,
      });
      if (!response.ok) throw new Error(`${response.text}`);
      logoutHandler();
      toast({ description: "Username updated, please login with your new username." });
    } catch (error) {
      errorMessage.set(`${error}`.slice(7));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 10000);
    }
  };

  const deleteSeqHandler = async (seqId: string) => {
    if (!loadedSequences) return;
    await deleteSequencerAsync(seqId);
    setLoadedSequences(loadedSequences.filter((seq) => seq.id !== seqId));
    toast({ description: "Sequence deleted" });
  };

  return (
    <div className="flex flex-col items-center text-stone-300">
      <div className="flex flex-col items-center p-10">
        <h1 className="border-b-2 pb-2 text-4xl font-bold shadow-stone-200">
          Hello {`${user.username.charAt(0).toUpperCase()}` + `${user.username.slice(1)}`}
        </h1>
      </div>
      <Tabs defaultValue="sequences" className="flex-w-[400px] flex flex-col justify-center">
        <TabsList className="bg-inherit text-stone-300">
          <TabsTrigger className="rounded-md" value="sequences">
            Sequences
          </TabsTrigger>
          <TabsTrigger className="rounded-md" value="account">
            Account Details
          </TabsTrigger>
        </TabsList>
        <TabsContent value="sequences">
          {!loadedSequences ? (
            <LoadingSpinner />
          ) : (
            <ul>
              {loadedSequences?.map((s: LoadedSeqType) => {
                return (
                  <li className="p-2" key={s.id}>
                    <div className="flex flex-row items-center justify-between">
                      <div className="px-2 font-mono font-semibold">{s.name}</div>
                      <AlertDialogComponent
                        title="Are you sure you want to delete this sequence?"
                        description={`You will not be able to recover ${s.name}`}
                        trigger={<Button variant={"destructive"}>Delete</Button>}
                        action={() => deleteSeqHandler(s.id)}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </TabsContent>
        <TabsContent value="account">
          <Tabs defaultValue="password" className="flex-w-[400px] flex flex-col justify-center">
            <TabsList className="bg-inherit focus-visible:ring-0">
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
              <form onSubmit={changePasswordHandler}>
                <div className="flex max-w-1/2 flex-col">
                  <TextInput
                    setFormState={setPassword}
                    formTitle="Current Password"
                    id="ch-pw-curr-password"
                    type={"password"}
                    className="mb-2"
                  />
                  <TextInput
                    setFormState={setNewPassword}
                    formTitle="New Password"
                    id="ch-pw-new-password"
                    type={"password"}
                    className="mb-2"
                  />
                  <TextInput
                    setFormState={setConfPassword}
                    formTitle="Confirm New Password"
                    id="ch-pw-conf-new-password"
                    type={"password"}
                    className="mb-2"
                  />
                  {errorMessage ? (
                    <DisplayErrorMessage errorMessage={errorMessage.message} />
                  ) : null}
                  <Button>Submit</Button>
                </div>
              </form>
            </TabsContent>
            <TabsContent value="username">
              <div className="flex flex-col items-center">
                <form onSubmit={changeUsernameHandler}>
                  <div className="flex max-w-1/2 flex-col">
                    <TextInput
                      setFormState={setUsername}
                      formTitle="Current Username"
                      id="ch-un-username"
                      type={"text"}
                      className="mb-2"
                    />
                    <TextInput
                      setFormState={setNewUsername}
                      formTitle="New Username"
                      id="ch-un-new-username"
                      type={"text"}
                      className="mb-2"
                    />
                    <TextInput
                      setFormState={setPassword}
                      formTitle="Password"
                      id="ch-un-password"
                      type={"password"}
                    />
                    {errorMessage ? (
                      <DisplayErrorMessage errorMessage={errorMessage.message} />
                    ) : null}
                    <Button>Submit</Button>
                  </div>
                </form>
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserSettingsContainer;
