import React from 'react'
import { connect } from 'react-redux'

import ConnectedAuthorForm from './ConnectedAuthorForm'
import { selectAuthor, submitAuthor } from '../redux/author'
import validators from './validators'

const mapStateToProps = state => {
  return {
    selectedAuthorId: state.author.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    selectAuthor: (id) => dispatch(selectAuthor(id)),
    handleSubmit: (values) => {
        dispatch(submitAuthor(values))
      }
  }
}

class EditAuthorPage extends React.Component {
  componentWillMount(){
    const { 
      selectedAuthorId, selectAuthor, 
      match: { params } 
    } = this.props
    if( selectedAuthorId !== params.id ){
      selectAuthor(params.id)
    } 
  }
  componentWillReceiveProps(nextProps){
    const { 
      selectedAuthorId, selectAuthor, 
      match: { params } 
    } = nextProps
    if( selectedAuthorId !== params.id ){
      selectAuthor(params.id)
    } 
  }

  render(){
    let { selectedAuthorId, handleSubmit } = this.props
    if(!selectedAuthorId){
      return <div>Invalid Author Selected...</div>
    }
  
    return (
      <div>
        <h2>Edit Author</h2>
        <ConnectedAuthorForm enableReinitialize={true} validate={validators} onSubmit={handleSubmit} />
      </div>
    )
  }
}



// let EditAuthorPage = ({ selectedAuthorId, selectAuthor, handleSubmit, match: { params } }) => {
//   let authorId = params.id
//   if( selectedAuthorId !== authorId ){
//     selectAuthor(authorId)
//     return <div>Invalid Author Selected...</div>
//   }

//   return (
//     <div>
//       <h2>Edit Author</h2>
//       <ConnectedAuthorForm validate={validators} onSubmit={handleSubmit} />
//     </div>
//   )

// }

EditAuthorPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditAuthorPage)

export default EditAuthorPage