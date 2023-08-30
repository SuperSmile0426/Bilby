import React from "react";
import { MAIN_MENU } from "consts";
import { Menu } from "../../MenuItems";

interface MainMenuSectionProps {
  isDarkMode?: string;
}

export const MainMenuSection: React.FC<MainMenuSectionProps> = ({
  isDarkMode,
}) => {
  return (
    <Menu.Root isdarkmode={isDarkMode}>
      <Menu.List>
        {MAIN_MENU.map((menu, index) => (
          <Menu.Link key={index} to={menu.path}>
            <Menu.Item isdarkmode={isDarkMode}>{menu.label}</Menu.Item>
          </Menu.Link>
        ))}
      </Menu.List>
    </Menu.Root>
  );
};
