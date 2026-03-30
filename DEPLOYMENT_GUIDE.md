# Vercel Deployment Guide

## Project Status
- Build Status: ✅ SUCCESSFUL
- Latest Commit: `7560b3e` - chore: add vercel.json configuration for deployment
- Framework: Next.js 16.2.1
- Runtime: Node.js with TypeScript

## Prerequisites
1. GitHub account (create at https://github.com if needed)
2. Vercel account (create at https://vercel.com if needed)
3. SMTP credentials (for contact form emails)

## Step-by-Step Deployment Instructions

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository:
   - **Repository name:** `generic-website` (or your preferred name)
   - **Description:** Generic Website Platform - Multi-page Next.js application
   - **Visibility:** Public or Private (your choice)
   - **Initialize with:** Leave unchecked (we'll push existing code)
3. Click "Create repository"
4. Copy the repository URL (HTTPS or SSH format)

### Step 2: Push Code to GitHub

From the implementation directory, run:

```bash
# Add the GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/YOUR_USERNAME/generic-website.git

# Verify the remote was added
git remote -v

# Push the code to GitHub
git branch -M main
git push -u origin main

# Also push the feature/implementation branch (optional)
git push -u origin feature/implementation
```

**Expected Output:**
```
Counting objects: 100% (XX/XX), done.
Delta compression using up to X threads
Compressing objects: 100% (XX/XX), done.
Writing objects: 100% (XX/XX), done.
...
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

### Step 3: Create Vercel Project

1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Click "Import Git Repository"
4. Search for `generic-website` (or your repository name)
5. Click "Import"
6. Configure project:
   - **Framework:** Next.js (should be auto-detected)
   - **Root Directory:** ./ (default)
   - Keep other settings as defaults
7. Click "Deploy"

### Step 4: Configure Environment Variables in Vercel

After the initial deployment, configure email settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add the following variables:

```
SMTP_HOST=smtp.gmail.com          (or your email provider)
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password       (Google App Password if using Gmail)
SMTP_FROM=noreply@yourdomain.com
CONTACT_EMAIL_TO=admin@yourdomain.com
NEXT_PUBLIC_SITE_NAME=Your Business Name
```

**Environment Variable Notes:**
- **Gmail Setup:** Generate an App Password at https://myaccount.google.com/apppasswords
- **Mailtrap Alternative:** Use sandbox.smtp.mailtrap.io (port 2525) - free for testing
- **SendGrid:** Use api.sendgrid.com (port 587) - free tier available
- Set variables for **Production** environment

4. Click "Save"

### Step 5: Redeploy with Environment Variables

1. Go to **Deployments** tab in Vercel
2. Click the three dots next to the latest deployment
3. Select "Redeploy"
4. Wait for deployment to complete (~2-3 minutes)
5. Get your live URL (format: `https://generic-website.vercel.app`)

### Step 6: Test Your Live Site

Visit your Vercel URL and verify:

- ✅ Homepage loads correctly
- ✅ Navigation menu works (Home, Services, About, Team, Portfolio, Testimonials, Contact)
- ✅ All images display properly
- ✅ Contact form is visible and functional
- ✅ Contact form submission works (check email inbox)
- ✅ 404 page displays for invalid routes

### Step 7: Troubleshooting

**Build Errors:**
- Check Vercel build logs (Deployments → click failed deployment)
- Ensure all environment variables are set
- Verify next.config.js is correct

**Contact Form Not Sending Emails:**
- Verify SMTP credentials in environment variables
- Check spam folder for emails
- Ensure CONTACT_EMAIL_TO is correct

**Images Not Loading:**
- Check public/ directory exists with images
- Verify image paths in components use `/image-name` format

**Domain Configuration:**
- Visit Vercel project settings
- Go to "Domains"
- Add custom domain if desired (requires DNS configuration)

## Project Structure

```
.
├── pages/              # Next.js pages
│   ├── index.js       # Homepage
│   ├── services.js    # Services page
│   ├── about.js       # About page
│   ├── team.js        # Team page
│   ├── portfolio.js   # Portfolio page
│   ├── testimonials.js # Testimonials page
│   ├── contact.js     # Contact page
│   ├── _app.js        # App wrapper
│   ├── 404.js         # 404 error page
│   └── api/
│       └── contact.js # Contact form API endpoint
├── src/
│   └── components/    # React components
├── public/            # Static assets
├── styles/            # Global styles
├── next.config.js     # Next.js configuration
├── tailwind.config.js # Tailwind CSS config
├── vercel.json        # Vercel deployment config
└── package.json       # Project dependencies
```

## Important Files for Deployment

- **vercel.json** - Deployment configuration (automatically configured)
- **next.config.js** - Next.js settings
- **package.json** - Dependencies and scripts
- **.env.local.example** - Template for environment variables
- **.gitignore** - Excludes .env.local from git (secrets safe)

## Performance & Optimization

The project is configured with:
- ✅ Tailwind CSS for responsive design
- ✅ TypeScript for type safety
- ✅ Next.js optimization (automatic code splitting)
- ✅ Static page generation where possible
- ✅ API route for dynamic contact form handling

## Next Steps

After successful deployment:

1. **Monitor Performance:** Check Vercel Analytics dashboard
2. **Set Up Domain:** Point custom domain to Vercel (Settings → Domains)
3. **Enable HTTPS:** Automatically enabled by Vercel
4. **Add Analytics:** Integrate Google Analytics or similar
5. **Configure Email:** Set up transactional email service

## Support Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Node Mailer Docs: https://nodemailer.com/
- Tailwind CSS Docs: https://tailwindcss.com/docs

## Deployment Checklist

- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] Deployment successful
- [ ] Live URL verified
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Images display
- [ ] Contact form functional
- [ ] Emails sending successfully

---

**Deployment Date:** March 30, 2026
**Next.js Version:** 16.2.1
**Node.js Requirement:** 18.x or higher
