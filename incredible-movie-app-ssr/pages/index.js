import React from "react"
//Routing
/* import { BrowserRouter as Router, Routes, Route } from "react-router-dom" */
import Link from 'next/link'

//Components
import Header from "../components/Header"
import Home from "./Home"
import Movie from "./Movie"
import NotFound from "./NotFound"

//Styles
import { GlobalStyle } from "../GlobalStyle"

//Hook
import { useHomeFetch } from "../hooks/useHomeFetch"

const App = () => {
  return (
    <>
      <GlobalStyle />
        <Header/>
        {/* <Home/>
        <Movie />
        <NotFound/> */}
    </>  
  )
}
export default App
