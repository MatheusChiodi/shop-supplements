import { motion } from 'framer-motion';
import { MoveRight, Star } from 'lucide-react';
import { useRef } from 'react';
import products from '../data/products';
import CardProduct from './CardProduct';

export default function Wheys() {
  const carouselRef = useRef(null);

  // Função para rolagem lateral do carrossel
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <motion.div
      className="w-[98%] ms-[1%] flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 px-6 py-6 bg-gradient-to-r from-white to-gray-100 rounded-3xl shadow-2xl"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <img
        src={`./wallpapers/wheys.png`}
        alt="Wheys"
        className="w-[320px] h-[420px] object-cover rounded-2xl shadow-lg lg:block hidden"
      />

      <div className="w-full lg:w-[70%] flex flex-col">
        <div className="flex items-center justify-start text-gray-900 gap-5">
          <h2 className="text-[24px] md:text-[28px] lg:text-[36px] font-extrabold">
            Discover Our Wheys
          </h2>
          <motion.div whileHover={{ scale: 1.05 }}>
            <MoveRight className="text-[#00CFFD] cursor-pointer" size={32} />
          </motion.div>
        </div>

        <div className="relative mt-4">
          <button
            className="absolute left-0 z-10 bg-white shadow-md p-3 rounded-full hidden md:block cursor-pointer hover:bg-gray-100"
            onClick={scrollLeft}
          >
            ◀
          </button>
          <button
            className="absolute right-0 z-10 bg-white shadow-md p-3 rounded-full hidden md:block cursor-pointer hover:bg-gray-100"
            onClick={scrollRight}
          >
            ▶
          </button>

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scroll-smooth whitespace-nowrap px-1 no-scrollbar"
          >
            {products.map((product) => (
              <CardProduct product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
