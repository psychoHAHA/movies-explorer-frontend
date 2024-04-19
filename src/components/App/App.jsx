// import React, { useEffect, useState } from 'react'
// import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
// import { CurrentUserContext } from '../../contexts/CurrentUserContext'

// import './App.css'

// import Main from '../Main/Main'
// import Layout from '../Layout/Layout'
// import Movies from './../Movies/Movies'
// import SavedMovies from './../SavedMovies/SavedMovies'
// import Profile from './../Profile/Profile'
// import Login from './../Login/Login'
// import Register from './../Register/Register'
// import ErrorNotFound from './../ErrorNotFound/ErrorNotFound'
// import ProtectedRoute from './../ProtectedRoute/ProtectedRoute'
// import Popup from '../Popup/Popup'

// import { MoviesContext } from '../../contexts/MoviesContext'

// import mainApi from './../../utils/MainApi'
// import movieApi from './../../utils/MoviesApi'
// import { movieApiURL } from '../../constants/constants'

// function App() {
//   const navigate = useNavigate()

//   const loggedInFromStorage = JSON.parse(localStorage.getItem('loggedIn'))

//   const [isApiError, setIsApiError] = useState(false)
//   const [loggedIn, setLoggedIn] = useState(JSON.parse(loggedInFromStorage))
//   const [moviesList, setMoviesList] = useState([])
//   const [savedMoviesList, setSavedMoviesList] = useState([])

//   const [currentUser, setCurrentUser] = useState({})

//   const [isOpenPopup, setIsOpenPopup] = useState(false)
//   const [popupTitle, setPopupTitle] = useState('')

//   const moviesData = (movie) => {
//     const {
//       country,
//       director,
//       duration,
//       year,
//       description,
//       image,
//       trailerLink,
//       nameRU,
//       nameEN,
//       id: movieId,
//     } = movie

//     return {
//       country,
//       director,
//       duration,
//       year,
//       description,
//       image: `${movieApiURL}${image.url}`,
//       trailerLink,
//       thumbnail: `${movieApiURL}${image.formats.thumbnail.url}`,
//       nameRU,
//       nameEN,
//       movieId,
//     }
//   }

//   function checkToken(token) {
//     const path = location.pathname
//     mainApi
//       .tokenCheck(token)
//       .then((res) => {
//         if (!res.ok) {
//           return res.json().then((err) => {
//             return Promise.reject(`Ошибка: ${res.status} ${err.message}`)
//           })
//         } else {
//           setLoggedIn(true)
//           localStorage.setItem('loggedIn', 'true')
//         }
//       })
//       .catch((err) => {
//         console.log(err)
//         handleLogout()
//         navigate(path, { replace: true })
//       })
//   }

//   useEffect(() => {
//     const token = localStorage.getItem('token')
//     if (token) {
//       checkToken(token)
//     }
//   }, [])

//   useEffect(() => {
//     if (loggedIn) {
//       const token = localStorage.getItem('token')

//       mainApi.setAuthorization(token)
//       Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
//         .then(([userData, savedMovies]) => {
//           setCurrentUser(userData)
//           setSavedMoviesList(savedMovies)
//         })
//         .catch((err) => {
//           console.log(err)
//           alert(`Что-то пошло не так... ${err}`)
//         })
//     }
//   }, [loggedIn])

//   const openPopup = (textError) => {
//     setPopupTitle(textError)
//     setIsOpenPopup(true)
//   }

//   const closePopup = () => {
//     setIsOpenPopup(false)
//     setPopupTitle('')
//   }

//   const handleLogin = (email, password) => {
//     return mainApi.authorize(email, password).then((res) => {
//       if (!res.ok) {
//         return Promise.reject(res)
//       } else {
//         return res
//           .json()
//           .then((res) => {
//             setLoggedIn(true)
//             localStorage.setItem('token', res.token)
//             localStorage.setItem('loggedIn', 'true')
//             navigate('/movies')
//             openPopup('Авторизация прлшла успешно')
//           })
//           .catch((err) => {
//             console.log(err)
//             alert(`Что-то пошло не так... ${err}`)
//           })
//       }
//     })
//   }

//   // const handleRegister = (name, email, password) => {
//   //   return mainApi.register(name, email, password).then((res) => {
//   //     if (!res.ok) {
//   //       return Promise.reject(res)
//   //     } else {
//   //       return res
//   //         .json()
//   //         .then((res) => {
//   //           if (res._id) {
//   //             handleLogin(email, password)
//   //             navigate('/movies')
//   //           }
//   //         })
//   //         .catch((err) => console.log(err))
//   //     }
//   //   })
//   // }

