# Quick Setup Instructions

## Step 1: Create GitHub Repository (DO THIS FIRST)
Go to: https://github.com/new

Settings:
- **Repository name:** `meetcounts-website`
- **Description:** `Official landing page for MeetCounts app`
- **Visibility:** Public
- **❌ DON'T** check "Initialize with README"
- Click "Create repository"

## Step 2: Push Your Code (AFTER creating repo on GitHub)

```bash
cd /Users/younessachour/Desktop/meetcounts-website
git remote add origin git@github.com:yacho25/meetcounts-website.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repo: https://github.com/yacho25/meetcounts-website
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select **Deploy from a branch**
4. Branch: **main** / Folder: **/ (root)**
5. Click **Save**
6. (OPTIONAL) Add custom domain: `meetcounts.com`

## Step 4: Configure Your Domain (Namecheap/Your Registrar)

Add these DNS records to `meetcounts.com`:

### A Records (add all 4):
```
Type: A    Host: @    Value: 185.199.108.153
Type: A    Host: @    Value: 185.199.109.153
Type: A    Host: @    Value: 185.199.110.153
Type: A    Host: @    Value: 185.199.111.153
```

### CNAME Record:
```
Type: CNAME    Host: www    Value: yacho25.github.io
```

## Step 5: Update Links (Before DNS propagates)

### Edit index.html
Replace these lines in the footer:
```html
<a href="https://gist.github.com/YOUR_GITHUB_USERNAME/YOUR_PRIVACY_GIST_ID" target="_blank">Privacy Policy</a>
<a href="https://gist.github.com/YOUR_GITHUB_USERNAME/YOUR_TERMS_GIST_ID" target="_blank">Terms of Service</a>
```

With your actual GitHub Gist URLs for privacy policy and terms.

### Edit script.js (Later, when apps are published)
```javascript
const APP_STORE_URL = 'https://apps.apple.com/app/id123456789';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.yourpackage.meetcounts';
```

## Expected Timeline
- **GitHub Pages active:** 2-5 minutes after enabling
- **Custom domain working:** 24-48 hours (DNS propagation)
- **HTTPS enabled:** Automatic (may take 1 hour after domain connects)

## Verification
- Test GitHub Pages: `https://yacho25.github.io/meetcounts-website/`
- Test custom domain: `https://meetcounts.com` (after DNS)

## Troubleshooting
- If DNS not working after 24h, check registrar settings
- If page shows 404, verify GitHub Pages is enabled in Settings
- If HTTPS not working, check "Enforce HTTPS" in Pages settings
