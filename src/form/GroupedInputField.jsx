import React from 'react'

import GroupedField from './GroupedField'
import InputField from './InputField'

const GroupedInputField = ({children, ...others}) => (
  <GroupedField InputComponent={InputField} {...others}>
    {children}
  </GroupedField>
)

export default GroupedInputField