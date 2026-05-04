import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'
import LandingPage from './components/LandingPage'
import SurpriseSection from './components/SurpriseSection'
import PhotoGallery from './components/PhotoGallery'
import MessageSection from './components/MessageSection'
import MusicPlayer from './components/MusicPlayer'
import Countdown from './components/Countdown'
import Fireworks from './components/Fireworks'

function App() {
  const [showSurprise, setShowSurprise] = useState(false)
  const [showFireworks, setShowFireworks] = useState(false)

  // Personal details - CUSTOMIZE THESE
  const personalDetails = {
    name: "Subhash Bhai", // ⬅️ CHANGE THIS
    age: 21, // ⬅️ CHANGE THIS
    birthday: "2027-05-05T00:00:00", // ⬅️ TODAY AT MIDNIGHT (12:00 AM)! 🎉
    message: "You were my childhood friend, but today you are my brother by heart. Life gave me many people, but it gave me you as family ❤️ Happy Birthday!"
  }

  const handleOpenSurprise = () => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    
    setShowSurprise(true)
    
    // Trigger fireworks after a delay
    setTimeout(() => {
      setShowFireworks(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-blue-900">
      <MusicPlayer />
      
      <AnimatePresence mode="wait">
        {!showSurprise ? (
          <LandingPage 
            key="landing"
            onOpenSurprise={handleOpenSurprise}
            name={personalDetails.name}
          />
        ) : (
          <motion.div
            key="surprise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <SurpriseSection 
              name={personalDetails.name}
              age={personalDetails.age}
            />
            <Countdown targetDate={personalDetails.birthday} />
            <PhotoGallery />
            <MessageSection message={personalDetails.message} />
            {showFireworks && <Fireworks />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
