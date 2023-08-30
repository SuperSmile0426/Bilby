import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const MenuRoot = styled(NavigationMenu.Root)<{ isdarkmode?: string }>`
  background-color: ${({ isdarkmode }) =>
    isdarkmode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.5)'};
  color: ${({ isdarkmode }) =>
    isdarkmode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};

  border-radius: 20px;
  border: 1px solid
    ${({ isdarkmode }) =>
      isdarkmode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)'};

  padding-left: 1rem;
  padding-right: 1rem;
`;

export const MenuList = styled(NavigationMenu.List)`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MenuItem = styled(NavigationMenu.Item)<{
  isdarkmode?: string;
  activated?: string;
}>`
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;

  cursor: pointer;
  color: inherit;
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 100%;

  color: ${({ isdarkmode, activated }) =>
    isdarkmode ?? true
      ? `rgba(255, 255, 255, ${activated ? 1 : 0.6})`
      : `rgba(0, 0, 0, ${activated ? 1 : 0.6}))`};
  &:hover {
    color: ${({ isdarkmode }) =>
      isdarkmode ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 1)'};
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  padding-left: 1rem;
  padding-right: 1rem;
`;
