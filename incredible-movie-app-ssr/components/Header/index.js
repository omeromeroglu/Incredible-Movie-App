import React from "react";
import Link from 'next/link'


import RMDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"

import { Wrapper, Content,LogoImg,TMDBLogoImg } from "./Header.styled";


const Header = () => {
  return (
  <div>
    <Wrapper>
        <Content>
          <Link href="/">
          <LogoImg src={RMDBLogo} alt="RMDBLogo" />

          </Link>
            <TMDBLogoImg src={TMDBLogo} alt="TMDBLogo" />
        </Content>    
    </Wrapper>
  </div>
  )
};

export default Header;
