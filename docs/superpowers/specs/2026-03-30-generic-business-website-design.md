# Generic Business Website Template - Design Spec

**Date:** 2026-03-30
**Project:** Generic Business Website (Customizable Template for Local Businesses)
**Scope:** MVP - Initial template build for local service businesses (plumbers, salons, consultants, etc.)

---

## Overview

A modern, customizable Next.js website template designed for local businesses without an existing web presence. The template is flexible, easy to customize per client, and deployable to Vercel. All content is stored in JSON files within the repository (no external database required), making it portable and version-controlled.

**Target Audience:** Local service businesses (plumbing, salons, consulting, real estate, etc.)

**Business Model:**
- One-time customization fee per client
- Monthly recurring maintenance fee (updates, support, monitoring)
- Premium hourly rate for out-of-scope feature requests

---

## Tech Stack

| Component | Choice | Rationale |
|-----------|--------|-----------|
| **Framework** | Next.js (React + Node.js) | Full-stack, minimal complexity, Vercel-native |
| **Deployment** | Vercel | One-click deploys, automatic scaling, preview deployments |
| **Content Storage** | JSON files in repo | Portable, version-controlled, no database setup needed |
| **Styling** | Tailwind CSS or CSS Modules | Easy to customize colors, clean component styling |
| **Version Control** | GitHub | One repo per client after template clone |
| **Forms** | Nodemailer (email) | Contact form submissions sent to business owner |

---

## Repository & Customization Model

### File Structure

```
generic-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   ├── GalleryGrid.jsx
│   │   ├── Footer.jsx
│   │   └── ContactForm.jsx
│   ├── pages/
│   │   ├── index.jsx              # Home
│   │   ├── services.jsx
│   │   ├── about.jsx
│   │   ├── team.jsx
│   │   ├── portfolio.jsx          # Gallery
│   │   ├── contact.jsx
│   │   ├── testimonials.jsx
│   │   └── api/
│   │       └── contact.js         # Contact form endpoint
│   ├── data/
│   │   ├── config.json            # Brand, colors, contact info
│   │   ├── services.json
│   │   ├── testimonials.json
│   │   ├── team.json
│   │   ├── gallery.json
│   │   └── pages.json             # Static page content (about, etc)
│   ├── styles/
│   │   └── globals.css
│   └── public/
│       ├── logo.png
│       ├── hero-image.jpg
│       └── gallery/
├── package.json
├── next.config.js
├── tailwind.config.js (if using Tailwind)
└── README.md
```

### Customization Per Client

When cloning the template for a new client:

1. **Brand/Config** → Edit `src/data/config.json`
   ```json
   {
     "businessName": "Local Plumbing Co",
     "tagline": "Your trusted local plumber",
     "primaryColor": "#2563eb",
     "secondaryColor": "#1e40af",
     "phone": "555-1234",
     "email": "contact@plumbingco.com",
     "address": "123 Main St, City, State",
     "hours": {
       "monday": "8am-5pm",
       "tuesday": "8am-5pm",
       ...
     }
   }
   ```

2. **Content Files** → Update `services.json`, `testimonials.json`, `team.json`, `gallery.json`

3. **Images** → Upload to `public/` folder (logo, hero image, gallery images)

4. **Deploy** → Push to GitHub, Vercel auto-deploys from main branch

---

## Feature Set

### Pages & Components

| Page | Features |
|------|----------|
| **Home** | Hero section, CTA button, featured services preview, testimonial snippet, contact CTA |
| **Services** | Grid/list of services with descriptions, icons, pricing (optional), images |
| **About** | Business story, mission/values, history, why choose us |
| **Team** | Team member cards (photo, name, title, bio) |
| **Portfolio/Gallery** | Grid gallery with before/after or work samples, lightbox view, captions |
| **Testimonials** | Full page of client reviews with ratings, photos, quotes |
| **Contact** | Contact form (name, email, message, phone), map embed, hours/location info |

