import { motion } from 'framer-motion';
import {
  Coins,
  MessageSquareText,
  ShoppingCart,
  Ticket,
  Truck,
  BadgePlus,
} from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: <Truck />,
    text: 'Free shipping from R$ 150*',
  },
  {
    id: 2,
    icon: <Ticket />,
    text: '10% OFF on boleto or PIX',
  },
  {
    id: 3,
    icon: <Coins />,
    text: 'CASHBACK POINTS',
  },
  {
    id: 4,
    icon: <MessageSquareText />,
    text: 'Sports Nutritionist',
  },
  {
    id: 5,
    icon: <ShoppingCart />,
    text: 'Up to 12x interest-free',
  },
];

export default function Benefits() {
  return (
    <motion.div
      className="w-[98%] ms-[1%] p-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="flex items-center justify-center gap-4">
        <h2 className="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] text-center md:text-left mb-5 font-extrabold text-gray-900 drop-shadow-2xl">
          Benefits and Perks
        </h2>
        <BadgePlus
          size={40}
          className="text-[#00CFFD] mt-[-10px]"
        />
      </div>

      <div className="flex gap-6 justify-between gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-1 py-4 no-scrollbar">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            className="flex flex-col items-center justify-center gap-4 border border-gray-200 rounded-2xl p-6 w-full min-w-[180px] min-h-[200px] bg-white relative cursor-pointer"
            whileHover={{
              scale: 1.05,
            }}
          >
            <motion.div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#00CFFD] to-[#00F5D4] text-white rounded-full shadow-md">
              {benefit.icon}
            </motion.div>

            <p className="text-center text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-gray-900">
              {benefit.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
