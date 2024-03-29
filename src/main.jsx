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
       element:<Contant></Contant>
      },
      {
        path:'/menu',
        element:<Menu></Menu>
      },
      {
        path:'/user',
        element:<User></User>
      },
      {
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>
      },
      {
        path:'/booklists',
        element:<BookLists></BookLists>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
