import React, { useState } from "react";
import { DocumentsList } from "./DocumentsList";
import { DEFAULT_DOCUMENTS } from "consts";

export const DocumentsView: React.FC = () => {
  const documents = DEFAULT_DOCUMENTS;

  const [isListCollapsed, setIsListCollapsed] = useState<boolean>(false);
  const [currentDocumentIndex, setCurrentDocumentIndex] = useState<number>(-1);

  const onSelectDocument = (documentIndex: number) => {
    setCurrentDocumentIndex(documentIndex);
    setIsListCollapsed(true);
  };

  return (
    <DocumentsList
      documents={documents}
      collapsed={isListCollapsed}
      currentDocumentIndex={currentDocumentIndex}
      onSelect={onSelectDocument}
    />
  );
};
