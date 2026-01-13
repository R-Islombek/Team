import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";



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