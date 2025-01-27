import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import categories from '../data/categories';

export default function Categories() {
  return (
    <motion.div
      className="mt-11 w-[98%] ms-[1%] px-4 bg-gradient-to-r from-[#ade8f4] to-[#caf0f8] text-white shadow-2xl border-b border-white/10 rounded-b-3xl z-50 h-[60px]"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="flex space-x-4 mt-2 pt-6 text-gray-900 ">
        <div className="flex justify-center items-center gap-2">
          <p className="font-medium">Categories</p>
          <MoveRight className="pt-1" />
        </div>
        <div className="flex justify-between items-center space-x-4 w-full pt-1 pe-3">
          {categories.map((category) => (
            <button
              key={category.id}
              className="text-sm font-medium tracking-wide text-gray-900 hover:text-gray-700 transition duration-300"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
