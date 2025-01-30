import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import categories from '../data/categories';

export default function Categories() {
  return (
    <motion.div
      className="fixed top-6 left-0  w-full  border-b border-white/10 rounded-b-3xl z-40 lg:block hidden overflow-hidden"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="max-w-[1920px] bg-[#00CFFD] pb-3 pt-[50px] px-5 text-white shadow-2xl mx-auto flex flex-wrap md:flex-nowrap justify-start items-center gap-4">
        <motion.div
          className="flex items-center gap-2 text-gray-900"
          whileHover={{ scale: 1.1 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0.6 } }}
        >
          <p className="font-semibold text-lg">Categories</p>
          <MoveRight className="pt-1" />
        </motion.div>

        <div className="flex flex-wrap justify-around gap-3 w-full">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              className="px-4 py-2 text-sm md:text-md font-medium tracking-wide text-gray-900 bg-white rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: {
                  delay: 0.1 * index,
                  duration: 0.4,
                  ease: 'easeOut',
                },
              }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
