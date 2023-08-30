import React from "react";
import { DocumentsList } from "./DocumentsList";
import { DEFAULT_DOCUMENTS } from "consts";

export const DocumentsView: React.FC = () => {
  return <DocumentsList documents={DEFAULT_DOCUMENTS} />;
};
