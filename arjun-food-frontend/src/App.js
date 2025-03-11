import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
};

export default App;
