"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { easeInOut, motion, useAnimation, useInView } from "framer-motion";

interface AccessoriesCardProps {
  image: string;
  title: string;
  index: number;
}

export const AccessoriesCard: React.FC<AccessoriesCardProps> = ({
  image,
  title,
  index,
}) => {
  const router = useRouter();
  const slug = title.toLowerCase().replace(/\s+/g, "");
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? 80 : -80, // Alternate directions
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="cursor-pointer flex flex-col items-center transition-transform hover:scale-105"
      onClick={() => router.push(`/accessories/${slug}`)}
    >
      <div className="relative overflow-hidden w-full h-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          className="absolute w-full h-full rounded-md shadow-lg object-cover"
        />
      </div>
      <p className="font-medium text-start text-lg w-full my-2">{title}</p>
    </motion.div>
  );
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeInOut,
    },
  },
};

export const Accessories = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const theAccessories = [
    { image: "/image-05.svg", title: "Door Handles" },
    { image: "/door.svg", title: "Doors" },
    { image: "/lights.svg", title: "Lights" },
    { image: "/wallpaper.svg", title: "Wallpapers" },
    { image: "/tiles.svg", title: "Tiles" },
  ];

  return (
    <motion.section
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      id="homeAccessories"
      className="w-full md:w-10/12 mx-auto py-16 bg-[#17120F] text-white font-inter px-4 lg:px-0"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: easeInOut }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">
          Home Accessories
        </h2>
        <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
        <p className="mt-4 max-w-2xl mx-auto">
          Complete your vintage home with our curated selection of classic home
          accessories
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {theAccessories.map((accessory, index) => (
          <AccessoriesCard
            key={index}
            image={accessory.image}
            title={accessory.title}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
});
