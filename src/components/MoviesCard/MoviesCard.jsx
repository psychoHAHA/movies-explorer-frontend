import './MoviesCard.css'

import { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { MoviesContext } from './../../contexts/MoviesContext'

export default function MoviesCard({ movie }) {
  const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)

  const { duration, image: imageURL, nameRU, trailerLink } = movie

  const isLiked = savedMoviesList.some((m) => m.id === movie.id)

  const [isMovieSaved, setIsMovieSaved] = useState(isLiked)

  // useEffect(() => {
  //   const isSaved = savedMoviesList.some((savedMovie) => savedMovie.movieId === movie.movieId)
  //   setIsMovieSaved(isSaved)
  // }, [savedMoviesList, movie])

  useEffect(() => {
    const savedMovieIds = JSON.parse(localStorage.getItem('savedMovies')) || []
    setIsMovieSaved(savedMovieIds.includes(movie.movieId))
  }, [movie.movieId])

  const location = useLocation()

  const timeConvertor = (m) => {
    return `${Math.floor(m / 60)}ч ${m % 60}м`
  }

  const handleToggleMovie = () => {
    if (!isLiked) {
      saveMovie(movie)
        .then(() => {
          const savedMovieIds = JSON.parse(localStorage.getItem('savedMovies')) || []
          setIsMovieSaved(true)
          console.log(movie);
          console.log(isMovieSaved)
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      deleteMovie(movie.movieId)
        .then(() => {
          const savedMovieIds = JSON.parse(localStorage.getItem('savedMovies')) || []
          const updatedMovieIds = savedMovieIds.filter((id) => id !== movie.id)
          setIsMovieSaved(false)
          console.log(res.message)
          console.log(movieId);
        })
        .catch((err) => {
          console.error(err)
        })
    }
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

      {location.pathname === '/saved-movies' ? (
        <button
          className="movies-card__button movies-card__button_cross"
          onClick={handleToggleMovie}
        ></button>
      ) : (
        <button className={likeButtonClassName} onClick={handleToggleMovie}>
          Сохранить
        </button>
      )}
    </li>
  )
}
