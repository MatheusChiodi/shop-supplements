import { motion } from 'framer-motion';

export default function Button({ title }) {
  return (
    <motion.button
      className=" bg-[#00CFFD] text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-[#008fc7] transition-all cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.button>
  );
}
