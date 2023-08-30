import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { Container, LogoWrapper } from "./styles";
import { BrandMenuSection } from "./BrandMenu";
import { MainMenuSection } from "./MainMenu";
import { PATH } from "consts";

export const HeaderComponent: React.FC = () => {
  const location = useLocation();

  const isDarkMode = useMemo(() => {
    return location.pathname === PATH.HOME ? "dark" : "";
  }, [location.pathname]);

  return (
    <>
      <Container>
        <BrandMenuSection isDarkMode={isDarkMode} />
        <MainMenuSection isDarkMode={isDarkMode} />
      </Container>
      {!isDarkMode && <LogoWrapper>NLP</LogoWrapper>}
    </>
  );
};
