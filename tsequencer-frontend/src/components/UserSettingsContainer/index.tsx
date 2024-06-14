import useSequencerActionsDataStore from "@/hooks/StateHooks/useSequencerActionsStore";
import useUserStore from "@/hooks/StateHooks/useUserStore";
import { Route } from "@/routes/user/$userId";
import LoadingSpinner from "../UtilityComponents/LoadingSpinner";
import type { LoadedSeqType } from "@/services/sequencerService";
import { Button } from "../ui/button";
import PageNotFoundComponent from "../UtilityComponents/PageNotFoundComponent";
import TextInput from "../UtilityComponents/TextInputContainer";
import type { FormEvent } from "react";
import { useState } from "react";
import { updatePasswordAsync } from "@/services/userService";
import { toast } from "../ui/use-toast";
import useMessageStore from "@/hooks/StateHooks/useMessageStore";

const UserSettingsContainer = () => {
  const { userId } = Route.useParams();
  const user = useUserStore();
  const errorMessage = useMessageStore();
  const { loadedSequences } = useSequencerActionsDataStore();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");

  if (userId !== user.userId) return <PageNotFoundComponent />; // should be redirect
  if (!user) return <LoadingSpinner />;

  console.log(username);
  console.log(password);
  console.log(newPassword);
  console.log(newUsername);

  const changePasswordHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!username || !password || !newPassword)
        throw new Error(
          "Missing Data. Please enter your username, current password and new password",
        );

      const response = await updatePasswordAsync({
        username,
        password,
        newPassword,
        id: userId,
      });
      if (!response.ok) throw new Error(`${response.text}`);

      toast({ description: "Password updated." });
      setUsername("");
      setPassword("");
      setNewPassword("");
    } catch (error) {
      errorMessage.set(`${error}`.slice(7));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 10000);
    }
  };

  const changeUsernameHandler = (e: FormEvent) => {
    e.preventDefault();
    try {
      if (!username || !password || !newUsername)
        throw new Error(
          "Missing Data. Please enter your current username, password and new username",
        );
      console.log("need to implement the service first!");
    } catch (error) {
      errorMessage.set(`${error}`.slice(7));
      setTimeout(() => {
        errorMessage.set(undefined);
      }, 10000);
    }
  };

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
      <form onSubmit={changeUsernameHandler}>
        <h2>Change Username</h2>
        <div className="flex max-w-1/2 flex-col">
          <TextInput
            setFormState={setUsername}
            formTitle="Current Username"
            id="ch-un-username"
            type={"text"}
          />
          <TextInput
            setFormState={setNewUsername}
            formTitle="New Username"
            id="ch-un-new-username"
            type={"text"}
          />
          <TextInput
            setFormState={setNewPassword}
            formTitle="Password"
            id="ch-un-password"
            type={"password"}
          />
          <Button>Submit</Button>
        </div>
      </form>
      <form onSubmit={changePasswordHandler}>
        <h2>Change Password</h2>
        <div className="flex max-w-1/2 flex-col">
          <TextInput
            setFormState={setUsername}
            formTitle="Username"
            id="ch-pw-username"
            type={"text"}
          />
          <TextInput
            setFormState={setPassword}
            formTitle="Current Password"
            id="ch-pw-curr-password"
            type={"password"}
          />
          <TextInput
            setFormState={setNewPassword}
            formTitle="New Password"
            id="ch-pw-new-password"
            type={"password"}
          />
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default UserSettingsContainer;
