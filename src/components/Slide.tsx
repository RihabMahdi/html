import { motion } from 'framer-motion'
import { Flag, Building, Users, Cpu, Rocket, Lightbulb, Heart } from 'lucide-react'

const icons = {
  flag: Flag,
  building: Building,
  users: Users,
  cpu: Cpu,
  rocket: Rocket,
  lightbulb: Lightbulb,
  heart: Heart
}

interface SlideProps {
  title: string
  Catégorie: string
  Services: string
  Type: string
  Cibles: string
  Couverture: string
  Siteweb: string
  content?: string
  image: string
  icon: keyof typeof icons
}

export default function Slide({ 
  title, 
  Catégorie, 
  Services, 
  Type, 
  Cibles, 
  Couverture, 
  Siteweb, 
  content, 
  image, 
  icon 
}: SlideProps) {
  const Icon = icons[icon]

  return (
    <div className="bg-navy-800 bg-opacity-80 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm relative group">
      <div className="relative h-64 md:h-96">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent"></div>
        <motion.div
          className="absolute bottom-4 left-4 bg-teal-500 rounded-full p-2"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
      </div>
      <div className="p-6 relative">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-4 text-teal-400 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h2>
        {content && (
          <motion.p
            className="text-gray-300 text-md text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {content}
          </motion.p>
        )}
        
        {/* Hover Details */}
        <div className="absolute inset-0 bg-navy-900 bg-opacity-90 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10 overflow-y-auto">
          <h3 className="text-xl font-semibold text-teal-400 mb-4">Détails de l'Initiative</h3>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium text-teal-400">Catégorie:</span> {Catégorie}</p>
            <p><span className="font-medium text-teal-400">Services:</span> {Services}</p>
            <p><span className="font-medium text-teal-400">Type:</span> {Type}</p>
            <p><span className="font-medium text-teal-400">Cibles:</span> {Cibles}</p>
            <p><span className="font-medium text-teal-400">Couverture:</span> {Couverture}</p>
            {Siteweb && (
              <p>
                <span className="font-medium text-teal-400">Site web:</span>{' '}
                <a 
                  href={Siteweb} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-400 hover:underline"
                >
                  {Siteweb}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}