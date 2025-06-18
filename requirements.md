📄 Technical Requirements: Conrad Gietman Historical Blog
1. Project Overview

Create a custom website for Conrad Gietman showcasing blog posts focused on historical events and literature, with an emphasis on the Dutch nobility during the Golden Age. The site should be content-rich, fast, SEO-friendly, and visually appealing.
2. Tech Stack
✅ Frontend

    Framework: Next.js (React-based, supports SSR and static generation for SEO)

    Styling:

        Tailwind CSS (utility-first, responsive, modern)

        shadcn/ui (for accessible, styled components)

    Markdown Rendering: next-mdx-remote (for writing blog posts in Markdown/MDX)

    Color Palette:
        Primary Colors:
        - #1A1A1A (Rich Black) - Main background
        - #FFFFFF (White) - Primary text
        - #800000 (Dark Red) - Header background
        
        Secondary Colors:
        - #2A2A2A (Dark Gray) - Secondary background
        - #E0E0E0 (Light Gray) - Secondary text
        - #666666 (Medium Gray) - Borders and accents

✅ Backend (Optional / Headless CMS)

    CMS Option 1: Contentlayer (for static Markdown files + type safety)

    CMS Option 2: Sanity.io (for a headless CMS with editing interface)

    CMS Option 3: Strapi (self-hosted Node.js CMS)

✅ Deployment

    Platform: Vercel (best for Next.js deployments, automatic CI/CD)

    Custom Domain: via Vercel or domain registrar (e.g., conradgietman.nl)

3. Site Features

📰 Blog Functionality

    Markdown or CMS-backed posts with frontmatter (title, date, excerpt, tags)

    Categories: Events, Nobility, Golden Age, Reviews, Books

    Tag-based filtering and search

    SEO meta tags per post

    Estimated reading time

    Featured images and image galleries

🌐 Pages

    Home (Intro to blog, featured articles)

    About Conrad Gietman

    Blog Overview (sortable/filterable)

    Post Detail Pages

    Books / Publications

    Contact (simple form or email link)

4. Styling Requirements

    Clean, elegant typography (use Inter or EB Garamond for historical vibe)

    Responsive layout (mobile-first, grid-based)

    Dark/light mode toggle

    Use card components for posts

    Subtle animations (e.g. Framer Motion for transitions)

5. Performance & SEO

    Server-side rendering (SSR) or static site generation (SSG)

    Open Graph tags for sharing

    Sitemap.xml and robots.txt

    Lazy loading images (next/image)

    Core Web Vitals monitoring via Vercel

6. Optional Enhancements

    Newsletter signup (Mailchimp or Buttondown integration)

    Commenting (e.g., Giscus or Disqus)

    RSS feed

    Search (Algolia or Fuse.js)

    Analytics (Plausible, Google Analytics)