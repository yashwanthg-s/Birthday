import { motion } from 'framer-motion'
import { useEffect } from 'react'
import confetti from 'canvas-confetti'

const SurpriseSection = ({ name, age }) => {
  useEffect(() => {
    // Continuous confetti
    const duration = 3 * 1000
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF6B9D', '#C06C84', '#6C5B7B', '#355C7D']
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF6B9D', '#C06C84', '#6C5B7B', '#355C7D']
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }
    frame()
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 15,
          duration: 1 
        }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 font-dancing animate-glow">
            Happy Birthday
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            {name}! 🎉
          </h2>
          <motion.p
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 40px rgba(255,105,180,0.8)',
                '0 0 20px rgba(255,255,255,0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-4xl md:text-6xl font-bold text-yellow-300"
          >
            {age} Years Young! ✨
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-2xl md:text-3xl text-pink-200 space-y-4"
        >
          <p>🎂 Today is all about YOU! 🎂</p>
          <p>💝 Let's celebrate this special day! 💝</p>
        </motion.div>

        {/* Animated emoji rain */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {['🎉', '🎂', '🎈', '🎁', '⭐', '💝', '🎊', '✨'].map((emoji, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
              }}
              animate={{
                y: ['0vh', '110vh'],
                rotate: [0, 360],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'linear',
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default SurpriseSection
