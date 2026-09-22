# Ahuja NextGen — Next.js SEO + AI/Local SEO + Mobile V5

Production-oriented Next.js site for Ahuja NextGen Skill & Education Academy.

## Stack
- Next.js 16.3.x (Active LTS line)
- React 19.2.x
- Tailwind CSS 3
- App Router

## Local run
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production check
```bash
npm run build
npm start
```

## Key SEO routes
- /
- /computer-courses-shahbad/
- /courses/
- /courses/basic-computer/
- /courses/python/
- /courses/tally/
- /courses/data-analytics/
- /courses/ai-ml/
- /courses/web-designing/
- /courses/c-programming/
- /courses/sql/
- /sitemap.xml
- /robots.txt

## Deployment to Vercel
Import the repository/project into Vercel. The framework should be detected as Next.js. Build command: `next build` (or leave Vercel's default). Output directory should remain the default.

After deployment, verify the homepage, SEO landing page, course pages, sitemap and robots.txt. Then add/inspect the production property in Google Search Console and submit `/sitemap.xml`.

## Notes
- The mobile experience includes a persistent Call Us / Free Demo action bar with safe-area support.
- The desktop WhatsApp floating action remains available; on mobile, the bottom action bar is used to avoid overlapping floating controls.
- `postcss.config.js` intentionally uses CommonJS because the project is configured that way.


## V5 SEO / AI discoverability layer
- Consistent academy entity, location and course information.
- Local intent coverage for Shahbad/Shahabad Markanda without mass doorway pages.
- Organization + EducationalOrganization/LocalBusiness + WebSite + Course + Breadcrumb structured data.
- Course-specific metadata, canonical URLs, Open Graph metadata and local question/answer content.
- Practical-learning and outcome language focused on useful skills rather than unsupported “#1/best” claims.
- Primary contact number standardized to 90346-40741 in the SEO landing/course templates.
- Next.js `themeColor` is defined through the `viewport` export.

### Production check
Run:
```bash
npm install
npm run build
npm start
```
If Windows reports `ENOSPC` during installation, free disk space before reinstalling dependencies; that is an environment/storage issue rather than an application-code error.
