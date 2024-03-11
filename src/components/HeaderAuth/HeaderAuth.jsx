import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './HeaderAuth.css'

export default function HeaderAuth() {
  const [isOpen, setIsOpen] = useState()

  return (
    <>
      <nav
        className={`header__navbar ${isOpen ? 'header__navbar--active' : ''}`}
      >
        <ul className="header__navbar-list">
          <li className="header__navbar-item">
            <NavLink
              to="/"
              className="header__navbar-item_type_link header__navbar-item_type_main"
            >
              Главная
            </NavLink>
          </li>
          <li className="header__navbar-item">
            <NavLink to="/movies" className="header__navbar-item_type_link">
              Фильмы
            </NavLink>
          </li>
          <li className="header__navbar-item">
            <NavLink
              to="/saved-movies"
              className="header__navbar-item_type_link"
            >
              Сохраненные фильмы
            </NavLink>
          </li>
        </ul>

        <Link to="/profile">
          <button
            className="header__button header__button-profile"
            type="button"
          >
            Аккаунт
          </button>
        </Link>
      </nav>

      <button
        type="button"
        className={`header__burger ${isOpen ? 'header__burger--active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="header__burger-line "></span>
        <span className="header__burger-line"></span>
        <span className="header__burger-line"></span>
      </button>
    </>
  )
}
