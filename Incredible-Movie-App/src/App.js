import React from "react"
//Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Components
import Header from "./components/Header"
import Home from "./components/Home"
import Movie from "./components/Movie"
import NotFound from "./components/NotFound"

//Styles
import { GlobalStyle } from "./GlobalStyle"

//Hook
import { useHomeFetch } from "./hooks/useHomeFetch"

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path= "/:movieId" element= {<Movie />}/>
        <Route path= "/*" element= {<NotFound/>}/>
      </Routes>  
    </Router>
  )
}
export default App
