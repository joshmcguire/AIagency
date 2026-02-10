# AI Agency Landing Page

A modern, high-converting landing page for an AI consulting agency built with Astro v5, React 19, and Tailwind CSS v4.

## Tech Stack

- **Framework**: Astro v5 (static output mode)
- **UI Library**: React 19 (via @astrojs/react integration)
- **Styling**: Tailwind CSS v4 (via Vite plugin)
- **Build Tool**: Vite (built into Astro)
- **Language**: JavaScript (ES modules)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to this directory:
```bash
cd AIagency
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the URL shown in your terminal

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build locally

## Deployment

### Quick Deploy to Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` and follow the prompts
3. Your site will be deployed with a unique URL

### Build for Any Host
1. Run: `npm run build`
2. Upload the `dist` folder to any static hosting service

## Customization

- Update pricing in `src/components/Services.jsx`
- Modify testimonials in `src/components/Testimonials.jsx`  
- Change contact info in `src/components/Contact.jsx`
- Customize styling via Tailwind CSS classes
