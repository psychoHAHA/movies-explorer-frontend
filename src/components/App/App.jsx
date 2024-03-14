import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
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

import { MoviesContext } from '../../contexts/MoviesContext'

import mainApi from './../../utils/MainApi'
import movieApi from './../../utils/MoviesApi'
import moviesData from './../../utils/moviesDataAdapter.js'

function App() {
  const navigate = useNavigate()

  const loggedInFromStorage = JSON.parse(localStorage.getItem('loggedIn'))

  const [loggedIn, setLoggedIn] = useState(JSON.parse(loggedInFromStorage))
  // const [loggedIn, setLoggedIn] = useState(false)
  const [moviesList, setMoviesList] = useState([])
  const [savedMoviesList, setSavedMoviesList] = useState([])

  const [isError, setIsError] = useState(false)

  const [currentUser, setCurrentUser] = useState({})

  function checkToken() {
    const token = localStorage.getItem('token')
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
      console.log(token);
      mainApi.setAuthorization(token)
      Promise.all([mainApi.getUserInfo(), mainApi.getMovies()])
        .then(([userData, savedMovies]) => {
          setCurrentUser(userData)
          setMoviesList(savedMovies)
        })
        .catch((error) => console.log(error))
    }
  }, [loggedIn])


  // const getUserInfo = () => {
  //   mainApi
  //     .getUserInfo()
  //     .then((data) => {
  //       setCurrentUser(data)
  //       setLoggedIn(true)
  //     })
  //     .catch((error) => {
  //       console.log(`Ошибка в получении данных о пользователе ${error}`)
  //     })
  // }

  // useEffect(() => {
  //   if (loggedIn) {
  //     getUserInfo()
  //   }
  // }, [loggedIn])

  const getAllMovies = () => {
    return movieApi.getMovies().then((movies) => {
      const adaptedMovies = movies.map((movie) => moviesData(movie))
      setMoviesList(adaptedMovies)
      setIsError(false)
      return adaptedMovies
    })
  }

  const saveMovie = (movie) => {
    return mainApi.createMovie(movie).then((movieData) => {
      setSavedMoviesList([...savedMoviesList, movieData])
    })
  }

  const deleteMovie = (movieId) => {
    const savedMovie = savedMoviesList.find((item) => item.movieId === movieId)
    return mainApi.deleteMovie(savedMovie._id).then((res) => {
      setSavedMoviesList(savedMoviesList.filter((movie) => movie._id !== savedMovie._id))
      return res
    })
  }

  const handleLogin = (email, password) => {
    return mainApi.authorize(email, password).then((res) => {
      if (!res.ok) {
        return Promise.reject(res)
      } else {
        return res.json().then((res) => {
          localStorage.setItem('token', res.token)
          console.log(localStorage)
          setLoggedIn(true)
          localStorage.setItem('loggedIn', 'true')
          navigate('/movies')
        })
      }
    })
  }

  const handleRegister = (name, email, password) => {
    return mainApi.register(name, email, password).then((res) => {
      if (!res.ok) {
        return Promise.reject(res)
      } else {
        return res.json().then((res) => {
          if (res._id) {
            handleLogin(email, password)
          }
        })
      }
    })
  }

  const handleLogout = () => {
    setLoggedIn(false)
    setCurrentUser({})
    localStorage.clear()
    localStorage.setItem('loggedIn', 'false')
    navigate('/', { replace: true })
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
              path="signin"
              element={
                <Login onLogin={handleLogin} loggedIn={loggedIn} isError={isError} setIsError={setIsError} />
              }
            />

            <Route
              path="signup"
              element={
                <Register
                  onRegister={handleRegister}
                  loggedIn={loggedIn}
                  isError={isError}
                  setIsError={setIsError}
                />
              }
            />

            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />

              <Route
                path="movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <Movies getAllMovies={getAllMovies} isError={isError} setIsError={setIsError} />
                  </ProtectedRoute>
                }
              />

              <Route
                path="saved-movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn}>
                    <SavedMovies />
                  </ProtectedRoute>
                }
              />
            </Route>

            <Route
              path="profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile onLogout={handleLogout} isError={isError} setIsError={setIsError} />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </MoviesContext.Provider>
      </CurrentUserContext.Provider>
    </>
  )
}

export default App
