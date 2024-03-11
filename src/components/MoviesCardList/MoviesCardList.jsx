import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList({ moviesToShow }) {
  return (
    <ul className="movies-cards-list">
      {moviesToShow.map((movie) => {
        return <MoviesCard key={movie.movieId ?? movie.id} movie={movie} />;
      })}
    </ul>
  )
}
