# Deploy to GitHub Pages - Step by Step Guide

Follow these steps to deploy your AI Agency landing page to GitHub Pages for FREE.

## 🚀 Quick Deployment Steps

### Step 1: Create GitHub Repository

1. **Go to [GitHub.com](https://github.com)** and sign in
2. **Click the "+" button** (top right) → "New repository"
3. **Repository name**: `AIagency` (or any name you prefer)
4. **Make it Public** (required for free GitHub Pages)
5. **Don't initialize** with README, .gitignore, or license
6. **Click "Create repository"**

### Step 2: Configure Your Site URL

1. **Open** `astro.config.mjs` in your project
2. **Replace `YOUR_USERNAME`** with your actual GitHub username
3. **Uncomment these lines:**
   ```js
   site: 'https://YOUR_USERNAME.github.io',
   base: '/AIagency',
   ```
   Example: If your username is "john123", it should be:
   ```js
   site: 'https://john123.github.io',
   base: '/AIagency',
   ```

### Step 3: Initialize Git and Push to GitHub

Open Command Prompt/Terminal in your project folder and run:

```bash
# Navigate to your project
cd C:\Users\Joshm\AIagency

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial AI Agency landing page"

# Add your GitHub repository as remote (replace with your details)
git remote add origin https://github.com/YOUR_USERNAME/AIagency.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (top right of repository page)
3. **Scroll down to "Pages"** in left sidebar
4. **Under "Source"**, select **"GitHub Actions"**
5. **Save** - GitHub will automatically start building your site

### Step 5: Wait for Deployment

- **GitHub Actions will run automatically** (takes 2-3 minutes)
- **Go to "Actions" tab** to see the progress
- **Once complete**, your site will be live at:
  `https://YOUR_USERNAME.github.io/AIagency`

## 🔧 Alternative: Using GitHub CLI (if you have it)

If you have GitHub CLI installed:

```bash
cd C:\Users\Joshm\AIagency
gh repo create AIagency --public
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 🌐 Your Site Will Be Live At:

```
https://YOUR_USERNAME.github.io/AIagency
```

**Example**: If your username is "john123":
```
https://john123.github.io/AIagency
```

## 🔄 Making Updates

After initial deployment, any time you want to update your site:

```bash
# Make your changes to the files
git add .
git commit -m "Update content"
git push
```

GitHub will automatically rebuild and deploy your changes in 2-3 minutes!

## 🛠 Troubleshooting

### Site Not Loading?
1. **Check GitHub Actions** - Go to "Actions" tab, ensure build succeeded
2. **Verify GitHub Pages settings** - Should be set to "GitHub Actions"
3. **Check the URL** - Make sure you're using the correct username and repo name

### Build Failing?
1. **Check if your code builds locally**: `npm run build`
2. **Check the Actions log** for specific error messages
3. **Ensure all dependencies are in package.json**

### Wrong URL?
1. **Update astro.config.mjs** with correct username/repo name
2. **Commit and push changes**

## ✨ Custom Domain (Optional)

Want to use your own domain like `yourcompany.com`?

1. **Add a CNAME file** to your repository root
2. **Put your domain name** in the file
3. **Configure DNS** with your domain provider
4. **Update GitHub Pages settings** to use your custom domain

## 🎯 What Happens Next

1. **Your site is live** and accessible worldwide
2. **Updates are automatic** - just push to GitHub
3. **Free SSL certificate** included
4. **Fast global CDN** for quick loading
5. **Perfect for sharing** with clients and on social media

---

Your AI Agency landing page will be live on the web in just a few minutes! 🚀

**Need your exact commands?** Just tell me your GitHub username and I'll give you the exact commands to copy and paste.