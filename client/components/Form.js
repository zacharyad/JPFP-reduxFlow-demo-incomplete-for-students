import React from 'react';
import { connect } from 'react-redux';


const initState = {}

class Form extends React.Component {
  constructor(){
    super()
    this.state = initState;

  }

  render() {
    console.log('state: ', this.state)
    return (
      <div>
        <p>This is an incomplete form. Create more inputs. Hold the form input values in this components state, and handle the submit with a create user thunk (this is not written for you yet)</p>
        <span>Create User Form</span>
        <form> 
          <div className='container-form-field'>
            <label htmlFor='name' >Name</label>
            <input
              type='text'
              name='name'
            />
          </div>
      
          <button type='submit'>Submit</button>
        </form>
        <br />
        <hr />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addNewUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Form);

