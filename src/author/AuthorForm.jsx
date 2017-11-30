import React from 'react'
import { Field, reduxForm } from 'redux-form'

import InputField from '../form/InputField'

let AuthorForm = ({ handleSubmit, pristine, reset, invalid, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="firstName"
      type="text"
      component={InputField}
      label='First Name' />

    <Field name="lastName"
      type="text"
      component={InputField}
      label='Last Name' />

    <Field name="id"
      type="hidden"
      component="input" />

    <div>
      <button type="submit"
        className="btn btn-primary"
        disabled={ pristine || submitting || invalid }
      >Submit</button>

      
      <button type="button"
        className="btn btn-danger"
        disabled={ pristine || submitting }
        onClick={reset} >
        Clear All
      </button>
    </div>
  </form>
)

AuthorForm = reduxForm({
  form: 'authorForm'
})(AuthorForm)

export default AuthorForm