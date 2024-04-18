import { Link, useNavigate } from 'react-router-dom'
import './ErrorNotFound.css'

export default function ErrorNotFound() {
  const navigate = useNavigate()
  return (
    <>
      <div className="error">
        <div className="error__container">
          <div className="error__text">
            <h1 className="error__title">404</h1>
            <p className="error__subtitle">Страница не найдена</p>
          </div>
          <Link onClick={() => navigate(-1)} className="error__button">
            Назад
          </Link>
        </div>
      </div>
    </>
  )
}
