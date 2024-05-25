import React from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Img = {
  backgroundImage: `url("/pattern.jpeg")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "20vh", 
  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
};

const Notification = () => {
  return (
    <motion.div
      style={Img}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="space-y-6 max-w-xl mx-auto text-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-2xl sm:text-3xl font-semibold font-serif">
          Get Notification of the New Products
        </h1>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <motion.input
            type="email"
            placeholder="Enter your email"
            className="px-7 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          <motion.button
            type="submit"
            className="px-4 py-2 bg-blue-100 text-black rounded-full bg-gradient-to-r from-primary to-secondary hover:bg-primary/85 hover:text-white flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaSearch className="mr-2" />
            Notify Me
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Notification;
