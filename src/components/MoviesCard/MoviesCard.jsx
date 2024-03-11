import './MoviesCard.css'

import { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { MoviesContext } from './../../contexts/MoviesContext'

export default function MoviesCard({ movie }) {
  const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)

  const { duration, image: imageURL, nameRU, movieId, trailerLink } = movie

  useEffect(() => {
    const isSaved = savedMoviesList.some(
      (savedMovie) => savedMovie.movieId === movie.movieId
    )
    setIsMovieSaved(isSaved)
  }, [savedMoviesList, movie])

  const [isMovieSaved, setIsMovieSaved] = useState(false)

  const location = useLocation()

  const timeConvertor = (m) => {
    return `${Math.floor(m / 60)}ч ${m % 60}м`
  }

  const saveMovieHandler = () => {
    if (!isMovieSaved) {
      saveMovie(movie)
        .then(() => setIsMovieSaved(true))
        .catch((err) => {
          console.error(err)
          console.log(movie)
        })
    } else {
      deleteMovie(movieId)
        .then((res) => {
          setIsMovieSaved(false)
          console.log(res.message)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const deleteMovieHandler = () => {
    deleteMovie(movieId)
      .then((res) => {
        console.log(res.message)
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
          className={`movies-card__button ${
            isMovieSaved ? 'movies-card__button-selected' : ''
          }`}
          onClick={saveMovieHandler}
        >
          Сохранить
        </button>
      )}

      {location.pathname === '/saved-movies' && (
        <button
          className="movies-card__button movies-card__button-cross"
          onClick={deleteMovieHandler}
        >
          Удалить
        </button>
      )}
    </li>
  )
}
