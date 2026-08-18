# OnlyWayOnline — High-Performance Web Engineering & Inbound Growth Systems

> **Speed. Precision Engineering. Visual Authority. Measurable Growth.**  
> We build beautiful, lightning-fast digital flagships and complete inbound customer acquisition engines backed by our **90-Day Free Fix Guarantee**.

---

## ⚡ Core Pillars

- **100/100 Google Core Web Vitals**: Sub-second Largest Contentful Paint (LCP) and zero Cumulative Layout Shift (CLS).
- **Studio-Grade 3D Visuals & Motion**: Hardware-accelerated Framer Motion & CSS transitions with physical spring physics.
- **Static First & Edge Optimized**: Fully prerendered static architecture for instant TTFB, infinite scalability, and zero server maintenance overhead.
- **Conversion-Optimized RFP & Modal Intake**: Dual-lane client consultation workflow with honeypot anti-spam protection and Web3Forms integration.
- **Enterprise SEO & AI Optimization**: Complete Schema.org structured data, semantic graph metadata, `llms.txt` knowledge file, automated `sitemap.xml`, and `robots.txt`.

---

## 🛠 Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) & Vanilla CSS Tokens |
| **Animations** | [Motion (Framer Motion 12)](https://motion.dev/) |
| **Typography** | Inter & Google Fonts |
| **Static Export** | Prerendered HTML / CSS / JS Static Bundle |
| **Web Server / Hosting** | Hostinger Apache Web Hosting (`.htaccess` with security headers, GZIP compression, & caching) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm, pnpm, or bun

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Populate your keys:
```env
NEXT_PUBLIC_SITE_URL=https://onlywayonline.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Production Static Build & Hostinger Deployment

The project is configured for **100% static HTML export** with zero Node.js server dependencies required at runtime.

### Build Static Package
```bash
npm run build
```
This generates the optimized static build containing:
- `index.html` (Homepage)
- `work/index.html` (Case studies & showcase)
- `404.html` (Custom branded error page)
- `.htaccess` (Security headers, HTTPS enforcement, GZIP deflate, browser caching, and clean routing)
- `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `llms.txt`
- `_next/static/` (Optimized JS/CSS client bundles)

### Deployment to Hostinger Web Hosting
1. Log into your **Hostinger Dashboard** → **Websites** → **onlywayonline.com** → **File Manager**.
2. Navigate to `public_html/`.
3. Upload the contents of `hostinger_public_html/` (or upload and extract `hostinger_deploy.zip`).
4. Ensure `.htaccess` is located in the root of `public_html/`.

---

## 🔒 Security & Performance Features

- **Strict Apache Security Headers**: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`, and `Permissions-Policy`.
- **Honeypot Anti-Spam Protection**: Silent rejection of bot spam in consultation intake.
- **Immune to SSR Downtime**: Pure static file delivery eliminates runtime server crashes, database connection timeouts, and memory leaks.

---

© 2026 **OnlyWayOnline**. All rights reserved.

