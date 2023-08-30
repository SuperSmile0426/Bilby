import styled from "styled-components";
import { CaretRightIcon } from "@radix-ui/react-icons";

export const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 48px;
  height: 100%;
`;

export const SeparatorBorder = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  top: 0px;
  bottom: 0px;
  background-color: white;
  border: 1px solid black;
`;

export const SeparatorButton = styled(CaretRightIcon)`
  width: 48px;
  height: 48px;

  color: gray;

  border: 1px solid black;
  border-radius: 100%;

  background-color: white;

  cursor: pointer;

  z-index: 50;

  &:hover {
    transform: scale(1.1);
  }
`;
