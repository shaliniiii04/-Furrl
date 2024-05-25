import React from "react";
import { motion } from "framer-motion";

const list = [
  {
    name: "Ethnic",
    price: 100,
    image: "/product.jpg",
    
  },
  {
    name: "Western",
    price: 140,
    image: "/product.jpg",
    
  },
  {
    name: "Ethnic",
    price: 100,
    image: "/product.jpg",

  },
  {
    name:"Western",
    price: 100,
    image: "/product.jpg",
 
  },
  {
    name: "Ethnic",
    price: 140,
    image: "/product.jpg",
    
  },
  {
    name:"Ethnic",
    price: 100,
    image: "/product.jpg",
    
  },
  {
    name: "Western",
    price: 100,
    image: "/product.jpg",
    
  },
  {
    name: "Ethnic",
    price: 140,
    image: "/product.jpg",

  },
  {
    name: "Western",
    price: 100,
    image: "/product.jpg",
  
  },
  
];

const List = () => {
  return (
    <div className="p-20 flex justify-center items-center min-h-screen">
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          {list.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              
              className="relative group shadow-xl"
            >
              <div className="border-2 border-gray-300 hover:bg-primary from-primary to-secondary hover:scale-105 p-2  rounded-xl relative">
                <img
                  src={data.image}
                  alt=""
                  className="object-cover rounded-xl sm:translate-y-2 group-hover:sm:translate-y-3 duration-700"
                  style={{ maxWidth: "100%", maxHeight: "100%", width: "100%", height: "100%" }}
                />
                <div style={{ position: "absolute", top: "20px", right: "16px" }}>
                  <button className="bg-gray-200 text-black px-3 py-1 rounded-lg hover:bg-primary/60">
                    Share
                  </button>
                </div>
                <div className="p-4">
                  <h1 className="text-black font-semibold">
                    {data.name}
                  </h1>
                  <p className="text-sm text-gray-500">${data.price}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary to-secondary  border border-black text-black px-4 py-2 rounded-lg mt-2"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
