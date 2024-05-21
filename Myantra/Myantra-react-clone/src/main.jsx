import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import Bag from "./routes/Bag.jsx"

import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Home } from './routes/Home.jsx'
import myntraStore from './store/index.js'
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css"
import VideoComponent from './component/VideoComponent.jsx'


const router=createBrowserRouter([
  {
  path:"/",
  element:<App></App>,
  children:[
    {
      path:"/",
      element:<Home/>,
      
    
      },
     
      {
        path:"/bag",
        element:<Bag></Bag>,
        
      },
    
  ]
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
