import React from "react"
import { Link, useLocation, NavLink } from "react-router-dom"

import "./HeaderNotAuth.css"

export default function HeaderNotAuth() {
  const location = useLocation()
  return (
    <>
      <div className="header__account-menu">
        <Link to="/signup">
          <button
            className="header__button header__button-signup"
            type="button"
          >
            Регистрация
          </button>
        </Link>

        <Link to="/signin">
          <button
            className="header__button header__button-signin"
            type="button"
          >
            Войти
          </button>
        </Link>
      </div>
    </>
  )
}
