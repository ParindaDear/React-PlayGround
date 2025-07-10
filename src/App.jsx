import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"



import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";

const App = () => {

  // การใช้คำว่า index จะทำให้สิ่งนี้เเสดงเป็นหน้าเเรกที่เปิด web ขึ้นมา
  // MainLayout ให้ครอบทุกอย่าง
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router}/>;
};

export default App;
