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
}

export type NavBarMobileMenuType = Pick<NavBarType, "mobileMenuOpen" | "setMobileMenuOpen">
export type NavBarUserMenuType = Pick<NavBarType, "userMenuOpen" | "setUserMenuOpen">

export type MobileNavMenuType= Pick<NavBarType, "userIsAuthenticated" | "loginHandler" | "setUsername" | "setPassword" | "setSeqName" | "saveHandler" | "logoutHandler" | "errorMessage" | "isSaveDialogOpen" | "setIsSaveDialogOpen">

export type LoginLogicType = Pick<NavBarType, "loginHandler" | "setUsername" | "setPassword" | "errorMessage">
export interface LoginDialogType extends LoginLogicType { isMobile: boolean }

export type SaveLogicType = Pick<NavBarType, "setSeqName" | "saveHandler" | "errorMessage" | "isSaveDialogOpen" | "setIsSaveDialogOpen" >
export interface SaveDialogType extends SaveLogicType { isMobile: boolean }