# MeetCounts Website

Official landing page for MeetCounts app.

## Setup Instructions

1. **Update Links:**
   - Edit `index.html` and replace `YOUR_GITHUB_USERNAME/YOUR_PRIVACY_GIST_ID` with your actual GitHub Gist links
   - Edit `script.js` and add your actual App Store and Play Store URLs

2. **Add Logo:**
   - Copy your app logo to this folder as `logo.png` (recommended size: 512x512px)

3. **Deploy to GitHub Pages:**
   - Push this repo to GitHub
   - Go to Settings > Pages
   - Select "Deploy from main branch"
   - Set custom domain to `meetcounts.com`

4. **Configure Domain:**
   - In your domain registrar (Namecheap, etc.):
     - Add A records pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
     - Add CNAME record: `www` pointing to `YOUR_GITHUB_USERNAME.github.io`

5. **Enable HTTPS:**
   - In GitHub Pages settings, check "Enforce HTTPS"

## Files

- `index.html` - Main landing page
- `style.css` - Styling
- `script.js` - Store link configuration
- `logo.png` - App logo (you need to add this)

## Customization

Update the store URLs in `script.js` once your apps are published:
```javascript
const APP_STORE_URL = 'https://apps.apple.com/app/YOUR_APP_ID';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=YOUR_PACKAGE_ID';
```

## Support

For questions, email: support@meetcounts.com
