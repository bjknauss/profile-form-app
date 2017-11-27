import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import AddComment from './AddComment'
import EditComment from './EditComment'
import { addComment, removeComment, editComment } from '../reducers/comments'

let EditCommentList = ({ comments, deleteComment, editComment, addComment, user }) => (
  <div>
    {
      comments.map((comment) => (
        <EditComment key={comment.id}
              text={comment.text}
              deleteComment={() => deleteComment(comment.id)}
              editComment={(event) => editComment({
                ...comment,
                text: event.target.value
              })} />
      ))
    }
    <hr />
    <AddComment add={(text) => addComment(user, text)} />

  </div>
)

const mapStateToProps = state => {
  let comments = state.comments.filter(c => c.userId === state.selectedUser)
  return {
    user: state.selectedUser,
    comments
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
  addComment: (user, text) => {
    let c = {
      userId: user,
      text
    }
    dispatch(addComment(c))
  }
})

EditCommentList = connect(mapStateToProps, mapDispatchToProps)(EditCommentList)

export default EditCommentList