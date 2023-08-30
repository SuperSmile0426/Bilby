import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  column-gap: 16px;
  padding: 8px;
`;

export const Description = styled.span`
  font-size: 1.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 8px;

  border: 2px solid black;
  border-radius: 8px;
`;

export const LabelTagContainer = styled.div`
  display: inline-flex;
  column-gap: 8px;

  background-color: blue;
  padding: 4px 12px;

  border-radius: 8px;
  cursor: pointer;
`;

export const LabelTagContent = styled.span``;

export const LabelTagRemoveCross = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;

  border-radius: 50%;

  background-color: lightgray;

  &:hover {
    background-color: gray;
  }
`;

export const LabelInput = styled.div``;
