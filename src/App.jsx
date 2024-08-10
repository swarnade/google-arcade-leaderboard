import React from 'react'
import Routes from "./Routes";
import {RouterProvider,createBrowserRouter} from "react-router-dom"
function App() {
  const route=createBrowserRouter(Routes);
  return <>
  
  <RouterProvider router={route}/>
  </>;
}
export default App;
