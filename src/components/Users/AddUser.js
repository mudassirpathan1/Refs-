

import React, { useState, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import Wrapper from '../Helper/Wrapper';

import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef= useRef();
  const ageInputRef= useRef();
  const collegeInputRef= useRef();

  const [error, setError] = useState();
  const [collegeName, setCollegeName] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollege = collegeInputRef.current.value;
    
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    
    props.onAddUser(enteredName, enteredAge, enteredCollege);
    
    // clear the inputs
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    collegeInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age </label>
          <input id="age" type="number" ref={ageInputRef} />
          <label htmlFor="college">College Name</label>
         
          <input
            id="college"
            type="text"
            ref={collegeInputRef}
             value={collegeName}
             onChange={(event) => setCollegeName(event.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;




// import React, { useState, useRef } from 'react';

// import Card from '../UI/Card';
// import Button from '../UI/Button';

// import Wrapper from '../Helper/Wrapper';

// import ErrorModal from '../UI/ErrorModal';
// import classes from './AddUser.module.css';

// const AddUser = (props) => {
//   const nameInputRef= useRef();
//   const ageInputRef= useRef();

//   const [collegeName, setCollegeName] = useState('');

//   const [error, setError] = useState();

//   const addUserHandler = (event) => {
//     event.preventDefault();
//     const enterdName = nameInputRef.current.value;
//     const enterUserdAge = ageInputRef.current.value;
//     if (enterdName.trim().length === 0 || enterUserdAge.trim().length === 0) {
//       setError({
//         title: 'Invalid input',
//         message: 'Please enter a valid name and age (non-empty values).',
//       });
//       return;
//     }
//     if (+enterUserdAge < 1) {
//       setError({
//         title: 'Invalid age',
//         message: 'Please enter a valid age (> 0).',
//       });
//       return;
//     }
//     props.onAddUser(enterdName, enterUserdAge, collegeName);

    
//   };

//   const errorHandler = () => {
//     setError(null);
//   };

//   return (
//    <Wrapper>
//       {error && (
//         <ErrorModal
//           title={error.title}
//           message={error.message}
//           onConfirm={errorHandler}
//         />
//       )}
//       <Card className={classes.input}>
//         <form onSubmit={addUserHandler}>
//           <label htmlFor="username">Username</label>
//           <input
//             id="username"
//             type="text"
          
//             ref={nameInputRef}
//           />
//           <label htmlFor="age">Age (Years)</label>
//           <input
//             id="age"
//             type="number"
//             ref={ageInputRef}
//           />
//           <label htmlFor="college">College Name</label>
//            <input
//             id="college"
//             type="text"
//             value={collegeName}
//             onChange={(event) => setCollegeName(event.target.value)}
//             />

//           <Button type="submit">Add User</Button>
//         </form>
//       </Card>
//       </Wrapper>
//   );
// };

// export default AddUser;
