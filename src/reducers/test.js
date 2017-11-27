const TEST = 'TEST'


export function test(){
  return {
    type: TEST
  }
}

const reducer = (state = '', action) => {
  switch(action.type){
    case TEST:
      return 'returned from test'
    default:
      return state;
  }
}

export default reducer