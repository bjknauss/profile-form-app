import React from 'react'
import { connect } from 'react-redux'

import { test as testAction } from '../reducers/test'

const mapStateToProps = (state) => {
  return {
    test: state.test
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    act: () => {
      dispatch(testAction())
    }
  }
}

class Test extends React.Component {

  render(){
    let { required, min, max, placeholder } = this.props;

    return (
      <div>
        <input type="text" required={ required } placeholder={ placeholder } />
        <input type="number" min={ min } max={ max } />
      </div>
    )
  }
}

let connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)

export default connected