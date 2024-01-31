import ListElement from "./ListElement";

function ListElements({ items = [] }) {
  console.log(items);
  return (
    <table>
      <tbody>
        {items?.map((item) => (
          <ListElement key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default ListElements;
