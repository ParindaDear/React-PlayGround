import { MdDelete, MdEdit } from "react-icons/md";
import { useRef, useState } from "react";

const TodoItem = (props) => {
    const dialog = useRef();
    const [editing, setEditing] = useState(false) //เป็นตัวแปรที่เช็คว่าเราอยู่ใน mode การ edit เปล่า

    const openModal = (isEditing)=> {
        isEditing ? setEditing(true) : setEditing(false);
        dialog.current.showModal();
    };

    //สร้าง func สำหรับปิด Modal ทำให้เมื่อกด close ตัว Modal จะปิดไป
    const closeModal = ()=> {
        dialog.current.close()
    }

  return (
    <>
        <li className="flex bg-white rounded shadow-sm p-4 mt-4 first:mt-0">
            <div className="flex gap-x-4 mr-auto items-center">
                <div className="h-6 w-6 rounded-full shadow-small text-white text-sm bg-teal-400 text-center content-center">
                    {props.id + 1}
                </div>
                <div>
                    <p className="font-semibod">{props.todo.title}</p>
                    <p className="text-sm text-gray-400">{props.todo.date}</p>
                </div>
            </div>

            <div className="flex items-center gap-x-2">
                <button onClick={()=> openModal(false)} type="button" className="todo-btn">
                    <MdDelete/>
                </button>
                <button onClick={()=> openModal(true)} type="button" className="todo-btn">
                    <MdEdit/>
                </button>
            </div>
        </li>

        {/*จะเขียนเพื่อให้ไปค่อน delete กับ edit ทำงานได้*/}
        <dialog ref={dialog} className="rounded-md w-[480px]">
            <form className="p-6">
                <h3 className="font-semibold text-xl">
                    { editing ? "Edit Task" : "Do you want to delete? "}
                </h3>
                <div className="mt-2">
                    { editing ? "edit" : "This view permanently delete this task."}
                </div>
                <div className="mt-12 text-end space-x-2">
                    <button 
                        onClick={closeModal}
                        type="button" 
                        className="rounded border border-gray-200 px-3 py-2 hover:bg-gray-50">
                        Close
                    </button>
                    <button type="submit" 
                        className={
                            editing 
                                ? "rounded bg-teal-500 px-3 py-2 text-white hover:bg-teal-600" 
                                : "rounded rounded bg-red-500 px-3 py-2 text-white hover:bg-red-600"
                        }
                    >
                        { editing ? "Confirm" : "Delete" }
                    </button>
                </div>
            </form>
        </dialog>
    </>
  );
};

export default TodoItem;