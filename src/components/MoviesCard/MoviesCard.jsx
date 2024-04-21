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

//   useEffect(() => {
//     setIsMovieSaved(isLiked)
//   }, [savedMoviesList, movie.movieId])

//   useEffect(() => {
//     const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || []
//     if (savedMoviesIds.includes(movie.movieId)) {
//       setIsMovieSaved(true)
//     }
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
//           localStorage.setItem('savedMovies', JSON.stringify([...savedMoviesIds, movie.id]))
//         })
//         .catch((err) => {
//           console.error(err)
//         })
//     } else {
//       deleteMovie(movie.id)
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
//           className={
//             isMovieSaved
//               ? 'movies-card__button movies-card__button_selected'
//               : 'movies-card__button movies-card__button_unselected'
//           }
//           onClick={handleToggleMovie}
//         >
//           Сохранить
//         </button>
//       )}
//     </li>
//   )
// }

// import './MoviesCard.css';
// import { useContext, useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { MoviesContext } from './../../contexts/MoviesContext';

// export default function MoviesCard({ movie }) {
//   const { saveMovie, deleteMovie } = useContext(MoviesContext);

//   const { duration, image: imageURL, nameRU, trailerLink, movieId } = movie;

//   const [isMovieSaved, setIsMovieSaved] = useState(false);
//   const [savedMoviesIds, setSavedMoviesIds] = useState([]);

//   useEffect(() => {
//     const savedMoviesIds = JSON.parse(localStorage.getItem('savedMovies')) || [];
//     setSavedMoviesIds(savedMoviesIds);
//     setIsMovieSaved(savedMoviesIds.includes(movieId));
//   }, [movieId]);

//   const location = useLocation();

//   const timeConverter = (m) => {
//     return `${Math.floor(m / 60)}ч ${m % 60}м`;
//   }

//   const handleToggleMovie = () => {
//     if (!isMovieSaved) {
//       saveMovie(movie)
//         .then(() => {
//           setSavedMoviesIds([...savedMoviesIds, movieId]);
//           localStorage.setItem('savedMovies', JSON.stringify([...savedMoviesIds, movieId]));
//           setIsMovieSaved(true);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
//     } else {
//       deleteMovie(movieId)
//         .then(() => {
//           const updatedMovieIds = savedMoviesIds.filter((id) => id !== movieId);
//           setSavedMoviesIds(updatedMovieIds);
//           localStorage.setItem('savedMovies', JSON.stringify(updatedMovieIds));
//           setIsMovieSaved(false);
//         })
//         .catch((err) => {
//           console.error(err);
//         });
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
//         <p className="movies-card__time">{timeConverter(duration)}</p>
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
// import './MoviesCard.css'
// import { useContext, useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import { MoviesContext } from './../../contexts/MoviesContext'

// export default function MoviesCard({ movie }) {
//   const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)

//   const { duration, image: imageURL, nameRU, trailerLink } = movie

//   const isLiked = savedMoviesList.some((m) => m.movieId === movie.movieId)

//   const [isMovieSaved, setIsMovieSaved] = useState(isLiked)

//   useEffect(() => {
//     setIsMovieSaved(isLiked)
//   }, [savedMoviesList, movie.movieId])

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

// import './MoviesCard.css'
// import { useContext, useState, useEffect } from 'react'
// import { useLocation } from 'react-router-dom'
// import { MoviesContext } from './../../contexts/MoviesContext'

// export default function MoviesCard({ movie }) {
//   const { saveMovie, deleteMovie } = useContext(MoviesContext)

//   const { duration, image: imageURL, nameRU, trailerLink } = movie

//   const [isMovieSaved, setIsMovieSaved] = useState(false)

//   useEffect(() => {
//     const savedMoviesFromStorage = sessionStorage.getItem('savedMovies')
//       ? JSON.parse(sessionStorage.getItem('savedMovies'))
//       : []
//     const isLiked = savedMoviesFromStorage.some((m) => m.movieId === movie.movieId)
//     setIsMovieSaved(isLiked)
//   }, [movie.movieId])

//   const location = useLocation()

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
//       deleteMovie(movie.movieId)
//         .then(() => {
//           const updatedSavedMoviesList = savedMoviesFromStorage.filter((m) => m.movieId !== movie.movieId)
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


// import './MoviesCard.css'
// import { useContext } from 'react'
// import { useLocation } from 'react-router-dom'
// import { MoviesContext } from './../../contexts/MoviesContext'

// export default function MoviesCard({ movie }) {
//   const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)

//   const { duration, image: imageURL, nameRU, trailerLink, movieId } = movie

//   const isMovieSaved = savedMoviesList.some((m) => m.movieId === movieId)

//   const location = useLocation()

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
//         })
//         .catch((err) => console.log(err))
//     } else {
//       deleteMovie(movieId)
//         .then(() => {
//           const updatedSavedMoviesList = savedMoviesFromStorage.filter((m) => m.movieId !== movieId)
//           sessionStorage.setItem('savedMovies', JSON.stringify(updatedSavedMoviesList))
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
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MoviesContext } from './../../contexts/MoviesContext'

export default function MoviesCard({ movie }) {
  const { savedMoviesList, saveMovie, deleteMovie } = useContext(MoviesContext)
  const { duration, image: imageURL, nameRU, trailerLink, movieId } = movie
  const [isMovieSaved, setIsMovieSaved] = useState(savedMoviesList.some((m) => m.movieId === movieId))
  const location = useLocation()

  const timeConvertor = (m) => {
    return `${Math.floor(m / 60)}ч ${m % 60}м`
  }

  const handleToggleMovie = () => {
    const savedMoviesFromStorage = sessionStorage.getItem('savedMovies')
      ? JSON.parse(sessionStorage.getItem('savedMovies'))
      : []

    if (!isMovieSaved) {
      saveMovie(movie)
        .then(() => {
          const updatedSavedMoviesList = [...savedMoviesFromStorage, movie]
          sessionStorage.setItem('savedMovies', JSON.stringify(updatedSavedMoviesList))
          setIsMovieSaved(true)
        })
        .catch((err) => console.log(err))
    } else {
      deleteMovie(movieId)
        .then(() => {
          const updatedSavedMoviesList = savedMoviesFromStorage.filter((m) => m.movieId !== movieId)
          sessionStorage.setItem('savedMovies', JSON.stringify(updatedSavedMoviesList))
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