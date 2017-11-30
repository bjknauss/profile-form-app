import React from 'react'

const EditComment = ({ commentChange, text, commentDelete }) => (
  <div className="input-group">
    <input type="text" value={text} className="form-control" onChange={commentChange} />
    <span className="input-group-btn">
      <button type="button" className="btn btn-secondary" onClick={commentDelete}>
        Delete
      </button>
    </span>
  </div>
)

export default EditComment