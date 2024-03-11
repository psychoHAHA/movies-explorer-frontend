import React from "react"
import "./AboutProject.css"

export default function AboutProject() {
  return (
    <>
      <section className="about" id="AboutProject">
        <h2 className="about__title">О проекте</h2>
        <div className="about__section">
          <div className="about__container">
            <h3 className="about__container-type_title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__container-type_paragraph">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__container">
            <h3 className="about__container-type_title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__container-type_paragraph">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about__diagram">
          <div className="about__diagram-backend">
            <p className="about__diagram-type_time about__diagram-backend-type_time">1 неделя</p>
            <p className="about__diagram-type_title">Back-end</p>
          </div>
          <div className="about__diagram-frontend">
            <p className="about__diagram-type_time about__diagram-frontend-type_time">4 недели</p>
            <p className="about__diagram-type_title">Front-end</p>
          </div>
        </div>
      </section>
    </>
  )
}
