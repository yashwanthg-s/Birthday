# 🔧 Fix Images Not Loading on Vercel

## ❌ Problem

Images aren't loading because Vercel's serverless functions aren't ideal for serving large static files (photos/music).

## ✅ Solution: Use Railway for Backend

The best approach is:
- **Frontend** → Vercel (fast, free)
- **Backend** → Railway (better for static files, free)

---

## 🚀 Quick Fix Steps

### Step 1: Deploy Backend to Railway

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose: **yashwanthg-s/Birthday**
5. Railway will deploy the whole repo
6. Click on the service
7. Go to **Settings** → **Root Directory** → Set to: `backend`
8. Go to **Settings** → **Networking** → Click "Generate Domain"
9. **COPY THE URL** (e.g., `https://birthday-production-xxxx.up.railway.app`)

### Step 2: Update Frontend Environment Variable in Vercel

1. Go to your Vercel project dashboard
2. Click **Settings** → **Environment Variables**
3. Add new variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-backend.railway.app` (your Railway URL)
   - **Environment**: Production
4. Click **Save**

### Step 3: Redeploy Frontend

1. In Vercel dashboard, go to **Deployments**
2. Click the **"..."** menu on the latest deployment
3. Click **"Redeploy"**
4. Wait for deployment to complete

---

## 🧪 Test It Works

After redeployment, test these URLs:

1. **Backend Health**:
   ```
   https://your-backend.railway.app/api/health
   ```
   Should return: `{"status":"ok","message":"Birthday server is running! 🎉"}`

2. **Photos API**:
   ```
   https://your-backend.railway.app/api/photos
   ```
   Should return JSON with 6 photos

3. **First Photo**:
   ```
   https://your-backend.railway.app/photos/1.jpeg
   ```
   Should show the image

4. **Your Website**:
   ```
   https://your-site.vercel.app
   ```
   Photos should now load! ✅

---

## 📋 Alternative: Keep Everything on Vercel

If you want to keep everything on Vercel, you need to:

1. **Move photos to a CDN** (like Cloudinary, ImgBB, or Imgur)
2. **Update photo URLs** in the code to point to CDN
3. **Keep backend API** on Vercel (just for the API, not files)

This is more complex but possible.

---

## 💡 Recommended Approach

**Use Railway + Vercel** (what I described above):
- ✅ Simple setup
- ✅ Both free
- ✅ Works perfectly
- ✅ No file size limits
- ✅ Fast performance

---

## 🆘 Still Having Issues?

Check:
1. Railway backend is running
2. Environment variable is set in Vercel
3. Redeployed after adding environment variable
4. Clear browser cache (Ctrl+Shift+R)

---

**Follow Step 1-3 above to fix the images!** 🚀
