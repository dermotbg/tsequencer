import { validateString } from "@/utils/typeChecking";

export const prepareSaveUserObject = (username: string, password: string, confPassword: string) => {
  if (password !== confPassword) {
    throw new Error("Passwords don't match");
  }
  if (username.length < 3) {
    throw new Error("Username must be at least 3 characters");
  }
  if (password.length < 8) {
    throw new Error("Password must be at least 8 characters");
  }
  const userObj = {
    username: validateString(username),
    password: validateString(password),
    confPassword: validateString(confPassword),
  };
  return userObj;
};
