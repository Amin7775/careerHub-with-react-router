import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Root/Home/Home.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage';
import JobDetails from './components/JobDetails/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },{
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('../jobs.json')
      },
      {
        path:"/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
