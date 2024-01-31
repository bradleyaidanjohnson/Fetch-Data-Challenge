import ListItem from "./ListItem";

function ListItems({ items = [] }) {
  return (
    <ul>
      {items?.map((user) => (
        <ListItem item={user} key={user.id} />
      ))}
      ;
    </ul>
  );
}

export default ListItems;
