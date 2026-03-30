# Generic Website Template Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a customizable, reusable Next.js website template for local businesses that can be quickly cloned and customized per client.

**Architecture:** Modular Next.js app with JSON-based content (no database), Tailwind CSS for styling, Vercel-ready deployment. Components read from JSON files in `/src/data/`. Each client gets their own repo clone with customized JSON files and images.

**Tech Stack:** Next.js 14+, React, Tailwind CSS, Nodemailer, Vercel deployment, GitHub

---

## File Structure Overview

```
generic-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation header
│   │   ├── Hero.jsx             # Hero section on home
│   │   ├── ServiceCard.jsx       # Reusable service card
│   │   ├── TestimonialCard.jsx   # Testimonial display
│   │   ├── GalleryGrid.jsx       # Photo grid with lightbox
│   │   ├── Footer.jsx            # Footer navigation/info
│   │   └── ContactForm.jsx       # Contact form component
│   ├── pages/
│   │   ├── _app.jsx             # Next.js app wrapper
│   │   ├── _document.jsx        # HTML wrapper
│   │   ├── index.jsx            # Home page
│   │   ├── services.jsx         # Services listing
│   │   ├── about.jsx            # About page
│   │   ├── team.jsx             # Team page
│   │   ├── portfolio.jsx        # Gallery/Portfolio page
│   │   ├── testimonials.jsx     # Full testimonials page
│   │   ├── contact.jsx          # Contact page
│   │   └── api/
│   │       └── contact.js       # Contact form submission endpoint
│   ├── data/
│   │   ├── config.json          # Brand colors, business info
│   │   ├── services.json        # Services list
│   │   ├── testimonials.json    # Testimonials
│   │   ├── team.json            # Team members
│   │   ├── gallery.json         # Gallery items
│   │   └── pages.json           # About/static page content
│   ├── styles/
│   │   └── globals.css          # Global styles
│   └── public/
│       ├── logo.png
│       ├── hero.jpg
│       └── gallery/             # Client images
├── .env.local.example           # SMTP credentials template
├── .gitignore
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── CUSTOMER_ONBOARDING.md       # Client guide template
└── README.md                    # Development setup
```

---

## Phase 1: Project Setup

### Task 1: Initialize Next.js Project & Install Dependencies

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `.gitignore`

- [ ] **Step 1: Create Next.js project structure**

Run: `npx create-next-app@latest . --typescript --tailwind --eslint --app=false`
(Choose: No to app router, Yes to Tailwind, Yes to ESLint, No to src directory override)

- [ ] **Step 2: Install additional dependencies**

Run: `npm install nodemailer dotenv`

- [ ] **Step 3: Verify package.json exists**

Expected: `package.json` with scripts: `dev`, `build`, `start`, `lint`

- [ ] **Step 4: Create next.config.js**

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Business Name',
  },
};

module.exports = nextConfig;
```

- [ ] **Step 5: Create .gitignore**

```
node_modules/
.next/
.env.local
.env*.local
.DS_Store
*.log
dist/
```

- [ ] **Step 6: Commit**

```bash
git add package.json next.config.js .gitignore
git commit -m "chore: initialize Next.js project with Tailwind"
```

---

### Task 2: Set Up Project Directory Structure

**Files:**
- Create: `src/components/` (directory)
- Create: `src/pages/` (directory)
- Create: `src/pages/api/` (directory)
- Create: `src/data/` (directory)
- Create: `src/styles/` (directory)
- Create: `public/gallery/` (directory)

- [ ] **Step 1: Create all directories**

Run:
```bash
mkdir -p src/components src/pages/api src/data src/styles public/gallery
```

- [ ] **Step 2: Verify structure**

Run: `ls -R src/`

Expected: All directories created

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: create project directory structure"
```

---

### Task 3: Set Up Tailwind CSS Configuration

**Files:**
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `src/styles/globals.css`

- [ ] **Step 1: Create tailwind.config.js**

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 2: Create postcss.config.js**

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] **Step 3: Create src/styles/globals.css with CSS variables and Tailwind**

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #2563eb;
  --color-secondary: #1e40af;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1f2937;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  text-decoration: underline;
}

img {
  max-width: 100%;
  height: auto;
}

/* Tailwind color reference */
.primary {
  color: var(--color-primary);
}

.bg-primary {
  background-color: var(--color-primary);
}

.secondary {
  color: var(--color-secondary);
}

.bg-secondary {
  background-color: var(--color-secondary);
}
```

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.js postcss.config.js src/styles/globals.css
git commit -m "chore: configure Tailwind CSS and global styles"
```

---

