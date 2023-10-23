import React from "react";
import { Helmet } from "react-helmet";

// Screens
import TopNavbar from "./components/Nav/TopNavbar.jsx";
import Sidebar from "./components/Nav/Sidebar.jsx";
import Landing from "./screens/Landing.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Sections/Contact.jsx";


export default function App() {
  return (
    <>
    <TopNavbar />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
