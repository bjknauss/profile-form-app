import React from 'react'
import { connect } from 'react-redux'

import { getAll } from '../redux/author'


const mapStateToProps = state => {
  return {
    authors: state.author.authors,
    fetching: state.author.fetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => { dispatch(getAll()) }
  }
}

let AuthorsPage = ({ getAll, authors, fetching }) => {
  if(Object.keys(authors).length === 0 && !fetching){
    console.log(getAll)
    //getAll()
  }

  if(fetching){
    return <div>Loading...</div>
  }
  let authorsListItems = Object.values(authors).map( a =>
      <li key={a.id}>{`${a.firstName}, ${a.lastName}`}</li>)

  return (
    <ul>
      {authorsListItems}
    </ul>
  )
}

AuthorsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthorsPage)

export default AuthorsPage