## Phase 2: Data Structure & Utilities

### Task 4: Create Data Files (JSON Templates)

**Files:**
- Create: `src/data/config.json`
- Create: `src/data/services.json`
- Create: `src/data/testimonials.json`
- Create: `src/data/team.json`
- Create: `src/data/gallery.json`
- Create: `src/data/pages.json`

- [ ] **Step 1: Create src/data/config.json**

```json
{
  "businessName": "Your Business Name",
  "tagline": "Your business tagline here",
  "description": "A brief description of your business",
  "primaryColor": "#2563eb",
  "secondaryColor": "#1e40af",
  "phone": "555-1234",
  "email": "contact@business.com",
  "address": "123 Main St, City, State 12345",
  "hours": {
    "monday": "9am - 5pm",
    "tuesday": "9am - 5pm",
    "wednesday": "9am - 5pm",
    "thursday": "9am - 5pm",
    "friday": "9am - 5pm",
    "saturday": "10am - 3pm",
    "sunday": "Closed"
  },
  "socialLinks": {
    "facebook": "https://facebook.com",
    "instagram": "https://instagram.com",
    "linkedin": "https://linkedin.com"
  }
}
```

- [ ] **Step 2: Create src/data/services.json**

```json
[
  {
    "id": 1,
    "name": "Service One",
    "description": "Description of service one",
    "icon": "star",
    "image": "/services/service1.jpg",
    "featured": true
  },
  {
    "id": 2,
    "name": "Service Two",
    "description": "Description of service two",
    "icon": "check",
    "image": "/services/service2.jpg",
    "featured": true
  }
]
```

- [ ] **Step 3: Create src/data/testimonials.json**

```json
[
  {
    "id": 1,
    "name": "Client Name",
    "company": "Company Name",
    "text": "This is a testimonial from a satisfied client.",
    "rating": 5,
    "image": "/testimonials/client1.jpg"
  }
]
```

- [ ] **Step 4: Create src/data/team.json**

```json
[
  {
    "id": 1,
    "name": "Team Member Name",
    "title": "Role/Title",
    "bio": "Short bio about this team member",
    "image": "/team/member1.jpg"
  }
]
```

- [ ] **Step 5: Create src/data/gallery.json**

```json
[
  {
    "id": 1,
    "title": "Project Name",
    "description": "Brief description",
    "before": "/gallery/before1.jpg",
    "after": "/gallery/after1.jpg",
    "category": "category1"
  }
]
```

- [ ] **Step 6: Create src/data/pages.json**

```json
{
  "about": {
    "title": "About Us",
    "content": "Your business story and mission here.",
    "image": "/about-image.jpg"
  },
  "mission": "Our mission statement",
  "values": ["Value 1", "Value 2", "Value 3"]
}
```

- [ ] **Step 7: Commit**

```bash
git add src/data/
git commit -m "chore: create JSON data templates for content"
```

---

## Phase 3: Core Components

### Task 5: Create Navbar Component

**Files:**
- Create: `src/components/Navbar.jsx`

- [ ] **Step 1: Create Navbar component**

```jsx
// src/components/Navbar.jsx
import Link from 'next/link';
import config from '../data/config.json';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-primary">
          {config.businessName}
        </Link>
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-primary">
              Team
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-primary">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary font-semibold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Test component renders without error**

Run: `npm run dev`
Navigate to `http://localhost:3000` and verify no errors in console

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "feat: add Navbar component with navigation links"
```

---

### Task 6: Create Hero Component

**Files:**
- Create: `src/components/Hero.jsx`

- [ ] **Step 1: Create Hero component**

```jsx
// src/components/Hero.jsx
import Image from 'next/image';
import Link from 'next/link';
import config from '../data/config.json';

export default function Hero() {
  return (
    <section className="relative h-96 md:h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/hero.jpg"
          alt="Hero"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {config.businessName}
        </h1>
        <p className="text-lg md:text-2xl mb-8">{config.tagline}</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify Hero renders on homepage**

Run: `npm run dev`
Expected: Hero section displays with business name and CTA button

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx
git commit -m "feat: add Hero section component"
```

---

### Task 7: Create ServiceCard Component

**Files:**
- Create: `src/components/ServiceCard.jsx`

- [ ] **Step 1: Create ServiceCard component**

```jsx
// src/components/ServiceCard.jsx
export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">
        {service.icon === 'star' && '⭐'}
        {service.icon === 'check' && '✓'}
        {service.icon === 'lightning' && '⚡'}
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">{service.name}</h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
}
```

- [ ] **Step 2: Verify component is importable**

Expected: No syntax errors on import

- [ ] **Step 3: Commit**

```bash
git add src/components/ServiceCard.jsx
git commit -m "feat: add ServiceCard component"
```

---

### Task 8: Create TestimonialCard Component

**Files:**
- Create: `src/components/TestimonialCard.jsx`

- [ ] **Step 1: Create TestimonialCard component**

```jsx
// src/components/TestimonialCard.jsx
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
      <div className="flex items-center mb-4">
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.company}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify component renders**

