import React from 'react';
import useFirebase from '../../allHooks/useFirebase';

const Login = () => {
  const {SignInUsingGoogle} = useFirebase();
  return (
    <div>
      <button onClick={SignInUsingGoogle}>google</button>
    </div>
  );
};

export default Login;