import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${(p) => p.theme.colors.lightgrey};
  border-radius: 5px;
  &:hover {
    background-color: green;
  }
`;
