# Strapi Integration Troubleshooting Guide

## Common Reasons Why Strapi Blogs Don't Show on Hosted Website

### 1. **Missing Environment Variables**
**Issue:** No `.env.local` file or missing API keys
**Solution:** Create `.env.local` file in project root:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=your_api_token_here
```

### 2. **Strapi Server Not Running**
**Issue:** Strapi server is not accessible
**Check:** Visit `http://localhost:1337/admin` - should show Strapi admin panel

### 3. **API Permissions Not Set**
**Issue:** Strapi content type permissions not configured
**Solution:** 
1. Go to Strapi Admin → Settings → Users & Permissions Plugin → Roles
2. Select "Public" role
3. For "Blog" content type, enable:
   - `find` (to list blogs)
   - `findOne` (to get single blog)
   - All fields should be checked

### 4. **Blog Not Published**
**Issue:** Blog exists but not published
**Solution:** 
1. Go to Strapi Admin → Content Manager → Blog
2. Check if blog status is "Published"
3. If "Draft", click "Publish"

### 5. **CORS Issues (Hosted Environment)**
**Issue:** Cross-origin requests blocked
**Solution:** Configure CORS in Strapi:
```javascript
// config/middlewares.js
module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https:'],
          'media-src': ["'self'", 'data:', 'blob:', 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
```

### 6. **Wrong API Endpoint**
**Issue:** API endpoint mismatch
**Check:** Verify the content type is named "Blog" (case-sensitive)

### 7. **Network/Firewall Issues**
**Issue:** Hosted environment can't reach Strapi
**Solution:** Ensure Strapi is accessible from your hosting environment

## Debugging Steps

### Step 1: Check Environment Variables
```javascript
// Add this to your component to debug
console.log('Environment Check:', {
  STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
  hasToken: !!process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
  tokenLength: process.env.NEXT_PUBLIC_STRAPI_API_TOKEN?.length
});
```

### Step 2: Test API Directly
Visit: `http://localhost:1337/api/blogs?populate=*`
Should return JSON with your blogs

### Step 3: Check Browser Console
Look for:
- Network errors (404, 403, 500)
- CORS errors
- Authentication errors

### Step 4: Verify Strapi Content
1. Go to `http://localhost:1337/admin`
2. Navigate to Content Manager → Blog
3. Ensure blogs exist and are published

## Quick Fixes

### For Local Development:
1. Create `.env.local` file
2. Add your Strapi URL and API token
3. Restart Next.js dev server

### For Production:
1. Set environment variables in your hosting platform
2. Ensure Strapi is accessible from your hosting environment
3. Check CORS configuration

## API Token Generation
1. Go to Strapi Admin → Settings → API Tokens
2. Click "Create new API Token"
3. Set permissions for "Blog" content type
4. Copy the token to your environment variables 