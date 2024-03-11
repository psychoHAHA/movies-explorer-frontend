import "./Portfolio.css"
import linkImage from "../../images/linkImage.svg"

export default function Portfolio() {
  return (
    <>
      <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <ul className="portfolio__links">
          <li className="portfolio__links-type_item">
            <a
              href="https://github.com/psychoHAHA/practica1"
              target="_blank"
              className="portfolio__link"
              rel="noreferrer"
            >
              Статичный сайт
              <img src={linkImage} alt="" className="portfolio__link-image" />
            </a>
          </li>
          <li className="portfolio__links-type_item">
            <a
              href="https://psychohaha.github.io/russian-travel/"
              target="_blank"
              className="portfolio__link"
              rel="noreferrer"
            >
              Адаптивный сайт
              <img src={linkImage} alt="" className="portfolio__link-image" />
            </a>
          </li>
          <li className="portfolio__links-type_item">
            <a
              href="https://psychohaha.github.io/mesto-react/"
              target="_blank"
              className="portfolio__link"
              rel="noreferrer"
            >
              Одностраничное приложение
              <img src={linkImage} alt="" className="portfolio__link-image" />
            </a>
          </li>
        </ul>
      </section>
    </>
  )
}
