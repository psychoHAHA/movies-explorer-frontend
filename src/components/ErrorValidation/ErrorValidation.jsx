import React from 'react'
// import { useLocation } from 'react-router-dom'

export default function ErrorValidation({ error }) {
  // const location = useLocation()

  return <span className="error-validation">{error}</span>
}
