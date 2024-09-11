import styled from "styled-components";
import { Colors } from "../../enum/Colors";

export const DeleteButtonComponent = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.Red100};
  transition: all 0.2s ease-in-out;
  padding: 0;
  & path {
        fill: ${Colors.Red700}
    }
  &:active,
  &:hover {
    background-color: ${Colors.Red200};
    & path {
        fill: ${Colors.Red800}
    }
  }
  &:disabled {
    cursor: default;
    background-color: ${Colors.Gray100};
    & path {
        fill: ${Colors.Gray400}
    }
    &:active,&:hover {
        background-color: ${Colors.Gray100};
    }
  }
`;