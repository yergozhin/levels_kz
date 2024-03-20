import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main.tsx';
import Auth from './pages/Auth.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>
    },
    {
      path: "/auth",
      element: <Auth/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>{
        
      }
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>
  );
}

export default App;
