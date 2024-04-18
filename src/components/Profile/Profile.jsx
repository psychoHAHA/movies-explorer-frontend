// import './Profile.css'
// import Header from '../Header/Header'

// import { useContext, useState } from 'react'

// import { CurrentUserContext } from './../../contexts/CurrentUserContext'

// import mainApi from '../../utils/MainApi.js'

// export default function Profile({ onLogout }) {
//   const { currentUser } = useContext(CurrentUserContext)

//   const [name, setName] = useState(currentUser.name)
//   const [setEditName] = useState(currentUser.name)
//   const [email, setEmail] = useState(currentUser.email)
//   const [setEditEmail] = useState(currentUser.email)

//   const handleSubmit = (evt) => {
//     evt.preventDefault()

//     mainApi
//       .setUserInfo({ name, email })
//       .then(() => {
//         setEditName(name)
//         setEditEmail(email)
//       })
//       .catch((error) => console.log(error))
//   }

//   const handleNameChange = (evt) => {
//     const value = evt.target.value
//     setName(value)
//   }

//   const handleEmailChange = (evt) => {
//     const value = evt.target.value
//     setEmail(value)
//   }

//   const logoutClickHandler = (evt) => {
//     evt.preventDefault()
//     onLogout()
//   }
//   return (
//     <>
//       <Header />
//       <div className="profile">
//         <h1 className="profile__title">Привет, {name}!</h1>
//         <form className="profile__form" onSubmit={handleSubmit}>
//           <div className="profile__list">
//             <label className="profile__label" htmlFor="name">
//               Имя
//             </label>
//             <input
//               id="name"
//               type="text"
//               className="profile__input"
//               value={name}
//               onChange={handleNameChange}
//             />
//           </div>
//           <div className="profile__list">
//             <label className="profile__label">E-mail</label>
//             <input
//               type="email"
//               className="profile__input"
//               id="email"
//               value={email}
//               onChange={handleEmailChange}
//             />
//           </div>

//           <div className="profile__buttons">
//             <button className="profile__button profile__button-edit">Редактировать</button>
//             <button className="profile__button profile__button-logout" onClick={logoutClickHandler}>
//               Выйти из аккаунта
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

import './Profile.css'
import Header from '../Header/Header'

import { useContext, useState } from 'react'

import { CurrentUserContext } from './../../contexts/CurrentUserContext'

import mainApi from '../../utils/MainApi.js'

export default function Profile({ onLogout, openPopup }) {
  const { currentUser } = useContext(CurrentUserContext)

  const [isVisibleButton, setIsVisibleButton] = useState(false);

  const [name, setName] = useState(currentUser.name)
  const [editName, setEditName] = useState(currentUser.name)
  const [email, setEmail] = useState(currentUser.email)
  const [editEmail, setEditEmail] = useState(currentUser.email)

  const handleSubmit = (evt) => {
    evt.preventDefault()

    mainApi
      .setUserInfo({ name, email })
      .then(() => {
        setEditName(name)
        setEditEmail(email)
        openPopup('Профиль изменен!')
      })
      .catch((error) => {
        openPopup(`Что-то пошло не так... ${error}`)
        console.log(error);
      })
  }

  const handleNameChange = (evt) => {
    const value = evt.target.value
    setName(value)

    if (value !== editName) {
      setIsVisibleButton(true)
    } else {
      setIsVisibleButton(false)
    }
  }

  const handleEmailChange = (evt) => {
    const value = evt.target.value
    setEmail(value)

    if (value !== editEmail) {
      setIsVisibleButton(true)
    } else {
      setIsVisibleButton(false)
    }
  }

  const logoutClickHandler = (evt) => {
    evt.preventDefault()
    onLogout()
  }
  return (
    <>
      <Header />
      <div className="profile">
        <h1 className="profile__title">Привет, {name}!</h1>
        <form className="profile__form" onSubmit={handleSubmit}>
          <div className="profile__list">
            <label className="profile__label" htmlFor="name">
              Имя
            </label>
            <input
              id="name"
              type="text"
              className="profile__input"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="profile__list">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              className="profile__input"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className="profile__buttons">
            <button className="profile__button profile__button-edit" disabled={!isVisibleButton}>Редактировать</button>
            <button className="profile__button profile__button-logout" onClick={logoutClickHandler}>
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
