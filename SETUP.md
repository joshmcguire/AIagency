# AI Agency Landing Page - Setup Guide

Your professional AI agency landing page is ready! Here's how to get started.

## 🚀 Quick Start (Local Development)

1. **Open your terminal/command prompt**
2. **Navigate to your project:**
   ```bash
   cd C:\Users\Joshm\AIagency
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser** and go to the URL shown in the terminal (usually `http://localhost:4321`)

That's it! Your site should be running locally.

## 📦 What's Included

✅ **Modern Tech Stack**: Astro v5 + React 19 + Tailwind CSS v3
✅ **Responsive Design**: Looks great on desktop, tablet, and mobile
✅ **High-Converting Copy**: Focused on your $15-20k AI sprint services
✅ **Professional Sections**:
   - Hero with clear value proposition
   - Services showcase with pricing
   - Customer testimonials and social proof
   - Contact form for lead capture

## 🌐 Deploy to the Web (FREE)

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
2. **Deploy:**
   ```bash
   cd C:\Users\Joshm\AIagency
   vercel
   ```
3. **Follow the prompts** (just press Enter for most questions)
4. **Get your live URL** - Vercel will give you a free `.vercel.app` URL

### Option 2: Netlify

1. **Build your site:**
   ```bash
   cd C:\Users\Joshm\AIagency
   npm run build
   ```
2. **Go to [netlify.com](https://netlify.com)** and sign up for free
3. **Drag and drop** the `dist` folder to Netlify
4. **Get your live URL** - Netlify will give you a free `.netlify.app` URL

### Option 3: GitHub + Vercel (For Updates)

1. **Create a GitHub repository**
2. **Push your code to GitHub**
3. **Connect Vercel to your GitHub repo**
4. **Automatic deployments** whenever you push changes

## 🛠 Customization

### Update Your Information

1. **Company Details** - Edit `src/components/Contact.jsx`
2. **Services & Pricing** - Edit `src/components/Services.jsx`
3. **Testimonials** - Edit `src/components/Testimonials.jsx`
4. **Hero Section** - Edit `src/components/Hero.jsx`

### Change Styling

- All styling uses **Tailwind CSS classes**
- Modify colors, fonts, and spacing by editing the component files
- The design is mobile-first and fully responsive

### Add Contact Form Backend

The contact form currently logs to console. To make it functional:

1. **Use a form service** like Formspree, Netlify Forms, or Vercel Functions
2. **Update the form handler** in `src/components/Contact.jsx`
3. **Add email notifications** to get leads instantly

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel (after installing Vercel CLI)
npm run deploy:vercel
```

## 📱 Sharing Your Site

Once deployed, you can easily share your site with:

- **Custom Domain**: Connect your own domain (yourcompany.com) for free
- **Social Media**: Share the live URL on LinkedIn, Twitter, etc.
- **Email Signatures**: Add the URL to your email signature
- **Business Cards**: Include the URL on printed materials

## 🆘 Need Help?

### Common Issues:

1. **"Command not found"** - Make sure Node.js is installed
2. **Port already in use** - The dev server will automatically find an available port
3. **Styles not loading** - Try refreshing the page or restarting the dev server

### Making Changes:

1. **Edit the files** in the `src` folder
2. **Save your changes** - the site will update automatically in development
3. **Run `npm run build`** to prepare for deployment

## 🎯 Next Steps

1. **Test your site** on different devices and browsers
2. **Customize the content** to match your specific services
3. **Deploy to a free hosting platform**
4. **Set up analytics** (Google Analytics, etc.)
5. **Connect a custom domain** for a professional look
6. **Add a contact form backend** to capture leads
7. **Share and start generating leads!**

---

Your AI agency landing page is built with modern, professional technology and optimized for conversions. Time to start scaling your AI consulting business! 🚀