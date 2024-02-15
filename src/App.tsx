import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainTitle from "./components/MainTitle";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <MainTitle />
        <LandingPage></LandingPage>
        <i className="bi bi-rocket text-text-default fs-1"></i>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  );
}

export default App;
