import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {

  // การใช้คำว่า index จะทำให้สิ่งนี้เเสดงเป็นหน้าเเรกที่เปิด web ขึ้นมา
  const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={ <h1>Hello World!!!</h1> } />)
  );

  return <RouterProvider router={router}/>;
};

export default App;
