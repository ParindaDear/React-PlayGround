import { MdDelete, MdEdit } from "react-icons/md";

const TodoItem = (props) => {
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
                <button type="button" className="todo-btn">
                    <MdDelete/>
                </button>
                <button type="button" className="todo-btn">
                    <MdEdit/>
                </button>
            </div>
        </li>
    </>
  );
};

export default TodoItem;