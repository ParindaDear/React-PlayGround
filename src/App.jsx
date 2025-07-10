import NavBar from "./components/NavBar";
import FruitItem from "./components/FruitItem";

const App = () => {
  const title = "Hello World!!";
  const number = 1+2 ;
  const css = { color: 'dodgerblue', fontSize: "3rem" }

  const show = false;
  
  const fruits = [
    {
      id: 1,
      title: "Apple",
    },
    {
      id: 2,
      title: "Mango",
    },
    {
      id: 3,
      // title: "Grape",
    }
  ]
  return (
    <ul>
      {fruits.map((fruit, i) => (
        <FruitItem key={i} id={ fruit.id } title={fruit.title}/>
      ))}
    </ul>
  );
};

export default App;
