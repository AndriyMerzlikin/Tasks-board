/* eslint-disable react/prop-types */
import { Btn } from "./Button.styled";
const Button = ({ handleClick, buttonText }) => {
  return <Btn onClick={handleClick}>{buttonText}</Btn>;
};

export default Button;
