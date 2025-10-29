# Bloom with Dignity - React Starter Component

A complete, single-file React component for the Bloom with Dignity CBO website, built with React and Tailwind CSS.

## Quick Start

### 1. Create a new React project
```bash
npm create vite@latest bloom-with-dignity --template react
cd bloom-with-dignity
npm install
```

### 2. Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Configure Tailwind
Update `tailwind.config.cjs`:
```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
}
```

### 4. Update CSS
Replace the contents of `src/index.css` with:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Replace App.jsx
Replace `src/App.jsx` with the component from this repository (`src/App.jsx`).

### 6. Add Assets
Create the following directory structure and add your images:
```
public/
  assets/
    logo.svg
    miss-director-1.jpg
    miss-director-2.jpg
    miss-director-3.jpg
```

### 7. Run the development server
```bash
npm run dev
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Complete Sections**: Header, Hero, About, Programs, Impact, Gallery, Team, Contact, Donate, Footer
- **Interactive Elements**: Mobile menu, smooth scrolling navigation
- **Embedded Logo**: SVG logo component included inline
- **Modern UI**: Clean, professional design with hover effects and transitions
- **Accessibility**: Proper ARIA labels and semantic HTML

## Customization

### Colors
The component uses a color scheme based on the logo:
- **Primary**: Teal (`teal-600`, `teal-700`)
- **Accent**: Yellow (`yellow-500`)
- **Success**: Green (`green-600`)
- **Background**: White and light gray variants

### Content
All content can be easily modified by editing the component functions:
- Update team members in the `Team` component
- Modify program details in the `Programs` component
- Change statistics in the `Impact` component
- Update gallery images in the `Gallery` component

### Styling
Built with Tailwind CSS utility classes for easy customization:
- Responsive breakpoints: `sm:`, `md:`, `lg:`
- Spacing: `p-`, `m-`, `px-`, `py-`
- Colors: `bg-`, `text-`, `border-`
- Layout: `grid`, `flex`, `gap-`

## Deployment

### Build for production
```bash
npm run build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your repository to Netlify for automatic deployments

## Organization Information

**Bloom with Dignity CBO**
- Founded: August 2025
- Mission: Empowering girls through education, mentorship and community programs
- Impact: 28 girls supported across 1 community through 2 programs
- Founder/Director: Lynn Jane Wangari

## Board Members
- Lynn Jane Wangari - Founder/Director
- Judy Wanjiru Gichugu - Board Member
- Erick Gichoki - Treasurer
- Patrick Njuki Kiragu - Secretary
- Duke Mainye - Board Member
- James Kahuthu Mungai - Board Member

## License

This project is open source and available under the MIT License.
