import React from "react";

import { SeparatorBorder, SeparatorButton, SeparatorContainer } from "./styles";

interface SeparatorProps {
  onClick: () => void;
}

export const Separator: React.FC<SeparatorProps> = ({ onClick }) => {
  return (
    <SeparatorContainer>
      <SeparatorBorder></SeparatorBorder>
      <SeparatorButton onClick={onClick} />
    </SeparatorContainer>
  );
};
