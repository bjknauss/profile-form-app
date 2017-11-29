

const validators = (name, value) => {
  if(name === 'username'){
    return usernameValidator(value)
  }
  if(name === 'age'){
    return ageValidator(value)
  }
  return ''
}

const usernameValidator = (value) => {
  if(value.length < 3){
    return 'Username must be longer than 3 characters.'
  }
  if(value.indexOf(' ') >= 0){
    return 'Username must not contain spaces.'
  }
  return ''
}

const ageValidator = (value) => {
  let age = Number.parseInt(value, 10)
  if(!Number.isFinite(age)){
    return 'Please enter a valid age.'
  }
  if (age < 0){
    return 'Please enter a positive age...'
  }
  if (age > 100){
    return 'You are too old...'
  }
  return ''
}

export default validators