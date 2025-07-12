import { useState } from "react";
import NewTask from "../components/NewTask"
import TodoItem from "../components/TodoItem";

const HomePage = () => {
  const [ todos, setTodos ] = useState([]) //สร้าง array เปล่า (ให้ค่าเริ่มต้นเป็น array เปล่า) ซึ่งมันเป็น Read only array เราไม่สามารถเข้าไปแก้ไขค่าที่ array โดยตรงได้
  const addTask = (task) => {
    setTodos((prevTodos)=> [...prevTodos, task]); //เลยต้องใช้ spread operator เพื่อสร้าง array ใหม่ที่รวมรายการเดิมกับ task ใหม่
  };

  //ให้ปุ่ม delete ทำงานโดยเขียน func ให้ id ที่ตรงกันถูกลบไป
  const deleteTask = (id)=> {
    setTodos((prevTodos)=> prevTodos.filter((_, i)=>  i !== id));
  }

  return (
    <>
      <NewTask addTask={addTask}/>
      <ul className="bg-gray-200 rounded-md shadow-sm p-4">
        {todos.map((todo, i)=> (
            <TodoItem key={i} id={i} todo={todo} deleteTask={deleteTask} />
          ))}
      </ul>
    </>
  );
};

export default HomePage;