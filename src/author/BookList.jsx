import React from 'react'
import { FieldArray, Field } from 'redux-form'
import GroupedInputField from '../form/GroupedInputField'
import Button from '../form/Button'
import GroupedSelectField from '../form/GroupedSelectField'

import generate from './generate'



// {
//           "id": "1ntpxgdbof",
//           "authorId": "xwb46",
//           "genre": "biography",
//           "title": "Handmade Fresh Chips",
//           "pages": 336,
//           "bestSeller": true
//         }

const genres = ['comedy', 'horror', 'romance', 'biography']

const BookList = ({ authorId, fields, meta: { error }}) => (
  <div className="book-list">
    <Button type="button"
      onClick={()=> fields.push({ id: generate.book(), authorId })}
    >
      Add Book
    </Button>
    {
      fields.map((book) => (
        <div class="book">
          <hr />

          <Field type="hidden"
            name={`${book}.id`}
            component="input" />
          <Field type="hidden"
            name={`${book}.authorId`}
            component="input" />

          <Field type="text"
            name={`${book}.title`}
            component={GroupedInputField}
            label="Title"
          />

          <Field type="number"
            name={`${book}.pages`}
            component={GroupedInputField}
            label="Pages"
          />

          <Field
            name={`${book}.genre`}
            component={GroupedSelectField}
            options={genres}
            label='Genre'
          />

          <hr />
        </div>
      ))
    }
  </div>
)

{/* <Field
name={`${book}.genre`}
component="select"
className='form-control'
>
{genres.map((genre) => <option value={genre}>{genre}</option>)}
</Field> */}

export default BookList