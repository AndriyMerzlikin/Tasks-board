/* eslint-disable react/prop-types */
import { useState } from "react";
import { ListBox, Title, Wrapper } from "./List.styled";
import ListItem from "./ListItem/ListItem";

const List = ({ list: prevList = [], status }) => {
  const [list, setList] = useState(prevList);

  const filteredList = list.filter((item) => item.status === status.status);

  const deleteTask = (id) => {
    setList((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <Wrapper>
      <Title>
        {status.name}
        {": "}
        {filteredList.length}
      </Title>
      {filteredList.length ? (
        <ListBox>
          {filteredList.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              handleDelete={() => deleteTask(item.id)}
            />
          ))}
        </ListBox>
      ) : null}
    </Wrapper>
  );
};

export default List;
