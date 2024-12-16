import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building, Users, Cpu, Flag, Heart, Rocket, Lightbulb } from 'lucide-react'

const icons = {
  building: Building,
  users: Users,
  cpu: Cpu,
  flag: Flag,
  heart: Heart,
  rocket: Rocket,
  lightbulb: Lightbulb
}

interface InitiativeCardProps {
  title: string
  Catégorie: string
  Services: string
  Type: string
  Cibles: string
  Couverture: string
  Siteweb: string
  content?: string
  icon: keyof typeof icons
  image: string
  index: number
}

export default function InitiativeCard({ 
  title, 
  Catégorie, 
  Services, 
  Type, 
  Cibles, 
  Couverture, 
  Siteweb, 
  content, 
  icon, 
  image, 
  index 
}: InitiativeCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const Icon = icons[icon]

  return (
    <motion.div
      ref={ref}
      className="bg-navy-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-48 ">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent "></div>
        <div className="absolute bottom-4 left-4 bg-teal-500 rounded-full p-2">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {content && <p className="text-gray-300 mb-4">{content}</p>}
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
    </motion.div>
  )
}