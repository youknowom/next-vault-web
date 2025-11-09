# create-next-vault Landing Page

A premium, production-ready marketing site for the **create-next-vault** npm package. Built with Next.js 14 (App Router), TailwindCSS, shadcn/ui, Framer Motion, and next-themes.

## Features

- ✨ **Modern Design**: Sleek, animated, and professional UI inspired by Next.js and Vercel
- 🎨 **Dark/Light Mode**: Seamless theme switching with next-themes
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile
- ⚡ **Performance**: Built with Next.js 14 App Router for optimal performance
- 🎭 **Animations**: Smooth transitions and animations with Framer Motion
- 📊 **Live Stats**: Dynamic stats from npm and GitHub APIs
- 🚀 **Ready to Deploy**: Fully configured for Vercel deployment

## Tech Stack

- **Next.js 16** (App Router)
- **TailwindCSS v4**
- **shadcn/ui** components
- **Framer Motion** for animations
- **next-themes** for dark/light mode
- **Lucide React** for icons
- **Radix UI** for accessible components

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── stats/          # API route for npm and GitHub stats
│   ├── globals.css         # Global styles and theme variables
│   ├── layout.js           # Root layout with theme provider
│   └── page.js             # Main page with all sections
├── components/
│   ├── sections/           # All page sections
│   │   ├── hero.js
│   │   ├── features.js
│   │   ├── stats.js
│   │   ├── cli-demo.js
│   │   ├── testimonials.js
│   │   ├── installation.js
│   │   ├── sponsor.js
│   │   └── footer.js
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.js
│   │   ├── card.js
│   │   └── avatar.js
│   ├── navbar.js           # Navigation bar
│   ├── theme-provider.js   # Theme provider wrapper
│   └── theme-toggle.js     # Theme toggle button
└── lib/
    └── utils.js            # Utility functions
```

## Sections

1. **Hero Section**: Animated hero with typing command and CTA buttons
2. **Features Section**: Key features with hover animations
3. **Stats Section**: Live stats from npm and GitHub
4. **CLI Demo Section**: Animated terminal demonstration
5. **Testimonials Section**: Community testimonials
6. **Installation Section**: Step-by-step installation guide
7. **Sponsor Section**: Support links (Buy Me a Coffee, GitHub Sponsors)
8. **Footer**: Links and theme toggle

## Deployment

### Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Other Platforms

This project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Render

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Primary blue */
  --background: 0 0% 100%;        /* Background */
  /* ... */
}
```

### Content

Update the content in each section component in `components/sections/`.

### API Endpoints

The stats API route is in `app/api/stats/route.js`. Update the package name and GitHub repository as needed.

## License

MIT License © 2025 Omkar Bagul

## Links

- **GitHub**: [https://github.com/youknowom/create-next-vault](https://github.com/youknowom/create-next-vault)
- **npm**: [https://www.npmjs.com/package/create-next-vault](https://www.npmjs.com/package/create-next-vault)
- **LinkedIn**: [https://www.linkedin.com/in/omkar-bagul-18b949269/](https://www.linkedin.com/in/omkar-bagul-18b949269/)
