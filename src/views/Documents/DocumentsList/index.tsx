import React from "react";
import { IDocument } from "consts";
import { DocumentComponent } from "components";

interface DocumentsListProps {
  documents: IDocument[];
  currentDocumentIndex: number;
  onSelect: (documentIndex: number) => void;
}

export const DocumentsList: React.FC<DocumentsListProps> = ({
  documents,
  currentDocumentIndex,
  onSelect,
}) => {
  return (
    <>
      {documents.map((document, index) => (
        <DocumentComponent
          key={document.id}
          document={document}
          onClick={() => onSelect(index)}
          selected={currentDocumentIndex === index}
        />
      ))}
    </>
  );
};
