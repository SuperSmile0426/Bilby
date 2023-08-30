import { IDocument } from "consts";
import React from "react";

interface DocumentsListProps {
  documents: IDocument[];
}

export const DocumentsList: React.FC<DocumentsListProps> = ({ documents }) => {
  return (
    <div>
      {documents.map((document, index) => (
        <div>
          <strong>{index + 1}</strong>
          <span>{document.title}</span>
        </div>
      ))}
    </div>
  );
};
