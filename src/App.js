import React, { Component } from 'react';

import Layout from './containers/Layout'

// import CommentList from './components/CommentList'
// import EditCommentList from './components/EditCommentList'
// import Test from './components/Test'
// import TestForm from './components/TestForm'

class App extends Component {
  render() {
          // <div className="App">
      //   <CommentList />
      //   <hr />
      //   <EditCommentList />
      //   <hr />
      //   <Test placeholder="test" required="true" />
      //   <hr />
      //   <TestForm />
      // </div>
    return (
      <Layout />
    );
  }
}

export default App;
