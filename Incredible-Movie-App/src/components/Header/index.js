import React from "react";

import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"

import { Wrapper, Content,LogoImg,TMDBLogoImg } from "./Header.styled";


const Header = () => {
  return (
  <div>
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt="RMDBLogo" />
            <TMDBLogoImg src={TMDBLogo} alt="TMDBLogo" />
        </Content>    
    </Wrapper>
  </div>
  )
};

export default Header;
