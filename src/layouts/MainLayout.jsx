//เพราะเราจะทำให้ Navbar กับ Footer อยู่ในทุก page เลยสร้าง folder layouts ขึ้นมา

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

//Outlet เป็นตัวเเทนสิ่งที่อยู่กึ่งกลาง ซึ่งมันก็คือ Component ต่างๆที่อยู่ภายใน MainLayout (ดูใน App.jsx)
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
        <NavBar />
        <main>
            <div className="px-4 md:px-6 pt-12 pb-24 w-full xl:w-[45%] space-y-6">
                <Outlet/>
            </div>
        </main>
        <Footer />
    </>
  );
};

export default MainLayout;