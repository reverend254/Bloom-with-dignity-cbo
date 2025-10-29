# Bloom with Dignity CBO - Website Starter

A beautiful, ready-to-use React + Tailwind CSS single-file component for the Bloom with Dignity Community-Based Organization.

## About Bloom with Dignity

Bloom with Dignity CBO was founded in August 2025 with the mission of empowering girls through education, mentorship and community programs. We believe that when a girl blooms, a community thrives.

- **28 Girls Supported** across our programs
- **2 Active Programs**: Girl Empowerment Initiative & Community Wellness Program
- **1 Community** transformed through our work

## Quick Start

### 1. Create a React Project

```bash
npm create vite@latest bloom-with-dignity --template react
cd bloom-with-dignity
npm install
```

### 2. Install TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.cjs`:

```js
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

Replace `src/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Use the Component

Copy the `src/App.jsx` file from this repository to your project's `src/App.jsx`.

### 4. Add Assets

Place the following images in `public/assets/`:
- `miss-director-1.jpg`
- `miss-director-2.jpg`
- `miss-director-3.jpg`

The logo is included as an inline SVG component.

### 5. Run Development Server

```bash
npm run dev
```

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project (creates `/dist` folder)
2. Either:
   - Drag and drop the `/dist` folder to Netlify
   - Connect your repository to Netlify for automatic deployments

## Features

- ✨ **Modern Design**: Clean, professional UI with Tailwind CSS
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- 🎨 **Custom Branding**: Uses organization's color scheme (teal, green, gold)
- 🔗 **Single-File Component**: Easy to customize and maintain
- ♿ **Accessible**: Built with semantic HTML and accessibility in mind
- 🚀 **Fast**: Optimized for performance

## Sections Included

- **Header**: Sticky navigation with mobile menu
- **Hero**: Eye-catching introduction with key statistics
- **About**: Organization mission and founder information
- **Programs**: Showcase of the two main programs
- **Impact**: Statistics and testimonials
- **Gallery**: Photo gallery from events
- **Team**: Board member profiles
- **Contact**: Contact form for inquiries
- **Donate**: Call-to-action for donations
- **Footer**: Social links and copyright

## Customization

The component is designed to be easily customizable:

- **Colors**: Update Tailwind classes to match your branding
- **Content**: Edit text directly in the component functions
- **Images**: Replace placeholder images with your own
- **Sections**: Add, remove, or reorder sections as needed

## Board Members

- Lynn Jane Wangari - Founder / Director
- Judy Wanjiru Gichugu - Board Member
- Erick Gichoki - Treasurer
- Patrick Njuki Kiragu - Secretary
- Duke Mainye - Board Member
- James Kahuthu Mungai - Board Member

## License

© 2025 Bloom with Dignity CBO. All rights reserved.

## Support

For questions or support, please use the contact form on the website or reach out to the organization directly.
