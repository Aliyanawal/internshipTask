import React from 'react';

function Home() {
  const name = localStorage.getItem('name');
  return (
    <div>
      <h2>Welcome, {name}!</h2>
      <p>You are successfully logged in.</p>
    </div>
  );
}

export default Home;
