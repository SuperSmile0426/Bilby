import React, { useState } from "react";
import { DocumentsList } from "./DocumentsList";
import { DEFAULT_DOCUMENTS } from "consts";

export const DocumentsView: React.FC = () => {
  const documents = DEFAULT_DOCUMENTS;

  const [currentDocumentIndex, setCurrentDocumentIndex] = useState<number>(-1);

  const onSelectDocument = (documentIndex: number) => {
    setCurrentDocumentIndex(documentIndex);
  };

  return (
    <DocumentsList
      documents={documents}
      currentDocumentIndex={currentDocumentIndex}
      onSelect={onSelectDocument}
    />
  );
};
