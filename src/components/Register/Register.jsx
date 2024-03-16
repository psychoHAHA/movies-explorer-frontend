// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import '../Auth/Auth.css'
// import logo from '../../images/logo.svg'

// export default function Register({ onRegister }) {
//   const [formValue, setFormValue] = useState({
//     name: '',
//     email: '',
//     password: '',
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target

//     setFormValue({
//       ...formValue,
//       [name]: value,
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const { name, email, password } = formValue
//     console.log(formValue)
//     onRegister(name, email, password)
//   }

//   return (
//     <div className="auth">
//       <Link to="/" className="auth__link">
//         <img src={logo} alt="logo" className="auth__logo"></img>
//       </Link>

//       <h1 className="auth__title">Добро пожаловать!</h1>

//       <form className="auth__form" onSubmit={handleSubmit}>
//         <div className="auth__inputs">
//           <label className="auth__label" htmlFor="name">
//             Имя
//           </label>
//           <input
//             type="name"
//             name="name"
//             className="auth__input"
//             required
//             value={formValue.name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="auth__inputs">
//           <label className="auth__label" htmlFor="email">
//             E-mail
//           </label>
//           <input
//             type="email"
//             name="email"
//             className="auth__input"
//             required
//             value={formValue.email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="auth__inputs">
//           <label className="auth__label" htmlFor="password">
//             Пароль
//           </label>
//           <input
//             type="password"
//             name="password"
//             className="auth__input"
//             required
//             value={formValue.password}
//             onChange={handleChange}
//           />
//         </div>

//         <button type="submit" className="auth__button">
//           Зарегистроваться
//         </button>
//       </form>
//       <p className="auth__text">
//         Уже зарегистрированы?
//         <a href="/signin" className="auth__link">
//           Войти
//         </a>
//       </p>
//     </div>
//   )
// }

import React from 'react'
import { Link } from 'react-router-dom'
import '../Auth/Auth.css'
import logo from '../../images/logo.svg'

import { useForm } from 'react-hook-form'

import { emailExpression } from '../../constants/constants'

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
                message: 'Минимум 8 символов',
              },
            })}
          />
        </div>
        <div className="error-validation">
          {errors?.email && <span>{errors?.email?.message || 'Ошибка'}</span>}
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
