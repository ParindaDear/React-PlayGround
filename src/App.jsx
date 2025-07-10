import { useState } from "react";
import NavBar from "./components/NavBar";

const App = () => {

  //เพื่อให้เวลาคลิกปุ่มเเล้วเลขขึ้นตามจอด้วย เพราะถ้าไม่มีอันนี้เลขที่จอมันจะไม่ขึ้น เราต้องไป inspect ดูที่ console เอง(เเต่จริงๆแล้วมันเพิ่มเวลาเราคลิก) (ขั้นตอน 2 เขียนนี่)
  const [ number, setNumber ] = useState(0)

  function increment (){ //(ขั้นตอน 3 เขียนนี่)
    setNumber(number+1);
  }

  //คือทุกครั้งที่มีกาารคลิกปุ่จะมีการเพิ่มค่า number (ขั้นตอน 1 เขียนนี่)
  return <div>
    <h1>{number}</h1>
    <button onClick={increment} type="button">Click me!</button>
  </div>
};

export default App;
