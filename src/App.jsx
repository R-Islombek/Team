import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {}
          {/* <Route path="about" element={<About />} /> tepadan import qilb qoshib qoyasila shunaqa qilib qolgan pagelarni ham */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;