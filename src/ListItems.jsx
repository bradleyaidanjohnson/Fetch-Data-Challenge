import ListItem from "./ListItem";

const ListItems = ({ items }) => {
  return (
    <ul>
      {items.map((user) => (
        <ListItem item={user} key={user.id} />
      ))}
    </ul>
  );
};

export default ListItems;
