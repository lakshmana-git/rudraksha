"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import './About.css'
export default function Footer() {
  return (
    <motion.footer
      className="gradient text-gray-300 py-10 px-6 md:px-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left - About */}
        <div>
        <Image src="/logo.jpg" alt='logo' width={100} height={100} />
          <p className="mt-3 text-gray-400">
            We provide expert services in <b>Rudraksha, Astrology, Vastu,</b> and <b>Gemstone Examination</b>. Our mission is to guide individuals toward spiritual and material well-being.
          </p>
        </div>

        {/* Middle - Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-amber-400">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#home" className="hover:text-amber-400">Home</a></li>
            <li><a href="#services" className="hover:text-amber-400">Services</a></li>
            <li><a href="#about" className="hover:text-amber-400">About</a></li>
            
          </ul>
        </div>

        {/* Right - Contact */}
        <div>
          <h3 className="text-xl font-bold text-amber-400">Contact Us</h3>
          <ul className="mt-3 space-y-2">
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-amber-400" /> Near V.S.R & N.V.R College, Somasundaraoalem Canal Road</li>
            <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-amber-400" /> Tenali, Guntur(d), A.P. India</li>
            <li className="flex items-center"><FaPhone className="mr-2 text-amber-400" /> +91 94931 51800</li>
            <li className="flex items-center"><FaEnvelope className="mr-2 text-amber-400" /> rudrakshaseva@gmail.com</li>
          </ul>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4">
            
            <a href="https://www.instagram.com/ganeshbabutadiparthy?igsh=bjhncTEwejNlbDI0" className="text-gray-400 hover:text-amber-400 text-2xl"><FaInstagram /></a>
            <a href="https://www.youtube.com/@ganeshbabutadiparthy6666" className="text-gray-400 hover:text-amber-400 text-2xl"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500">
        © {new Date().getFullYear()} Rudraksha Prachara Seva Samithi. All rights reserved.
      </div>
    </motion.footer>
  );
}
