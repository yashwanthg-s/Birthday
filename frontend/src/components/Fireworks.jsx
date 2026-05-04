import { useEffect } from 'react'
import { motion } from 'framer-motion'

const Fireworks = () => {
  useEffect(() => {
    const colors = ['#FF6B9D', '#C06C84', '#6C5B7B', '#355C7D', '#F67280', '#FFD700']
    
    const createFirework = () => {
      const firework = document.createElement('div')
      firework.className = 'firework'
      firework.style.left = Math.random() * 100 + '%'
      firework.style.top = Math.random() * 50 + '%'
      firework.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)])
      
      document.getElementById('fireworks-container')?.appendChild(firework)
      
      setTimeout(() => firework.remove(), 1000)
    }

    const interval = setInterval(createFirework, 300)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div id="fireworks-container" className="fixed inset-0 pointer-events-none z-40" />
      <style>{`
        .firework {
          position: absolute;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          animation: explode 1s ease-out forwards;
        }
        
        @keyframes explode {
          0% {
            box-shadow: 
              0 0 0 0 var(--color),
              0 0 0 0 var(--color),
              0 0 0 0 var(--color),
              0 0 0 0 var(--color),
              0 0 0 0 var(--color),
              0 0 0 0 var(--color),
              0 0 0 0 var(--color),
              0 0 0 0 var(--color);
            opacity: 1;
          }
          100% {
            box-shadow: 
              0 -100px 20px 0 var(--color),
              70px -70px 20px 0 var(--color),
              100px 0 20px 0 var(--color),
              70px 70px 20px 0 var(--color),
              0 100px 20px 0 var(--color),
              -70px 70px 20px 0 var(--color),
              -100px 0 20px 0 var(--color),
              -70px -70px 20px 0 var(--color);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}

export default Fireworks
