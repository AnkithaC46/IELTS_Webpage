import React from "react";
// Using appropriate icons for an educational institute (LinkedIn, Instagram are common)
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; 

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* 1. Brand & Social Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white">
              IELTS Mastery
            </h2>
            <p className="mt-3 text-sm max-w-xs">
              Expert training and personalized guidance to help you achieve your target band score.
            </p>

            {/* Social Icons (Kept for completeness) */}
            <div className="flex space-x-4 mt-5">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* 2. Quick Links Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-sky-500 transition">Home</a></li>
              <li><a href="#courses" className="hover:text-sky-500 transition">Courses</a></li>
              <li><a href="#features" className="hover:text-sky-500 transition">Features</a></li>
              <li><a href="#contact" className="hover:text-sky-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* 3. Contact Info Section */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-sky-400 flex-shrink-0" size={16} />
                <span className="max-w-xs">123, Learning Street, Bangalore, India</span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-sky-400 flex-shrink-0" size={16} />
                <a href="mailto:info@ieltsmastery.com" className="hover:text-sky-500 transition">info@ieltsmastery.com</a>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-sky-400 flex-shrink-0" size={16} />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col items-center">
            {/* Removed FaHeart/Crafted with love for professional footer */}
          <p className="text-sm text-gray-400 text-center">
            © 2025 IELTS Mastery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}