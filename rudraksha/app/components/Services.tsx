"use client";

import { motion } from "framer-motion";
import './About.css'
const services = [
  {
    title: "Rudraksha Consultation & Supply",
    description:
      "With over 25 years of expertise, we provide genuine and high-quality Rudrakshas sourced from Nepal, Indonesia, and other regions. Rudraksha beads have spiritual and health benefits, helping individuals align their energy, reduce stress, and enhance focus. Based on your horoscope and personal requirements, we recommend the most suitable Rudraksha to bring balance and prosperity into your life.",
    image: "/rudra.jpg",
  },
  {
    title: "Astrology & Horoscope Analysis",
    description:
      "Astrology plays a key role in understanding one’s life journey. Ganesh Babu Tadiparthy, carrying forward the astrological legacy of his father, Venkateswara Rao, specializes in detailed horoscope readings. By analyzing planetary positions and chakra influences, he provides guidance on life challenges, career, relationships, health, and spiritual growth. Personalized solutions, including the use of Rudrakshas and gemstones, are offered to enhance positivity and reduce obstacles",
    image: "/astro.JPG",
  },
  {
    title: "Vastu Consultation & Remedies",
    description:
      "Vastu Shastra is an ancient science that governs the energy flow within homes, offices, and commercial spaces. Our expert Vastu consultations identify defects that might be causing financial, health, or relationship issues. We provide practical and effective remedies to harmonize the energy in your space, ensuring peace, prosperity, and success.",
    image: "/vastu.JPG",
  },
  {
    title: "Gemstone Selection & Examination",
    description:
      "Gemstones have powerful astrological benefits, but choosing the right one is crucial. We offer authentic gemstone selection and examination services to help individuals find the most suitable gem based on their horoscope. Our expertise ensures that you receive only natural, high-quality gemstones that enhance positive planetary influences and help achieve desired outcomes.",
    image: "/stone.jpg",
  },
];

export default function Services() {
  return (
    <div id='services' className="py-16 px-4 md:px-16 text-white gradient">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-center bg-gray-900 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg shadow-md"
            />
            <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
              <h3 className="text-xl font-semibold text-amber-400">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
