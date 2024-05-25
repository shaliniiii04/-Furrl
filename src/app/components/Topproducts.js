import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TopproductsData = [
  {
    id: 1,
    img: "/model.jpg",
    name: "Women Wear",
    description:
      "Western ",
  },
  {
    id: 2,
    img: "/model.jpg",
    name: "Women",
    description:
      "Ethinc",
  },
  {
    id: 3,
    img: "/product.jpg",
    name: "Women",
    description:
      "Ethinc",
  },
  {
    id: 4,
    img: "/model.jpg",
    name: "Women",
    description:
      "Ethinc",
  },
  {
    id: 5,
    img: "/model.jpg",
    name: "Women",
    description:
      "Ethinc",
  },
];

const Topproducts = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container">
          <div className="text-center mb-7 max-w-[400px] mx-auto">
            <p className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Our Top Products
            </p>
            <h1 className="text-3xl font-bold">Top Selling Products</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-14 md:gap-5 place-items-center">
            {TopproductsData.map((top) => (
              <TopCard key={top.id} top={top} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
          View all products
        </button>
      </div>
    </>
  );
};

const TopCard = ({ top }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-white hover:bg-primary  hover:text-white relative shadow-xl duration-high group max-w-[300px] overflow-hidden"
    >
      <div className="h-[300px] w-full overflow-hidden">
        <img
          src={top.img}
          alt=""
          className="h-full w-full object-cover transform group-hover:scale-105 group-hover:rotate-3 duration-300"
        />
      </div>
      <div className="p-2 text-center">
        <div className="w-full"></div>
        <h1 className="text-xl font-bold">{top.name}</h1>
        <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
          {top.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Topproducts;
