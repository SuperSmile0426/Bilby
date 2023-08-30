import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-left: 2rem;
  margin-right: 2rem;

  justify-content: space-between;

  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 100;
`;

export const WebsiteTitle = styled(Link)`
  font-size: 30px;
  line-height: 36px;

  font-weight: bold;
  color: black;

  text-decoration: none;
`;

export const LogoWrapper = styled.div`
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 1.5rem;
`;
