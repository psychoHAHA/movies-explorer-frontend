import "./Techs.css"

export default function Techs() {
  return (
    <>
      <section className="techs" id='Techs'>
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__list-type_item">HTML</li>
          <li className="techs__list-type_item">CSS</li>
          <li className="techs__list-type_item">JS</li>
          <li className="techs__list-type_item">React</li>
          <li className="techs__list-type_item">Git</li>
          <li className="techs__list-type_item">Express.js</li>
          <li className="techs__list-type_item">mongoDB</li>
        </ul>
      </section>
    </>
  )
}
