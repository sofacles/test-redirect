import React from 'react';

const Login = () => {
    debugger;
  return (
      <div>
       <button onClick={(evt) => {
        fetch('api/admin/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: {userName: 'cindy', password:'foxtrot'},
        })
        .then(response => response.json())
        .then(data => {
        })
        .catch((error) => {
        console.error('Error:', error);
        });
       }}> Log in </button>
      </div>
  );
};

export default Login;
