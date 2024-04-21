// import './MoviesCard.css'

// import { useContext, useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// import { MoviesContext } from './../../contexts/MoviesContext'

// export default function MoviesCard({ movie }) {
//   const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)

//   const { duration, image: imageURL, nameRU, trailerLink } = movie

//   const isLiked = savedMoviesList.some((m) => m.id === movie.id)

//   const [isMovieSaved, setIsMovieSaved] = useState(isLiked)

//   const likeButtonClassName = `movies-card__button ${isMovieSaved ? 'movies-card__button_selected' : 'movies-card__button_unselected'}`

//   useEffect(() => {
//     const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//     setIsMovieSaved(savedMoviesIds.includes(movie.movieId))
//   }, [movie.movieId])

//   const location = useLocation()

//   const timeConvertor = (m) => {
//     return `${Math.floor(m / 60)}ч ${m % 60}м`
//   }

//   const handleToggleMovie = () => {
//     if (!isLiked) {
//       saveMovie(movie)
//         .then(() => {
//           setIsMovieSaved(true)
//           const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//           localStorage.setItem('savedMovies', JSON.stringify([...savedMoviesIds, movie.movieId]))
//         })
//         .catch((err) => {
//           console.error(err)
//         })
//     } else {
//       deleteMovie(movie.movieId)
//         .then(() => {
//           const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//           const updatedMovieIds = savedMoviesIds.filter((id) => id !== movie.movieId)
//           setIsMovieSaved(false)
//           localStorage.setItem('savedMovies', JSON.stringify(updatedMovieIds))
//         })
//         .catch((err) => {
//           console.error(err)
//         })
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
//         <button className={likeButtonClassName} onClick={handleToggleMovie}>
//           Сохранить
//         </button>
//       )}
//     </li>
//   )
// }

// import './MoviesCard.css'

// import { useContext, useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'

// import { MoviesContext } from './../../contexts/MoviesContext'

// export default function MoviesCard({ movie }) {
//   const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)

//   const { duration, image: imageURL, nameRU, trailerLink } = movie

//   const isLiked = savedMoviesList.some((m) => m.movieId === movie.movieId)

//   const [isMovieSaved, setIsMovieSaved] = useState(isLiked)

//   const likeButtonClassName = `movies-card__button ${isMovieSaved ? 'movies-card__button_selected' : 'movies-card__button_unselected'}`

//   useEffect(() => {
//     const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//     setIsMovieSaved(savedMoviesIds.includes(movie.movieId))
//   }, [movie.movieId])

//   const location = useLocation()

//   const timeConvertor = (m) => {
//     return `${Math.floor(m / 60)}ч ${m % 60}м`
//   }
//   const handleToggleMovie = () => {
//     if (!isMovieSaved) {
//       saveMovie(movie)
//         .then(() => {
//           setIsMovieSaved(true)
//           const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//           localStorage.setItem('savedMovies', JSON.stringify([...savedMoviesIds, movie.movieId]))
//         })
//         .catch((err) => {
//           console.error(err)
//         })
//     } else {
//       deleteMovie(movie.movieId)
//         .then(() => {
//           const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//           const updatedMovieIds = savedMoviesIds.filter((id) => id !== movie.movieId)
//           setIsMovieSaved(false)
//           localStorage.setItem('savedMovies', JSON.stringify(updatedMovieIds))
//         })
//         .catch((err) => {
//           console.error(err)
//         })
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
//         <button className={likeButtonClassName} onClick={handleToggleMovie}>
//           {isMovieSaved ? 'Удалить' : 'Сохранить'}
//         </button>
//       )}
//     </li>
//   )
// }

// import './MoviesCard.css'
// import { useContext, useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import { MoviesContext } from './../../contexts/MoviesContext'

// export default function MoviesCard({ movie }) {
//   const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)

//   const { duration, image: imageURL, nameRU, trailerLink } = movie

//   const [isMovieSaved, setIsMovieSaved] = useState(false)

//   useEffect(() => {
//     const isLiked = savedMoviesList.some((m) => m.movieId === movie.movieId)
//     setIsMovieSaved(isLiked)
//   }, [savedMoviesList, movie.movieId])

//   const location = useLocation()

//   const timeConvertor = (m) => {
//     return `${Math.floor(m / 60)}ч ${m % 60}м`
//   }

//   const handleToggleMovie = () => {
//     if (!isMovieSaved) {
//       saveMovie(movie)
//         .then(() => {
//           setIsMovieSaved(true)
//           const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//           localStorage.setItem('savedMovies', JSON.stringify([...savedMoviesIds, movie.id]))
//         })
//         .catch((err) => {
//           console.error(err)
//         })
//     } else {
//       deleteMovie(movie.movieId)
//         .then(() => {
//           const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//           const updatedMovieIds = savedMoviesIds.filter((id) => id !== movie.id)
//           setIsMovieSaved(false)
//           localStorage.setItem('savedMovies', JSON.stringify(updatedMovieIds))
//         })
//         .catch((err) => {
//           console.error(err)
//         })
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
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { MoviesContext } from './../../contexts/MoviesContext'

export default function MoviesCard({ movie }) {
  const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)
  const { duration, image: imageURL, nameRU, trailerLink, movieId } = movie

  const isMovieSaved = savedMoviesList.some((savedMovie) => savedMovie.movieId === movieId)

  const location = useLocation()

  const timeConvertor = (m) => {
    return `${Math.floor(m / 60)}ч ${m % 60}м`
  }

  const handleToggleMovie = () => {
    if (!isMovieSaved) {
      saveMovie(movie).catch((err) => {
        console.error(err)
      })
    } else {
      deleteMovie(movieId).catch((err) => {
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
