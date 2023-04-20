import { StyledEngineProvider } from "@mui/material/styles";
import Header from "./components/Header/Header";
import Nav from './components/Nav/Nav';
import Footer from "./components/Footer/Footer";
// import { useState } from 'react';
import './App.css';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Nav />
      <div className="app">
      <Header/>
      {/* <PortfolioList portfolioData={portfolioData}/> */}
      </div>
      <Footer />
    </StyledEngineProvider>
  );
}

export default App;
