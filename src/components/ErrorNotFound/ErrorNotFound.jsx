import './ErrorNotFound.css'

export default function ErrorNotFound() {
  return (
    <>
      <div className="error">
        <div className="error__container">
          <div className="error__text">
            <h1 className="error__title">404</h1>
            <p className="error__subtitle">Страница не найдена</p>
          </div>
          <button className='error__button'>Назад</button>
        </div>
      </div>
    </>
  )
}
