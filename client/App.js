import React from 'react';
import { connect } from 'react-redux';
import {getUsers} from './store/users.js'
import Users from './components/Users'
import Form from './components/Form.js';
class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    /// use the props thunk
    console.log("Props ", this.props)
    this.props.thunkOnProps()
  }

  // we should go get users on our redux state from here at the app root

  render() {
    return (
      <div className='container'>
        <h1>React Forms!!!</h1>
        <Form />
        <Users />
      </div>
    );
  }
}

// connect out compnent to dispatch our thunk

let mapDispatchToProps = (dispatch) => {
  return {
    thunkOnProps: () => dispatch(getUsers()), // we need the thunk from the store
    // AnotherDispatch: (blogContent) => dispatch(ACTIONCREATOR(BlogConent))
  }
}


let connectApp = connect(null, mapDispatchToProps)(App)


export default connectApp;
