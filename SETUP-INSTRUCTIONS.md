# 🎯 Quick Setup Guide

Follow these steps to get your birthday website running in minutes!

## 📋 Prerequisites

Before you start, make sure you have:
- ✅ Node.js installed (v16 or higher) - [Download here](https://nodejs.org/)
- ✅ A code editor (VS Code recommended)
- ✅ Photos of your brother
- ✅ A birthday song (MP3 file)

## 🚀 Step-by-Step Setup

### Step 1: Customize Personal Details ⚙️

1. Open `frontend/src/App.jsx`
2. Find the `personalDetails` object (around line 14)
3. Update these values:

```javascript
const personalDetails = {
  name: "Rahul",              // ⬅️ Your brother's name
  age: 28,                    // ⬅️ His age
  birthday: "2025-06-15",     // ⬅️ His birthday (YYYY-MM-DD)
  message: "Happy Birthday! You are not just my brother but my best friend. Wishing you success, happiness, and all your dreams come true ❤️"
}
```

### Step 2: Add Photos 📸

1. Navigate to `backend/public/photos/` folder
2. Copy all your photos into this folder
3. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`
4. You can add as many photos as you want!

**Example:**
```
backend/public/photos/
  ├── photo1.jpg
  ├── photo2.jpg
  ├── photo3.png
  └── photo4.jpg
```

### Step 3: Add Birthday Music 🎵

1. Download a birthday song (MP3 format)
2. Rename it to exactly: `birthday-song.mp3`
3. Place it in `backend/public/music/` folder

**Where to get music:**
- YouTube (use a converter)
- Free music sites (ensure you have rights)
- Your own music library

### Step 4: Install Dependencies 📦

Open your terminal and run these commands:

**For Backend:**
```bash
cd backend
npm install
```

**For Frontend:**
```bash
cd frontend
npm install
```

### Step 5: Start the Servers 🚀

You need to run both servers simultaneously.

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

You should see:
```
🎂 Birthday server is running on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

You should see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
```

### Step 6: Open in Browser 🌐

1. Open your browser
2. Go to: `http://localhost:3000`
3. Click anywhere to start the music
4. Enjoy the celebration! 🎉

## 🎨 Optional Customizations

### Change Colors

Edit `frontend/tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      'custom-pink': '#FF6B9D',
      'custom-purple': '#C06C84',
    }
  }
}
```

### Change Fonts

Edit `frontend/index.html` to add different Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Modify Message

Edit the message in `frontend/src/App.jsx`:

```javascript
message: "Your custom heartfelt message here..."
```

## 🐛 Common Issues & Solutions

### Issue: "npm: command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: "Port 3000 is already in use"
**Solution:** 
1. Close other applications using port 3000
2. Or change the port in `frontend/vite.config.js`:
```javascript
server: {
  port: 3001, // Change to any available port
}
```

### Issue: "Photos not showing"
**Solution:**
1. Check photos are in `backend/public/photos/`
2. Verify backend server is running
3. Check browser console for errors (F12)

### Issue: "Music not playing"
**Solution:**
1. Ensure file is named exactly `birthday-song.mp3`
2. Click anywhere on the page (browsers require user interaction)
3. Check browser console for errors

### Issue: "Cannot find module 'express'"
**Solution:** Run `npm install` in the backend folder

## 📱 Testing on Mobile

1. Find your computer's IP address:
   - Windows: `ipconfig` in cmd
   - Mac/Linux: `ifconfig` in terminal

2. On your phone, open browser and go to:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```
   Example: `http://192.168.1.100:3000`

3. Make sure your phone and computer are on the same WiFi network

## 🎁 Sharing the Website

### Option 1: Screen Recording
Record your screen while browsing the website and send the video

### Option 2: Deploy Online (Free)

**Frontend (Vercel):**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

**Backend (Railway):**
1. Go to [railway.app](https://railway.app)
2. Deploy from GitHub
3. Update frontend API URL

### Option 3: Local Presentation
Open the website on your laptop and show it to your brother in person!

## ✅ Checklist

Before showing to your brother:

- [ ] Personal details updated (name, age, birthday)
- [ ] Photos added to backend/public/photos/
- [ ] Birthday song added as birthday-song.mp3
- [ ] Both servers running (backend & frontend)
- [ ] Website opens in browser
- [ ] Music plays when clicked
- [ ] Photos display correctly
- [ ] All animations working smoothly
- [ ] Tested on mobile (optional)

## 🎉 You're Ready!

Everything is set up! Your brother is going to love this! ❤️

## 💡 Pro Tips

1. **Test First**: Run through the entire website before showing it
2. **Full Screen**: Press F11 for full-screen mode for better experience
3. **Good Internet**: Ensure stable internet for smooth animations
4. **Lighting**: If presenting in person, adjust screen brightness
5. **Volume**: Test audio volume beforehand

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console (F12) for errors
2. Verify all files are in correct locations
3. Ensure both servers are running
4. Try restarting the servers

---

**Enjoy the celebration! 🎂🎉🎈**

Made with ❤️ for your special brother!
