import React, { Component } from "react";
import Routes from "./components/routes/routes";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Aux from "./components/utils/Aux";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Aux>
        <header className="StickyHeader">
          <Navbar />
        </header>
        <main className="StickyContent">
          <Routes />
        </main>
        <footer className="StickyFooter">
          <Footer />
        </footer>
      </Aux>
    );
  }
}

export default App;
