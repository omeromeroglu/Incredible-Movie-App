import React,{useState, useEffect, useRef} from "react";

//Image

import searchIcon from "../../images/search-icon.svg";
// Styles

import {Wrapper , Content} from "./SearchBar.styles";

const SearchBar = ({setSearchTerm}) => {

    const [state, setState] = useState("")
    const initial = useRef(true)

    useEffect(() => {

        if(initial.current ){
            initial.current = false
            return
        }
        let timer = setTimeout(() => {
            setSearchTerm(state)
        },500)

        return () => clearTimeout(timer)
    },[state, setSearchTerm])

    console.log(state)

    return(
        <Wrapper>
            <Content>
                <img src={searchIcon} alt="search-icon" />
                <input type="text" placeholder="Search Movie" 
                onChange = {(e) => {setState(e.target.value.trimStart())}}
                value={state}
                />
            </Content>
        </Wrapper>
    )
}

export default SearchBar;