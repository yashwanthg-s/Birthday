# 🚀 Deploy to Vercel - Complete Guide

## 📋 Overview

We'll deploy:
- **Backend** → Railway (free hosting for Node.js)
- **Frontend** → Vercel (free hosting for React)

---

## 🎯 Step 1: Deploy Backend to Railway

### 1.1 Create Railway Account

1. Go to [railway.app](https://railway.app)
2. Click "Start a New Project"
3. Sign up with GitHub

### 1.2 Deploy Backend

1. Click "Deploy from GitHub repo"
2. Connect your GitHub account
3. Select your repository
4. Railway will auto-detect Node.js

### 1.3 Configure Backend

1. In Railway dashboard, click on your service
2. Go to "Settings" → "Root Directory"
3. Set to: `backend`
4. Railway will automatically run `npm install` and `npm start`

### 1.4 Get Backend URL

1. Go to "Settings" → "Networking"
2. Click "Generate Domain"
3. Copy the URL (e.g., `https://your-app.railway.app`)
4. **Save this URL** - you'll need it for the frontend!

### 1.5 Upload Photos & Music to Railway

**Option A: Include in Git Repository**
1. Make sure photos are in `backend/public/photos/`
2. Make sure music is in `backend/public/music/`
3. Commit and push to GitHub
4. Railway will deploy with files included

**Option B: Use Railway CLI** (if files are too large)
```bash
npm install -g @railway/cli
railway login
railway link
railway up
```

---

## 🎯 Step 2: Deploy Frontend to Vercel

### 2.1 Update Environment Variable

1. Open `frontend/.env.production`
2. Replace with your Railway backend URL:
```env
VITE_API_URL=https://your-app.railway.app
```

### 2.2 Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### 2.3 Deploy Frontend

1. Click "Add New Project"
2. Import your GitHub repository
3. Configure project:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### 2.4 Add Environment Variable

1. In Vercel project settings
2. Go to "Environment Variables"
3. Add:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-app.railway.app` (your Railway URL)
   - **Environment**: Production

### 2.5 Deploy

1. Click "Deploy"
2. Wait for deployment to complete
3. Your site will be live at `https://your-project.vercel.app`

---

## 🎯 Alternative: Deploy Everything to Vercel

If you want to deploy both frontend and backend to Vercel:

### Update Backend for Vercel

1. Create `vercel.json` in backend folder:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

2. Deploy backend to Vercel separately
3. Get the backend URL
4. Update frontend `.env.production` with backend URL
5. Deploy frontend to Vercel

---

## ✅ Verification Checklist

After deployment:

- [ ] Backend is accessible: `https://your-backend-url.railway.app/api/health`
- [ ] Photos API works: `https://your-backend-url.railway.app/api/photos`
- [ ] Photos load: `https://your-backend-url.railway.app/photos/1.jpeg`
- [ ] Music loads: `https://your-backend-url.railway.app/music/birthday-song.mp3`
- [ ] Frontend loads: `https://your-project.vercel.app`
- [ ] Photos display on frontend
- [ ] Music plays on frontend
- [ ] All animations work
- [ ] Mobile responsive

---

## 🐛 Common Issues

### Issue: Photos not loading
**Solution**: Check CORS is enabled in backend (already configured)

### Issue: Music not playing
**Solution**: 
1. Check file is named `birthday-song.mp3`
2. Check file is in `backend/public/music/`
3. Try converting MPEG to MP3 format

### Issue: 404 errors
**Solution**: Verify `VITE_API_URL` is set correctly in Vercel

### Issue: Build fails
**Solution**: 
1. Check all dependencies are in `package.json`
2. Run `npm install` locally first
3. Check build logs in Vercel dashboard

---

## 💰 Cost

Both services are **FREE** for this project:

- **Railway**: $5 free credit/month (enough for this app)
- **Vercel**: Unlimited deployments, 100GB bandwidth

---

## 🎉 You're Live!

Once deployed, share the Vercel URL with your brother:
```
https://your-project.vercel.app
```

**Happy Birthday Subhash Bhai!** 🎂🎈
