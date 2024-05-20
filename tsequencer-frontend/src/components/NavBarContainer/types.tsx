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
}

export type NavBarMobileMenuType = Pick<NavBarType, "mobileMenuOpen" | "setMobileMenuOpen">
export type NavBarUserMenuType = Pick<NavBarType, "userMenuOpen" | "setUserMenuOpen">
export type LoginLogicType = Pick<NavBarType, "loginHandler" | "setUsername" | "setPassword">
export interface LoginDialogType extends LoginLogicType { isMobile: boolean }