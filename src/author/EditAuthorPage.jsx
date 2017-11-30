import React from 'react'
import { connect } from 'react-redux'

import ConnectedAuthorForm from './ConnectedAuthorForm'
import { selectAuthor, submitAuthor } from '../redux/author'
import validators from './validators'

const mapStateToProps = state => {
  return {
    selectedAuthor: state.author.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectAuthor: (id) => dispatch(selectAuthor(id)),
    handleSubmit: (values) => {
        console.log("mapDispatch: ", values)
        dispatch(submitAuthor(values))
      }
  }
}

let EditAuthorPage = ({ selectedAuthor, selectAuthor, handleSubmit, match: { params } }) => {
  let authorId = params.id
  if( selectedAuthor !== authorId ){
    selectAuthor(authorId)
    return <div>Invalid Author Selected...</div>
  }

  return (
    <div>
      <h2>Edit Author</h2>
      <ConnectedAuthorForm validate={validators} onSubmit={handleSubmit} />
    </div>
  )

}

EditAuthorPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAuthorPage)

export default EditAuthorPage