//   const handleRegister = async (name, email, password) => {
//     try {
//       const userDataReg = await mainApi.register(name, email, password)
//       setCurrentUser(userDataReg)
//       await handleLogin(email, password)
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   const handleLogout = () => {
//     setLoggedIn(false)
//     setCurrentUser({})
//     localStorage.removeItem('token')
//     localStorage.clear()
//     localStorage.setItem('loggedIn', 'false')
//     navigate('/', { replace: true })
//   }

//   const getAllMovies = () => {
//     return movieApi
//       .getMovies()
//       .then((movies) => {
//         const adaptedMovies = movies.map((movie) => moviesData(movie))
//         setMoviesList(adaptedMovies)
//         setIsApiError(false)
//         return adaptedMovies
//       })
//       .catch((err) => console.log(err))
//   }

//   const saveMovie = (movie) => {
//     return mainApi
//       .createMovie(movie)
//       .then((movieData) => {
//         console.log(movie);
//         setSavedMoviesList([...savedMoviesList, movieData])
//       })
//       .catch((err) => console.log(err))
//   }
  
//   // const deleteMovie = (movieId) => {
//   //   const savedMovie = savedMoviesList.find((item) => item.movieId === movieId)
//   //   return mainApi
//   //     .deleteMovie(savedMovie._id)
//   //     .then((res) => {
//   //       console.log(savedMovie);
//   //       console.log(savedMovie._id);
//   //       console.log(savedMovie.movieId);
//   //       console.log(movieId);
//   //       setSavedMoviesList(savedMoviesList.filter((movie) => movie._id !== savedMovie._id))
//   //       return res
//   //     })
//   //     .catch((err) => console.log(err))
//   // }

//   const deleteMovie = (movieId) => {
//     const savedMovie = savedMoviesList.find((item) => item.movieId === movieId);
//     if (savedMovie) {
//       return mainApi
//         .deleteMovie(savedMovie._id)
//         .then((res) => {
//           console.log(savedMovie);
//           console.log(savedMovie._id);
//           setSavedMoviesList(savedMoviesList.filter((movie) => movie._id !== savedMovie._id));
//           return res;
//         })
//         .catch((err) => console.log(err));
//     } else {
//       console.log("Movie not found in the saved movies list.");
//       // handle the case where savedMovie is undefined
//       return Promise.resolve(); // or any other appropriate action
//     }
//   };

//   return (
//     <>
//       <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn }}>
//         <MoviesContext.Provider
//           value={{
//             moviesList,
//             setMoviesList,
//             savedMoviesList,
//             setSavedMoviesList,
//             saveMovie,
//             deleteMovie,
//           }}
//         >
//           <Routes>
//             <Route
//               path="/signin"
//               element={loggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} loggedIn={loggedIn} />}
//             />

//             <Route
//               path="/signup"
//               element={
//                 loggedIn ? (
//                   <Navigate replace to="/" />
//                 ) : (
//                   <Register onRegister={handleRegister} loggedIn={loggedIn} />
//                 )
//               }
//             />

//             <Route path="/" element={<Layout />}>
//               <Route index element={<Main />} />

//               <Route
//                 path="movies"
//                 element={
//                   <ProtectedRoute loggedIn={loggedIn}>
//                     <Movies
//                       getAllMovies={getAllMovies}
//                       isApiError={isApiError}
//                       setIsApiError={setIsApiError}
//                       openPopup={openPopup}
//                     />
//                   </ProtectedRoute>
//                 }
//               />

//               <Route
//                 path="saved-movies"
//                 element={
//                   <ProtectedRoute loggedIn={loggedIn} openPopup={openPopup}>
//                     <SavedMovies />
//                   </ProtectedRoute>
//                 }
//               />
//             </Route>

//             <Route
//               path="profile"
//               element={
//                 <ProtectedRoute loggedIn={loggedIn}>
//                   <Profile
//                     onLogout={handleLogout}
//                     isApiError={isApiError}
//                     setIsApiError={setIsApiError}
//                     openPopup={openPopup}
//                   />
//                 </ProtectedRoute>
//               }
//             />

//             <Route path="*" element={<ErrorNotFound />} />
//           </Routes>
//           <Popup text={popupTitle} isOpen={isOpenPopup} onClose={closePopup} />
//         </MoviesContext.Provider>
//       </CurrentUserContext.Provider>
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import './App.css'

import Main from '../Main/Main'
import Layout from '../Layout/Layout'
import Movies from './../Movies/Movies'
import SavedMovies from './../SavedMovies/SavedMovies'
import Profile from './../Profile/Profile'
import Login from './../Login/Login'
import Register from './../Register/Register'
import ErrorNotFound from './../ErrorNotFound/ErrorNotFound'
import ProtectedRoute from './../ProtectedRoute/ProtectedRoute'
import Popup from '../Popup/Popup'

import { MoviesContext } from '../../contexts/MoviesContext'

import mainApi from './../../utils/MainApi'
import movieApi from './../../utils/MoviesApi'
import { movieApiURL } from '../../constants/constants'

function App() {
  const navigate = useNavigate()

  const loggedInFromStorage = JSON.parse(localStorage.getItem('loggedIn'))

  const [isApiError, setIsApiError] = useState(false)
  const [loggedIn, setLoggedIn] = useState(JSON.parse(loggedInFromStorage))
  const [moviesList, setMoviesList] = useState([])
  const [savedMoviesList, setSavedMoviesList] = useState([])

  const [currentUser, setCurrentUser] = useState({})

  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const [popupTitle, setPopupTitle] = useState('')

  const moviesData = (movie) => {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      nameRU,
      nameEN,
      id: movieId,
    } = movie

    return {
      country,
      director,
      duration,
      year,
      description,
      image: `${movieApiURL}${image.url}`,
      trailerLink,
      thumbnail: `${movieApiURL}${image.formats.thumbnail.url}`,
      nameRU,
      nameEN,
      movieId,
    }
  }

  function checkToken(token) {
    const path = location.pathname
    mainApi
      .tokenCheck(token)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((err) => {
            return Promise.reject(`Ошибка: ${res.status} ${err.message}`)
          })
        } else {
          setLoggedIn(true)
          localStorage.setItem('loggedIn', 'true')
        }
      })
      .catch((err) => {
        console.log(err)
        handleLogout()
        navigate(path, { replace: true })
      })
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken(token)
    }
  }, [])

  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem('token')

      mainApi.setAuthorization(token)
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([userData, savedMovies]) => {
          setCurrentUser(userData)
          setSavedMoviesList(savedMovies)
        })
        .catch((err) => {
          console.log(err)
          alert(`Что-то пошло не так... ${err}`)
        })
    }
  }, [loggedIn])

  const openPopup = (textError) => {
    setPopupTitle(textError)
    setIsOpenPopup(true)
  }

  const closePopup = () => {
    setIsOpenPopup(false)
    setPopupTitle('')
  }

  const handleLogin = (email, password) => {
    return mainApi.authorize(email, password).then((res) => {
      if (!res.ok) {
        return Promise.reject(res)
      } else {
        return res
          .json()
          .then((res) => {
            setLoggedIn(true)
            localStorage.setItem('token', res.token)
            localStorage.setItem('loggedIn', 'true')
            navigate('/movies')
            openPopup('Авторизация прлшла успешно')
          })
          .catch((err) => {
            console.log(err)
            alert(`Что-то пошло не так... ${err}`)
          })
          .finally(() => {
            setTimeout(() => {
              closePopup()
            }, 500)
          })
      }
    })
  }

  const handleRegister = (name, email, password) => {
    // setIsLoading(true)
    return mainApi.register(name, email, password).then((res) => {
      if (!res.ok) {
        return Promise.reject(res)
      } else {
        return res
          .json()
          .then((res) => {
            if (res) {
              handleLogin(email, password)
              navigate('/movies')
              openPopup('Вы успешно зарегистрировались!')
            }
          })
          .catch((err) => console.log(err))
          .finally(() => {
            setTimeout(() => {
              closePopup()
            }, 500)
          })
      }
    })
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setCurrentUser({})
    localStorage.removeItem('token')
    localStorage.clear()
    localStorage.setItem('loggedIn', 'false')
    navigate('/', { replace: true })
  }

  const getAllMovies = () => {
    return movieApi
      .getMovies()
      .then((movies) => {
        const adaptedMovies = movies.map((movie) => moviesData(movie))
        setMoviesList(adaptedMovies)
        setIsApiError(false)
        return adaptedMovies
      })
      .catch((err) => console.log(err))
  }

  const saveMovie = (movie) => {
    return mainApi
      .createMovie(movie)
      .then((movieData) => {
        console.log(saveMovie)

        console.log(movie)
        setSavedMoviesList([...savedMoviesList, movieData])
      })
      .catch((err) => console.log(err))
  }

  const deleteMovie = (movieId) => {
    // console.log(typeof String(movieId));
    // console.log(typeof savedMoviesList[0].movieId);
    const savedMovie = savedMoviesList.find((item) => item.movieId === String(movieId))
    console.log(savedMovie)
    if (savedMovie) {
      return mainApi
        .deleteMovie(savedMovie._id)
        .then((res) => {
          setSavedMoviesList(savedMoviesList.filter((movie) => movie._id !== savedMovie._id))
          return res
        })
        .catch((err) => console.log(err))
    } else {
      console.log('Movie not found in the saved movies list.')
      return Promise.resolve()
    }
  }
  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser, loggedIn, setLoggedIn }}>
        <MoviesContext.Provider
          value={{
            moviesList,
            setMoviesList,
            savedMoviesList,
            setSavedMoviesList,
            saveMovie,
            deleteMovie,
          }}
        >
          <Routes>
            <Route
              path="/signin"
              element={loggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} loggedIn={loggedIn} />}
            />

            <Route
              path="/signup"
              element={
                loggedIn ? (
                  <Navigate replace to="/" />
                ) : (
                  <Register onRegister={handleRegister} loggedIn={loggedIn} />
                )
              }
            />

            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />

              <Route
                path="movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Movies
                      getAllMovies={getAllMovies}
                      isApiError={isApiError}
                      setIsApiError={setIsApiError}
                      openPopup={openPopup}
                    />
                  </ProtectedRoute>
                }
              />

              <Route
                path="saved-movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn} openPopup={openPopup}>
                    <SavedMovies />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    onLogout={handleLogout}
                    isApiError={isApiError}
                    setIsApiError={setIsApiError}
                    openPopup={openPopup}
                  />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
          <Popup text={popupTitle} isOpen={isOpenPopup} onClose={closePopup} />
        </MoviesContext.Provider>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
