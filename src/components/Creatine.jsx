import { motion } from 'framer-motion';
import { MoveRight, Star } from 'lucide-react';
import { useRef } from 'react';
import products from '../data/creatineProducts'; // Arquivo separado para os produtos de creatina

export default function Creatine() {
  const carouselRef = useRef(null);

  return (
    <motion.div
      className="mt-8 w-[98%] ms-[1%] flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 px-6 py-6 bg-gradient-to-r from-white to-gray-100 rounded-3xl shadow-2xl"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="w-full lg:w-[70%] flex flex-col">
        <div className="flex items-center justify-start text-gray-900 gap-5">
          <h2 className="text-[24px] md:text-[28px] lg:text-[36px] font-extrabold">
            Discover Our Creatine
          </h2>
          <motion.div whileHover={{ scale: 1.05 }}>
            <MoveRight className="text-[#00CFFD] cursor-pointer" size={32} />
          </motion.div>
        </div>

        <div className="relative mt-4">
          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth whitespace-nowrap px-1 no-scrollbar"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-[220px] h-[280px] bg-white rounded-2xl flex flex-col items-center justify-center p-4 gap-3 border border-gray-200 relative"
              >
                <motion.div
                  className="text-3xl"
                  whileHover={{ scale: 1.2, rotateY: [0, 10, -10, 0] }}
                >
                  {product.icon}
                </motion.div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-[#00CFFD] text-md font-bold">
                  {product.price}
                </p>

                <ul className="text-gray-600 text-sm text-center">
                  {product.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <Star size={14} className="text-yellow-400 mr-1" />{' '}
                      {benefit}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className="mt-2 bg-[#00CFFD] text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-[#008fc7] transition-all cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy Now
                </motion.button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        src={`./wallpapers/creatine.png`}
        alt="Creatine"
        className="w-[320px] h-[420px] object-cover rounded-2xl shadow-lg lg:block hidden"
      />
    </motion.div>
  );
}
