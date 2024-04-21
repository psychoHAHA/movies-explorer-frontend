
// import './MoviesCard.css'
// import { useContext, useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import { MoviesContext } from './../../contexts/MoviesContext'

// export default function MoviesCard({ movie }) {
//   const { saveMovie, deleteMovie } = useContext(MoviesContext)
//   const { duration, image: imageURL, nameRU, trailerLink, movieId } = movie
//   const [isMovieSaved, setIsMovieSaved] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const savedMoviesFromStorage = sessionStorage.getItem('savedMovies')
//       ? JSON.parse(sessionStorage.getItem('savedMovies'))
//       : []
//     setIsMovieSaved(savedMoviesFromStorage.some((m) => m.movieId === movieId))
//   }, [movieId])

//   const timeConvertor = (m) => {
//     return `${Math.floor(m / 60)}ч ${m % 60}м`
//   }

//   const handleToggleMovie = () => {
//     const savedMoviesFromStorage = sessionStorage.getItem('savedMovies')
//       ? JSON.parse(sessionStorage.getItem('savedMovies'))
//       : []

//     if (!isMovieSaved) {
//       saveMovie(movie)
//         .then(() => {
//           const updatedSavedMoviesList = [...savedMoviesFromStorage, movie]
//           sessionStorage.setItem('savedMovies', JSON.stringify(updatedSavedMoviesList))
//           setIsMovieSaved(true)
//         })
//         .catch((err) => console.log(err))
//     } else {
//       deleteMovie(movieId)
//         .then(() => {
//           const updatedSavedMoviesList = savedMoviesFromStorage.filter((m) => m.movieId !== movieId)
//           sessionStorage.setItem('savedMovies', JSON.stringify(updatedSavedMoviesList))
//           setIsMovieSaved(false)
//         })
//         .catch((err) => console.log(err))
//     }
//   }

//   return (
//     <li className="movies-card">
//       <a
//         href={trailerLink}
//         className="movies-card__link"
//         target="_blank"
//         rel="noopener noreferrer"
//         aria-label={`Трейлер к фильму ${nameRU}`}
//       >
//         <img src={imageURL} alt="обложка кина" className="movies-card__image" />
//       </a>
//       <div className="movies-card__container">
//         <h1 className="movies-card__title">{nameRU}</h1>
//         <p className="movies-card__time">{timeConvertor(duration)}</p>
//       </div>

//       {location.pathname === '/saved-movies' ? (
//         <button
//           className="movies-card__button movies-card__button_cross"
//           onClick={handleToggleMovie}
//         ></button>
//       ) : (
//         <button
//           className={`movies-card__button ${isMovieSaved ? 'movies-card__button_selected' : 'movies-card__button_unselected'}`}
//           onClick={handleToggleMovie}
//         >
//           {isMovieSaved ? 'Удалить' : 'Сохранить'}
//         </button>
//       )}
//     </li>
//   )
// }
import './MoviesCard.css'
import { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MoviesContext } from './../../contexts/MoviesContext'

export default function MoviesCard({ movie }) {
  const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)
  const { duration, image: imageURL, nameRU, trailerLink, movieId } = movie
  const [isMovieSaved, setIsMovieSaved] = useState(savedMoviesList.some((m) => m.movieId === movieId))
  const location = useLocation()

  useEffect(() => {
    setIsMovieSaved(savedMoviesList.some((m) => m.movieId === movieId))
  }, [savedMoviesList, movieId])

  const timeConvertor = (m) => {
    return `${Math.floor(m / 60)}ч ${m % 60}м`
  }

  const handleToggleMovie = () => {
    if (!isMovieSaved) {
      saveMovie(movie)
        .then(() => {
          setIsMovieSaved(true)
        })
        .catch((err) => console.log(err))
    } else {
      deleteMovie(movieId)
        .then(() => {
          setIsMovieSaved(false)
        })
        .catch((err) => console.log(err))
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
        <button
          className={`movies-card__button ${isMovieSaved ? 'movies-card__button_selected' : 'movies-card__button_unselected'}`}
          onClick={handleToggleMovie}
        >
          {isMovieSaved ? 'Удалить' : 'Сохранить'}
        </button>
      )}
    </li>
  )
}