Expected: No syntax errors

- [ ] **Step 3: Commit**

```bash
git add src/components/TestimonialCard.jsx
git commit -m "feat: add TestimonialCard component"
```

---

### Task 9: Create GalleryGrid Component

**Files:**
- Create: `src/components/GalleryGrid.jsx`

- [ ] **Step 1: Create GalleryGrid component**

```jsx
// src/components/GalleryGrid.jsx
import Image from 'next/image';
import { useState } from 'react';

export default function GalleryGrid({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.after || '/placeholder.jpg'}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage.after || '/placeholder.jpg'}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
```

- [ ] **Step 2: Verify component is importable**

Expected: No syntax errors

- [ ] **Step 3: Commit**

```bash
git add src/components/GalleryGrid.jsx
git commit -m "feat: add GalleryGrid component with lightbox"
```

---

### Task 10: Create Footer Component

**Files:**
- Create: `src/components/Footer.jsx`

- [ ] **Step 1: Create Footer component**

```jsx
// src/components/Footer.jsx
import Link from 'next/link';
import config from '../data/config.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-4">{config.businessName}</h3>
          <p className="text-gray-400">{config.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 mb-2">{config.phone}</p>
          <p className="text-gray-400">{config.email}</p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>
          &copy; {currentYear} {config.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Verify component renders**

Expected: No syntax errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: add Footer component"
```

---

### Task 11: Create ContactForm Component

**Files:**
- Create: `src/components/ContactForm.jsx`

- [ ] **Step 1: Create ContactForm component with better error handling**

```jsx
// src/components/ContactForm.jsx
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success' or 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
      <div>
        <label className="block text-sm font-semibold mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary disabled:opacity-50 transition"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-green-600 text-center font-semibold">
          ✓ Message sent successfully! We'll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center font-semibold">
          ✕ {errorMessage}
        </p>
      )}
    </form>
  );
}
```

- [ ] **Step 2: Verify component renders**

Expected: No syntax errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ContactForm.jsx
git commit -m "feat: add ContactForm component with validation"
```

---

## Phase 4: Pages & Layout

### Task 11.5: Create 404 Error Page

**Files:**
- Create: `src/pages/404.jsx`

- [ ] **Step 1: Create 404 page**

```jsx
// src/pages/404.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Go Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/pages/404.jsx
git commit -m "feat: add 404 error page"
```

---

### Task 12: Create _app.jsx & _document.jsx

**Files:**
- Create: `src/pages/_app.jsx`
- Create: `src/pages/_document.jsx`

- [ ] **Step 1: Create _app.jsx with CSS variable initialization**

```jsx
// src/pages/_app.jsx
import '../styles/globals.css';
import { useEffect } from 'react';
import config from '../data/config.json';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Set CSS variables from config
    document.documentElement.style.setProperty('--color-primary', config.primaryColor);
    document.documentElement.style.setProperty('--color-secondary', config.secondaryColor);
  }, []);

  return <Component {...pageProps} />;
}
```

- [ ] **Step 2: Create _document.jsx**

```jsx
// src/pages/_document.jsx
import { Html, Head, Main, NextScript } from 'next/document';
import config from '../data/config.json';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={config.description} />
        <title>{config.businessName}</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add src/pages/_app.jsx src/pages/_document.jsx
