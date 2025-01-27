import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

export default function CardProduct({product, key}) {
  return (
    <div
      key={key}
      className="w-[220px] h-[280px] bg-white rounded-2xl flex flex-col items-center justify-center p-4 gap-3 border border-gray-200 relative"
    >
      <motion.div
        className="text-3xl"
        whileHover={{ scale: 1.2, rotateY: [0, 10, -10, 0] }}
      >
        {product.icon}
      </motion.div>

      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="text-[#00CFFD] text-md font-bold">{product.price}</p>

      <ul className="text-gray-600 text-sm text-center">
        {product.benefits.map((benefit, index) => (
          <li key={index} className="flex items-center justify-center">
            <Star size={14} className="text-yellow-400 mr-1" /> {benefit}
          </li>
        ))}
      </ul>

      <Button title="Buy Now" />
    </div>
  );
}
