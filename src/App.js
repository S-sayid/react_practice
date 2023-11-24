import React from 'react'
import Wel from './component/home/wel.jsx'
import Contact from './component/contact/contact.jsx'
import Form from './component/contact/contact.jsx'
import Err from './component/404/404.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

let allRoute = createBrowserRouter([
    {
      path: '/',
      element: <Wel />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: "*",
      element: <Err />
    }
])

function App(){
  return(
    <RouterProvider  router={allRoute} />
  )
}

export default App;
