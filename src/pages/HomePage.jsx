import { use, useState } from "react";
import NewTask from "../components/NewTask"
import TodoItem from "../components/TodoItem";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const HomePage = () => {
  const [ todos, setTodos ] = useState([]); //สร้าง array เปล่า (ให้ค่าเริ่มต้นเป็น array เปล่า) ซึ่งมันเป็น Read only array เราไม่สามารถเข้าไปแก้ไขค่าที่ array โดยตรงได้
  const [loading, setLoading] = useState(false); //สร้าง state ขึ้นมาว่าจะให้โหลด spinner ตอนไหน

  //เพราะเราจะใส่ Spinner ที่หน้านี้
  function delay() {
    return new Promise((reslove)=> setTimeout(reslove, 300));
  }

  const addTask = async (task) => {
    setLoading(true);
    setTodos((prevTodos)=> [...prevTodos, task]); //เลยต้องใช้ spread operator เพื่อสร้าง array ใหม่ที่รวมรายการเดิมกับ task ใหม่
    await delay()
    setLoading(false);
    toast.success("Successfully Added!");
  };

  //ให้ปุ่ม delete ทำงานโดยเขียน func ให้ id ที่ตรงกันถูกลบไป
  const deleteTask = (id)=> {
    setTodos((prevTodos)=> prevTodos.filter((_, i)=>  i !== id));
    toast.success("Successfully Deleted!");
    }
  
  //เพื่อให้ที่เรา edit task ไป ชื่อ task ใหม่จะเเสดงขึ้นจอหน้า home page ด้วย
  const updateTask  =  (task, id)=> {
    setTodos((prevTodos)=> prevTodos.map((t, i)=> i === id ? task : t ));
    toast.success("Successfully Updated!");
  }

  return (
    <>
      <NewTask addTask={addTask}/>

      { loading ? (
        <Spinner/>
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4">
            {todos.map((todo, i)=> (
                <TodoItem 
                  key={i}
                  id={i}
                  todo={todo}
                  deleteTask={deleteTask}
                  updateTask={updateTask}
                />
              ))}
          </ul>
        )
      )}
    </>
  );
};

export default HomePage;