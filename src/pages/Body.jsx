// import React, { useEffect, useState } from "react";

// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const Body = () => {
//   const [produc, setProduct] = useState([]);
//   console.log(produc);
//   useEffect(() => {
//     fetch("ttps://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, []);

  
  
//   return (
//     <div>
//       <main>
//         <div>
//           <div>
//             <h2 className=" mb-[11px]">
//               https://api.escuelajs.co/api/v1/products
//             </h2>
//             <div className=" flex items-center">
//               <h2 className=" text-2xl mr-[19px]">
//                 Today's Deals – All With Free Shipping
//               </h2>
//               <span className=" ml-[20px] mr-[74px] flex">
//                 <h2 className=" text-xl">See all</h2>
//                 <span>
//                   <ArrowForwardIcon />
//                 </span>
//               </span>
//               <h2 className=" text-red-400"> MASULOTLAR MA’LUMOTI</h2>
//             </div>
//             <div className=" grid grid-cols-6  mt-[24px] mb-[57px] gap-5">
//               {produc.slice(14, 15).map((prod) => (
//                 <div key={prod.id}>
//                   <img
//                     className=" rounded-lg w-[200px] "
//                     src={prod.category.image}
//                     alt=""
//                   />
//                   <h2 className=" mt-4 text-base">$249.99</h2>
//                   <h2 className="  text-[#707070]">$599.99 · 58% OFF</h2>
//                 </div>
//               ))}
//               {produc.slice(15, 16).map((prod) => (
//                 <div key={prod.id}>
//                   <img
//                     className=" rounded-lg w-[200px] "
//                     src={prod.category.image}
//                     alt=""
//                   />
//                   <h2 className=" mt-4 text-base">$249.99</h2>
//                   <h2 className="  text-[#707070]">$599.99 · 58% OFF</h2>
//                 </div>
//               ))}
//               {produc.slice(14, 15).map((prod) => (
//                 <div key={prod.id}>
//                   <img
//                     className=" rounded-lg w-[200px] "
//                     src={prod.category.image}
//                     alt=""
//                   />
//                   <h2 className=" mt-4 text-base">$249.99</h2>
//                   <h2 className="  text-[#707070]">$599.99 · 58% OFF</h2>
//                 </div>
//               ))}
//               {produc.slice(14, 15).map((prod) => (
//                 <div key={prod.id}>
//                   <img
//                     className=" rounded-lg w-[200px] "
//                     src={prod.category.image}
//                     alt=""
//                   />
//                   <h2 className=" mt-4 text-base">$249.99</h2>
//                   <h2 className="  text-[#707070]">$599.99 · 58% OFF</h2>
//                 </div>
//               ))}
//               {produc.slice(14, 15).map((prod) => (
//                 <div key={prod.id}>
//                   <img
//                     className=" rounded-lg w-[200px] "
//                     src={prod.category.image}
//                     alt=""
//                   />
//                   <h2 className=" mt-4 text-base">$249.99</h2>
//                   <h2 className="  text-[#707070]">$599.99 · 58% OFF</h2>
//                 </div>
//               ))}
//               {produc.slice(14, 15).map((prod) => (
//                 <div key={prod.id}>
//                   <img
//                     className=" rounded-lg w-[200px] "
//                     src={prod.category.image}
//                     alt=""
//                   />
//                   <h2 className=" mt-4 text-base">$249.99</h2>
//                   <h2 className="  text-[#707070]">$599.99 · 58% OFF</h2>
//                 </div>
//               ))}
//             </div>
//             <hr className=" mb-[60px]" />
//             <div className=" flex justify-between mb-[67px]">
//               <div>
//                 <h2 className=" text-[#767676]">Buy</h2>
//                 <h2 className=" text-[#767676]">Registration</h2>
//                 <h2 className=" text-[#767676]">eBay Money Back Guarantee</h2>
//                 <h2 className=" text-[#767676]">Bidding & buying help</h2>
//                 <h2 className=" text-[#767676]">Stores</h2>
//                 <h2 className=" text-[#767676]">eBay for Charity</h2>
//                 <h2 className=" text-[#767676]">Charity Shop</h2>
//                 <h2 className=" text-[#767676]">Seasonal Sales and events</h2>
//               </div>
//               <div>
//                 <h2 className=" text-[#767676]">Sell</h2>
//                 <h2 className=" text-[#767676]">Start selling</h2>
//                 <h2 className=" text-[#767676]">How to sell</h2>
//                 <h2 className=" text-[#767676]">Business sellers</h2>
//                 <h2 className=" text-[#767676]">Affiliates</h2>
//                 <h2 className=" text-[#767676]">Tools & apps</h2>
//                 <h2 className=" text-[#767676]">Developers</h2>
//                 <h2 className=" text-[#767676]">Security center</h2>
//                 <h2 className=" text-[#767676]">Site map</h2>
//               </div>
//               <div>
//                 <h2 className=" text-[#767676]">Stay connected</h2>
//                 <h2 className=" text-[#767676]">Facebook</h2>
//                 <h2 className=" text-[#767676]">Twitter</h2>
//               </div>
//               <div>
//                 <h2 className=" text-[#767676]">About eBay</h2>
//                 <h2 className=" text-[#767676]">Company info</h2>
//                 <h2 className=" text-[#767676]">News</h2>
//                 <h2 className=" text-[#767676]">Investors</h2>
//                 <h2 className=" text-[#767676]">Careers</h2>
//                 <h2 className=" text-[#767676]">Diversity & Inclusion</h2>
//                 <h2 className=" text-[#767676]">Global Impact</h2>
//                 <h2 className=" text-[#767676]">Government relations</h2>
//                 <h2 className=" text-[#767676]">Advertise with us</h2>
//                 <h2 className=" text-[#767676]">Policies</h2>
//                 <h2 className=" text-[#767676]">
//                   Verified Rights Owner (VeRO) Program
//                 </h2>
//                 <h2 className=" text-[#767676]">eCI Licenses</h2>
//               </div>
//               <div>
//                 <h2 className=" text-[#767676]">Help & Contact</h2>
//                 <h2 className=" text-[#767676]">Seller Center</h2>
//                 <h2 className=" text-[#767676]">Contact Us</h2>
//                 <h2 className=" text-[#767676]">eBay Returns</h2>
//                 <h2 className=" text-[#767676]">Community</h2>
//                 <h2 className=" text-[#767676]">Announcements</h2>
//                 <h2 className=" text-[#767676]">eBay Community</h2>
//                 <h2 className=" text-[#767676]">eBay for Business Podcast</h2>
//                 <h2 className=" text-[#767676]">eBay Sites</h2>
//               </div>
//             </div>
//             <div className=" flex mb-10">
//               <h2>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</h2>
//               <ul className=" text-[#767676] flex">
//                 <li>Accessibility</li>
//                 <li>User Agreement</li>
//                 <li>Privacy</li>
//                 <li>Payments Terms of Use</li>
//                 <li>Cookies</li>
//                 <li>Your Privacy Choices</li>
//                 <li>and</li>
//                 <li>AdChoice</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Body;



















