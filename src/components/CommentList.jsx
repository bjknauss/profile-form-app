import React from 'react'
import { connect } from 'react-redux'

let CommentList = ({ comments }) => (
  <div>
    {
      comments.map((comment, index) => (
        <div key={index}>
          <label>Comment: </label>
          <span>{comment}</span>
          <label>Id: </label>
          <span>{index}</span>
        </div>
      ))
    }
  </div>
)

const mapStateToProps = state => ({
  comments: state.comments
})

CommentList = connect(mapStateToProps)(CommentList)

export default CommentList