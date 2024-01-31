import ElementObject from "./ElementObject";

const ListElement = ({ item }) => {
  return (
    <tr>
      {Object.entries(item).map((obj) => (
        <ElementObject key={obj[0]} obj={obj} />
      ))}
    </tr>
  );
};

export default ListElement;
