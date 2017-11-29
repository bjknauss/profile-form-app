import React from 'react'
import renderer from 'react-test-renderer'
import ErrorMessage from './ErrorMessage'

test('Displays with error message', () => {
  const errorMessage = "test error msg"
  const component = renderer.create(
    <ErrorMessage message={errorMessage} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})