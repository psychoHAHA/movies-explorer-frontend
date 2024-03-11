import React from "react"
import { useContext } from "react"

import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import HeaderAuth from "../HeaderAuth/HeaderAuth"

import HeaderNotAuth from "../HeaderNotAuth/HeaderNotAuth"
export default function Navigation() {
  const { loggedIn: loggedIn } = useContext(CurrentUserContext)
  return loggedIn ? <HeaderAuth /> : <HeaderNotAuth />
}