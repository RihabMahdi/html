'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Slide from './components/Slide'
import ProgressBar from './components/ProgressBar'
import BackgroundAnimation from './components/BackgroundAnimation'
import Header from './components/Header'

const slides = [
  {
    title: "Les initiatives d'entrepreneuriat au Maroc",
    Catégorie: 'Général',
    Services: 'Informations sur les initiatives entrepreneuriales',
    Type: 'Sensibilisation',
    Cibles: "Entrepreneurs marocains et porteurs de projets",
    Couverture: "Nationale",
    Siteweb: "https://www.entrepreneuriatmaroc.ma",
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=1200&q=80",
    icon: "flag"
  },
  {
    title: "ADD (Agence de Développement Digital)",
    Catégorie: 'Digitalisation',
    Services: 'Accompagnement numérique, formation, financement',
    Type: 'Agence publique',
    Cibles: "Startups, PME, entrepreneurs",
    Couverture: "Nationale",
    Siteweb: "https://www.add.gov.ma",
    content: "Soutient l'entrepreneuriat au Maroc en promouvant la transformation numérique des entreprises, notamment des startups et des PME.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    icon: "cpu"
  },
  {
    title: "Maroc PME",
    Catégorie: 'Développement des PME',
    Services: `Le déploiement des programmes se fait à travers la consultance locale et les associations spécialisées 
    Appui technique à la croissance et développement des TPMEs  (Moussanda, Tahfiz) /t 
    Appui financier en amorçage et en phase de croissance des TPMEs (Subventions d’investissement IMTIAZ une prime de 
    30% du PI, plafonnée à 2 MDH et ISTITMAR une prime de 
    20% du PI, plafonnée à 10 MDH) 
    Renforcement des capacités entrepreneuriales et 
    managériales des porteurs de projets, auto-entrepreneurs, 
    et chefs de TPEs (Accompagnement groupé) 
    Appui Financier aux auto-entrepreneurs (Prêts d’honneur  
    plafonnés à 50 000 DH) `,
    Type: 'Technique   , Financier ',
    Cibles: "TPE et PME en phase d’amorçage et développement du secteur industriel ,Auto-entrepreneurs ",
    Couverture: "Nationale",
    Siteweb: "https://www.marocpme.gov.ma",
    content: "Une agence nationale marocaine dédiée au développement des Petites et Moyennes Entreprises (PME). Elle vise à renforcer leur compétitivité, leur productivité et leur capacité d'innovation.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    icon: "building"
  },
  {
    title: "ANAPEC",
    Catégorie: 'Emploi et entrepreneuriat',
    Services: 'Orientation entrepreneuriale ,Accompagnement à l’élaboration de business plan,Accompagnement à l’accomplissement des démarches administratives et juridiques  ',
    Type: 'Technique',
    Cibles: "Tout porteur de projets ",
    Couverture: "Nationale",
    Siteweb: "https://www.anapec.org",
    content: "Agence Nationale de Promotion de l'Emploi et des Compétences, soutient l'entrepreneuriat au Maroc à travers des programmes spécifiques qui encouragent la création d'entreprises",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    icon: "users"
  },
  {
    title: "212 Founders",
    Catégorie: 'Startups',
    Services: 'Financement, mentorat, ressources',
    Type: 'Programme d\'accompagnement',
    Cibles: "Startups marocaines",
    Couverture: "Nationale",
    Siteweb: "https://www.212founders.ma",
    content: "Programme d'accompagnement pour les startups marocaines, fournissant financement, mentorat et ressources.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    icon: "rocket"
  },
  {
    title: "Emerging Business Factory",
    Catégorie: 'Incubation et accélération',
    Services: 'Incubation, mentorat, espaces de coworking',
    Type: 'Incubateur privé',
    Cibles: "Startups et entrepreneurs",
    Couverture: "Régionale (Marrakech)",
    Siteweb: "https://www.emergingbusinessfactory.ma",
    content: "Incubateur et accélérateur de startups, favorisant l'innovation et la croissance des jeunes entreprises marocaines.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    icon: "lightbulb"
  },
  {
    title: "Merci pour votre attention",
    Catégorie: 'Conclusion',
    Services: 'Sensibilisation et encouragement',
    Type: 'Motivation',
    Cibles: "Public général",
    Couverture: "N/A",
    Siteweb: "",
    content: "Ensemble, construisons l'avenir entrepreneurial du Maroc",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80",
    icon: "heart"
  }
]
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide()
      if (e.key === 'ArrowLeft') prevSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-navy-900 text-white font-inter flex flex-col overflow-hidden">
      <BackgroundAnimation />

      <main className="flex-grow flex items-center justify-center p-4 z-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={{
              enter: (direction: number) => ({
                x: direction > 0 ? 1000 : -1000,
                opacity: 0,
              }),
              center: {
                zIndex: 1,
                x: 0,
                opacity: 1,
              },
              exit: (direction: number) => ({
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full max-w-4xl absolute"
          >
            <Slide {...slides[currentSlide]} />
          </motion.div>
        </AnimatePresence>
      </main>

      <div className="flex items-center justify-between w-full max-w-4xl mx-auto p-4 z-10">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors transform hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-lg font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors transform hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <ProgressBar current={currentSlide} total={slides.length} />
    </div>
  )
}