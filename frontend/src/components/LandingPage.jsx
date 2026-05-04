import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Balloons from './Balloons'

const LandingPage = ({ onOpenSurprise, name }) => {
  const [typedText, setTypedText] = useState('')
  const fullText = `🎉 It's a Special Day! 🎂`

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900 animate-gradient-x"></div>
      
      {/* Floating balloons */}
      <Balloons />
      
      {/* Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-8 font-dancing"
          animate={{ 
            textShadow: [
              '0 0 20px rgba(255,255,255,0.5)',
              '0 0 40px rgba(255,105,180,0.8)',
              '0 0 20px rgba(255,255,255,0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {typedText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-2xl md:text-3xl text-pink-200 mb-12"
        >
          Someone special is celebrating today...
        </motion.p>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenSurprise}
          className="px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 animate-bounce-slow"
        >
          🎁 Click to Open Surprise 🎁
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="mt-8 text-pink-300 text-lg"
        >
          ✨ Prepare for something amazing ✨
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default LandingPage
