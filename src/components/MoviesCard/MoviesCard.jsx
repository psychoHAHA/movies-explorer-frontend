import './MoviesCard.css'

import { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { MoviesContext } from './../../contexts/MoviesContext'

export default function MoviesCard({ movie }) {
  const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)

  const { duration, image: imageURL, nameRU, movieId, trailerLink } = movie

  const [isMovieSaved, setIsMovieSaved] = useState(false)

  // useEffect(() => {
  //   const isSaved = savedMoviesList.some((savedMovie) => savedMovie.movieId === movie.movieId)
  //   setIsMovieSaved(isSaved)
  // }, [savedMoviesList, movie])

  useEffect(() => {
    if (savedMoviesList.some((savedMovie) => savedMovie.movieId === movie.movieId)) {
      setIsMovieSaved(true)
    }
  }, [savedMoviesList, movie])

  const location = useLocation()

  const timeConvertor = (m) => {
    return `${Math.floor(m / 60)}ч ${m % 60}м`
  }

  // const handleSaveMovie = () => {
  //   if (!isMovieSaved) {
  //     saveMovie(movie)
  //       .then(() => {
  //         setIsMovieSaved(true)
  //         console.log(isMovieSaved)
  //       })
  //       .catch((err) => {
  //         console.error(err)
  //         console.log(movie)
  //       })
  //   } else {
  //     deleteMovie(movieId)
  //       .then((res) => {
  //         setIsMovieSaved(false)
  //         console.log(isMovieSaved)
  //         console.log(res.message)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }
  // }

  const handleToggleMovie = () => {
    if (!isMovieSaved) {
      saveMovie(movie)
        .then(() => {
          setIsMovieSaved(true)
          console.log(movie);
          console.log(isMovieSaved)
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      deleteMovie(movieId)
        .then((res) => {
          setIsMovieSaved(false)
          console.log(res.message)
          console.log(movieId);
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }

  const handleDeleteMovie = () => {
    deleteMovie(movieId)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <li className="movies-card">
      <a
        href={trailerLink}
        className="movies-card__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Трейлер к фильму ${nameRU}`}
      >
        <img src={imageURL} alt="обложка кина" className="movies-card__image" />
      </a>
      <div className="movies-card__container">
        <h1 className="movies-card__title">{nameRU}</h1>
        <p className="movies-card__time">{timeConvertor(duration)}</p>
      </div>

      {location.pathname === '/movies' && (
        <button
          className={`movies-card__button movies-card__button${isMovieSaved ? '_selected' : '_unselected'}`}
          onClick={handleToggleMovie}
        >
          Сохранить
        </button>
      )}

      {location.pathname === '/saved-movies' && (
        <button
          className="movies-card__button movies-card__button_cross"
          onClick={handleDeleteMovie}
        ></button>
      )}

      {/* {location.pathname === '/movies' && (
        <button className={`movies-card__button `} onClick={handleToggleMovie} disabled={isMovieSaved}>
          Сохранить
        </button>
      )}

      {location.pathname === '/saved-movies' && (
        <button className="movies-card__button movies-card__button-cross" onClick={handleDeleteMovie}>
          Удалить
        </button>
      )} */}
    </li>
  )
}
