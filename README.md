# 🎉 Birthday Celebration Website 🎂

A stunning, emotional birthday website with animations, music, and photo gallery built with React and Node.js.

## ✨ Features

- 🎨 **Modern UI** - Beautiful gradient backgrounds with glassmorphism effects
- 🎭 **Smooth Animations** - Framer Motion powered transitions and effects
- 🎈 **Floating Balloons** - Animated balloons on landing page
- 🎊 **Confetti Effects** - Celebration confetti animations
- 🎵 **Music Player** - Auto-play birthday song with controls
- 📸 **Photo Gallery** - Grid layout with lightbox modal
- 💝 **Special Message** - Emotional message card with animations
- ⏳ **Countdown Timer** - Countdown to next birthday
- 🎆 **Fireworks** - Spectacular fireworks animation
- 📱 **Fully Responsive** - Works perfectly on all devices

## 🎯 Customization

### Step 1: Update Personal Details

Edit `frontend/src/App.jsx` and update these values:

```javascript
const personalDetails = {
  name: "Your Brother's Name",  // ⬅️ CHANGE THIS
  age: 25,                       // ⬅️ CHANGE THIS
  birthday: "2024-12-31",        // ⬅️ CHANGE THIS (YYYY-MM-DD)
  message: "Your custom message here..."
}
```

### Step 2: Add Photos

1. Navigate to `backend/public/photos/`
2. Add your photos (supported: .jpg, .jpeg, .png, .gif, .webp)
3. Photos will automatically appear in the gallery

### Step 3: Add Birthday Music

1. Download a birthday song (MP3 format)
2. Rename it to `birthday-song.mp3`
3. Place it in `backend/public/music/`

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start the server
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will run on `http://localhost:3000`

## 📁 Project Structure

```
birthday-celebration/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── LandingPage.jsx
│   │   │   ├── SurpriseSection.jsx
│   │   │   ├── PhotoGallery.jsx
│   │   │   ├── MessageSection.jsx
│   │   │   ├── MusicPlayer.jsx
│   │   │   ├── Countdown.jsx
│   │   │   ├── Fireworks.jsx
│   │   │   └── Balloons.jsx
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── backend/                  # Node.js backend
│   ├── public/
│   │   ├── photos/          # Add your photos here
│   │   └── music/           # Add birthday song here
│   ├── server.js            # Express server
│   └── package.json
│
└── README.md
```

## 🎨 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Canvas Confetti** - Confetti effects
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **CORS** - Cross-origin resource sharing

## 🎭 Components Overview

### LandingPage
- Animated gradient background
- Typing animation
- Floating balloons
- Surprise button with bounce animation

### SurpriseSection
- Zoom-in transition
- Glowing text effects
- Emoji rain animation
- Continuous confetti

### PhotoGallery
- Grid layout with hover effects
- Lightbox modal for full-size viewing
- Smooth transitions
- Decorative corners

### MessageSection
- Glassmorphism card design
- Animated heart emoji
- Emotional message display
- Decorative background elements

### MusicPlayer
- Auto-play after user interaction
- Play/Pause controls
- Mute/Unmute toggle
- Animated music icon

### Countdown
- Real-time countdown to birthday
- Animated time units
- Emoji indicators
- Special message when birthday arrives

### Fireworks
- Continuous fireworks animation
- Random colors and positions
- Explosion effects

## 🎨 Color Scheme

- **Primary**: Pink (#FF6B9D)
- **Secondary**: Purple (#C06C84)
- **Accent**: Blue (#355C7D)
- **Highlight**: Gold (#FFD700)

## 📱 Responsive Design

The website is fully responsive and works on:
- 📱 Mobile phones (320px+)
- 📱 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1440px+)

## 🎵 Music Recommendations

You can use any birthday song. Here are some suggestions:
- "Happy Birthday" (Traditional)
- "Birthday" by Katy Perry
- "In Da Club" by 50 Cent
- Any instrumental birthday music

**Note**: Make sure you have the rights to use the music file.

## 🚀 Building for Production

### Frontend

```bash
cd frontend
npm run build
```

The build files will be in `frontend/dist/`

### Deployment

You can deploy to:
- **Vercel** (Frontend)
- **Netlify** (Frontend)
- **Heroku** (Backend)
- **Railway** (Backend)
- **DigitalOcean** (Full stack)

## 🎁 Bonus Features

- ✅ Smooth page transitions
- ✅ Hover effects on all interactive elements
- ✅ Loading states
- ✅ Error handling
- ✅ Accessibility features
- ✅ SEO optimized
- ✅ Performance optimized

## 🐛 Troubleshooting

### Music not playing?
- Ensure the file is named `birthday-song.mp3`
- Check browser console for errors
- Some browsers block autoplay - click anywhere to start

### Photos not showing?
- Verify photos are in `backend/public/photos/`
- Check file extensions (.jpg, .jpeg, .png, .gif, .webp)
- Ensure backend server is running

### Port already in use?
- Change port in `backend/server.js` (line 8)
- Change port in `frontend/vite.config.js` (line 6)

## 💝 Making it Personal

1. **Add more photos** - The more memories, the better!
2. **Customize colors** - Edit `tailwind.config.js`
3. **Change fonts** - Update Google Fonts in `index.html`
4. **Add more messages** - Extend the MessageSection component
5. **Custom animations** - Modify Framer Motion settings

## 📄 License

MIT License - Feel free to use this for your loved ones!

## ❤️ Made with Love

Created with ❤️ for celebrating special moments with special people.

---

**Happy Birthday! 🎉🎂🎈**

Make someone's day special with this beautiful birthday website! ✨
