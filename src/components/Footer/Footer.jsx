import "./Footer.css"

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h3 className="footer__title">Учебный проект Movies-explorer.</h3>
        <div className="footer__info">
          <p className="footer__time">©2024</p>
          <div className="footer__links">
            <a href="https://github.com/" className="footer__link" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </footer>
    </>
  )
}