import React from 'react';
import { PATH } from 'consts';
import { Menu } from '../../MenuItems';
import { NLPLogo } from './styles';

interface BrandMenuSectionProps {
  isDarkMode?: string;
}

export const BrandMenuSection: React.FC<BrandMenuSectionProps> = ({
  isDarkMode,
}) => {
  return (
    <Menu.Root isdarkmode={isDarkMode}>
      <Menu.List>
        <NLPLogo isdarkmode={isDarkMode}></NLPLogo>
        <Menu.Link to={PATH.HOME}>
          <Menu.Item isdarkmode={isDarkMode}>Toy Document Labeling</Menu.Item>
        </Menu.Link>
      </Menu.List>
    </Menu.Root>
  );
};
