import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Invitational,
  Tournaments,
  Volunteer
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/2025-invitational" element={<Invitational />} />
      <Route path="/past-tournaments" element={<Tournaments />} />
      <Route path="/get-involved" element={<Volunteer />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
