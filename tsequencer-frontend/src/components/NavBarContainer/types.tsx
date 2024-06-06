import type { FormEvent } from "react";

import type { LoadedSeqType } from "@/services/sequencerService";

export interface NavBarType {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userMenuOpen: boolean;
  setUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  userIsAuthenticated: boolean;
  loginHandler: (e: FormEvent) => void;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setConfPassword: React.Dispatch<React.SetStateAction<string>>;
  setSeqName: React.Dispatch<React.SetStateAction<string>>;
  saveHandler: (e: FormEvent) => void;
  logoutHandler: () => void;
  errorMessage: string | undefined;
  isSaveDialogOpen: boolean;
  setIsSaveDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadDialogOpen: boolean;
  setIsLoadDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isRegisterDialogOpen: boolean;
  setIsRegisterDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sequences: LoadedSeqType[] | undefined;
  setSelection: React.Dispatch<React.SetStateAction<string | undefined>>;
  loadHandler: (e: FormEvent) => Promise<void>;
  isRunning: boolean;
  updateHandler: (e: FormEvent) => Promise<void>;
  registerHandler: (e: FormEvent) => void;
  isLoading: boolean;
}

export type NavBarMobileMenuType = Pick<NavBarType, "mobileMenuOpen" | "setMobileMenuOpen">;
export type NavBarUserMenuType = Pick<NavBarType, "userMenuOpen" | "setUserMenuOpen">;

export type MobileNavMenuType = Pick<
  NavBarType,
  | "userIsAuthenticated"
  | "loginHandler"
  | "setUsername"
  | "setPassword"
  | "setSeqName"
  | "saveHandler"
  | "logoutHandler"
  | "errorMessage"
  | "isSaveDialogOpen"
  | "setIsSaveDialogOpen"
  | "isLoadDialogOpen"
  | "setIsLoadDialogOpen"
  | "sequences"
  | "setSelection"
  | "loadHandler"
  | "isRunning"
  | "updateHandler"
  | "registerHandler"
  | "setConfPassword"
  | "isRegisterDialogOpen"
  | "setIsRegisterDialogOpen"
  | "isLoading"
>;

export type LoginLogicType = Pick<
  NavBarType,
  | "loginHandler"
  | "setUsername"
  | "setPassword"
  | "errorMessage"
  | "registerHandler"
  | "setConfPassword"
  | "isRegisterDialogOpen"
  | "setIsRegisterDialogOpen"
  | "isLoading"
>;
export interface LoginDialogType extends LoginLogicType {
  isMobile: boolean;
}

export type RegisterDialogType = Pick<
  NavBarType,
  | "errorMessage"
  | "setUsername"
  | "setPassword"
  | "setConfPassword"
  | "registerHandler"
  | "isRegisterDialogOpen"
  | "setIsRegisterDialogOpen"
>;

export type SaveLogicType = Pick<
  NavBarType,
  | "setSeqName"
  | "saveHandler"
  | "errorMessage"
  | "isSaveDialogOpen"
  | "setIsSaveDialogOpen"
  | "sequences"
  | "setSelection"
  | "updateHandler"
  | "isLoading"
>;
export interface SaveDialogType extends SaveLogicType {
  isMobile: boolean;
}

export type LoadLogicType = Pick<
  NavBarType,
  | "errorMessage"
  | "isLoadDialogOpen"
  | "setIsLoadDialogOpen"
  | "sequences"
  | "setSelection"
  | "loadHandler"
  | "isRunning"
>;
export interface LoadDialogType extends LoadLogicType {
  isMobile: boolean;
}

export type SelectLogicType = Pick<NavBarType, "sequences" | "setSelection">;
export interface SelectFormType extends SelectLogicType {
  title: string;
  description: string;
  isMobile: boolean;
  confirmText: string;
  submitHandler: (e: FormEvent) => Promise<void>;
  isLoading: boolean;
}

export interface InputFormType {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
  formTitle: string | undefined;
  type: string | undefined;
  id?: string | undefined;
}
