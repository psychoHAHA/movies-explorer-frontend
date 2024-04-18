import './Popup.css'
import imgSucces from '../../images/imgSucces.svg'

export default function Popup({ text, isOpen, onClose }) {
  return (
    <section className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img src={imgSucces} alt="succes" className="popup__image" />
        <p className="popup__title">{text}</p>
        <button className="popup__button" type="button" onClick={onClose}></button>
      </div>
    </section>
  )
}
