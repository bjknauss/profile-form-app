import React from 'react'
import renderer from 'react-test-renderer'
import SuccessMessage from './SuccessMessage'

test('Displays with success message', () => {
  const successMessage = "test success message"
  const component = renderer.create(
    <SuccessMessage message={successMessage} />
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})