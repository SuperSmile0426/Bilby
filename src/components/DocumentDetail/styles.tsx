import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px;

  text-align: center;
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 80px;

  height: calc(100% - 150px);

  border: 1px solid black;

  overflow: auto;
`;

export const CountIndex = styled.div`
  font-size: 2rem;
`;

export const Title = styled.h1``;

export const Description = styled.h3``;

export const GoToArticleButton = styled.a`
  text-decoration: none;

  color: black;
  font-size: 1.25rem;
  font-weight: bold;

  cursor: pointer;
`;

export const ControlContainer = styled.div`
  max-width: 1000px;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;

export const NavigationContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ActionContainer = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 20px;
  padding-right: 20px;

  font-size: 1.2rem;
  font-weight: bold;

  height: 40px;
  border: 1px solid black;

  cursor: pointer;

  user-select: none;
`;
