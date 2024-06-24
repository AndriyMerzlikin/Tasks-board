// /* eslint-disable react/prop-types */
// import { ListBox, Title, Wrapper } from "./List.styled";
// import ListItem from "./ListItem/ListItem";

// const List = ({
//   list,
//   status,
//   updateTaskStatus,
//   handleDeleteTask,
//   handleButtonClick,
// }) => {

//   return (
//     <Wrapper>
//       <Title>
//         {status.name}
//         {": "}
//         {list.length}
//       </Title>
//       {list.length ? (
//         <ListBox>
//           {list.map((item) => (
//             <ListItem
//               key={item.id}
//               item={item}
//               status={status}
//               updateTaskStatus={updateTaskStatus}
//               handleButtonClick={handleButtonClick}
//               handleDelete={handleDeleteTask}
//             />
//           ))}
//         </ListBox>
//       ) : null}
//     </Wrapper>
//   );
// };

// export default List;

/* eslint-disable react/prop-types */
import { ListBox, Title, Wrapper } from "./List.styled";
import ListItem from "./ListItem/ListItem";

const List = ({
  list,
  status,
  updateTaskStatus,
  handleDeleteTask,
  handleButtonClick,
}) => {
  return (
    <Wrapper>
      <Title>
        {status.name}
        {": "}
        {list.length}
      </Title>
      {list.length ? (
        <ListBox>
          {list.map((item) => (
            <ListItem
              key={item.id}
              item={item}
              status={status}
              updateTaskStatus={updateTaskStatus}
              handleButtonClick={handleButtonClick}
              handleDelete={handleDeleteTask}
            />
          ))}
        </ListBox>
      ) : null}
    </Wrapper>
  );
};

export default List;
