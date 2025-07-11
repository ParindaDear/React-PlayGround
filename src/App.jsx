import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"

import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {

  // การใช้คำว่า index จะทำให้สิ่งนี้เเสดงเป็นหน้าเเรกที่เปิด web ขึ้นมา
  // MainLayout ให้ครอบทุกอย่าง
  // ใส่ path ของ NotFoundPage เป็น * เพราะสื่อว่าจับทุกเส้นทางที่ไม่ตรงกับ route อื่น ๆ
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router}/>;
};

export default App;
