# Defensive Rules Frontend

Clean Vue.js frontend for browsing Sigma and YARA detection rules. Uses nerd fonts and works with GitHub Pages.

## Features

- Browse 281+ Sigma rules organized by MITRE ATT&CK tactics
- View 17+ YARA rules for binary detection
- Search and filter rules by technique, severity, or keywords
- Clean dark theme with nerd font icons
- Mobile responsive design
- Static hosting compatible (GitHub Pages)

## Architecture

```
docs/
├── index.html          # Main HTML entry point
├── src/
│   └── app.js          # Vue.js application logic
└── assets/
    └── style.css       # Clean dark theme styling
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
# No server needed! Just open in browser
open docs/index.html

# Or use any simple server (optional)
cd docs && python3 -m http.server 8000
# Then visit: http://localhost:8000

# Rules are loaded dynamically via GitHub API
```

## Dynamic Rule Loading

The frontend loads rules dynamically without pre-generated JSON files:

- **Sigma rules**: Discovered from `Sigma/` directory structure via GitHub API
- **YARA rules**: Discovered from `Yara/` directory via GitHub API  
- **Fallback**: Common file patterns if API unavailable
- **No build step**: Rules update automatically when repository changes

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