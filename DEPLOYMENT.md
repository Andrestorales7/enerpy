# ENERPY Production Deployment Guide

## 🚀 Pre-Deployment Checklist

### ✅ Security & Dependencies
- [x] npm vulnerabilities fixed
- [x] TypeScript strict mode enabled
- [x] ESLint errors resolved
- [x] Environment variables configured

### ✅ Build Configuration
- [x] Production build script added
- [x] Image optimization configured
- [x] PWA support enabled
- [x] Compression (gzip/brotli) enabled
- [x] Code splitting optimized

### ✅ SEO & Performance
- [x] Meta tags optimized
- [x] Structured data added
- [x] Sitemap created
- [x] Robots.txt configured
- [x] Security headers added

## 🏗️ Build Commands

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build:prod
```

### Analyze Bundle
```bash
npm run build:analyze
```

## 🌍 Environment Configuration

### Create Production Environment File
```bash
cp env.example .env.production
```

### Required Environment Variables
```env
VITE_APP_NAME=ENERPY
VITE_APP_VERSION=1.0.0
VITE_APP_ENV=production
VITE_API_BASE_URL=https://api.enerpy.com
VITE_CDN_URL=https://cdn.enerpy.com
```

## 📦 Deployment Options

### Option 1: Static Hosting (Recommended)
- **Netlify**: Drag & drop `dist/` folder
- **Vercel**: Connect GitHub repository
- **AWS S3 + CloudFront**: For enterprise
- **GitHub Pages**: Free hosting

### Option 2: Traditional Hosting
- Upload `dist/` contents to web server
- Configure server for SPA routing
- Enable gzip compression

### Option 3: Docker Container
```dockerfile
FROM nginx:alpine
COPY dist/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 Server Configuration

### Nginx Configuration (SPA Support)
```nginx
server {
    listen 80;
    server_name energpy.com www.energpy.com;
    root /var/www/energpy/dist;
    index index.html;

    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    # Security headers
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache fonts
    location ~* \.(woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Apache Configuration (.htaccess)
```apache
RewriteEngine On
RewriteBase /

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Security headers
Header always set X-Frame-Options DENY
Header always set X-Content-Type-Options nosniff
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"

# SPA routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg|webp)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
    Header set Cache-Control "public, immutable"
</FilesMatch>
```

## 📊 Performance Monitoring

### Core Web Vitals
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Tools
- Google PageSpeed Insights
- WebPageTest
- Lighthouse
- GTmetrix

## 🔒 Security Checklist

- [x] HTTPS enabled
- [x] Security headers configured
- [x] CSP policy (if needed)
- [x] Rate limiting (server-side)
- [x] Input validation
- [x] XSS protection
- [x] CSRF protection (if applicable)

## 📱 PWA Features

- [x] Service Worker registered
- [x] Web App Manifest
- [x] Offline support
- [x] Install prompt
- [x] Background sync (if needed)

## 🚨 Post-Deployment

### Health Checks
```bash
# Check if site is accessible
curl -I https://energpy.com

# Check compression
curl -H "Accept-Encoding: gzip" -I https://energpy.com

# Check security headers
curl -I https://energpy.com | grep -E "(X-Frame-Options|X-Content-Type-Options|X-XSS-Protection)"
```

### Monitoring Setup
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring
- [ ] Uptime monitoring
- [ ] Analytics (Google Analytics)

## 📈 Optimization Tips

1. **CDN**: Use CloudFlare or AWS CloudFront
2. **Image Optimization**: WebP format, responsive images
3. **Font Loading**: Preload critical fonts
4. **Critical CSS**: Inline above-the-fold styles
5. **Lazy Loading**: Images and non-critical components

## 🆘 Troubleshooting

### Common Issues
1. **404 on refresh**: Configure SPA routing
2. **Slow loading**: Check bundle size and compression
3. **PWA not working**: Verify service worker registration
4. **SEO issues**: Check meta tags and structured data

### Support
- Check browser console for errors
- Verify build output in `dist/` folder
- Test with different browsers
- Validate HTML and CSS
