import React from 'react';

const Users = (props) => {

  // ***USE THIS COMPONENT TO GET THE ARRAY OF USERS FROM THE REDUXE STORE.


  return (
    // *** WE EVENTUALLY WANT TO USE THIS CODE, HOW DO WE HAVE USERS ON PROPS.....?

    // <div className='container-users'>
    //   {props.users.map((user) => {
    //     return (
    //       <div className='user' key={user.id}>
    //         <div> Hi ______! </div>
    //         <div> Your job is: ________ </div>
    //         <div> Your favorite food is: _______</div>
    //       </div>
    //     );
    //   })}
    // </div>

    // You can delete this block of JSX when you are ready to start coding
    <div>
       <ul>
         <li>
          <strong>Your goal for this app: </strong>
         </li>
         <li>
          Display all the users we already got into out redux store. So the prewritten map will create a bunch of user cars from the users state
         </li>
         <li>
          Set up the form to take in Data and hit the backend POST route. * look at what that model takes in as data from the front end form.
         </li>
         
       </ul>
    </div>
  );
};

// **** CONNECT JUST THE STATE FROM REDUX TO THIS COMPONENTS PROPS




export default Users;
