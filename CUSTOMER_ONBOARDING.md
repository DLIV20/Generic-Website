# Customer Onboarding Guide

Welcome! This guide explains how to customize and manage your website.

## What You've Received

- A live website at: [Your Vercel URL]
- GitHub repository access (optional)
- Vercel project access (optional)

## File Structure

```
Your Site/
├── src/data/              ← Edit these files
│   ├── config.json        # Your business info
│   ├── services.json      # Your services
│   ├── team.json          # Team members
│   ├── testimonials.json  # Client reviews
│   └── gallery.json       # Portfolio images
└── public/                ← Upload images here
    ├── logo.png
    ├── hero.jpg
    └── gallery/
```

## How to Update Your Content

### 1. Change Business Information

1. Go to your GitHub repo
2. Click on `src/data/config.json`
3. Edit the file:
   - `businessName` - Your company name
   - `primaryColor` - Main brand color (hex format like `#2563eb`)
   - `phone` - Your phone number
   - `email` - Contact email
   - `address` - Business address
   - `hours` - Business hours

4. Click "Commit changes"
5. Your website updates automatically on Vercel (usually within 1 minute)

### 2. Add Services

1. Edit `src/data/services.json`
2. Add a new service object:
```json
{
  "id": 3,
  "name": "Service Name",
  "description": "What this service does",
  "icon": "star",
  "featured": true
}
```

3. Commit changes
4. Website updates automatically

### 3. Upload Images

1. Click on `public` folder
2. Click "Add file" → "Upload files"
3. Choose your images
4. Update `config.json` to reference them

**Image Recommendations:**
- Logo: 200x200px
- Hero image: 1920x600px
- Gallery: 800x600px or larger

### 4. Contact Form Email Setup

For the contact form to send you emails:

1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Add these variables:
   - `SMTP_HOST`: your email provider's SMTP server
   - `SMTP_PORT`: usually 587
   - `SMTP_USER`: your email address
   - `SMTP_PASS`: your email password or app password
   - `SMTP_FROM`: email address to send from
   - `CONTACT_EMAIL_TO`: where to receive submissions

**Gmail Example:**
- Host: `smtp.gmail.com`
- Port: `587`
- User: your Gmail address
- Pass: [Generate App Password](https://myaccount.google.com/apppasswords)

## Pages Explained

| Page | What It Does |
|------|-------------|
| Home | Shows hero, service preview, testimonials, CTA |
| Services | Lists all your services |
| About | Your story, mission, values |
| Team | Displays team members |
| Portfolio | Gallery of your work |
| Testimonials | All client reviews |
| Contact | Contact form + info |

## FAQ

**Q: How long does it take for changes to show up?**
A: Usually 1-2 minutes after you commit changes to GitHub.

**Q: Can I add a custom domain?**
A: Yes! In Vercel project settings, go to "Domains" and add your custom domain.

**Q: Can I edit colors without coding?**
A: Yes! Just edit the hex color codes in `config.json`. Example: `#2563eb` is blue.

**Q: What if I make a mistake?**
A: You can revert changes in GitHub. Click "History" and revert to a previous commit.

**Q: Can I add a blog?**
A: Contact your provider - this can be added as a Phase 2 enhancement.

## Need Help?

Contact: [your email/phone]
Response time: [your SLA]

---

*Last updated: [Date]*
