import React from 'react'
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import SignupPage from './pages/SignupPage.tsx';
import SigninPage from './pages/SigninPage.tsx';
import EditPage from './pages/EditPage.tsx';

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
      element: <MainPage/>
    },
    {
      path: "/edit",
      element: <EditPage/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
