import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.header
      className="relative bg-gradient-to-r from-nude-700 via-nude-700 to-beige-500 py-4 shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: "url('/path-to-pattern.svg')",
          backgroundSize: 'cover',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Floating title */}
        <motion.h1
          className="text-2xl font-extrabold text-white tracking-widest md:text-2xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          Les initiatives d'entrepreneuriat au Maroc
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-beige-300 text-lg mt-2 md:text-xl"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.6,
          }}
        >
        </motion.p>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-x-10 -translate-y-10"
        animate={{
          x: [0, 10, -10, 0],
          y: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full translate-x-10 translate-y-10"
        animate={{
          x: [0, -15, 15, 0],
          y: [0, -15, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </motion.header>
  )
}

export default Header;
