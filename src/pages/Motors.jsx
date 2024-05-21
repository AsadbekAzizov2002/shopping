import React, { useEffect, useState } from "react";
import div2 from "./../assets/div2.png";

const Motors = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <main className="px-20 pl-28">
        <div>
          <div className="px-24 mt-5">
            <h2 className="font-normal text-2xl">Featured Event</h2>
            <img
              className="w-[1004px] h-[460px]"
              src={div2}
              alt="Featured Event"
            />
            <h2 className="text-base font-normal mt-5">
              Up to 60% off Apple tech
            </h2>
            <div className="mt-10">
              <div className="grid grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="border p-4 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-40 object-cover mb-4 rounded-lg"
                    />
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Motors;
