import type { FormEvent } from "react";

import type { LoadedSeqType } from "@/services/sequencerService";

export interface NavBarType {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (toggle: boolean) => void;
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: (toggle: boolean) => void;
  userIsAuthenticated: boolean;
  loginHandler: (e: FormEvent) => void;
  setUsername: (name: string) => void;
  setPassword: (name: string) => void;
  setConfPassword: (name: string) => void;
  setSeqName: (name: string | undefined) => void;
  saveHandler: (e: FormEvent) => void;
  logoutHandler: () => void;
  errorMessage: string | undefined;
  isSaveDialogOpen: boolean;
  setIsSaveDialogOpen: (toggle: boolean) => void;
  isLoadDialogOpen: boolean;
  setIsLoadDialogOpen: (toggle: boolean) => void;
  isRegisterDialogOpen: boolean;
  setIsRegisterDialogOpen: (toggle: boolean) => void;
  sequences: LoadedSeqType[] | undefined;
  setSelection: (selectedSeq: string | undefined) => void;
  loadHandler: (e: FormEvent) => void;
  isRunning: boolean;
  updateHandler: (e: FormEvent) => Promise<void>;
  registerHandler: (e: FormEvent) => void;
  isLoading: boolean;
}

export type NavBarMobileMenuType = Pick<NavBarType, "isMobileMenuOpen" | "setIsMobileMenuOpen">;
export type NavBarUserMenuType = Pick<NavBarType, "isUserMenuOpen" | "setIsUserMenuOpen">;

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
  | "isLoading"
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
  submitHandler: (e: FormEvent) => Promise<void> | void;
  isLoading: boolean;
  activeSeq?: string | undefined;
}

export interface InputFormType {
  setFormState: (name: string) => void;
  formTitle: string | undefined;
  type: string | undefined;
  id?: string | undefined;
  className?: string | undefined;
  labelTextAlign?: string;
}
