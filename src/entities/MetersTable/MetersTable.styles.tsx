import styled from "styled-components";
import { Colors } from "../../shared/enum/Colors";

export const TableWrapper = styled.div`
  overflow: auto;

  border: 1px solid #e0e5eb;
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  min-height: 300px;
`;

export const TableComponent = styled.table`
  border-spacing: 0;
  min-width: 100%;
  border-radius: 12px;
  white-space: nowrap;
`;

export const THead = styled.thead`
`;
export const THR = styled.tr``;

export const TBody = styled.tbody``;

export const TBR = styled.tr`
  background-color: ${Colors.White};
  &:hover {
    background-color: #f7f8f9;
  }
  &:last-of-type td {
    border-width: 0;
  }
  & > td:last-of-type {
    padding-top: 0;
    padding-bottom: 0;
  }
  & > td:last-of-type button {
    opacity: 0;
    visibility: hidden;
  }
  &:hover > td:last-of-type button {
    opacity: 1;
    visibility: visible;
  }
`;

export const TH = styled.th<{ $textAlign?: string }>`
  min-width: 48px;
  padding: 8px 12px;
  color: ${Colors.Gray500};
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  position: sticky;
  top: 0;
  z-index: 1;

  background: #f0f3f7;
`;

export const TD = styled.td<{ $textAlign?: string }>`
  padding: 16px 12px;
  text-align: ${({ $textAlign }) => $textAlign || "left"};
  border-bottom: 1px solid #e0e5eb;
  color: #1F2939;
  font-size: 14px;
  line-height: 20px;
`;
