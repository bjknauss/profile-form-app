import React from 'react'
import PropTypes from 'prop-types'

const EditComment = ({ commentChange, text, deleteComment }) => (
  <div className="input-group">
    <input type="text" value={text} className="form-control" onChange={commentChange} />
    <span className="input-group-btn">
      <button type="button" className="btn btn-secondary" onClick={deleteComment}>
        Delete
      </button>
    </span>
  </div>
)

export default EditComment