# Premium Motorbike Dealership Website

A modern, responsive motorbike dealership website built with React.js and Tailwind CSS.

## Features

- Multi-page navigation with React Router
- Fully responsive design
- Modern UI with glassmorphism effects
- Smooth animations and transitions
- Lead generation focused (no prices displayed)

## Tech Stack

- React 18
- React Router DOM
- Tailwind CSS
- Vite

## Development

```bash
npm install
npm run dev
```

The app will run on `http://localhost:8900`

## Build

```bash
npm run build
```

## Netlify Deployment

This project is configured for Netlify deployment:

1. **Build settings in Netlify:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18.x` or `20.x` (set in Netlify dashboard if needed)

2. **Automatic redirects:**
   - The `_redirects` file in the `public` folder ensures all routes redirect to `index.html` for React Router to work
   - The `netlify.toml` file provides additional configuration

3. **Deploy:**
   - Connect your GitHub repository to Netlify
   - Netlify will automatically detect the build settings from `netlify.toml`
   - Or manually set the build command and publish directory in Netlify dashboard

## Project Structure

```
src/
  ├── components/     # Reusable components (Navbar, Footer, Card, Icons)
  ├── pages/         # Page components (Home, Motorbikes, Promotions, About, Contact)
  ├── hooks/         # Custom React hooks
  ├── assets/        # Images, fonts, and other assets
  └── index.css      # Global styles and Tailwind imports
```

## Pages

- `/` - Home page
- `/motorbikes` - Motorbike selection
- `/promotions` - Special promotions and financing
- `/about` - About the dealership
- `/contact` - Contact information and form
