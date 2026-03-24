🎧 MadNess Music Group — Astro Template

A premium, dark-mode-ready Astro template designed for music collectives, labels, curators, and artists. Built with a modern aesthetic, bilingual support, and optimized for showcasing playlists, releases, and artists.






✨ Features
🌓 Dark Mode — Optimized for music/night vibe + manual toggle
🌍 i18n (ES/EN) — Spanish & English support with toggle
🎵 Music-Focused Design — Perfect for playlists, releases, and artist profiles
📱 Fully Responsive — Mobile-first, ideal for sharing music
✨ Scroll Animations — Smooth reveal for sections and cards
🔍 SEO Ready — Optimized for music discovery & sharing
📂 Centralized Data — Manage playlists, artists, and content easily
⚡ Fast — Built with Astro for performance
📁 Project Structure
├── public/
│   ├── background.svg        # Custom background / texture
│   └── favicon.svg           # Site favicon
├── src/
│   ├── assets/               # Covers, logos, artist images
│   ├── components/
│   │   ├── Card.astro         # Playlist / release card
│   │   ├── DarkModeToggle.astro
│   │   ├── Footer.astro
│   │   ├── Gallery.astro      # Covers / visuals grid
│   │   ├── Hero.astro         # Landing (main vibe)
│   │   ├── LangToggle.astro
│   │   ├── Navbar.astro
│   │   └── Timeline.astro     # Releases timeline
│   ├── data/
│   │   ├── siteConfig.ts      # ⭐ Brand info (MadNess)
│   │   └── content.ts         # ⭐ Playlists, artists, releases
│   ├── i18n/
│   │   └── translations.js    # ES/EN translations
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro        # Home (featured playlists)
│   │   ├── archive.astro      # Full catalog
│   │   ├── artists.astro      # Artists / collaborators
│   │   └── gallery.astro      # Visual content
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
🚀 Quick Start
git clone https://github.com/your-username/madness-music-group.git
cd madness-music-group

npm install
npm run dev

Open: http://localhost:4321

🎨 Customization Guide
Step 1: Update Brand Config

Edit src/data/siteConfig.ts:

export const siteConfig = {
  siteName: "MadNess Music Group",
  siteSubtitle: "Curated Sounds & Playlists",
  siteMotto: "Feel the vibe, share the sound",
  siteDescription: "A music platform showcasing curated playlists, artists, and releases.",
  address: {
    line1: "Monterrey, NL",
    line2: "Mexico",
  },
};
Step 2: Replace Content

Edit src/data/content.ts:

🎧 Playlists (MadNess playlists)
🎤 Artists / collaborators
📀 Releases / drops
🗂 Archive content
📊 Stats (streams, followers, etc.)
Step 3: Replace Images

Update src/assets/:

Playlist covers
Artist photos
Logo (MadNess Music Group)
Background visuals
Step 4: Translations

Edit src/i18n/translations.js:

Español / English
UI text (buttons, sections, etc.)
Step 5: Customize Colors

Edit src/styles/global.css:

@theme {
  --color-primary: #0f0f0f;   /* Dark base */
  --color-secondary: #1a1a1a; /* Cards */
  --color-accent: #1db954;    /* Spotify vibe */
}
Step 6: Favicon

Replace:

public/favicon.svg
public/favicon.ico
🚢 Deployment
Vercel
npm run build

Deploy /dist

Netlify
Build: npm run build
Publish: dist
🛠 Commands
Command	Action
npm install	Install dependencies
npm run dev	Start dev server
npm run build	Build production
npm run preview	Preview build
📄 License

MIT License — free to use and modify.

🎵 About

Built for MadNess Music Group — a platform focused on music discovery, playlists, and collaborations.