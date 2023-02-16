import React, { useContext } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { context } from "./Context";
import "./App.css";
const App = () => {
  const theme = useContext(context);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
      <hr></hr>
      <Profile />
      <hr></hr>
      <Project />
      <Footer></Footer>
    </div>
  );
};

export default App;
