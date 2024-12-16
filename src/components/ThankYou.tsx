import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ThankYou() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      ref={ref}
      className="bg-navy-800 py-16"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Merci pour votre attention</h2>
        <p className="text-xl text-gray-300 text-center">Ensemble, construisons l'avenir entrepreneurial du Maroc</p>
      </div>
    </motion.section>
  )
}

