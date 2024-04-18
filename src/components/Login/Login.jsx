import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import '../Auth/Auth.css'
import logo from '../../images/logo.svg'

import { emailExpression } from '../../constants/constants'

export default function Login({ onLogin }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data, evt) => {
    evt.preventDefault()
    const { email, password } = data
    onLogin(email, password)
  }

  return (
    <div className="auth">
      <Link to="/" className="auth__link">
        <img src={logo} alt="logo" className="auth__logo"></img>
      </Link>

      <h1 className="auth__title">Рады видеть!</h1>
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth__inputs">
          <label className="auth__label">E-mail</label>
          <input
            type="email"
            name="email"
            className="auth__input"
            {...register('email', {
              required: 'Поля является обязательным',
              pattern: {
                value: emailExpression,
                message: 'Введите корректный email',
              },
            })}
          />
          <div className="error-validation">
            {errors?.email && <span>{errors?.email?.message || 'Ошибка'}</span>}
          </div>
        </div>
        <div className="auth__inputs">
          <label className="auth__label">Пароль</label>
          <input
            type="password"
            name="password"
            className="auth__input"
            {...register('password', {
              required: 'Поля является обязательным',
              minLength: {
                value: 8,
                message: 'Минимум 8 символов',
              },
            })}
          />
          <div className="error-validation">
            {errors?.password && <span>{errors?.password?.message || 'Ошибка'}</span>}
          </div>
        </div>
        <button className="auth__button" type="submit" disabled={!isValid}>
          Войти
        </button>
      </form>
      <p className="auth__text">
        Еще не зарегистрировались? 
        <a href="/signup" className="auth__link">
          Регистрация
        </a>
      </p>
    </div>
  )
}
