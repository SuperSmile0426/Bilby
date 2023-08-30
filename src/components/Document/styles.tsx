import styled from "styled-components";

export const DocumentContainer = styled.div<{ selected: string }>`
  border: 1px solid black;
  border-radius: 16px;
  padding: 8px;
  margin-bottom: 16px;

  cursor: pointer;

  background-color: ${({ selected }) => (selected ? "lightgray" : "white")};

  &:last-child {
    margin-bottom: 0px;
  }
`;

export const DocumentNumber = styled.strong`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 32px;

  font-size: 2rem;
`;

export const Title = styled.span`
  padding-left: 12px;
  padding-right: 12px;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 1.75rem;
`;
