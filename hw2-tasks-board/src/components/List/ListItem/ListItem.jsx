import Button from "./Button/Button";
import { Item } from "./ListItem.styled";

/* eslint-disable react/prop-types */
// const ListItem = ({ item, status, handleDelete, handleInProgress }) => {
//   const { title } = item;

//   return (
//     <Item>
//       <p>{title}</p>
//       <Button
//         handleDelete={handleDelete}
//         handleInProgress={handleInProgress}
//         status={status}
//       />
//     </Item>
//   );
// };

// export default ListItem;
const ListItem = ({ item, status, updateTaskStatus, handleDelete }) => {
  const { id, title } = item;

  const getNextStatus = (currentStatus) => {
    if (currentStatus === 0) return 1;
    if (currentStatus === 1) return 0;
    if (currentStatus === 1 && status.buttonName.done) return 2;
    return currentStatus;
  };

  const handleButtonClick = () => {
    if (status.status === 2) {
      handleDelete(id);
    } else {
      updateTaskStatus(id, getNextStatus(status.status));
    }
  };

  return (
    <Item>
      <p>{title}</p>
      <Button
        handleClick={handleButtonClick}
        buttonText={status.buttonName.action}
      />

      {status.status === 1 ? (
        <Button
          buttonText={status.buttonName.done}
          handleClick={() => updateTaskStatus(id, 2)}
        />
      ) : null}
    </Item>
  );
};

export default ListItem;
