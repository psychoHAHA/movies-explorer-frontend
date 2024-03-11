import React, { useEffect, useState, useContext } from 'react'

import { MoviesContext } from '../../contexts/MoviesContext'

import './Movies.css'

import SearchForm from './../SearchForm/SearchForm'
import MoviesCardList from './../MoviesCardList/MoviesCardList'
import ButtonMore from './../ButtonMore/ButtonMore'

import { useViewport } from './../../hooks/useViewport'
import { useCountToShow } from './../../hooks/useCountToShow'

import {
  filterMoviesName,
  filterMovies,
} from './../../utils/filterMovies.js'

import { CONFIG } from './../../constants/config.js'

const { screenBreakPoints, initialCountToShow, stepsToShow } = CONFIG

export default function Movies({ getAllMovies }) {

  const { moviesList } = useContext(MoviesContext)

  const { width } = useViewport()
  
  const { initialCount, nextCount } = useCountToShow(
    width,
    screenBreakPoints,
    initialCountToShow,
    stepsToShow
  )

  const getPathName = () => {
    return document.location.pathname.split("/")[1];
  };
  
  const setMovieSearch = (searchQuery) => {
    const path = getPathName();
  
    localStorage.setItem(`search-query_${path}`, JSON.stringify(searchQuery));
  };
  
  const setSearchedMoviesData = (movies) => {
    const path = getPathName();
  
    if (movies) {
      localStorage.setItem(`searched_${path}`, JSON.stringify(movies));
    }
  };
  
  const getMoviesSearchQuery = () => {
    const path = getPathName();
  
    return JSON.parse(localStorage.getItem(`search-query_${path}`));
  };
  
  const getSearchedMoviesData = () => {
    const path = getPathName();
  
    return JSON.parse(localStorage.getItem(`searched_${path}`));
  };

  const [isCompleted, setIsCompleted] = useState(true)

  const [moviesToShow, setMoviesToShow] = useState([])
  const [searchedMovies, setSearchedMovies] = useState([])
  const [moviesToRender, setMoviesToRender] = useState([])

  const [moviesFilter, setMoviesFilter] = useState(
    getMoviesSearchQuery() || { query: '', isShort: false }
  )

  const [index, setIndex] = useState(initialCount)

  useEffect(() => {
    const searchedMoviesFormStore = getSearchedMoviesData()
    const searchQueryFormStore = getMoviesSearchQuery()
    if (
      searchedMoviesFormStore &&
      searchedMoviesFormStore.length !== 0 &&
      searchedMoviesFormStore
    ) {
      handleFilterMovies(searchedMoviesFormStore, searchQueryFormStore)
    }
  }, [])

  useEffect(() => {
    if (searchedMovies.length !== 0) {
      setSearchedMoviesData(searchedMovies)
    }
  }, [searchedMovies])

  useEffect(() => {
    setIndex(initialCount)
    setMoviesToShow(
      getMoviesShow(moviesToRender, moviesToShow, 0, initialCount)
    )
    checkIfCompleted(initialCount)
  }, [moviesToRender, initialCount])

  const getMoviesShow = (movies, showedMovies, start, end) => {
    const slicedMovies = movies.slice(start, end)
    return start === 0 ? slicedMovies : [...showedMovies, ...slicedMovies]
  }

  const checkIfCompleted = (i) => {
    i >= moviesToRender.length ? setIsCompleted(true) : setIsCompleted(false)
  }

  const handleShowMore = () => {
    setMoviesToShow(
      getMoviesShow(moviesToRender, moviesToShow, index, index + nextCount)
    )
    setIndex(index + nextCount)
    checkIfCompleted(index + nextCount)
  }

  const handleSearchFormSubmit = (data) => {
    const newMoviesFilter = { ...moviesFilter, query: data.search }
    if (moviesList.length === 0) {
      getAllMovies()
        .then((adaptedMovies) => {
          setMovieSearch(newMoviesFilter)
          setMoviesFilter(newMoviesFilter)

          handleFilterMovies(adaptedMovies, newMoviesFilter)
        })
        .catch((err) => {
          console.error(err)
        })
    } else {
      setMovieSearch(newMoviesFilter)
      setMoviesFilter(newMoviesFilter)

      handleFilterMovies(moviesList, newMoviesFilter)
    }
  }

  const handleShortChange = (e) => {
    const newMoviesFilter = { ...moviesFilter, isShort: e.target.checked }
    setMoviesFilter(newMoviesFilter)
    setMovieSearch(newMoviesFilter)

    const filteredMoviesByNameAndShort = filterMovies(
      searchedMovies,
      newMoviesFilter.isShort
    )
    setMoviesToRender(filteredMoviesByNameAndShort)
  }

  const handleFilterMovies = (movies, filterQuery) => {
    const filteredMoviesByName = filterMoviesName(movies, filterQuery.query)
    setSearchedMovies(filteredMoviesByName)
    if (!filterQuery.isShort) {
      setMoviesToRender(filteredMoviesByName)
    } else {
      const filteredMoviesByNameAndShort = filterMovies(
        filteredMoviesByName,
        filterQuery.isShort
      )
      setMoviesToRender(filteredMoviesByNameAndShort)
    }
  }

  return (
    <main className="main">
      <SearchForm
        onSearchFormSubmit={handleSearchFormSubmit}
        onHandleShortChange={handleShortChange}
        moviesFilter={moviesFilter}
      />
      <section className="movies">
        <MoviesCardList moviesToShow={moviesToShow} />

        {!isCompleted && <ButtonMore onClick={handleShowMore} />}
      </section>
    </main>
  )
}
