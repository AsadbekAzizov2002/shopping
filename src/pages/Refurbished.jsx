import React, { useEffect, useState } from "react";
import div2 from "./../assets/div2.png";

const Refurbished = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Olib keladigan ma'lumotlarni konsolga chiqaring
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <div>
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
                    {/* Products mapping */}
                    {products && products.length > 0 ? (
                      products.map((product, index) => (
                        <div key={index} className="border p-4 rounded-lg">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-32 h-32"
                          />
                          <h3 className="font-semibold mt-2">{product.name}</h3>
                          <p className="text-gray-600">{product.description}</p>
                          <p className="text-green-500 font-semibold mt-2">
                            {product.price}
                          </p>
                        </div>
                      ))
                    ) : (
                      <div>No products available</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Refurbished;
