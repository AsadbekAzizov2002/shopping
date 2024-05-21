import React from "react";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

import { NavLink, Route, Routes } from "react-router-dom";

import logo from "./../assets/logo.svg";
import Siginup from "./Siginup";
import Corusel from "./Corusel";
import Home from "./Home";
import Karzinka from "./Karzinka";
import Motors from "./Motors";
import Electronic from "./Electronic";
import Collectibles from "./Collectibles";
import Garden from "./Garden";
import Fashion from "./Fashion";
import Toys from "./Toys";
import Sport from "./Sport";
import Business from "./Business";
import Watches from "./Watches";
import Live from "./Live";
import Refurbished from "./Refurbished";
import Search from "./Search";

const Top = () => {
  return (
    <div>
      <main className=" px-20 pt-2">
        <div className=" flex justify-between items-center">
          <div className=" flex gap-5">
            <h1 className=" font-normal">
              Hi!
              <NavLink to="/siginup">
                <span className=" text-blue-300"> Sign in</span>
              </NavLink>
            </h1>
            <h2 className=" font-normal">
              {" "}
              or
              <span className=" text-blue-300"> register</span>
            </h2>
            <ul className=" flex gap-7">
              <li>Daily Deals</li>
              <li>Brand Outlet</li>
              <li>Help & Contact</li>
            </ul>
          </div>
          <div>
            <ul className=" flex gap-5 items-center">
              <li>Sell</li>
              <li>
                <span className="  bg-slate-400 ">
                  <select
                    className=" w-[100px]"
                    name="Watchlist"
                    id="Watchlist"
                  >
                    <option value="Watchlist">Watchlist</option>
                    <option value="Watchlist">Rus</option>
                    <option value="Watchlist">English</option>
                  </select>
                </span>
              </li>
              <li>
                <span className="  bg-slate-400 ">
                  <select className=" w-[100px]" name="My eBay" id="My eBay">
                    <option value="My eBay">My eBay</option>
                    <option value="My eBay">Rus</option>
                    <option value="My eBay">English</option>
                  </select>
                </span>
              </li>
              <li>
                <span>
                  <NotificationsNoneIcon />
                </span>
              </li>
              <li>
                <NavLink to="/karzinka">
                  <span>
                    <ShoppingCartIcon />
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className=" mt-10 flex gap-5 items-center">
          <ul>
            <li>
              <NavLink to="/">
                <img src={logo} alt="" />
              </NavLink>
            </li>
          </ul>
          <div className=" ml-[30px] w-[80px] flex justify-center items-center gap-3">
            <span className=" w-[60px] h-[30px]">Shop by category</span>
            <span className=" mt-4">
              <KeyboardArrowDownIcon />
            </span>
          </div>
          <div className=" flex items-center ">
            <div className=" mt-5 items-center justify-between w-[820px] h-11 border-black  border flex">
              <NavLink to="/search">
                <span className=" mr-5- w-[10px]">
                  <SearchIcon />
                </span>
                <input
                  type="text "
                  placeholder="Search for anything"
                  className=" h-10 w-[660px]"
                />
              </NavLink>
              <span className="  bg-slate-400 ">
                <select className=" w-[120px]" name="My eBay" id="My eBay">
                  <option value="My eBay">All Catigories</option>
                  <option value="My eBay">Antiques</option>
                  <option value="My eBay">Art</option>
                  <option value="My eBay">BAby</option>
                  <option value="My eBay">Books</option>
                  <option value="My eBay">Busuness</option>
                  <option value="My eBay">Camera</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                  <option value="My eBay">Phone</option>
                </select>
              </span>
            </div>
            <div className=" flex mt-5 ml-5">
              <button className=" w-[169px] h-[42px] bg-[#3665F3]">
                Search
              </button>
              <button className=" ml-5">Advanced</button>
            </div>
          </div>
        </div>
        <hr className=" mt-20" />
        <div>
          <ul className=" flex gap-5">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/karzinka">Saved</NavLink>
            </li>
            <li>
              <NavLink to="/motors">Motors</NavLink>
            </li>
            <li>
              <NavLink to="/electronic">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/collectibles">Collectibles</NavLink>
            </li>
            <li>
              <NavLink to="/garden"> Home & Garden</NavLink>
            </li>
            <li>
              <NavLink to="/fashion">Fashion</NavLink>
            </li>
            <li>
              <NavLink to="/toys">Toys</NavLink>
            </li>
            <li>
              <NavLink to="/sport"> Sporting Goods</NavLink>
            </li>
            <li>
              <NavLink to="/business"> Business & Industrial</NavLink>
            </li>
            <li>
              <NavLink to="/watches"> Jewelry & Watches</NavLink>
            </li>

            <li>
              <NavLink to="/live"> Dealis</NavLink>
            </li>
            <li>
              <NavLink to="/refurbished"> Refurbished</NavLink>
            </li>
          </ul>
        </div>
      </main>

      <Routes>
        <Route path="/siginup" element={<Siginup />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/karzinka" element={<Karzinka />} />
        <Route path="/motors" element={<Motors />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/collectibles" element={<Collectibles />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/fashion" element={<Fashion />} />
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

export default Top;
