# Deployment Guide for Vercel

This guide will help you deploy your create-next-vault landing page to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (sign up at https://vercel.com)
- Your code pushed to a GitHub repository

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - create-next-vault landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to https://vercel.com and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"
   - Wait for deployment to complete

3. **Your site will be live!**
   - Vercel will provide you with a URL like: `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Configuration

### Environment Variables

No environment variables are required for this project. The API route (`/api/stats`) fetches data from public APIs.

### Build Settings

Vercel automatically detects Next.js and uses these settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Post-Deployment

### Custom Domain

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

### Environment Settings

- The API route will work automatically
- No additional configuration needed

## Troubleshooting

### Build Fails

- Make sure all dependencies are in `package.json`
- Check that Node.js version is compatible (Next.js 16 requires Node.js 18+)
- Review build logs in Vercel dashboard

### API Route Not Working

- Check that the API route is in `app/api/stats/route.js`
- Verify the route is exported correctly
- Check Vercel function logs in the dashboard

### Styling Issues

- Ensure Tailwind CSS is properly configured
- Check that `app/globals.css` is imported in `app/layout.js`
- Verify PostCSS configuration

## Performance

- Vercel automatically optimizes Next.js applications
- Static pages are pre-rendered
- API routes run as serverless functions
- Images are optimized automatically

## Support

For issues or questions:
- Check Vercel documentation: https://vercel.com/docs
- Next.js documentation: https://nextjs.org/docs
- GitHub Issues: https://github.com/youknowom/create-next-vault/issues

