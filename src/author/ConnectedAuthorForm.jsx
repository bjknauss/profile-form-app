import React from 'react'
import { connect } from 'react-redux'

import AuthorForm from './AuthorForm'


const mapStateToProps = state => {
  let selectedAuthor = state.author.selected
  let author = Object.values(state.author.authors)
      .find(a => a.id === selectedAuthor)
  return {
    initialValues: author
  }
}

let ConnectedAuthorForm = connect( mapStateToProps )(AuthorForm)

export default ConnectedAuthorForm