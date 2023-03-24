import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Profil from "../pages/Profil";
import Home from "../pages/Home";
// import SignIn from "../Auth/SignIn";

const ReactRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        {/* <Route path="/sign-up" element={<SignIn />} /> */}
        {/*  <Route path="/log-in" element={< />} /> */}
      </Routes>
    </Router>
  );
};

export default ReactRouter;
