# Generic Business Website Template

A modern, customizable Next.js website template for local businesses.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Service showcase
- ✅ Team pages
- ✅ Portfolio/Gallery with lightbox
- ✅ Testimonials
- ✅ Contact form with email notifications
- ✅ SEO ready
- ✅ Fast performance (Vercel optimized)
- ✅ Easy customization via JSON files

## Quick Start

### Local Development

1. **Clone the repo**
   ```bash
   git clone <repo-url>
   cd generic-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your SMTP credentials
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## Customization

### Update Business Information

Edit `src/data/config.json`:
```json
{
  "businessName": "Your Business Name",
  "tagline": "Your tagline",
  "primaryColor": "#2563eb",
  "phone": "555-1234",
  "email": "contact@business.com",
  ...
}
```

### Add Services

Edit `src/data/services.json`:
```json
[
  {
    "id": 1,
    "name": "Service Name",
    "description": "Service description",
    "icon": "star",
    "featured": true
  }
]
```

### Add Team Members

Edit `src/data/team.json`:
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "title": "Manager",
    "bio": "Bio text",
    "image": "/team/john.jpg"
  }
]
```

### Add Testimonials

Edit `src/data/testimonials.json`:
```json
[
  {
    "id": 1,
    "name": "Client Name",
    "company": "Company",
    "text": "Testimonial text",
    "rating": 5,
    "image": "/testimonials/client.jpg"
  }
]
```

### Upload Images

1. Place images in `public/` folder
2. Update JSON files with image paths (e.g., `/logo.png`, `/gallery/photo1.jpg`)

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

1. Push to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Import repository
4. Set environment variables in Vercel settings
5. Deploy!

## Environment Variables

Required for contact form to work:
- `SMTP_HOST` - SMTP server host
- `SMTP_PORT` - SMTP port (usually 587)
- `SMTP_USER` - Email address
- `SMTP_PASS` - Email password or app password
- `SMTP_FROM` - From address
- `CONTACT_EMAIL_TO` - Email to receive submissions

## File Structure

```
src/
├── components/      # React components
├── pages/          # Next.js pages
├── data/           # JSON data files
├── styles/         # CSS
└── public/         # Static files (images, logos)
```

## License

MIT
