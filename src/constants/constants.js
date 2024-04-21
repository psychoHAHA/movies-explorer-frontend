const movieApiURL = 'https://api.nomoreparties.co'
// const mainApiURL = 'http://localhost:3000';
const mainApiURL = 'https://api.psychodelic.movie.nomoredomainsmonster.ru'

const nameExpression = /^[a-яё]+(?:[ -][a-яё]+)*$/i
const emailExpression =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

export { nameExpression, emailExpression, movieApiURL, mainApiURL }
