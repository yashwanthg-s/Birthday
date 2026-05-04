# 🚀 Deployment Guide

Deploy your birthday website online for free!

## 🎯 Deployment Options

### Option 1: Vercel (Frontend) + Railway (Backend) ⭐ RECOMMENDED

**Best for**: Easy deployment, free tier, automatic HTTPS

### Option 2: Netlify (Frontend) + Render (Backend)

**Best for**: Alternative to Vercel, similar features

### Option 3: Full Stack on Railway

**Best for**: Single platform deployment

---

## 🌐 Option 1: Vercel + Railway (Recommended)

### Part A: Deploy Backend to Railway

1. **Create Railway Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your repository
   - Select the `backend` folder

3. **Configure Environment**
   - Railway will auto-detect Node.js
   - No environment variables needed

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Copy your backend URL (e.g., `https://your-app.railway.app`)

5. **Upload Photos & Music**
   - Use Railway's file system or
   - Deploy with files in your repo

### Part B: Deploy Frontend to Vercel

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Import your GitHub repository
   - Select the `frontend` folder

3. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `frontend`

4. **Add Environment Variable**
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```

5. **Update Frontend Code**
   
   Edit `frontend/src/components/PhotoGallery.jsx`:
   ```javascript
   const API_URL = import.meta.env.VITE_API_URL || ''
   
   fetch(`${API_URL}/api/photos`)
   ```

6. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-site.vercel.app`

---

## 🌐 Option 2: Netlify + Render

### Part A: Deploy Backend to Render

1. **Create Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create Web Service**
   - Click "New +"
   - Select "Web Service"
   - Connect your repository

3. **Configure Service**
   - Name: `birthday-backend`
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Root Directory: `backend`

4. **Deploy**
   - Click "Create Web Service"
   - Copy your backend URL

### Part B: Deploy Frontend to Netlify

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add new site"
   - Import from Git
   - Select your repository

3. **Configure Build**
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`

4. **Add Environment Variable**
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```

5. **Deploy**
   - Click "Deploy site"
   - Your site will be live!

---

## 🌐 Option 3: Full Stack on Railway

1. **Deploy Backend** (same as Option 1, Part A)

2. **Build Frontend Locally**
   ```bash
   cd frontend
   npm run build
   ```

3. **Serve Frontend from Backend**
   
   Update `backend/server.js`:
   ```javascript
   import path from 'path'
   
   // Serve frontend build
   app.use(express.static(path.join(__dirname, '../frontend/dist')))
   
   // Catch-all route
   app.get('*', (req, res) => {
     res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
   })
   ```

4. **Deploy to Railway**
   - Push changes to GitHub
   - Railway will auto-deploy

---

## 📱 Custom Domain (Optional)

### Vercel:
1. Go to Project Settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records

### Netlify:
1. Go to Site Settings
2. Click "Domain management"
3. Add custom domain
4. Configure DNS

---

## 🔧 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.com
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=production
```

---

## 📦 Pre-Deployment Checklist

- [ ] Personal details updated in `App.jsx`
- [ ] Photos added to `backend/public/photos/`
- [ ] Music added to `backend/public/music/`
- [ ] Tested locally (both frontend and backend)
- [ ] All dependencies installed
- [ ] Build works without errors
- [ ] API endpoints tested
- [ ] Photos load correctly
- [ ] Music plays correctly
- [ ] Mobile responsive checked

---

## 🐛 Common Deployment Issues

### Issue: Photos not loading
**Solution**: 
- Ensure photos are in the repository
- Check backend URL is correct
- Verify CORS settings

### Issue: Music not playing
**Solution**:
- Check file is named `birthday-song.mp3`
- Verify file is in repository
- Check browser console for errors

### Issue: API calls failing
**Solution**:
- Update `VITE_API_URL` environment variable
- Check backend is deployed and running
- Verify CORS is enabled

### Issue: Build fails
**Solution**:
- Run `npm install` in both folders
- Check for missing dependencies
- Review build logs for errors

---

## 💰 Cost Breakdown

### Free Tier Limits:

**Vercel (Frontend)**
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domain

**Railway (Backend)**
- ✅ $5 free credit/month
- ✅ ~500 hours runtime
- ✅ Automatic HTTPS
- ⚠️ May need credit card

**Netlify (Frontend)**
- ✅ 100GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Automatic HTTPS

**Render (Backend)**
- ✅ 750 hours/month free
- ✅ Automatic HTTPS
- ⚠️ Sleeps after inactivity

---

## 🎯 Recommended Setup

**For Personal Use** (showing to brother):
- Deploy to Vercel (frontend only)
- Run backend locally when needed
- **Cost**: FREE

**For Online Sharing** (send link):
- Vercel (frontend) + Railway (backend)
- **Cost**: FREE (within limits)

**For Long-term Hosting**:
- Consider paid plans for better performance
- **Cost**: $5-10/month

---

## 📊 Performance Tips

1. **Optimize Images**
   - Compress photos before uploading
   - Use WebP format when possible
   - Recommended size: 800x800px

2. **Optimize Music**
   - Use 128kbps MP3
   - Keep file under 5MB
   - Consider shorter version

3. **Enable Caching**
   - Vercel/Netlify handle this automatically
   - Configure cache headers in backend

4. **Use CDN**
   - Vercel/Netlify include CDN
   - Photos served from edge locations

---

## 🔒 Security Checklist

- [ ] No sensitive data in code
- [ ] Environment variables used for URLs
- [ ] CORS properly configured
- [ ] HTTPS enabled (automatic)
- [ ] No API keys exposed
- [ ] Rate limiting (if needed)

---

## 📱 Testing Deployed Site

1. **Open in multiple browsers**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Test on mobile devices**
   - iOS Safari
   - Android Chrome

3. **Check all features**
   - Landing page loads
   - Surprise button works
   - Photos display
   - Music plays
   - Countdown shows
   - Fireworks animate

4. **Performance test**
   - Use Google PageSpeed Insights
   - Check loading times
   - Verify mobile performance

---

## 🎉 You're Live!

Once deployed, share the link:
- 📱 Send via WhatsApp/SMS
- 📧 Email the link
- 📱 QR code for easy access
- 🎁 Surprise your brother!

---

**Happy Deploying!** 🚀✨
