"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import List from "./List";
import Add from "./Add";
import Footer from "./Footer";
import Topproducts from "./Topproducts";
import Notification from "./Notification";
import Testimonial from "./Testimonial";

const ImageList = [
  {
    id: 1,
    img: "/main1.png",
  },
  {
    id: 2,
    img: "/main2.png",
  },
  {
    id: 3,
    img: "/main3.png",
  },
];

export default function Home() {
  const [imageId, setImageId] = useState("/main1.png");
  const [ref, inView] = useInView();

  const bgImage = {
    backgroundImage: `url("/vector3.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div>
      <div
        ref={ref}
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center  duration-200"
        style={bgImage}
      >
        <div className="container pb-2 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                #NightVibe
              </motion.h1>
              <p className="text-sm ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis inventore iste ratione ex alias quis magni at optio
              </p>
            </div>
            {/* Image section */}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6 }}
                  src={imageId}
                  alt="background"
                  className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin "
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
                {ImageList.map((item) => (
                  <motion.img
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1
                          ? "/main1.png"
                          : item.id === 2
                          ? "/main2.png"
                          : "/main3.png"
                      );
                    }}
                    alt="background"
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Topproducts />

      <div className="text-center mb-5 ">
        <h1 className="text-4xl mt-5 text-primary font-bold">Products</h1>
        <p className="text-gray-400 text-xs">welcome to the product section</p>
      </div>

      <List />

      <Add />
      <Notification />
      <Testimonial />
      <Footer />
    </div>
  );
}
