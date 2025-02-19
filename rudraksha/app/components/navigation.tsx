"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex flex-row">
            <Image src="/logo.jpg" alt="logo" width={30} height={30} />
            <Link href="/" className="text-2xl text-white self-end ml-3">
              Rudraksha Seva
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-zinc-300 hover:text-white transition">
              Home
            </a>
            <a href="#about" className="text-zinc-300 hover:text-white transition">
              About
            </a>
            <a href="#services" className="text-zinc-300 hover:text-white transition">
              Services
            </a>

            {/* Click to Call on Mobile */}
            <a
              href="tel:+919493151800"
              className="px-6 py-2 bg-amber-500 text-zinc-900 rounded-full hover:bg-amber-400 transition"
            >
              Consult Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#home" className="text-zinc-300 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
              <a href="#about" className="text-zinc-300 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
              <a href="#services" className="text-zinc-300 hover:text-white transition" onClick={() => setIsMenuOpen(false)}>
                Services
              </a>

              {/* Click to Call on Mobile */}
              <a
                href="tel:+919876543210"
                className="px-6 py-2 bg-amber-500 text-zinc-900 rounded-full hover:bg-amber-400 transition text-center"
              >
                Consult Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
