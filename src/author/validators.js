


const validate = values => {
  let errors = {}
  validateName(errors, values.firstName, 'firstName')
  validateName(errors, values.lastName, 'lastName')
  return errors
}


const validateName = (errors = {}, name, key = 'firstName') => {
  if(!name){
    errors[key] = 'Required'
  }else if ( name.length > 15 ){
    errors[key] = 'Must be less than 15 characters'
  }else if ( name.indexOf(' ') >= 0){
    errors[key] = 'Must not contain spaces'
  }
  return errors
}

export default validate