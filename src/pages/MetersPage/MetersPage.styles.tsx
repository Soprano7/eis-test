import styled from "styled-components";
import { Colors } from "../../shared/enum/Colors";

export const MainWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: ${Colors.White};
    align-items: center;
    justify-content: center;
    display: flex;
`

export const TableEntityWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 70vh;
    overflow: auto;
`

export const Content = styled.div`
    width: 100%;
    margin: 20px;
    max-width: 1200px;
    border-radius: 12px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    padding: 16px;
    display: flex;
    gap: 16px;
    flex-direction: column;
    
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #e0e5eb;
  border-radius: 12px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 8px 16px;
  & > ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
    margin-left: auto;
    & > li {
      border: 1px solid #ced5de;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      margin-left: 8px;
      &:not(.break):hover {
        background-color: #fbfcfd;
        cursor: pointer;
      }
      & > a {
        color: #1f2939;
        font-size: 14px;
        line-height: 16px;
        font-weight: 400;

        padding: 10px 4px;
        min-width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
       justify-content: center;
      }
    }
    & > li.selected {
      background-color: #f2f5f8;
      & > a {
        cursor: default;
      }
    }
    & > .previous,
    & > .next {
      display: none;
    }
  }
`;