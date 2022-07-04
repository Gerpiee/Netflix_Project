import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
