import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import './index.css';
import ErrorPage from './pages/ErrorPage'
import Layout from './components/Layout'
import Home from './pages/Home'
import PostDetails from './pages/PostDetails'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import CreatePost from './pages/CreatePost'
import CategoryPost from './pages/CategoryPost'
import AuthorsPosts from './pages/AuthorPosts'
import Dashboard from './pages/Dashboard'
import EditPost from './pages/EditPost'
import Logout from './pages/Logout'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'posts/:id', element: <PostDetails/>},
      {path: 'register', element: <Register/>},
      {path: 'login', element: <Login/>},
      {path: 'profile/:id', element: <UserProfile/>},
      {path: 'authors', element: <Authors/>},
      {path: 'create', element: <CreatePost/>},
      {path: 'posts/categories/category', element: <CategoryPost/>},
      {path: 'posts/users/:id', element: <AuthorsPosts/>},
      {path: 'myposts/:id', element: <Dashboard/>},
      {path: 'posts/:id/edit', element: <EditPost/>},
      {path: 'logout', element: <Logout/>}
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

