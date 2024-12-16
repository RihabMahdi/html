import { motion } from 'framer-motion'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current + 1) / total

  return (
    <div className="w-full bg-navy-800 h-2">
      <motion.div
        className="bg-teal-500 h-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  )
}

