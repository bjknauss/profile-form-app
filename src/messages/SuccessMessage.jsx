import React from 'react'
import withMessage from './MessageWrapper'

let SuccessMessage = ({message}) => (
  <div className="alert alert-success">
    {message}
  </div>
)

SuccessMessage = withMessage(SuccessMessage)

export default SuccessMessage