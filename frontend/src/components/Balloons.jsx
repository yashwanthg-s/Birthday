import { motion } from 'framer-motion'

const Balloons = () => {
  const balloonColors = ['#FF6B9D', '#C06C84', '#6C5B7B', '#355C7D', '#F67280']
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {balloonColors.map((color, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${15 + index * 18}%`,
            bottom: '-10%',
          }}
          animate={{
            y: [0, -1000],
            x: [0, Math.sin(index) * 50],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: index * 1.5,
            ease: 'easeInOut',
          }}
        >
          <div
            className="w-16 h-20 rounded-full relative"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${color}dd, ${color})`,
              boxShadow: `0 10px 30px ${color}66`,
            }}
          >
            {/* Balloon string */}
            <div
              className="absolute top-full left-1/2 w-0.5 h-24"
              style={{
                background: `linear-gradient(to bottom, ${color}, transparent)`,
              }}
            />
            {/* Balloon shine */}
            <div className="absolute top-2 left-3 w-4 h-6 bg-white/40 rounded-full blur-sm" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default Balloons
