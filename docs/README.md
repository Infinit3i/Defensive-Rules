# Defensive Rules Frontend

Vue.js TypeScript frontend for browsing Sigma and YARA detection rules. Uses Vite build system and works with GitHub Pages.

## Features

- Browse 451 Sigma rules organized by MITRE ATT&CK tactics  
- View 6+ YARA rules for binary detection
- Search and filter rules by technique, severity, or keywords
- Clean dark theme with nerd font icons
- Mobile responsive design
- Static hosting compatible (GitHub Pages)
- Build-time rule processing for production

## Architecture

```
docs/
├── index.html              # HTML entry point
├── src/
│   ├── App.vue            # Vue.js TypeScript application
│   └── main.ts            # Application bootstrap
├── assets/
│   ├── style.css          # Clean dark theme styling
│   └── nerd-fonts.css     # Local nerd font definitions
├── vite.config.ts         # Vite build configuration
└── package.json           # Dependencies and scripts
```

## GitHub Pages Setup

1. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs

2. **Access site**: `https://infinit3i.github.io/Defensive-Rules`

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:5173/
```

## GitHub Pages Deployment

The app is automatically deployed to GitHub Pages via GitHub Actions:

1. **Automatic**: Push to `main` branch triggers deployment
2. **Build Process**: Vite bundles all YAML files at build time
3. **Static Hosting**: GitHub Pages serves the built assets

### Manual Build

```bash
# Development build
npm run build:dev

# Production build for GitHub Pages  
npm run build:gh-pages

# Preview production build
npm run preview
```

### Alternative: Simple HTTP Server

For testing without the Vite dev server:

```bash
# First, build the application
cd docs/
npm run build

# Then serve the built files
cd dist/
python3 -m http.server 8000

# Access at: http://localhost:8000/
```

** Important**: You must build first with `npm run build` before serving with a simple HTTP server. The source files cannot be served directly because they use Vite's import system.

## Rule Loading System

The frontend uses build-time processing for production compatibility:

- **Development**: Direct file access via Vite dev server
- **Production**: All YAML files bundled using `import.meta.glob()` with `eager: true`
- **GitHub Pages**: Static assets served from build output
- **No API calls**: Rules embedded in build for reliability

## Technology Stack

- **Vue 3** (CDN) - Reactive frontend framework
- **Vanilla CSS** - No frameworks, clean custom styling
- **Nerd Fonts** - Icon fonts for terminal enthusiasts
- **Static JSON** - No backend required

## Customization

### Theme Colors
```css
/* Primary colors in assets/style.css */
--background: #0d1117;
--surface: #161b22;
--accent: #58a6ff;
--text: #e0e0e0;
```

### Nerd Font Icons
```html
<!-- Examples used in the interface -->
<i class="nf nf-fa-shield"></i>     <!-- Shield icon -->
<i class="nf nf-fa-search"></i>     <!-- Search icon -->
<i class="nf nf-fa-bug"></i>        <!-- Bug icon -->
<i class="nf nf-fa-bar_chart"></i>  <!-- Chart icon -->
```

### Adding New Data Sources
```javascript
// Extend app.js to load additional rule types
async loadCustomRules() {
    const response = await fetch('./data/custom-rules.json');
    this.customRules = await response.json();
}
```

## Performance

- **Bundle size**: ~50KB (Vue CDN + CSS + JS)
- **Load time**: <2s on fast connections + rule discovery
- **Data loading**: Dynamic from GitHub API (no pre-built JSON)
- **Mobile friendly**: Responsive grid layout

## Browser Support

- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Content Security Policy

For production deployment, consider CSP headers:

```
Content-Security-Policy: 
    default-src 'self'; 
    script-src 'self' 'unsafe-eval' https://unpkg.com; 
    style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; 
    font-src 'self' https://cdn.jsdelivr.net;
```

## Maintenance

### Automated Updates
GitHub Pages deployment automatically serves the latest rules:

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./docs
```

### Manual Updates
```bash
# Rules update automatically - no build step needed
# Just add/modify files in Sigma/ or Yara/ directories
git add Sigma/ Yara/
git commit -m "Add new detection rules"
git push
```

## Troubleshooting

### Frontend Shows 0 Rules
- **Check internet connection**: Rules load via GitHub API
- **Check browser console**: Look for API failures or JavaScript errors
- **GitHub rate limiting**: API allows 60 requests/hour for unauthenticated users
- **File browser access**: Can open docs/index.html directly (no server needed)

### Rule Loading Issues
- **Network tab**: Check browser developer tools for failed GitHub API calls
- **CORS issues**: Some local file:// URLs may block GitHub API
- **YAML syntax**: Validate rule files have correct YAML formatting
- **Repository access**: Ensure repository is public and accessible

### Common Error Messages
- **"GitHub API failed"**: Check internet connection or rate limits
- **"No rule files discovered"**: Directory empty or files don't match pattern  
- **"HTTP 403"**: GitHub rate limit exceeded (wait 1 hour)
- **"CORS error"**: Use http:// server instead of file:// URL