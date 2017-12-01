import React from 'react'
import { FieldArray, Field } from 'redux-form'
import GroupedInputField from '../form/GroupedInputField'
import Button from '../form/Button'
import GroupedSelectField from '../form/GroupedSelectField'
import FormGroup from '../form/FormGroup'
import Label from '../form/Label'

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
      fields.map((book, index) => (
        <div class="book">
          <div className="form-row">
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
              className="col-sm-12 col-lg-8"
            />

            <Field type="number"
              name={`${book}.pages`}
              component={GroupedInputField}
              label="Pages"
              className="col-sm-2 col-lg-1"
            />

            <Field
              name={`${book}.genre`}
              component={GroupedSelectField}
              options={genres}
              label='Genre'
              className="col-sm-8 col-lg-2"
            />
            <FormGroup className="col-sm-2 col-lg-1">
              <Label>Delete</Label>
              <Button 
                className="btn-danger"
                onClick={() => fields.remove(index)}
              >
                <i className="fa fa-trash"></i> 
              </Button>
            </FormGroup>
          </div>
        </div>
      ))
    }
  </div>
)

export default BookList