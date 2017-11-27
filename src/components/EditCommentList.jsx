import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AddComment from './AddComment'
import EditComment from './EditComment'
import { addComment, removeComment, editComment } from '../reducers/comments'

let EditCommentList = ({ comments, deleteComment, editComment, addComment }) => (
  <ul>
    {
      comments.map((comment, index) => (
        <EditComment key={index} text={comment} 
            deleteComment={() => deleteComment(index)}
            commentChange={(event) => editComment(index, event.target.value)} />
      ))
    }

    <AddComment add={addComment} />

  </ul>
)

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
}

const mapDispatchToProps = dispatch => ({
  editComment: (index, text) => {
    console.log(index, text)
    dispatch(editComment(index, text))
  },
  deleteComment: (index) => {
    dispatch(removeComment(index))
  },
  addComment: (text) => {
    console.log('edit adding')
    dispatch(addComment(text))
  }
})

EditCommentList = connect(mapStateToProps, mapDispatchToProps)(EditCommentList)

export default EditCommentList