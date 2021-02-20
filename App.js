import React from "react";
import "antd/dist/antd.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Navbar
import NavbarMenu from "./components/navbar/NavbarMenu";
// Footer
import Footer from "./common/footer/Footer";

import Home from "./components/1stpage";
import Testimonials from "./components/2ndpage/Testimonials";
import Finder from "./components/3rdpage/Finder";
import Brand from "./components/4thpage/Brand";
import "./App1.css";
function App() {
  return (
    <>
      <Router>
        <NavbarMenu />
        <Route path="/" component={Home} exact />
        <Route path="/" component={Finder} exact />
        <Route path="/" component={Testimonials} exact />
        <Route path="/" component={Brand} exact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
