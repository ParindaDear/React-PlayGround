import { useState, useRef } from "react";

const NewTask = ({ addTask }) => {
    const title = useRef();
    const form = useRef();

    //func ที่เข้ามารองรับ form
    const submitForm = (e) => {
        e.preventDefault(); //เพื่อให้เวลา submit form เเล้วมันไม่ reset หน้า
        
        const task = {
            title: title.current.value,
            date: new Date().toLocaleString(),
        };
        addTask(task);

        form.current.reset(); //reset form
    };

  return (
    <form ref={form} onSubmit={submitForm}>
        <label htmlFor="title" className="text-lg text-gray-400">
            Add New Task
        </label>
        <div className="flex gap-x-2 bg-white rounded-md shadow-sm p-2 pl-3mt-2">
            <input 
                id="title" 
                type="text" 
                className="focus:outline-none w-full" 
                maxLength="30" 
                placeholder="Type Something here..." 
                autoFocus 
                required
                ref={title}
            />
            <button 
                type="submit" 
                className="w-40 px-3 py-2 rounded font-semibold bg-blue-500 text-white hover:bg-blue-600">
                + New Task
            </button>
        </div>
    </form>
  )
};

export default NewTask;