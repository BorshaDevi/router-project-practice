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
import Showmore from './Components/Showmore/Showmore';
import AllPosts from './Components/AllPosts/AllPosts';
import Showposts from './Components/Showposts/Showposts';
import AboutPosts from './Components/AboutPosts/AboutPosts';
import ReadMore from './Components/ReadMore/ReadMore';
import Comments from './Components/Comments/Comments';
import ShowComments from './Components/ShowComments/ShowComments';
import Errorpage from './Components/Error/Errorpage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<Errorpage></Errorpage>,
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
      },
      {
        path:'/bookmore',
        element:<Showmore></Showmore>
      },
      {
        path:'/posted',
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<AllPosts></AllPosts>,
      },
      {
       path:'/postdetails/:postdetailsId',
       loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.postdetailsId}`),
       element:<Showposts></Showposts>,
      },
      {
        path:'/aboutList',
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<AboutPosts></AboutPosts>
      },
      {
        path:'/readMore/:readMoreId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.readMoreId}`),
        element:<ReadMore></ReadMore>
      },
      {
        path:'/comments',
        loader:() => fetch('https://jsonplaceholder.typicode.com/comments'),
        element:<Comments></Comments>
      },
      {
        path:'/moreComment/:moreCommentId',

        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/comments/${params.moreCommentId}`) ,
        element:<ShowComments></ShowComments>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
