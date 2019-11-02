import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
