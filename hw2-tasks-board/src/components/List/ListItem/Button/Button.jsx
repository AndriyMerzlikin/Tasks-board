/* eslint-disable react/prop-types */
// const Button = ({ handleInProgress, status }) => {
//   return <button onClick={handleInProgress}>{status.buttonName}</button>;
// };

import { Btn } from "./Button.styled";

// export default Button;
const Button = ({ handleClick, buttonText }) => {
  return <Btn onClick={handleClick}>{buttonText}</Btn>;
};

export default Button;
