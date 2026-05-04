import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Serve static files (photos and music)
app.use('/photos', express.static(path.join(__dirname, 'public/photos')))
app.use('/music', express.static(path.join(__dirname, 'public/music')))

// API endpoint to get photos
app.get('/api/photos', (req, res) => {
  const photosDir = path.join(__dirname, 'public/photos')
  
  // Check if photos directory exists
  if (!fs.existsSync(photosDir)) {
    fs.mkdirSync(photosDir, { recursive: true })
  }

  // Read all files from photos directory
  fs.readdir(photosDir, (err, files) => {
    if (err) {
      console.error('Error reading photos directory:', err)
      return res.status(500).json({ error: 'Failed to read photos' })
    }

    // Filter for image files
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    )

    // Create photo objects with URLs
    const photos = imageFiles.map((file, index) => ({
      id: index + 1,
      url: `/photos/${file}`,
      filename: file
    }))

    res.json({ photos, count: photos.length })
  })
})

// API endpoint to get messages (optional - for future expansion)
app.get('/api/messages', (req, res) => {
  const messages = [
    {
      id: 1,
      text: "Happy Birthday! You are not just my brother but my best friend.",
      author: "Your Sibling"
    },
    {
      id: 2,
      text: "Wishing you success, happiness, and all your dreams come true ❤️",
      author: "Your Sibling"
    }
  ]
  
  res.json({ messages })
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Birthday server is running! 🎉' })
})

// Start server
app.listen(PORT, () => {
  console.log(`🎂 Birthday server is running on http://localhost:${PORT}`)
  console.log(`📸 Photos directory: ${path.join(__dirname, 'public/photos')}`)
  console.log(`🎵 Music directory: ${path.join(__dirname, 'public/music')}`)
  console.log(`\n✨ Add your photos to: backend/public/photos/`)
  console.log(`🎵 Add birthday music to: backend/public/music/birthday-song.mp3`)
})
