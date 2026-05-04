import { motion } from 'framer-motion'

const MessageSection = ({ message }) => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-6xl text-center mb-6"
            >
              💝
            </motion.div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-center text-white mb-8 font-dancing">
              A Special Message For You
            </h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-xl md:text-2xl text-pink-100 text-center leading-relaxed mb-8"
            >
              {message}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center gap-4 text-4xl"
            >
              {['🎉', '🎂', '🎈', '🎁', '⭐'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="text-center mt-8 text-pink-200 text-lg"
            >
              <p>With all my love,</p>
              <p className="text-2xl font-bold text-white mt-2">Your Sibling ❤️</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default MessageSection
