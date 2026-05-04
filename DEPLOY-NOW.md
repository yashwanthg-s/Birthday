# 🚀 Quick Deploy to Vercel

## ⚡ Fastest Way (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Birthday website for Subhash Bhai"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy Backend to Railway

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Set **Root Directory** to `backend`
5. Click "Generate Domain" to get your backend URL
6. **Copy the URL** (e.g., `https://birthday-backend.railway.app`)

### Step 3: Update Frontend Environment Variable

Edit `frontend/.env.production`:
```env
VITE_API_URL=https://YOUR-BACKEND-URL.railway.app
```

**Commit this change:**
```bash
git add frontend/.env.production
git commit -m "Update backend URL"
git push
```

### Step 4: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `frontend`
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variable:
   - **Name**: `VITE_API_URL`
   - **Value**: Your Railway backend URL
6. Click "Deploy"

### Step 5: Done! 🎉

Your site is live at: `https://your-project.vercel.app`

---

## 🎯 Important Notes

### Photos & Music
Make sure these are committed to your repository:
- `backend/public/photos/*.jpeg` (your 6 photos)
- `backend/public/music/birthday-song.mp3` (your music)

### If Files Are Too Large
If your photos/music are too large for Git:

1. Use Git LFS:
```bash
git lfs install
git lfs track "backend/public/photos/*"
git lfs track "backend/public/music/*"
git add .gitattributes
git commit -m "Add Git LFS"
```

2. Or upload directly to Railway using Railway CLI

---

## ✅ Test Your Deployment

After deploying, test these URLs:

1. **Backend Health**: `https://your-backend.railway.app/api/health`
2. **Photos API**: `https://your-backend.railway.app/api/photos`
3. **First Photo**: `https://your-backend.railway.app/photos/1.jpeg`
4. **Music**: `https://your-backend.railway.app/music/birthday-song.mp3`
5. **Frontend**: `https://your-project.vercel.app`

All should work! ✨

---

## 🔄 Update After Deployment

To update your site:

```bash
# Make changes
git add .
git commit -m "Update message"
git push
```

Both Railway and Vercel will auto-deploy! 🚀

---

**Need detailed help?** See `VERCEL-DEPLOYMENT.md`
