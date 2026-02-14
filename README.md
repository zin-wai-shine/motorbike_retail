# Premium Motorbike Dealership Website

A modern, multi-page motorbike dealership website built with React.js and Tailwind CSS, designed for lead generation.

## Features

- **Multi-page Navigation**: Home, Motorbikes, Promotions, About, and Contact pages
- **Lead Generation Focus**: No prices displayed - encourages contact via Line, phone, or Facebook
- **Premium Design**: Clean, modern UI with smooth animations and professional styling
- **Fully Responsive**: Mobile-first design that works on all devices
- **React Router**: Client-side routing for seamless navigation

## Color Theme

- **Primary**: #D90429 (Bold dealership red)
- **Secondary**: #111827 (Dark charcoal)
- **Accent**: #F59E0B (Highlight color)
- **Background**: #F9FAFB
- **Text**: #1F2937

## Project Structure

```
motorbike_landingpage/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky navigation bar
│   │   ├── Footer.jsx      # Footer with links and contact info
│   │   └── Card.jsx        # Reusable card component
│   ├── pages/
│   │   ├── Home.jsx        # Homepage with hero, features, promotions
│   │   ├── Motorbikes.jsx  # Bike listing page (no prices)
│   │   ├── Promotions.jsx  # Financing and promotion options
│   │   ├── About.jsx       # About us page
│   │   └── Contact.jsx     # Contact form and information
│   ├── App.jsx             # Main app with routing
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind CSS imports
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development Server

The development server is configured to run on port 8900:

```bash
npm run dev
```

Visit `http://localhost:8900` in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Pages Overview

### Home Page
- Hero section with compelling headline
- Feature highlights (Certified Bikes, Easy Financing, Fast Approval, Trusted Dealer)
- Promotions preview cards
- Final CTA section

### Motorbikes Page
- Grid of motorbike cards with images
- Model names and descriptions
- "Ask About This Bike" buttons (no prices)
- Uses Unsplash placeholder images

### Promotions Page
- Low Down Payment Plans
- Flexible Installments
- Seasonal Promotions
- Trade-in Assistance
- Each section has descriptive text and CTA buttons

### About Page
- Mission statement
- Focus areas
- Support information
- "Why Choose Us" section with 4 key points

### Contact Page
- Contact information (address, phone, hours)
- Quick contact buttons (Call, Facebook, Line)
- Contact form with validation
- Request information functionality

## Customization

### Update Contact Information
Edit the contact details in:
- `src/pages/Contact.jsx`
- `src/components/Footer.jsx`

### Add More Motorbikes
Edit the `bikes` array in `src/pages/Motorbikes.jsx`

### Modify Colors
Update the color values in `tailwind.config.js`

### Update Images
Replace Unsplash URLs with your own images in:
- `src/pages/Motorbikes.jsx` (bike images)

## Technologies Used

- **React 18** - UI library
- **React Router DOM 6** - Client-side routing
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)

---

Built with ❤️ for lead generation and customer engagement.

