// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../Constants/constant";

// const Fashion = () => {
//   const params = useParams();
//   const [fashion, setFashion] = useState([]);
//   console.log(fashion);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}`, {
//         params: {
//           api_key: "4b7feb4a7688c3c46324165839ad0ffd",
//           id: params.id,
//         },
//       });
//       setFashion(response.data.results);
//       console.log(response);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, [params.id]);

//   return (
//     <div>
//       <h2>Fashion ID: {params.id}</h2>
//       {fashion.length > 0 ? (
//         fashion.map((item) => (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//             {/* Add other necessary fields here */}
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Fashion;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { BASE_URL } from "../Constants/constant";

// const Fashion = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/${id}`, {
//           params: {
//             api_key: "4b7feb4a7688c3c46324165839ad0ffd",
//           },
//         });
//         setProduct(response.data);
//         console.log(response);
//       } catch (error) {
//         console.error(error.message);
//       }
//     };

//     getProduct();
//   }, [id]);

//   return (
//     <div>
//       {product ? (
//         <div className="p-4">
//           <h2 className="text-2xl font-bold">{product.title}</h2>
//           <img
//             className="w-full h-60 object-cover mt-4"
//             src={product.thumbnail}
//             alt={product.title}
//           />
//           <p className="text-lg mt-4">${product.price}</p>
//           <p className="text-sm text-gray-600 mt-2">{product.description}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Fashion;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../Constants/constant";

const Fashion = () => {
  const { id } = useParams(); // Destructure id from useParams

  const [product, setProduct] = useState(null); // Initialize product as null

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error.message);
      }
    };

    fetchProduct();
  }, [id]); // Add id as a dependency to useEffect

  return (
    <div className=" mt-28 px-20">
      {product ? ( // Check if product is not null
        <div className="border p-4  flex gap-20">
          <div className=" w-[620px] h-[470px] border">
            <img
              className="w-[600px] h-[400px] object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
          </div>
          <div>
            <h2 className=" font-semibold text-lg">{product.description}</h2>
            <hr />
            <div className=" flex gap-5">
              <h2>Condition:</h2>
              <span>
                <h2 className=" text-lg font-semibold">Open box</h2>
                <p className="text-sm text-gray-600 w-[250px]">
                  {product.description}
                </p>
              </span>
            </div>
            <div className="mt-5 flex gap-24 items-center">
              <h2>Model:</h2>
              <h3 className=" p-2 w-[250px] h-10 bg-[#EFEFEF]">
                {product.title}
              </h3>
            </div>
            <div className="mt-5 flex gap-24 items-center">
              <h2>Carrier:</h2>
              <h3 className=" p-2 w-[250px] h-10 bg-[#EFEFEF]"></h3>
            </div>
            <div className="mt-5 flex gap-10 items-center">
              <h2 className=" w-[100px]">Storage Capacity:</h2>
              <h3 className=" p-2 w-[250px] h-10 bg-[#EFEFEF]"></h3>
            </div>{" "}
            <div className="mt-5 flex gap-10 items-center">
              <h2 className=" w-[100px]">Color:</h2>
              <h3 className=" p-2 w-[250px] h-10 bg-[#EFEFEF]"></h3>
            </div>
            <div className="mt-5 flex gap-10 items-center">
              <h2 className=" w-[100px]">Cosmetic:</h2>
              <h3 className=" p-2 w-[250px] h-10 bg-[#EFEFEF]"></h3>
            </div>{" "}
            <div className="mt-5 flex gap-10 items-center">
              <h2 className=" w-[100px]">Quantity:</h2>
              <h3 className=" p-2 w-[24px] h-10 bg-[#EFEFEF]">{product.id}</h3>
            </div>
            <hr />
            <div className=" flex gap-10 mt-10">
              <div className=" flex gap-5 mt-5 ">
                <h2>price</h2>
                <span>
                  <p className="text-2xl font-bold mt-2 mb-3">
                    ${product.price}
                  </p>
                  <h2 className=" text-blue-400 w-[200px]">
                    No Interest if paid in full in 6 mo on $99+*
                  </h2>
                </span>
              </div>
              <div className=" grid grid-cols-1 space-y-2">
                <button className=" w-[230px] h-10 border rounded  bg-[#0053A0]">
                  Buy It Now
                </button>
                <button className=" w-[230px] h-10 border rounded bg-[#3498CA]">
                  Add to cart
                </button>
                <button className=" w-[230px] h-10 border rounded ">
                  Add to Watchlist
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Fashion;
