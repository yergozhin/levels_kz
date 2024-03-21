import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Edit.tsx';
import Auth from './pages/SigninPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import SigninPage from './pages/SigninPage.tsx';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SigninPage/>
    },
    {
      path: "/signin",
      element: <SigninPage/>
    },
    {
      path: "/signup",
      element: <SignupPage/>
    },
    {
      path: "/home",
      element: <Main/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
