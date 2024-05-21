import React, { useEffect, useState } from "react";
import Corusel from "./Corusel";

import div11 from "./../assets/div11.png";
import div12 from "./../assets/div12.png";
import div13 from "./../assets/div13.png";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Body from "./Body";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // Make sure to access the products array
  }, []);

  return (
    <div>
      <div>
        <Corusel />
      </div>
      <main className="px-20">
        <div>
          <div>
            <h2 className="text-red-400 font-medium w-[194px] mt-10 mx-auto">
              MASULOTLAR MA’LUMOTI
            </h2>
          </div>
          <div>
            <h2 className="font-normal">
              https://api.escuelajs.co/api/v1/products
            </h2>
            <div className="grid grid-cols-7 mt-5 gap-5">
              {products.slice(7, 14).map((product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded-lg shadow-sm"
                >
                  <img
                    className="rounded-lg w-[200px] object-cover"
                    src={product.thumbnail}
                    alt={product.title}
                  />
                  <h2 className="mt-3 font-medium">{product.title}</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    {product.category}
                  </p>
                  <p className="mt-1 text-lg font-bold">${product.price}</p>
                </div>
              ))}
            </div>
            <div className="mb-10">
              <div className="mb-[46px] mt-6 flex gap-5 items-center">
                <h2 className="text-2xl text-black">
                  Score these trending kicks
                </h2>
                <h2 className="text-xl cursor-pointer">See all</h2>
                <span>
                  <ArrowForwardIcon />
                </span>
              </div>
              <div className="flex gap-5">
                <div className="w-[1022px] h-[250px] border flex justify-between">
                  <div className="pl-5">
                    <h2 className="mb-1">Featured</h2>
                    <img className="mb-4" src={div11} alt="" />
                    <h2 className="mb-[7px] text-xl">
                      Deals made easy all year long.
                    </h2>
                    <p className="mb-[12px]">Free shipping. Best prices.</p>
                    <button className="border-2 p-3 gap-1">
                      Get your thing
                      <span>
                        <ArrowForwardIcon />
                      </span>
                    </button>
                  </div>
                  <div>
                    <img src={div12} alt="" />
                  </div>
                </div>
                <img src={div13} alt="" />
              </div>
            </div>
            <Body />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
