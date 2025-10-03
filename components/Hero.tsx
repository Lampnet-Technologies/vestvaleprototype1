"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = React.forwardRef<HTMLElement>((_, ref) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of hero images - replace with your actual image paths
  const heroImages = [
    "/slide1.jpg",
    "/slide2.jpg",
    "/slide3.jpg",
    "/slide4.jpg",
    "/sliderportrait1.jpg",
   "/sliderportrait2.jpg",
    "/sliderportrait3.jpg",
    "/sliderportrait4.jpg",
    "/sliderportrait5.jpg",
    "/sliderportrait6.jpg",
    "/sliderportrait7.jpg",
    "/sliderportrait8.jpg",
    "/sliderportrait9.jpg",
    "/sliderportrait10.jpg",
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section
      ref={ref}
      className="w-full font-inter text-white overflow-hidden relative flex flex-col items-center justify-start "
      style={{
        minHeight: "120vh",
        background: "linear-gradient(to bottom, #0a0a0a 40%, #ffffff 90%)",
        color: "#ebebeb",
      }}
    >
      {/* Hero Content */}
      <div className="pt-28 text-center px-4 z-10">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Redefining Real Estate in Nigeria—
          </motion.span>
          <br />
          <motion.span
            className="text-[#D3BD9E] inline-block"
            style={{ minHeight: "1.5em" }} // Prevent layout shift
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Typewriter
              words={["Welcome to Vestvale Estate"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg mb-8 max-w-xl mx-auto text-[#ccc] font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Experience the fusion of timeless architecture: International interior
          design, and modern eco-conscious living.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.button
            className="cursor-pointer px-6 py-3 bg-[#D3BD9E] text-[#17120F] rounded-md font-medium text-sm md:text-base tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            onClick={() => {
              const el = document.getElementById("homedecor");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home Accessories
          </motion.button>

          <motion.button
            className="cursor-pointer px-6  py-3 border border-[#9d6b53] text-white rounded-md font-medium text-sm md:text-base tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            onClick={() => {
              const el = document.getElementById("interiorDecor");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Interiors
          </motion.button>
        </motion.div>
      </div>

      {/* Carousel Image Container */}
      <div className="w-full flex justify-center items-center mt-16 md:mt-24 relative z-0 px-4">
        <div
          className="w-full md:w-3/4 relative"
          style={{
            minHeight: "600px", // Add minimum height
            maskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            maskSize: "100% 100%",
          }}
        >
          {heroImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Hero Visual ${index + 1}`}
              className="w-full h-40% object-cover absolute top-0 left-0"
              style={{ filter: "blur(0.3px)" }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                scale: index === currentImageIndex ? 1 : 1.05,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                title="image slider"
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-[#D3BD9E] w-6"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
