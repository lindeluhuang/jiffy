import React, {Component} from 'react';

const Header = () => (
  <div className="header grid">
    <h1 className="title">Jiffymania</h1>
  </div>
);

function App() {
  return (
    <div className="page">
      <Header />
    </div>
  );
}

export default App;
