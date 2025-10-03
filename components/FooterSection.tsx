"use client";

import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
/* import { motion } from "framer-motion"; */
import Image from "next/image";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const FooterSection = () => {
  return (
    <footer className="bg-[#D3BD9E] text-black py-12 sm:py-16 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Centered Above */}
        <div className="">
          <Image
            src="https://res.cloudinary.com/dnoycjq2q/image/upload/v1752771973/logo1_m5rvdz.png"
            alt="Vestvale logo"
            width={80}
            height={80}
          />
        </div>

        {/* <div className="flex items-center ">
          <Link href={"/"}><Image
            src="/logo-change.png"
            alt="Vestvale Logo"
            width={20}
            height={30}
            className="md:w-14 w-10"
            /></Link>
        </div> */}

        {/* Flex Grouped Sections */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-6">
          {/* motion div */}
          {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left"
          >
            </motion.div> */}
          {/* Vestvale + Navigation */}
          {/* About / Service / Virtual Tour Section */}
          <div className="space-y-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href="#about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#service"
                  className="hover:text-white transition-colors"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  href="#virtualtour"
                  className="hover:text-white transition-colors"
                >
                  Virtual Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Home Accessories */}
          <div>
            <h3 className="text-lg font-bold text-[#361B06] mb-4">
              Home Accessories
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/accessories/door-handles"
                  className="hover:text-white transition-colors"
                >
                  Door Handles
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/wallpapers"
                  className="hover:text-white transition-colors"
                >
                  Wallpapers
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/lights"
                  className="hover:text-white transition-colors"
                >
                  Lights
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/doors"
                  className="hover:text-white transition-colors"
                >
                  Doors
                </Link>
              </li>
              <li>
                <Link
                  href="/accessories/tiles"
                  className="hover:text-white transition-colors"
                >
                  Tiles
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Interior Decoration */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-bold text-[#361B06]">
              Interior Decoration
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/country/russia"
                  className="hover:text-white transition-colors"
                >
                  Russia
                </Link>
              </li>
              <li>
                <Link
                  href="/country/italy"
                  className="hover:text-white transition-colors"
                >
                  Italy
                </Link>
              </li>
              <li>
                <Link
                  href="/country/china"
                  className="hover:text-white transition-colors"
                >
                  China
                </Link>
              </li>
              <li>
                <Link
                  href="/country/morocco"
                  className="hover:text-white transition-colors"
                >
                  Morocco
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Bespoke Interior */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-bold text-[#361B06]">
              Bespoke Interior
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/bespoke/astoria"
                  className="hover:text-white transition-colors"
                >
                  Astoria
                </Link>
              </li>
              <li>
                <Link
                  href="/bespoke/emerald"
                  className="hover:text-white transition-colors"
                >
                  Emerald
                </Link>
              </li>
              <li>
                <Link
                  href="/bespoke/sapphire"
                  className="hover:text-white transition-colors"
                >
                  Sapphire
                </Link>
              </li>
              <li>
                <Link
                  href="/bespoke/windsor"
                  className="hover:text-white transition-colors"
                >
                  Windsor
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Office */}
          <div className="flex-1 space-y-4">
            <h3 className="text-lg font-bold text-[#361B06]">
              Our Email Address
            </h3>

            <div className="mt-4 space-y-2">
              <a
                href="mailto:info@vestvaleestate.com"
                className=" hover:text-white transition-colors"
              >
                Info@vestvaleestate.com
              </a>
            </div>

            {/* <div className="flex space-x-4">
            {[FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-white transition-colors">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <ul className="flex space-x-6 text-sm">
            {["Privacy Policy", "Cookie Policy", "Security"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul> */}
          </div>

          <div className="flex flex-col">
            <div className="flex space-x-4">
              {[
                { Icon: FaTwitter, href: "https://twitter.com/yourhandle" },
                { Icon: FaInstagram, href: "https://instagram.com/yourhandle" },
                {
                  Icon: FaLinkedin,
                  href: "https://linkedin.com/in/yourhandle",
                },
              ].map(({ Icon, href }, i) => (
                <Link
                  key={i+2}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
            <ul className="flex flex-col space-y-4 text-sm mt-4">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Cookie Policy", href: "/cookie-policy" },
                { label: "Security", href: "/security" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t font-inter border-black pt-4 mt-8 text-center text-sm"
          >
          <p>&copy; {new Date().getFullYear()} Vestvale Homes & Decor. All rights reserved.</p>
        </motion.div> */}
        </section>
      </div>
    </footer>
  );
};

export default FooterSection;
