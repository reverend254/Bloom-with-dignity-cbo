# Bloom with Dignity - Cursor Ready React + Tailwind Single-File Starter

A beautiful, modern website for Bloom with Dignity CBO built with React, TypeScript, and TailwindCSS. This is a complete single-file component that can be easily deployed and customized.

## Features

- 🌱 **Modern Design**: Clean, professional layout with beautiful typography
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎨 **TailwindCSS**: Utility-first CSS framework for rapid styling
- 🔧 **TypeScript**: Full type safety and better developer experience
- 📦 **Single File**: Everything in one App.tsx file for easy deployment

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Install TailwindCSS (if not already installed)

```bash
npm install -D tailwindcss postcss autoprefixer
```

### 3. Run Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 4. Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
bloom-with-dignity/
├── public/
│   └── assets/           # Gallery images
│       ├── miss-director-1.jpg
│       ├── miss-director-2.jpg
│       └── miss-director-3.jpg
├── src/
│   ├── App.tsx          # Main component (single file)
│   ├── index.css        # TailwindCSS imports
│   └── index.tsx        # React entry point
├── tailwind.config.js   # TailwindCSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json
```

## Customization

### Colors

The project uses a custom color palette based on the Bloom with Dignity logo:

- **Teal**: `#08A589` (primary brand color)
- **Gold**: `#F7C81C` (accent color)
- **Green**: `#7BC74D` (secondary color)
- **Soft Lavender**: `#E8D5F2` (accent color)

You can modify these in `tailwind.config.js`:

```javascript
theme: { 
  extend: {
    colors: {
      'gold': '#F7C81C',
      'soft-lavender': '#E8D5F2'
    }
  } 
}
```

### Content

All content is easily editable in the `App.tsx` file. Key sections include:

- **Hero**: Main banner with organization name and mission
- **About**: Organization description and founder message
- **Programs**: Two main programs with descriptions
- **Impact**: Statistics and testimonials
- **Gallery**: Photo gallery (replace placeholder images)
- **Team**: Board members and leadership
- **Contact**: Contact form
- **Donate**: Donation call-to-action

### Images

Replace the placeholder images in `public/assets/` with actual photos:

- `miss-director-1.jpg`
- `miss-director-2.jpg` 
- `miss-director-3.jpg`

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your Git repository for automatic deployments

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Bloom with Dignity CBO. All rights reserved.

## Support

For questions or support, please contact the development team.

---

**Bloom with Dignity CBO** - Empowering girls, transforming lives.