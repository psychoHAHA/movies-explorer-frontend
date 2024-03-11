import "./AboutMe.css"
import photo from "../../images/me.png"
import "./AboutMe.css"

export default function AboutMe() {
  return (
    <>
      <div className="about-me" id="AboutMe">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__information">
          <img src={photo} alt="я" className="about-me__photo" />
          <div className="about-me__text">
            <h3 className="about-me__name">Кирилл</h3>
            <p className="about-me__profession">Фронтенд-разработчик, 19 лет</p>
            <p className="about-me__info">
              Я родился и живу в Екатеринбурге, учусь на строительном
              факультете. В свободное время читаю книги, смотрю фильмы, играю в
              видеоигры, занимаюсь футболом. Недавно начал кодить. С апреля 2023
              года прохожу курс по веб-разработке, сейчас пишу диплом.
            </p>
            <div className="about-me__links">
              <a
                href="https://github.com/psychoHAHA"
                target="_blank"
                className="about-me__link"
                rel="noreferrer"
              >
                Github
              </a>
              <a
                href="https://t.me/kirillzernov"
                target="_blank"
                className="about-me__link"
                rel="noreferrer"
              >
                Telegram
              </a>
              <a
                href="https://vk.com/id326948405"
                target="_blank"
                className="about-me__link"
                rel="noreferrer"
              >
                vk
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
