import React from 'react'
import PropTypes from 'prop-types'

const EditComment = ({ commentChange, text, deleteComment }) => (
  <li>
    <input type="text" value={text} onChange={commentChange} />
    <button type="button" onClick={deleteComment}>
      Delete
    </button>
  </li>
)

export default EditComment