const FruitItem = ({id, title = "No Fruit"}) => {
  return (
    <li>
        {id} : {title}
    </li>
  );
};

export default FruitItem;

