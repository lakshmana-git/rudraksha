"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./About.css";

const images = ["/guru.png", "/guru2.png", "/guru3.png"];

export default function About() {
  return (
    <div id='about' className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-16 text-white">
      {/* Left Content Section */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          About Us
        </h2>
        <p className="text-lg text-gray-300">
          Welcome to{" "}
          <span className="text-amber-400 font-semibold">
            Rudraksha Prachara Seva Samithi
          </span>
          , a trusted center for <b>Rudraksha, Astrology, Vastu,</b> and{" "}
          <b>Gemstone Examination</b>. Our mission is to guide individuals
          toward <b>spiritual and material well-being</b> through ancient
          wisdom and genuine solutions.
        </p>
        <p className="text-lg text-gray-300">
          Founded on a legacy of astrology, <b>Ganesh Babu Tadiparthy</b> carries
          forward the knowledge inherited from his father,{" "}
          <b>Venkateswara Rao</b>, a renowned astrologer with{" "}
          <b>over 25 years of experience</b>.
        </p>

        {/* Expertise Section */}
        <h3 className="mt-6 text-2xl font-semibold text-amber-400">
          Our Expertise
        </h3>
        <ul className="mt-4 text-lg text-gray-300 space-y-3">
          <li>
            ✨ <b>Rudraksha:</b> Supplying authentic Rudrakshas from Nepal,
            Indonesia, and other regions.
          </li>
          <li>
            ✨<b>Astrology:</b> In-depth horoscope analysis to recommend
            suitable Rudrakshas and gemstones.
          </li>
          <li>
            ✨ <b>Vastu:</b> Expert Vastu solutions to correct defects and bring
            harmony.
          </li>
          <li>
            ✨<b>Gemstone Examination:</b> Assisting in selecting and testing
            high-quality gemstones.
          </li>
        </ul>

        <button className="mt-6 px-6 py-2 bg-amber-500 text-gray-900 font-semibold rounded-full hover:bg-amber-400 transition">
        <a
                href="tel:+919876543210"
              >
                Consult Now
              </a>
        </button>
      </motion.div>

      {/* Right Image Scrolling Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0 overflow-hidden relative"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
      >
        <ImageCarousel images={images} />
      </motion.div>
    </div>
  );
}

// Image Carousel Component
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center"
    >
      <Image 
        src={images[index]}
        alt="Scrolling Image"
        className="rounded-lg shadow-lg object-cover"
        width={400}
        height={400}
      />
    </motion.div>
  );
};
