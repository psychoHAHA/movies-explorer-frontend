import "./NavTab.css"

export default function NavTab() {
  return (
    <>
      <nav className="nav">
        <a href="#AboutProject" className="nav__link">О проекте</a>
        <a href="#Techs" className="nav__link">Технологии</a>
        <a href="#AboutMe" className="nav__link">Студент</a>
      </nav>
    </>
  )
}