# Ahuja NextGen Website

A React + Vite + Tailwind site for Ahuja NextGen — Skill & Education Academy.

## Edit the content
All pages live in `src/App.jsx` — it's one file with clearly labeled sections
(Navbar, Hero, WhyChoose, ProgramsPage, ContactBlock, Footer, etc). Open it in
any code editor (VS Code recommended) and edit text, colors, or sections directly.

## Run it locally (to preview changes before publishing)
```bash
npm install
npm run dev
```
This opens the site at http://localhost:5173 and reloads automatically as you edit.

## Publish it on your domain — easiest path (Vercel, free)

1. **Put the code on GitHub**
   - Create a free account at https://github.com if you don't have one.
   - Create a new repository, then upload this whole folder to it
     (or, if you're comfortable with git: `git init`, `git add .`,
     `git commit -m "Initial site"`, then push to the new repo).

2. **Deploy on Vercel**
   - Go to https://vercel.com and sign up (you can sign in with your GitHub account).
   - Click "Add New Project," pick this repository.
   - Vercel auto-detects Vite — leave the default build settings
     (Build Command: `npm run build`, Output Directory: `dist`) and click **Deploy**.
   - In a minute you'll get a live `.vercel.app` link — check it works.

3. **Connect your own domain**
   - In the Vercel project, go to **Settings → Domains** and add the domain
     you already bought (e.g. `ahujanextgen.com`).
   - Vercel will show you 1–2 DNS records to add (usually an `A` record or
     a `CNAME`, e.g. pointing to `cname.vercel-dns.com`).
   - Log in to wherever you bought the domain (GoDaddy, Namecheap, Hostinger,
     BigRock, etc.), open **DNS settings** for that domain, and add the exact
     records Vercel showed you.
   - DNS changes usually go live within 10 minutes to a few hours.
     Vercel will show a green checkmark once it's connected, and issues a
     free SSL certificate automatically (so it loads as `https://`).

**Alternative to Vercel:** Netlify (https://netlify.com) works almost
identically — same GitHub connection, same build command (`npm run build`),
output folder `dist`, same domain-connection flow.

## Capturing enquiry form submissions (important — do this before launch)
Every form on the site (hero mini-form, main contact form, demo popup) submits
through Web3Forms — a dedicated form-backend service built for exactly this
kind of static site. **Why this instead of Google Apps Script:** Apps Script
requires you to manage a "deployment" whose URL can silently change or break
if a new deployment is ever created, or if the old one gets archived — which
is exactly what happened during initial setup. Web3Forms has no deployment
step and no URL that can break: the endpoint is permanent.

### Setup (60 seconds)
1. Go to **web3forms.com**
2. Enter your email (e.g. `ahujanextgen@gmail.com`) — no account needed
3. Web3Forms instantly emails you an **Access Key**
4. In `src/App.jsx`, find `WEB3FORMS_ACCESS_KEY` near the top and paste your
   key in place of `PASTE_YOUR_WEB3FORMS_ACCESS_KEY_HERE`

That's it — every submission now:
- **Emails you directly** at the address you registered (same as before)
- **Also appears in your Web3Forms dashboard** as a backup, so nothing is lost
  even if an email is missed or filtered to spam
- Is **unlimited and free**, with no submission cap

### Want it in a Google Sheet too?
Web3Forms supports a **Zapier** or **Make (Integromat)** integration (free
tiers available on both) that can automatically append every new submission
as a row in a Google Sheet the moment it arrives — search "Web3Forms Zapier"
in their docs. This keeps your team's lead-tracking spreadsheet workflow
while removing the fragile self-hosted Apps Script piece entirely.

## Debugging a failed submission
1. **Check the Access Key is pasted in** — search `WEB3FORMS_ACCESS_KEY` in
   `src/App.jsx`; it should be your real key, not the placeholder text.
2. **Open browser DevTools (F12) → Network tab**, submit a test enquiry, and
   look for a request to `api.web3forms.com/submit`. Check its response —
   Web3Forms returns a clear JSON error message if something's wrong (e.g. an
   invalid key), which now shows directly in the on-page error message too.
3. **Check your Web3Forms dashboard** at web3forms.com to see if the
   submission actually arrived there even if the email didn't — this tells
   you whether the problem is submission (code/key) or delivery (email
   spam filtering).

## Tracking visitors and where they came from
The site has a Google Analytics (GA4) placeholder wired into `index.html`.
1. Create a free property at https://analytics.google.com
2. Under Admin → Data Streams, add a Web stream for your domain — it gives you
   a Measurement ID like `G-XXXXXXXXXX`.
3. In `index.html`, replace both instances of `G-XXXXXXXXXX` with your real ID.
4. Once live, GA4 shows you: which pages people visit, how long they stay,
   which course pages get the most interest, where traffic comes from
   (Google search, direct, social, etc.), and drop-off points.

**Important limit to know:** GA4 tracks anonymous browsing behavior — it
cannot give you a visitor's phone number unless they submit the form (or
click a WhatsApp/call link). There's no way to identify an anonymous browser
by phone number; that only happens the moment someone voluntarily submits
their details. So the combination that actually works is: GA4 tells you
*what's working* (which pages/courses get attention), and the form (via
Formspree) is what actually captures a followable lead.


- Edit `src/App.jsx`, save, run `npm run dev` to preview.
- Push the change to GitHub (`git add .`, `git commit -m "update"`, `git push`).
- Vercel/Netlify automatically rebuilds and updates your live site within
  a minute or two of every push — no redeploying by hand.

## Project structure
```
├── index.html          # page shell, SEO meta tags, fonts
├── src/
│   ├── main.jsx         # React entry point
│   ├── App.jsx           # the entire site (all pages/sections)
│   └── index.css         # Tailwind + base styles
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```
