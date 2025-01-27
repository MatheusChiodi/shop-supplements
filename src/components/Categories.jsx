import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import categories from '../data/categories';

export default function Categories() {
  return (
    <motion.div
      className="relative mt-10 pt-10 w-[98%] ms-[1%] px-4 bg-gradient-to-r from-[#ade8f4] to-[#caf0f8] text-white shadow-2xl border-b border-white/10 rounded-b-3xl z-40 h-auto py-4 hidden lg:block"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="flex flex-wrap md:flex-nowrap justify-start items-center gap-4">
        <motion.div
          className="flex items-center gap-2 text-gray-900"
          whileHover={{ scale: 1.1 }}
        >
          <p className="font-semibold text-lg">Categories</p>
          <MoveRight className="pt-1" />
        </motion.div>

        <div className="flex flex-wrap justify-around gap-3 w-full">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className="px-4 py-2 text-sm md:text-md font-medium tracking-wide text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
