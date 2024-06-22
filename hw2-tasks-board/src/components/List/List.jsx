/* eslint-disable react/prop-types */

import { ListBox, Title, Wrapper } from "./List.styled";
import ListItem from "./ListItem/ListItem";

// const List = ({ list, status, updateStatus }) => {
//   const filteredList = list.filter((item) => item.status === status.status);

//   const handleDeleteTask = (id) => {
//     list.filter((item) => item.id !== id);
//   };

//   const handleToProgressTask = (id) => {
//     updateStatus(id, 1);
//   };

//   return (
//     <Wrapper>
//       <Title>
//         {status.name}
//         {": "}
//         {filteredList.length}
//       </Title>
//       {filteredList.length ? (
//         <ListBox>
//           {filteredList.map((item) => (
//             <ListItem
//               key={item.id}
//               item={item}
//               status={status}
//               handleDelete={() => handleDeleteTask(item.id)}
//               handleInProgress={() => handleToProgressTask(item.id)}
//             />
//           ))}
//         </ListBox>
//       ) : null}
//     </Wrapper>
//   );
// };

// export default List;
const List = ({ list, status, updateTaskStatus, handleDeleteTask }) => {
  const filteredList = list.filter((item) => item.status === status.status);

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
              status={status}
              updateTaskStatus={updateTaskStatus}
              handleDelete={handleDeleteTask}
            />
          ))}
        </ListBox>
      ) : null}
    </Wrapper>
  );
};

export default List;
