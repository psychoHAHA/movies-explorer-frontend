import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../Auth/Auth.css"
import logo from "../../images/logo.svg"

export default function Login({ onLogin }) {

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = formValue
    onLogin(email, password)
  }


  return (
    <div className="auth">
      <Link to="/" className="auth__link">
        <img src={logo} alt="logo" className="auth__logo"></img>
      </Link>

      <h1 className="auth__title">Рады видеть!</h1>
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__inputs">
          <label className="auth__label">E-mail</label>
          <input type="email" name="email" className="auth__input" value={formValue.email} onChange={handleChange} required />
        </div>
        <div className="auth__inputs">
          <label className="auth__label">Пароль</label>
          <input type="password" name="password" className="auth__input" value={formValue.password} onChange={handleChange} required />
        </div>
        <button className="auth__button" type="submit">Войти</button>
      </form>
    </div>
  )
}
