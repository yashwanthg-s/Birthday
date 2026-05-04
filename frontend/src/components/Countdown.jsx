import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isPast: false
        })
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isPast: true
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (timeLeft.isPast) {
    return (
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-dancing">
            🎉 It's Your Birthday! 🎉
          </h2>
          <p className="text-2xl text-pink-200">
            Today is the special day! 🎂✨
          </p>
        </motion.div>
      </section>
    )
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, emoji: '📅' },
    { label: 'Hours', value: timeLeft.hours, emoji: '⏰' },
    { label: 'Minutes', value: timeLeft.minutes, emoji: '⏱️' },
    { label: 'Seconds', value: timeLeft.seconds, emoji: '⚡' }
  ]

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-dancing">
          ⏳ Countdown to Next Birthday ⏳
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass rounded-2xl p-6 text-center shadow-2xl"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                className="text-5xl mb-3"
              >
                {unit.emoji}
              </motion.div>
              <motion.div
                key={unit.value}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-5xl md:text-6xl font-bold text-white mb-2"
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="text-xl text-pink-200 font-semibold">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center text-2xl text-pink-200 mt-8"
        >
          Can't wait to celebrate with you! 🎊
        </motion.p>
      </motion.div>
    </section>
  )
}

export default Countdown