git commit -m "feat: add Next.js app and document wrappers"
```

---

### Task 13: Create Home Page

**Files:**
- Create: `src/pages/index.jsx`

- [ ] **Step 1: Create home page**

```jsx
// src/pages/index.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import Link from 'next/link';
import services from '../data/services.json';
import testimonials from '../data/testimonials.json';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      {testimonials.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {testimonials.slice(0, 2).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/testimonials"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
              >
                Read All Testimonials
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Contact us today to learn more about our services.</p>
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Test home page**

Run: `npm run dev`
Navigate to `http://localhost:3000`
Expected: Home page displays with Hero, Services preview, Testimonials, CTA, and Footer

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.jsx
git commit -m "feat: create home page with service and testimonial previews"
```

---

### Task 14: Create Services Page

**Files:**
- Create: `src/pages/services.jsx`

- [ ] **Step 1: Create services page**

```jsx
// src/pages/services.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services.json';

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            We offer a comprehensive range of services to meet your needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Test services page**

Run: `npm run dev`
Navigate to `http://localhost:3000/services`
Expected: Services page displays all services in a grid

- [ ] **Step 3: Commit**

```bash
git add src/pages/services.jsx
git commit -m "feat: create services page"
```

---

### Task 15: Create About Page

**Files:**
- Create: `src/pages/about.jsx`

- [ ] **Step 1: Create about page**

```jsx
// src/pages/about.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import config from '../data/config.json';
import pages from '../data/pages.json';

export default function About() {
  return (
    <>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">{pages.about.title}</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">{pages.about.content}</p>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">{pages.mission}</p>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2">
                {pages.values.map((value, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-primary font-bold mr-3">✓</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">About page image goes here</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Test about page**

Run: `npm run dev`
Navigate to `http://localhost:3000/about`
Expected: About page displays mission, values, and content

- [ ] **Step 3: Commit**

```bash
git add src/pages/about.jsx
git commit -m "feat: create about page"
```

---

### Task 16: Create Team Page

**Files:**
- Create: `src/pages/team.jsx`

- [ ] **Step 1: Create team page**

```jsx
// src/pages/team.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import team from '../data/team.json';

export default function Team() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Team</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Meet the talented people behind our success.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-64 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">Photo</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Test team page**

Run: `npm run dev`
Navigate to `http://localhost:3000/team`
Expected: Team page displays all team members

- [ ] **Step 3: Commit**

```bash
git add src/pages/team.jsx
git commit -m "feat: create team page"
```

---

### Task 17: Create Portfolio Page

**Files:**
- Create: `src/pages/portfolio.jsx`

- [ ] **Step 1: Create portfolio page**

```jsx
// src/pages/portfolio.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryGrid from '../components/GalleryGrid';
import gallery from '../data/gallery.json';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Portfolio</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Explore our recent projects and see what we can do for you.
          </p>
          <GalleryGrid items={gallery} />
        </div>
      </section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Test portfolio page**

Run: `npm run dev`
Navigate to `http://localhost:3000/portfolio`
Expected: Gallery displays with lightbox functionality

- [ ] **Step 3: Commit**

```bash
git add src/pages/portfolio.jsx
git commit -m "feat: create portfolio page with gallery"
```

---

### Task 18: Create Testimonials Page

**Files:**
- Create: `src/pages/testimonials.jsx`

- [ ] **Step 1: Create testimonials page**

```jsx
// src/pages/testimonials.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import testimonials from '../data/testimonials.json';

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Testimonials</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Don't just take our word for it. Hear from our satisfied clients.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Test testimonials page**

Run: `npm run dev`
Navigate to `http://localhost:3000/testimonials`
Expected: All testimonials display

- [ ] **Step 3: Commit**

```bash
git add src/pages/testimonials.jsx
git commit -m "feat: create testimonials page"
```

---

### Task 19: Create Contact Page

**Files:**
- Create: `src/pages/contact.jsx`

- [ ] **Step 1: Create contact page**

```jsx
// src/pages/contact.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import config from '../data/config.json';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">{config.phone}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">{config.email}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">{config.address}</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Test contact page**

Run: `npm run dev`
Navigate to `http://localhost:3000/contact`
Expected: Contact page displays form and contact info

- [ ] **Step 3: Commit**

```bash
git add src/pages/contact.jsx
git commit -m "feat: create contact page with form"
```

---

## Phase 5: Contact Form API

### Task 20: Create Contact Form API Endpoint

**Files:**
- Create: `src/pages/api/contact.js`
- Create: `.env.local.example`

- [ ] **Step 1: Create .env.local.example**

```
# .env.local.example
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=contact@yourdomain.com
CONTACT_EMAIL_TO=your-email@gmail.com
```

- [ ] **Step 2: Create email validation utility**

```javascript
// src/utils/validateEmail.js
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
```

- [ ] **Step 3: Create contact API endpoint with security fixes**

```javascript
// src/pages/api/contact.js
import nodemailer from 'nodemailer';
import { validateEmail, escapeHtml } from '../../utils/validateEmail';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid name' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ error: 'Invalid email' });
  }

  if (typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid message' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Sanitize inputs to prevent XSS
    const sanitizedName = escapeHtml(name.trim());
    const sanitizedPhone = phone ? escapeHtml(phone.trim()) : 'Not provided';
    const sanitizedMessage = escapeHtml(message.trim()).replace(/\n/g, '<br>');

    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
```

- [ ] **Step 3: Test API endpoint with Mailtrap (free email testing)**

1. Sign up for free account at [mailtrap.io](https://mailtrap.io)
2. Get SMTP credentials from Mailtrap dashboard (Integration → Nodemailer)
3. Create `.env.local` with Mailtrap credentials:
   ```
   SMTP_HOST=sandbox.smtp.mailtrap.io
   SMTP_PORT=2525
   SMTP_USER=your_mailtrap_user
   SMTP_PASS=your_mailtrap_pass
   SMTP_FROM=test@example.com
   CONTACT_EMAIL_TO=your_mailtrap_inbox@example.com
   ```

4. Run dev server: `npm run dev`
5. Test with curl:
   ```bash
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@example.com","phone":"555-1234","message":"Test message"}'
   ```

Expected: 200 response with `{"success": true, "message": "Email sent successfully"}`
Check Mailtrap inbox to verify email was delivered

- [ ] **Step 4: Test form validation**

Run these curl tests to verify validation catches errors:
```bash
# Missing name
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"email":"test@example.com","message":"test"}'
# Expected: 400 with error

# Invalid email
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"invalid","message":"test"}'
# Expected: 400 with error
```

Expected: All return 400 errors as expected

- [ ] **Step 4: Commit**

```bash
git add src/pages/api/contact.js .env.local.example
git commit -m "feat: add contact form API endpoint with email sending"
```

---

## Phase 6: Configuration & Deployment

### Task 21: Create README.md with Setup Instructions

**Files:**
- Create: `README.md`

- [ ] **Step 1: Create README.md**

```markdown
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
```

- [ ] **Step 2: Verify README renders on GitHub**

Expected: README displays properly formatted

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "docs: add comprehensive README with setup and customization guide"
```

---

### Task 22: Create CUSTOMER_ONBOARDING.md Template

**Files:**
- Create: `CUSTOMER_ONBOARDING.md`

- [ ] **Step 1: Create customer onboarding guide**

```markdown
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

**Q: How do I add a blog?**
A: Contact your provider - this can be added as a Phase 2 enhancement.

## Need Help?

Contact: [your email/phone]
Response time: [your SLA]

---

*Last updated: [Date]*
```

- [ ] **Step 2: Commit**

```bash
git add CUSTOMER_ONBOARDING.md
git commit -m "docs: add customer onboarding guide"
```

---

### Task 23: Build & Test for Production

**Files:**
- Verify: All files are properly structured

- [ ] **Step 1: Build for production**

Run: `npm run build`

Expected: Build completes without errors
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
...
```

- [ ] **Step 2: Test production build**

Run: `npm start`
Navigate to `http://localhost:3000`

Expected: All pages load and function correctly

- [ ] **Step 3: Run build verification checklist**

- [ ] All pages render
- [ ] Navigation works
- [ ] Contact form submits (with test email credentials)
- [ ] Gallery lightbox works
- [ ] Mobile responsive (test on mobile browser or DevTools)
- [ ] No console errors

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore: verify production build ready"
```

---

### Task 24: Deploy to Vercel

**Files:**
- Link: GitHub repo to Vercel

- [ ] **Step 1: Push final code to GitHub**

Run:
```bash
git log --oneline
git push origin main
```

Expected: All commits pushed successfully

- [ ] **Step 2: Create Vercel project**

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Click "Import"

- [ ] **Step 3: Configure environment variables in Vercel**

In Vercel project settings → Environment Variables, add:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=test@example.com
SMTP_PASS=test-password
SMTP_FROM=contact@example.com
CONTACT_EMAIL_TO=admin@example.com
```

- [ ] **Step 4: Deploy**

Click "Deploy" in Vercel dashboard

Expected: Deployment succeeds, get live URL (e.g., `https://generic-website.vercel.app`)

- [ ] **Step 5: Test live site**

1. Visit your Vercel URL
2. Test all pages load
3. Test contact form sends email
4. Verify responsive on mobile

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "docs: vercel deployment complete"
```

---

## Summary

**What you've built:**
✅ Modern, responsive Next.js website template
✅ Customizable JSON-based content system
✅ 7 main pages (Home, Services, About, Team, Portfolio, Testimonials, Contact)
✅ Working contact form with email integration
✅ Mobile-responsive design
✅ Production-ready, deployed to Vercel
✅ Customer onboarding guide

**Next Steps for Phase 2:**
- Blog/news system
- Advanced booking integration
- Analytics dashboard
- Admin panel for easier editing
- E-commerce foundation

---

**Instructions for agentic execution:** Use superpowers:subagent-driven-development or superpowers:executing-plans to implement these tasks.
