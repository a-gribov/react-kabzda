import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <p>
          This is my first React.js project. Gribov Andrey
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const Header = () => {
  return (
      <div className="header">
        <a>css</a>
        <a>html</a>
        <a>js</a>
        <a>react.js</a>
      </div>
  )
}

export default App;
