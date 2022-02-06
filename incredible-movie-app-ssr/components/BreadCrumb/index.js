import React from "react";
import Link from 'next/link'


//Styles

import {Wrapper , Content, StyledLink} from "./BreadCrumb.styles"

const BreadCrumb = ({movieTitle}) => {

    return (

        <Wrapper>
            <Content>
                <StyledLink to="/">
                    <span>Home</span>
                </StyledLink>
                     <span>|</span>
                     <span>{movieTitle}</span>

            </Content>
        </Wrapper>
    )
}

export default BreadCrumb