import styled, { keyframes } from "styled-components";
import { Colors } from "../../enum/Colors";

const rotate = keyframes`
    100% {
      transform: rotate(360deg);
    }
`

export const Spinner = styled.div`
  border: 3px solid #2c3a51;
  border-radius: 50%;
  border-top-color: ${Colors.White};
  width: 20px;
  height: 20px;
  transition: opacity 250ms;
  animation: ${rotate} 1s linear;
  animation-iteration-count: infinite;
`;