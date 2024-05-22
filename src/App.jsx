import React from "react";
import Top from "./pages/Top";
import Siginup from "./pages/Siginup";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Karzinka from "./pages/Karzinka";
import Motors from "./pages/Motors";
import Electronic from "./pages/Electronic";
import Collectibles from "./pages/Collectibles";
import Garden from "./pages/Garden";
import Fashion from "./pages/Fashion";
import Toys from "./pages/Toys";
import Sport from "./pages/Sport";
import Business from "./pages/Business";
import Watches from "./pages/Watches";
import Live from "./pages/Live";
import Refurbished from "./pages/Refurbished";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Siginup />
      {/* <Top /> */}
      <Routes>
        {/* <Route path="/top" element={<Top />} /> */}

        <Route path="/siginup" element={<Siginup />} />
        <Route path="/home" element={<Home />} />

        <Route path="/electronic" element={<Electronic />} />
        <Route path="/electronic/:id" element={<Fashion />} />
        {/* fashion */}
        <Route path="/search" element={<Search />} />
        <Route path="/karzinka" element={<Karzinka />} />
        <Route path="/motors" element={<Motors />} />
        <Route path="/collectibles" element={<Collectibles />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/toys" element={<Toys />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/business" element={<Business />} />
        <Route path="/watches" element={<Watches />} />
        <Route path="/live" element={<Live />} />
        <Route path="/refurbished" element={<Refurbished />} />
      </Routes>
    </div>
  );
};

export default App;
