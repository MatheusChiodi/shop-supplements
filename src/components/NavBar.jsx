import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-[98%] left-[1%] bg-gradient-to-r from-[#141E30] to-[#243B55] text-white shadow-2xl border-b border-white/10 rounded-3xl z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="flex lg:justify-between justify-between items-center h-16 px-4 lg:px-10">
        {/* Logo com efeito 3D */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{
            scale: 1.1,
            rotateY: [0, 10, -10, 0],
            transition: { duration: 0.4 },
          }}
        >
          <motion.img
            src={`./logo.png`}
            alt="Logo"
            className="w-12 h-12 cursor-pointer drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: 'easeOut' },
            }}
          />
          <span className="text-xl font-semibold lg:hidden">
            Shop Supplements
          </span>
        </motion.div>

        {/* Links para Desktop */}
        <div className="hidden lg:flex items-center space-x-8 w-[100%] mx-auto justify-between">
          <motion.input
            type="text"
            className="bg-[#fff] text-white p-3 rounded-lg shadow-inner w-[320px] placeholder-gray-400 focus:ring-2 focus:ring-[#00CFFD] focus:outline-none transition"
            placeholder="🔍 Search products..."
            whileFocus={{
              scale: 1.05,
              boxShadow: '0 0 10px rgba(0, 149, 199, 0.8)',
            }}
          />

          <motion.div className="flex space-x-6">
            <Link
              to=""
              className="relative text-lg font-semibold tracking-wider text-white hover:text-[#00CFFD] transition duration-300"
            >
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#00CFFD] transition-all duration-300 group-hover:w-full"></span>
              Shop
            </Link>

            <Link
              to=""
              className="relative text-lg font-semibold tracking-wider text-white hover:text-[#00CFFD] transition duration-300"
            >
              About Us
            </Link>

            <Link
              to=""
              className="relative text-lg font-semibold tracking-wider text-white hover:text-[#00CFFD] transition duration-300"
            >
              Contact
            </Link>
          </motion.div>

          <div className="flex items-center space-x-6">
            <Link
              to=""
              className="px-5 py-2 bg-[#00CFFD] text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              Register / Login
            </Link>

            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full bg-white text-gray-800 shadow-lg cursor-pointer"
            >
              <ShoppingCart size={24} />
            </motion.div>
          </div>
        </div>

        {/* Botão do Menu Mobile */}
        <motion.button
          className="lg:hidden p-2 rounded-full bg-[#00CFFD] text-white shadow-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Menu Mobile */}
      <motion.div
        className={`lg:hidden flex flex-col items-center bg-[#1E293B] text-white transition-all duration-300 rounded-3xl overflow-hidden ${
          menuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0, height: menuOpen ? 'auto' : 0 }}
      >
        <div className="py-4 w-full text-center text-lg border-b border-gray-700 gap-5 flex flex-col items-center">
          <div className="flex justify-center items-center gap-4 border-b border-gray-700 w-full py-4">
            <Link
              to="/shop"
              className="text-xl font-semibold tracking-wide hover:text-[#00CFFD] transition duration-300"
            >
              🛍️ Shop
            </Link>

            <Link
              to="/about"
              className="text-xl font-semibold tracking-wide hover:text-[#00CFFD] transition duration-300"
            >
              ℹ️ About Us
            </Link>

            <Link
              to="/contact"
              className="text-xl font-semibold tracking-wide hover:text-[#00CFFD] transition duration-300"
            >
              📞 Contact
            </Link>
          </div>

          <Link
            to="/login"
            className="px-6 py-3 bg-[#00CFFD] text-white rounded-xl font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Register / Login
          </Link>

          <motion.div
            whileHover={{ scale: 1.2 }}
            className="mt-2 p-3 rounded-full bg-white text-gray-800 shadow-lg"
          >
            <ShoppingCart size={24} />
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
