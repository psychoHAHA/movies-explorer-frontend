import { CONFIG } from './../constants/config.js'

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return res.json().then((err) => {
        return Promise.reject(`Ошибка: ${res.status} ${err.message}`)
      })
    }
  }

  setAuthorization(token) {
    this._headers = {
      ...this._headers,
      authorization: `Bearer ${token}`,
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponse)
  }

  setUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then((err) => {
          return Promise.reject(err)
        })
      }
    })
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ name, email, password }),
    })
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    })
  }

  tokenCheck(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        authorization: `Bearer ${token}`,
      },
    })
  }

  createMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._getResponse)
  }

  deleteMovie(movieId) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._getResponse)
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponse)
  }
}

const mainApi = new MainApi(CONFIG.mainApiConfig)

export default mainApi
