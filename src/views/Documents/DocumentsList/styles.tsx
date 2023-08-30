import styled from "styled-components";

export const Container = styled.div<{ collapsed: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  overflow: auto;

  width: ${({ collapsed }) => (collapsed ? "auto" : "100%")};

  flex: 0 0 auto;
`;
