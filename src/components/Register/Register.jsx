import React from 'react'
import { Link } from 'react-router-dom'
import '../Auth/Auth.css'
import logo from '../../images/logo.svg'

import { useForm } from 'react-hook-form'

import { emailExpression, nameExpression } from '../../constants/constants'

import '../ErrorValidation/ErrorValidation.css'

export default function Register({ onRegister }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data, evt) => {
    evt.preventDefault()
    const { name, email, password } = data
    onRegister(name, email, password)
  }

  return (
    <div className="auth">
      <Link to="/" className="auth__link">
        <img src={logo} alt="logo" className="auth__logo"></img>
      </Link>

      <h1 className="auth__title">Добро пожаловать!</h1>

      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="auth__inputs">
          <label htmlFor="name" className="auth__label">
            Имя
          </label>
          <input
            className="auth__input"
            type="name"
            {...register('name', {
              required: 'Поля является обязательным',
              minLength: {
                value: 2,
                message: 'Минимум 2 символа',
              },
              maxLength: {
                value: 30,
                message: 'Максимум 30 символов',
              },
              pattern: {
                value: nameExpression,
                message: 'Введите корректное имя',
              }
            })}
          />
        </div>
        <div className="error-validation">
          {errors?.name && <span>{errors?.name?.message || 'Ошибка'}</span>}
        </div>

        <div className="auth__inputs">
          <label htmlFor="email" className="auth__label">
            E-mail
          </label>
          <input
            type="email"
            className="auth__input"
            {...register('email', {
              required: 'Поля является обязательным',
              pattern: {
                value: emailExpression,
                message: 'Введите корректный email',
              },
            })}
          />
        </div>
        <div className="error-validation">
          {errors?.email && <span>{errors?.email?.message || 'Ошибка'}</span>}
        </div>

        <div className="auth__inputs">
          <label htmlFor="password" className="auth__label">
            Пароль
          </label>
          <input
            type="password"
            className="auth__input"
            {...register('password', {
              required: 'Поля является обязательным',
              minLength: {
                value: 8,
                message: 'Минимум 8 символа',
              },
            })}
          />
        </div>
        <div className="error-validation">
          {errors?.password && <span>{errors?.password?.message || 'Ошибка'}</span>}
        </div>

        <button type="submit" className="auth__button" disabled={!isValid}>
          Зарегистроваться
        </button>
      </form>
      <p className="auth__text">
        Уже зарегистрированы?
        <a href="/signin" className="auth__link">
          Войти
        </a>
      </p>
    </div>
  )
}
