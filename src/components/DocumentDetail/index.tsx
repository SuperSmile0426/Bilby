import React, { useState, useEffect } from "react";
import { IDocument } from "consts";
import {
  Container,
  ContentContainer,
  Title,
  Description,
  GoToArticleButton,
  ControlContainer,
  NavigationContainer,
  ActionContainer,
  ActionButton,
  CountIndex,
} from "./styles";
import { LabelInputComponent } from "../LabelInput";

interface DocumentDetailComponentProps {
  document: IDocument;
  onFirst: () => void;
  onLast: () => void;
  onPrev: () => void;
  onNext: () => void;
  count: number;
  index: number;
}

export const DocumentDetailComponent: React.FC<
  DocumentDetailComponentProps
> = ({ document, onFirst, onLast, onPrev, onNext, count, index }) => {
  const [labels, setLabels] = useState<string[]>(document.labels ?? []);

  useEffect(() => {
    setLabels(document.labels ?? []);
  }, [document]);

  const onLabelChange = (newLabels: string[]) => {
    setLabels(newLabels);
  };

  const onSave = () => {
    onNext();
  };

  const onReset = () => {
    setLabels(document.labels ?? []);
  };

  const onFirstClick = () => {
    onFirst();
  };

  const onLastClick = () => {
    onLast();
  };

  const onPrevClick = () => {
    onPrev();
  };

  const onNextClick = () => {
    onNext();
  };

  return (
    <Container>
      <ContentContainer>
        <CountIndex>
          {index + 1} / {count} documents
        </CountIndex>
        <Title>{document.title}</Title>
        <Description>{document.body}</Description>
        <GoToArticleButton href={document.url} target="#blank">
          Go to Article...
        </GoToArticleButton>
        <LabelInputComponent labels={labels} onChange={onLabelChange} />
      </ContentContainer>
      <ControlContainer>
        <NavigationContainer>
          <ActionButton onClick={onFirstClick}>First</ActionButton>
          <ActionButton onClick={onLastClick}>Last</ActionButton>
          <ActionButton onClick={onPrevClick}>Prev</ActionButton>
          <ActionButton onClick={onNextClick}>Next</ActionButton>
        </NavigationContainer>
        <ActionContainer>
          <ActionButton onClick={onSave}>Save</ActionButton>
          <ActionButton onClick={onReset}>Reset</ActionButton>
        </ActionContainer>
      </ControlContainer>
    </Container>
  );
};