### Core Features

- **Responsive Design** — Mobile, tablet, desktop
- **Contact Form** — Collects submissions, emails to business owner
- **SEO Ready** — Meta tags, structured data, sitemap, robots.txt
- **Image Optimization** — Next.js Image component for fast loading
- **Dark Mode** (optional for MVP) — Theme toggle
- **Analytics Ready** — Easy to integrate Google Analytics or similar
- **Appointment Booking** (optional) — Calendly embed or link (can upgrade to full integration later)

### NOT Included in MVP

- Blog/news system (can add later if client needs it)
- E-commerce (planned for Phase 2)
- Full admin dashboard (clients edit JSON + git)
- Payment processing
- Advanced booking system

---

## Deployment & Workflow

### Initial Template Setup

1. Build Next.js template in this repo
2. Deploy to Vercel as demo/reference site
3. Document customization process in README

### Client Onboarding Process

1. **Intake** → Client provides business info, content, images
2. **Customize** → Clone template repo, create new repo for client, edit JSON files
3. **Deploy** → Deploy to client's own Vercel project
4. **Handoff** → Give client Vercel/GitHub access (optional), show them how to manage

### Maintenance & Updates

**Included in Monthly Fee:**
- Security patches, dependency updates
- Performance monitoring
- Email support for issues
- Content updates (if requested)
- Monthly check-ins

**Out-of-Scope (Premium Pricing):**
- Major feature additions (booking overhaul, payment processing)
- Design overhauls beyond color/branding
- Custom integrations (CRM, email platform)
- Custom development work

### Update Process for Clients

- You improve the template (bug fix, new feature)
- Push to main template repo
- Notify clients of updates via email
- Clients can choose to merge updates or stay on their version (git branches)

---

## Database & Content

**No external database required.**

- All business content lives in JSON files in the repo
- Changes are version-controlled via git
- Clients can edit JSON directly or through a simple git workflow
- Images stored in `public/` folder and referenced in JSON

### Example: services.json

```json
[
  {
    "id": 1,
    "name": "General Plumbing",
    "description": "Repairs, installations, and maintenance",
    "icon": "wrench",
    "image": "/services/plumbing.jpg",
    "featured": true
  },
  ...
]
```

---

## Error Handling & Validation

- Contact form validation (email format, required fields)
- Graceful handling of missing images (fallback placeholder)
- 404 pages for non-existent routes
- Environment variable validation on build

---

## Testing Strategy

- **Unit Tests** → Component rendering, form validation
- **Integration Tests** → Contact form submission flow
- **Manual Testing** → Cross-browser, responsive, accessibility
- **Production Monitoring** → Vercel analytics, error tracking

---

## Success Criteria

✅ Template is easy to customize per client (1-2 hours to customize and deploy)
✅ All pages render correctly on mobile, tablet, desktop
✅ Contact form works and sends emails
✅ Content loads fast (Vercel + Next.js optimization)
✅ Easy to deploy to Vercel with one click
✅ Documentation clear enough for clients to manage their content
✅ Monthly updates can be pushed without breaking client sites

---

## Timeline & Phases

**Phase 1 (MVP):** Template build, core pages, contact form (Weeks 1-3)
**Phase 2:** Blog system, gallery enhancements, admin dashboard (Weeks 4-6)
**Phase 3:** Appointment booking, e-commerce foundation, advanced analytics (Weeks 7+)

---

## Risks & Mitigation

| Risk | Mitigation |
|------|-----------|
| Content customization too complex | Write clear README, offer onboarding support |
| Updates break client sites | Test updates, provide clear migration guide |
| Image optimization issues | Use Next.js Image component, set up CDN |
| Scalability (many clients) | Monitor Vercel usage, optimize queries |

---

## Next Steps

1. ✅ Design approved (this document)
2. → Implementation planning (writing-plans skill)
3. → Build template
4. → Deploy to Vercel
5. → Internal testing
6. → First client customization & feedback loop
