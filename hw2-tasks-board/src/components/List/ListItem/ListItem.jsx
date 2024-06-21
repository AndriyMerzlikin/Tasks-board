import { Item } from "./ListItem.styled";

/* eslint-disable react/prop-types */
const ListItem = ({ item, handleDelete }) => {
  const { title } = item;

  return (
    <Item>
      <p>{title}</p>
      <button onClick={handleDelete}>button</button>
    </Item>
  );
};

export default ListItem;
