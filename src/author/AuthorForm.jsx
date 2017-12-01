import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'

import GroupedInputField from '../form/GroupedInputField'
import BookList from './BookList'

let AuthorForm = ({ handleSubmit, pristine, reset, invalid, initialValues, submitting }) => (
  <form onSubmit={handleSubmit}>
    <Field name="firstName"
      type="text"
      component={GroupedInputField}
      label='First Name' />

    <Field name="lastName"
      type="text"
      component={GroupedInputField}
      label='Last Name' />

    <Field name="id"
      type="hidden"
      component="input" />

    <FieldArray name="books" authorId={ initialValues && initialValues.id || '' } component={BookList} />

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