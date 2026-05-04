# ⚡ Quick Start Guide (5 Minutes)

Get your birthday website running in just 5 minutes!

## 🎯 Step 1: Customize (2 minutes)

### Edit Personal Details

Open `frontend/src/App.jsx` and change these lines:

```javascript
const personalDetails = {
  name: "Rahul",              // ⬅️ Brother's name
  age: 28,                    // ⬅️ His age
  birthday: "2025-06-15",     // ⬅️ Birthday (YYYY-MM-DD)
  message: "Happy Birthday! You are not just my brother but my best friend. Wishing you success, happiness, and all your dreams come true ❤️"
}
```

## 📸 Step 2: Add Photos (1 minute)

1. Copy your photos to: `backend/public/photos/`
2. Any format: `.jpg`, `.png`, `.gif`, `.webp`
3. As many as you want!

## 🎵 Step 3: Add Music (1 minute)

1. Get a birthday song (MP3)
2. Rename to: `birthday-song.mp3`
3. Put in: `backend/public/music/`

## 🚀 Step 4: Install & Run (1 minute)

### Terminal 1 - Backend:
```bash
cd backend
npm install
npm start
```

### Terminal 2 - Frontend:
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Step 5: Open Browser

Go to: **http://localhost:3000**

## 🎉 Done!

That's it! Your birthday website is ready! 🎂✨

---

## 🆘 Quick Fixes

**Music not playing?**
→ Click anywhere on the page first

**Photos not showing?**
→ Check they're in `backend/public/photos/`

**Port error?**
→ Close other apps using port 3000 or 5000

---

**Need detailed help?** Check `SETUP-INSTRUCTIONS.md`
