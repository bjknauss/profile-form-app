import React from 'react'
import { connect } from 'react-redux'

import NavList from './NavList'

const mapStateToProps = state => {
  let authors = state.author.authors
  let items = Object.values(authors).map((a) => {
    let to = `/author/edit/${a.id}`
    let id = a.id
    let value = `${a.lastName}, ${a.firstName}`
    let exact = true
    return { to, id, value, exact }
  })
  return { items }
}

let AuthorNavList = ({ items }) => (
  <div className="author-nav-list">
    <h3>Authors</h3>
    <NavList items={items} />
  </div>
)

AuthorNavList = connect(mapStateToProps)(AuthorNavList)

export default AuthorNavList