import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import RedirectIfNoToken from './RedirectIfNoToken';
import SensitiveComponent from './SensitiveComponent';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <RedirectIfNoToken path="SensitiveComponent" >
            <SensitiveComponent />
          </RedirectIfNoToken>
          <Route path="/Login">
            <Login />
          </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
