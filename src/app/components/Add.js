import React from "react";
import { motion } from "framer-motion";
import { GrSecure } from "react-icons/gr";
import { FaTruck, FaCreditCard, FaTag } from "react-icons/fa";

const Add = () => {
  return (
    <>
      <div className="min-h-[550px] bg-gradient-to-r from-primary  mb-5">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {/* Image section */}
              <div className="flex justify-center items-center">
                <motion.img
                  src="/model.jpg"
                  alt="model img"
                  className="max-w-[320px] max-h-[460px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] rounded-lg"
                  whileHover={{ scale: 1.05, x: -10 }}
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Summer Sale Up to 50% off
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                  <br />
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-col gap-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4"
                  >
                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-violet-100 " />
                    <p className="text-sm text-gray-500">Secure Payment</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4"
                  >
                    <FaTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                    <p className="text-sm text-gray-500">Fast Delivery</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4"
                  >
                    <FaCreditCard className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100" />
                    <p className="text-sm text-gray-500">Easy Payment Method</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-4"
                  >
                    <FaTag className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100 " />
                    <p className="text-sm text-gray-500">Get Offers</p>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
