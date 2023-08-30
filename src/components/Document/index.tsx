import React from "react";
import { DocumentContainer, DocumentNumber, Title } from "./styles";
import { IDocument } from "consts";

interface DocumentComponentProps {
  document: IDocument;
  selected: boolean;
  onClick: () => void;
}

export const DocumentComponent: React.FC<DocumentComponentProps> = ({
  document,
  selected,
  onClick,
}) => {
  return (
    <DocumentContainer
      onClick={onClick}
      selected={selected ? "selected" : ""}
      key={document.id}
    >
      <DocumentNumber>{document.id + 1}</DocumentNumber>
      <Title>{document.title}</Title>
    </DocumentContainer>
  );
};
