import './SearchForm.css'
import '../ErrorValidation/ErrorValidation.css'

import React from 'react'

import { useForm } from 'react-hook-form'

import InputSearch from '../InputSearch/InputSearch'
import ButtonSearch from '../ButtonSearch/ButtonSearch'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'

export default function SearchForm({ onSearchFormSubmit, onHandleShortChange, moviesFilter }) {
  const methods = useForm({
    defaultValues: {
      search: moviesFilter.query,
      isShort: moviesFilter.isShort,
    },
    value: { search: moviesFilter.query, isShort: moviesFilter.isShort },
    mode: 'onSubmit',
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods

  return (
    <>
      <section className="search-form">
        <form className="search-form__form" onSubmit={handleSubmit(onSearchFormSubmit)}>
          <InputSearch
            register={register}
            name="search"
            type="search"
            className="search-form__input"
            placeholder="Фильм"
            {...register('search', {
              required: 'Введите ключевое слово',
            })}
          />
          <ButtonSearch />
        </form>
        <span className="error-validation error-validation__search">{errors.search?.message}</span>
        <FilterCheckbox name={'isShort'} register={register} onCheckboxChange={onHandleShortChange} />
      </section>
    </>
  )
}
