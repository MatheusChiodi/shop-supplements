import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="relative w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-8 mt-10 rounded-t-3xl shadow-2xl"
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="max-w-[1920px] mx-auto flex flex-wrap justify-between items-start gap-6">
        <motion.div
          className="w-full md:w-1/3 flex flex-col justify-center items-center"
          whileHover={{ scale: 1.02 }}
        >
          <img src="./logo.png" alt="Logo" className="w-20 h-20 mb-3" />
          <p className="text-gray-400 text-sm text-center">
            Your destination for the best supplements! Quality and performance
            to achieve your goals.
          </p>
        </motion.div>

        <div className="flex flex-col gap-2 mx-auto">
          <h3 className="text-lg font-semibold text-[#00CFFD]  text-center">
            Quick Links
          </h3>
          <motion.a
            href="/"
            className="text-gray-400 hover:text-white transition text-center"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.a
            href="/wheys"
            className="text-gray-400 hover:text-white transition text-center"
            whileHover={{ scale: 1.05 }}
          >
            Whey Proteins
          </motion.a>
          <motion.a
            href="/creatine"
            className="text-gray-400 hover:text-white transition text-center"
            whileHover={{ scale: 1.05 }}
          >
            Creatine
          </motion.a>
          <motion.a
            href="/contact"
            className="text-gray-400 hover:text-white transition text-center"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.a>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-[#00CFFD] md:text-left text-center">
            Contact
          </h3>
          <motion.div
            className="flex items-center gap-2 text-gray-400 md:justify-start justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={18} className="text-[#00CFFD]" /> mchiodidev@gmail.com
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-gray-400 md:justify-start justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={18} className="text-[#00CFFD]" /> +99 99 99999-9999
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-gray-400 md:justify-start justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={18} className="text-[#00CFFD]" /> São Paulo, Brasil
          </motion.div>
        </div>
      </div>

      <div className="w-full mt-6 flex justify-center gap-6">
        <motion.a
          href="#"
          className="text-gray-400 hover:text-white transition"
          whileHover={{ scale: 1.2 }}
        >
          <Facebook size={24} className="hover:text-white" />
        </motion.a>
        <motion.a
          href="#"
          className="text-gray-400 hover:text-white transition"
          whileHover={{ scale: 1.2 }}
        >
          <Instagram size={24} className="hover:text-white" />
        </motion.a>
        <motion.a
          href="#"
          className="text-gray-400 hover:text-white transition"
          whileHover={{ scale: 1.2 }}
        >
          <Twitter size={24} className="hover:text-white" />
        </motion.a>
      </div>

      <div className="w-full text-center text-gray-500 text-sm mt-4">
        © 2025 Shop Supplements. All rights reserved.
      </div>
    </motion.footer>
  );
}
