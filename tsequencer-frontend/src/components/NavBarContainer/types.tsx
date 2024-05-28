import { LoadedSeqType } from "@/services/sequencerService"
import { FormEvent } from "react"

export interface NavBarType {
  mobileMenuOpen: boolean
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  userMenuOpen: boolean
  setUserMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  userIsAuthenticated: boolean
  loginHandler:  (e: FormEvent) => void
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>
  setSeqName: React.Dispatch<React.SetStateAction<string>> 
  saveHandler: (e: FormEvent) => void 
  logoutHandler: () => void
  errorMessage: string | undefined
  isSaveDialogOpen: boolean
  setIsSaveDialogOpen: React.Dispatch<React.SetStateAction<boolean>> 
  isLoadDialogOpen: boolean
  setIsLoadDialogOpen: React.Dispatch<React.SetStateAction<boolean>> 
  sequences: LoadedSeqType[] | undefined
  setSelection: React.Dispatch<React.SetStateAction<string | undefined>>
  loadHandler: (e: FormEvent) => Promise<void>
  isRunning: boolean
  updateHandler: (e: FormEvent) => Promise<void>
}

export type NavBarMobileMenuType = Pick<NavBarType, "mobileMenuOpen" | "setMobileMenuOpen">
export type NavBarUserMenuType = Pick<NavBarType, "userMenuOpen" | "setUserMenuOpen">

export type MobileNavMenuType= Pick<NavBarType, "userIsAuthenticated" | "loginHandler" | "setUsername" | "setPassword" | "setSeqName" | "saveHandler" | "logoutHandler" | "errorMessage" | "isSaveDialogOpen" | "setIsSaveDialogOpen" | "isLoadDialogOpen" | "setIsLoadDialogOpen" | "sequences" | "setSelection" | "loadHandler" | "isRunning" | "updateHandler" >

export type LoginLogicType = Pick<NavBarType, "loginHandler" | "setUsername" | "setPassword" | "errorMessage">
export interface LoginDialogType extends LoginLogicType { isMobile: boolean }

export type SaveLogicType = Pick<NavBarType, "setSeqName" | "saveHandler" | "errorMessage" | "isSaveDialogOpen" | "setIsSaveDialogOpen" | "sequences" | "setSelection" | "updateHandler" >
export interface SaveDialogType extends SaveLogicType { isMobile: boolean }

export type LoadLogicType = Pick<NavBarType, "errorMessage" | "isLoadDialogOpen" | "setIsLoadDialogOpen" | "sequences" | "setSelection" | "loadHandler" | "isRunning" >
export interface LoadDialogType extends LoadLogicType { isMobile: boolean }

export type SelectLogicType = Pick<NavBarType, "errorMessage" | "sequences" | "setSelection">
export interface SelectFormType extends SelectLogicType { title: string, description: string, isMobile: boolean, confirmText: string, submitHandler: (e: FormEvent) => Promise<void> }
