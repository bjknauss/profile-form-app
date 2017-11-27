

const validators = (name, value) => {
  if(name === 'username'){
    return usernameValidator(value)
  }
  if(name === 'age'){
    return ageValidator(value)
  }
  return false
}

const usernameValidator = (value) => {
  if(value.length < 3){
    return 'Username must be longer than 3 characters.'
  }
  if(value.indexOf(' ') >= 0){
    return 'Username must not contain spaces.'
  }
  return false
}

const ageValidator = (value) => {
  let age = Number.parseInt(value)
  if(!Number.isFinite(age)){
    return 'Please enter a valid age.'
  }
  if (age < 0){
    return 'Please enter a positive age...'
  }
  if (age > 100){
    return 'You are too old...'
  }
  return false
}

export default validators