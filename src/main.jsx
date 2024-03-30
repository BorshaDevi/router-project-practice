import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contant from './Components/Contant/Contant';
import Menu from './Components/Menu/Menu';
import User from './Components/User/User';
import Bookmarks from './Components/Bookmarks/Bookmarks';
import BookLists from './Components/BookLists/BookLists';
import ShowDetails from './Components/ShowDetails/ShowDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
         path:'/about',
         element:<About></About>
      },
      {
       path:'/contant',
       loader:() =>fetch('https://jsonplaceholder.typicode.com/users'),   
       element:<Contant></Contant>,
      },
      {
        path:'/menu',
        element:<Menu></Menu>,
      },
      {
        path:'/user',
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>,
      },
      {
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>
      },
      {
        path:'/booklists',
        element:<BookLists></BookLists>
      },
      {
        path:'/content/:contentId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.contentId}`),
        element:<ShowDetails></ShowDetails>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
