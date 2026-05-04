import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([])
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load photos directly from public folder (no backend needed)
    const photos = [
      { id: 1, url: '/photos/1.jpeg', filename: '1.jpeg' },
      { id: 2, url: '/photos/2.jpeg', filename: '2.jpeg' },
      { id: 3, url: '/photos/3.jpeg', filename: '3.jpeg' },
      { id: 4, url: '/photos/4.jpeg', filename: '4.jpeg' },
      { id: 5, url: '/photos/5.jpeg', filename: '5.jpeg' },
      { id: 6, url: '/photos/6.jpeg', filename: '6.jpeg' },
    ]
    
    console.log('Loading photos from public folder:', photos)
    setPhotos(photos)
    setLoading(false)
  }, [])

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-4 font-dancing">
          📸 Memory Lane 📸
        </h2>
        <p className="text-xl text-pink-200 text-center mb-12">
          Beautiful moments we've shared together
        </p>

        {loading ? (
          <div className="text-center text-white text-2xl">Loading memories... ✨</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.url}
                  alt={`Memory ${photo.id}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">Click to view</p>
                  </div>
                </div>
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-pink-500/50 to-transparent rounded-bl-3xl" />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-4 right-4 text-white text-4xl hover:text-pink-400 transition-colors z-10"
              onClick={() => setSelectedPhoto(null)}
            >
              <FaTimes />
            </motion.button>
            
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              src={selectedPhoto.url}
              alt="Selected memory"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PhotoGallery
