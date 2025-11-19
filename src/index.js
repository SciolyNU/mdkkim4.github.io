import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import {
  Navigation,
  PageLayout,
  Home,
  About,
  Contact,
  Invitational,
  Tournaments,
  Volunteer
} from "./components";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <HashRouter>
    <Navigation />
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/invitational" element={<Invitational />} />
        <Route path="/past-tournaments" element={<Tournaments />} />
        <Route path="/get-involved" element={<Volunteer />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </PageLayout>
  </HashRouter>,
  document.getElementById("root")
);
