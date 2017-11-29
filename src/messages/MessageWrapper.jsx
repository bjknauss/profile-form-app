import React from 'react'

function withMessage(MessageComponent) {
  return class extends React.Component {
    render() {
      let { message } = this.props
      let show = typeof message === 'string' && message.length > 0
      if(show){
        return <MessageComponent message={message} />
      }else{
        return null
      }
    }
  }
}

export default withMessage