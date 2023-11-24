import React from 'react'
import Wel from './component/home/wel.jsx'
import Contact from './component/contact/contact.jsx'
import Form from './component/contact/contact.jsx'
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const route = createBrowserRouter([
  {
    path: '/',
    element: <Wel  />
  },
  {
    path: '/contact',
    element: <Contact />
  }
])

function App(){
  return(
    <RouterProvider router={route} />
  )
}

export default App;