import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Body = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products)); // Make sure to access the products array
  }, []);

  return (
    <div>
      <main>
        <div>
          <div>
            <h2 className="mb-[11px]">
              https://api.escuelajs.co/api/v1/products
            </h2>
            <div className="flex items-center">
              <h2 className="text-2xl mr-[19px]">
                Today's Deals – All With Free Shipping
              </h2>
              <span className="ml-[20px] mr-[74px] flex items-center">
                <h2 className="text-xl">See all</h2>
                <ArrowForwardIcon />
              </span>
              <h2 className="text-red-400">MASULOTLAR MA’LUMOTI</h2>
            </div>
            <div className="grid grid-cols-6 mt-[24px] mb-[57px] gap-5">
              {products.slice(14, 20).map((prod) => (
                <div key={prod.id} className="border p-4 rounded-lg shadow-sm">
                  <img
                    className="rounded-lg w-[200px] object-cover"
                    src={prod.thumbnail}
                    alt={prod.title}
                  />
                  <h2 className="mt-4 text-base">${prod.price}</h2>
                  <h2 className="text-[#707070]">
                    ${prod.discountedPrice} · {prod.discountPercentage}% OFF
                  </h2>
                </div>
              ))}
            </div>
            <hr className="mb-[60px]" />
            <div className="flex justify-between mb-[67px]">
              <div>
                <h2 className="text-[#767676]">Buy</h2>
                <h2 className="text-[#767676]">Registration</h2>
                <h2 className="text-[#767676]">eBay Money Back Guarantee</h2>
                <h2 className="text-[#767676]">Bidding & buying help</h2>
                <h2 className="text-[#767676]">Stores</h2>
                <h2 className="text-[#767676]">eBay for Charity</h2>
                <h2 className="text-[#767676]">Charity Shop</h2>
                <h2 className="text-[#767676]">Seasonal Sales and events</h2>
              </div>
              <div>
                <h2 className="text-[#767676]">Sell</h2>
                <h2 className="text-[#767676]">Start selling</h2>
                <h2 className="text-[#767676]">How to sell</h2>
                <h2 className="text-[#767676]">Business sellers</h2>
                <h2 className="text-[#767676]">Affiliates</h2>
                <h2 className="text-[#767676]">Tools & apps</h2>
                <h2 className="text-[#767676]">Developers</h2>
                <h2 className="text-[#767676]">Security center</h2>
                <h2 className="text-[#767676]">Site map</h2>
              </div>
              <div>
                <h2 className="text-[#767676]">Stay connected</h2>
                <h2 className="text-[#767676]">Facebook</h2>
                <h2 className="text-[#767676]">Twitter</h2>
              </div>
              <div>
                <h2 className="text-[#767676]">About eBay</h2>
                <h2 className="text-[#767676]">Company info</h2>
                <h2 className="text-[#767676]">News</h2>
                <h2 className="text-[#767676]">Investors</h2>
                <h2 className="text-[#767676]">Careers</h2>
                <h2 className="text-[#767676]">Diversity & Inclusion</h2>
                <h2 className="text-[#767676]">Global Impact</h2>
                <h2 className="text-[#767676]">Government relations</h2>
                <h2 className="text-[#767676]">Advertise with us</h2>
                <h2 className="text-[#767676]">Policies</h2>
                <h2 className="text-[#767676]">
                  Verified Rights Owner (VeRO) Program
                </h2>
                <h2 className="text-[#767676]">eCI Licenses</h2>
              </div>
              <div>
                <h2 className="text-[#767676]">Help & Contact</h2>
                <h2 className="text-[#767676]">Seller Center</h2>
                <h2 className="text-[#767676]">Contact Us</h2>
                <h2 className="text-[#767676]">eBay Returns</h2>
                <h2 className="text-[#767676]">Community</h2>
                <h2 className="text-[#767676]">Announcements</h2>
                <h2 className="text-[#767676]">eBay Community</h2>
                <h2 className="text-[#767676]">eBay for Business Podcast</h2>
                <h2 className="text-[#767676]">eBay Sites</h2>
              </div>
            </div>
            <div className="flex mb-10">
              <h2>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</h2>
              <ul className="text-[#767676] flex">
                <li className="mr-2">Accessibility</li>
                <li className="mr-2">User Agreement</li>
                <li className="mr-2">Privacy</li>
                <li className="mr-2">Payments Terms of Use</li>
                <li className="mr-2">Cookies</li>
                <li className="mr-2">Your Privacy Choices</li>
                <li className="mr-2">and</li>
                <li className="mr-2">AdChoice</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Body;
