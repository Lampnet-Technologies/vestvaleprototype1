"use client";

import React, { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, useInView, useAnimation, easeInOut } from "framer-motion";

interface BespokeCardProps {
  name: string;
  image: string;
  text: string;
  index: number;
}

const BespokeCard: React.FC<BespokeCardProps> = ({
  name,
  image,
  text,
  index,
}) => {
  const router = useRouter();
  const slug = name.toLowerCase().replace(/\s+/g, "");
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
      x: index % 2 === 0 ? -80 : 80,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.8,
        ease: easeInOut,
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
      onClick={() => router.push(`/bespoke/${slug}`)}
    >
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="mt-4 text-white text-center text-lg font-semibold uppercase tracking-wide">
          {name}
        </h2>
        <p className="text-gray-200 text-sm mt-1">{text}</p>
      </div>
    </motion.div>
  );
};

const bespoke = [
  {
    name: "Astoria",
    text: "Features high-quality materials such as rich woods, luxurious fabrics, and elegant finishes that enhance the overall aesthetic.",
    image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427762/Astoria1_omjh5i.jpg",
  },
  {
    name: "Emerald",
    text: "Synonymous with timeless beauty and sophistication, making it a perfect choice for those who appreciate classic design.",
    image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427729/Emerald1_ycgyow.jpg",
  },
  {
    name: "Sapphire",
    text: "Transform your living space into an elegant haven with Sapphire Home Interior, where every room tells a story of refined beauty.",
    image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427754/saphire8_q8ps4v.jpg",
  },
  {
    name: "Windsor",
    text: "Characterized by its graceful lines, intricate detailing, and a harmonious blend of traditional and contemporary elements.",
    image: "https://res.cloudinary.com/dnoycjq2q/image/upload/v1759427770/Windsor_1_x3puah.jpg",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export const BespokePropertiesSection = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>((props, ref) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.3, once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      id="bespokeinterior"
      className="w-full md:w-10/12 mx-auto py-16 text-white font-inter px-4 lg:px-0"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: easeInOut }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-semibold mb-2">
          Bespoke Interior
        </h2>
        <div className="w-20 h-1 bg-amber-800 mx-auto"></div>
        <p className="mt-4 max-w-2xl mx-auto">
          Specializing in Creating Luxurious and Timeless Living Spaces
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {bespoke.map((bespoke, index) => (
          <BespokeCard
            key={bespoke.name}
            name={bespoke.name}
            image={bespoke.image}
            text={bespoke.text}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
});
