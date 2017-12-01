import React from 'react'

import GroupedField from './GroupedField'
import SelectField from './SelectField'

const GroupedSelectField = ({children, ...others}) => (
  <GroupedField InputComponent={SelectField} {...others}>
    {children}
  </GroupedField>
)

export default GroupedSelectField