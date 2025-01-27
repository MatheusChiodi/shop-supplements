import { motion } from 'framer-motion';

export default function SlideWallpaper() {
  return (
    <motion.div
      className="relative w-full shadow-2xl border-b border-white/10 rounded-b-3xl overflow-hidden z-30 mt-0"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.img
        src={`./wallpapers/supplements.png`}
        alt="wallpaper"
        className="w-full h-screen max-h-[920px] object-cover brightness-50"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
      >
        <h1 className="md:text-4xl text-2xl font-bold drop-shadow-lg">
          "Strength comes from within. Overcome your limits!"
        </h1>
        <p className="text-lg md:text-2xl mt-3 font-light drop-shadow-md">
          Supplementation and training for your best performance.
        </p>
      </motion.div>
    </motion.div>
  );
}
