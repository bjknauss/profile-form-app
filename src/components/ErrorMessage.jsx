import React from 'react'
import withMessage from './MessageWrapper'

let ErrorMessage = ({message}) => (
  <div className="alert alert-danger">
    {message}
  </div>
)

ErrorMessage = withMessage(ErrorMessage)

export default ErrorMessage