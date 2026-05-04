# 🔧 Troubleshooting Guide

Common issues and their solutions.

---

## 🚫 Installation Issues

### ❌ "npm: command not found"

**Problem**: Node.js is not installed

**Solution**:
1. Download Node.js from [nodejs.org](https://nodejs.org/)
2. Install the LTS version
3. Restart your terminal
4. Verify: `node --version` and `npm --version`

---

### ❌ "Cannot find module 'express'"

**Problem**: Dependencies not installed

**Solution**:
```bash
cd backend
npm install

cd ../frontend
npm install
```

---

### ❌ "Permission denied" on Windows

**Problem**: PowerShell execution policy

**Solution**:
1. Open PowerShell as Administrator
2. Run: `Set-ExecutionPolicy RemoteSigned`
3. Type `Y` and press Enter
4. Try again

---

## 🌐 Server Issues

### ❌ "Port 3000 is already in use"

**Problem**: Another app is using port 3000

**Solution 1** - Kill the process:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

**Solution 2** - Change the port:

Edit `frontend/vite.config.js`:
```javascript
server: {
  port: 3001, // Change to any available port
}
```

---

### ❌ "Port 5000 is already in use"

**Problem**: Another app is using port 5000

**Solution 1** - Kill the process:
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

**Solution 2** - Change the port:

Edit `backend/server.js`:
```javascript
const PORT = process.env.PORT || 5001 // Change to 5001
```

Also update `frontend/vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5001', // Match new port
  }
}
```

---

### ❌ "ECONNREFUSED" or "Network Error"

**Problem**: Backend server is not running

**Solution**:
1. Make sure backend is running: `cd backend && npm start`
2. Check backend URL in browser: `http://localhost:5000/api/health`
3. Verify proxy settings in `vite.config.js`

---

## 📸 Photo Issues

### ❌ Photos not showing / "Loading memories..."

**Problem**: Photos not found or backend not running

**Solution**:
1. ✅ Check backend is running on port 5000
2. ✅ Verify photos are in `backend/public/photos/`
3. ✅ Check file extensions (.jpg, .jpeg, .png, .gif, .webp)
4. ✅ Test directly: `http://localhost:5000/photos/your-photo.jpg`
5. ✅ Check browser console (F12) for errors

---

### ❌ Photos show but are broken/corrupted

**Problem**: Invalid image files

**Solution**:
1. Verify files are actual images (not renamed files)
2. Try opening images in an image viewer
3. Re-save images in a standard format
4. Check file permissions

---

### ❌ Only placeholder images showing

**Problem**: API call failing or no photos in folder

**Solution**:
1. Add photos to `backend/public/photos/`
2. Restart backend server
3. Clear browser cache (Ctrl+Shift+R)
4. Check network tab in browser DevTools

---

## 🎵 Music Issues

### ❌ Music not playing

**Problem**: Multiple possible causes

**Solution**:
1. ✅ File must be named exactly: `birthday-song.mp3`
2. ✅ File must be in: `backend/public/music/`
3. ✅ Click anywhere on page first (browsers block autoplay)
4. ✅ Check browser console for errors
5. ✅ Test directly: `http://localhost:5000/music/birthday-song.mp3`
6. ✅ Try different browser
7. ✅ Check volume is not muted

---

### ❌ Music plays but no sound

**Problem**: Volume or mute issues

**Solution**:
1. Check system volume
2. Check browser tab is not muted
3. Click the volume icon in the music player
4. Try different audio file
5. Check audio file is not corrupted

---

### ❌ "Failed to load resource" for music

**Problem**: File not found or wrong path

**Solution**:
1. Verify file exists: `backend/public/music/birthday-song.mp3`
2. Check file name is exactly `birthday-song.mp3` (case-sensitive)
3. Restart backend server
4. Clear browser cache

---

## 🎨 Display Issues

### ❌ Animations not working

**Problem**: JavaScript or CSS issues

**Solution**:
1. Clear browser cache (Ctrl+Shift+R)
2. Check browser console for errors
3. Try different browser
4. Verify Framer Motion is installed: `npm list framer-motion`
5. Reinstall dependencies: `npm install`

---

### ❌ Confetti not showing

**Problem**: canvas-confetti not loaded

**Solution**:
1. Check browser console for errors
2. Verify package installed: `npm list canvas-confetti`
3. Reinstall: `cd frontend && npm install canvas-confetti`
4. Restart dev server

---

### ❌ Styles not applying / looks broken

**Problem**: Tailwind CSS not building

**Solution**:
1. Verify Tailwind is installed: `npm list tailwindcss`
2. Check `tailwind.config.js` exists
3. Restart dev server
4. Clear browser cache
5. Run: `npm install` in frontend folder

---

### ❌ Fonts not loading

**Problem**: Google Fonts not loading

**Solution**:
1. Check internet connection
2. Verify `index.html` has Google Fonts link
3. Try different font
4. Check browser console for errors

---

## 📱 Mobile Issues

### ❌ Website not responsive on mobile

**Problem**: Viewport or CSS issues

**Solution**:
1. Check `index.html` has viewport meta tag:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```
2. Test in browser's mobile view (F12 → Toggle device toolbar)
3. Clear mobile browser cache

---

### ❌ Can't access from phone

**Problem**: Network configuration

**Solution**:
1. Ensure phone and computer on same WiFi
2. Find computer's IP address:
   - Windows: `ipconfig`
   - Mac/Linux: `ifconfig`
3. On phone, go to: `http://YOUR_IP:3000`
4. Check firewall isn't blocking port 3000

---

## 🔄 Build Issues

### ❌ "npm run build" fails

**Problem**: Build errors

**Solution**:
1. Check for syntax errors in code
2. Run: `npm install` to ensure all dependencies
3. Check Node.js version: `node --version` (should be 16+)
4. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```
5. Check build logs for specific errors

---

### ❌ Build succeeds but site doesn't work

**Problem**: Environment or path issues

**Solution**:
1. Check environment variables
2. Verify API URLs are correct
3. Test build locally: `npm run preview`
4. Check browser console for errors

---

## 🐛 Browser-Specific Issues

### Chrome/Edge
- Clear cache: Ctrl+Shift+Delete
- Disable extensions
- Try incognito mode

### Firefox
- Clear cache: Ctrl+Shift+Delete
- Check tracking protection settings
- Try private window

### Safari
- Clear cache: Cmd+Option+E
- Check privacy settings
- Try private window

---

## 🔍 Debugging Tips

### Check Browser Console
1. Press F12 (or Cmd+Option+I on Mac)
2. Go to "Console" tab
3. Look for red error messages
4. Copy error and search online

### Check Network Tab
1. Press F12
2. Go to "Network" tab
3. Reload page
4. Check for failed requests (red)
5. Click on failed request to see details

### Check Backend Logs
- Look at terminal where backend is running
- Check for error messages
- Verify API endpoints are being hit

### Check File Paths
- Verify all files are in correct locations
- Check for typos in file names
- Ensure case-sensitivity (especially on Linux)

---

## 📞 Still Having Issues?

### Checklist:
- [ ] Node.js installed (v16+)
- [ ] All dependencies installed (`npm install`)
- [ ] Both servers running (backend & frontend)
- [ ] Photos in correct folder
- [ ] Music file named correctly
- [ ] Browser cache cleared
- [ ] No console errors
- [ ] Firewall not blocking ports

### Get Help:
1. Check browser console for specific errors
2. Search error message online
3. Check GitHub issues (if using a repo)
4. Ask on Stack Overflow with error details

---

## 🎯 Prevention Tips

1. **Always run `npm install`** after cloning or pulling changes
2. **Keep Node.js updated** to latest LTS version
3. **Clear cache regularly** when developing
4. **Check console** before reporting issues
5. **Test in multiple browsers** before deploying
6. **Backup your photos** before making changes
7. **Use version control** (Git) to track changes

---

**Most issues can be solved by restarting servers and clearing cache!** 🔄✨
