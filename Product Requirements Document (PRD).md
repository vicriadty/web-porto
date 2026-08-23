

# Product Requirements Document (PRD)

## Personal Portfolio Website


***

## 1. Overview

| Field | Value |
| :-- | :-- |
| **Product Name** | Vicri Aditiya Portfolio Website |
| **Version** | 1.0 |
| **Target Release** | Q4 2026 |
| **Owner** | Full-Stack Web Developer |
| **Description** | Website portofolio personal untuk showcase skills, projects, dan contact information dengan desain modern dark theme, animasi scroll minimal, dan splash screen on first visit |


***

## 2. Problem Statement

### 2.1 Masalah

- Sebagai full-stack web developer, diperlukan platform online untuk menampilkan portofolio proyek, skills, dan informasi kontak secara profesional.[^1][^2][^3]
- Portofolio yang efektif harus memiliki struktur yang jelas, performa cepat, dan desain yang memorable untuk menarik perhatian recruiter/klien.[^4][^5][^6]


### 2.2 Mengapa Sekarang

- Pasar kerja developer semakin kompetitif; portofolio yang baik menjadi pembeda utama.[^3][^6]
- Tren 2025–2026 mengarah ke desain dark mode dengan animasi halus dan performa optimal.[^7][^8][^9]


### 2.3 Tujuan Bisnis

- Meningkatkan visibilitas personal brand sebagai full-stack developer.
- Memudahkan recruiter/klien untuk melihat kualitas kerja dan menghubungi.
- Menjadi aset jangka panjang untuk karir freelance atau full-time.

***

## 3. Goals \& Success Metrics

### 3.1 Goals

1. **Showcase 3–5 proyek terbaik** dengan live demo dan source code.[^2][^6][^3]
2. **Menyediakan informasi kontak yang jelas** (email, LinkedIn, GitHub).[^10][^1][^3]
3. **Menciptakan first impression yang kuat** dengan splash screen dan animasi scroll minimal.[^11][^12]
4. **Optimasi performa** (loading <2 detik, mobile-responsive).[^5][^13]

### 3.2 Success Metrics

| Metric | Target |
| :-- | :-- |
| Lighthouse Performance Score | ≥90 |
| Lighthouse Accessibility Score | ≥90 |
| First Contentful Paint (FCP) | <1.5 detik |
| Time to Interactive (TTI) | <3 detik |
| Mobile Responsive | 100% halaman |
| Bounce Rate | <40% |


***

## 4. Target Users \& Personas

### 4.1 Primary Persona: Technical Recruiter

- **Role:** Recruiter di tech company atau agency
- **Behaviors:** Scrolling cepat, mencari live demo dan GitHub link
- **Pain Points:** Portofolio yang lambat, tidak jelas, atau sulit navigasi
- **Current Tools:** LinkedIn, GitHub, job boards


### 4.2 Secondary Persona: Potential Client

- **Role:** Founder startup atau business owner
- **Behaviors:** Mencari developer untuk proyek freelance
- **Pain Points:** Tidak bisa menilai kualitas kerja dari portofolio
- **Current Tools:** Referrals, freelance platforms


### 4.3 Tertiary Persona: Fellow Developer

- **Role:** Developer lain yang ingin belajar atau kolaborasi
- **Behaviors:** Mengecek tech stack dan source code
- **Pain Points:** Portofolio tanpa dokumentasi atau kode tidak accessible
- **Current Tools:** GitHub, Dev.to, Twitter

***

## 5. User Stories \& Acceptance Criteria

### 5.1 Splash Screen (First Visit Only)

| User Story | Acceptance Criteria |
| :-- | :-- |
| Sebagai user pertama kali, saya ingin melihat splash screen intro agar website terasa premium | ✅ Splash screen muncul hanya saat first visit (localStorage flag) [^13]<br>✅ Durasi maksimal 2.5 detik<br>✅ Animasi smooth dengan motion library<br>✅ Ada opsi skip (opsional)<br>✅ Tidak muncul lagi pada kunjungan berikutnya |

### 5.2 Hero Section

| User Story | Acceptance Criteria |
| :-- | :-- |
| Sebagai visitor, saya ingin langsung tahu siapa developer ini dan apa yang dia tawarkan | ✅ Menampilkan nama, role, dan value proposition 1–2 kalimat [^11][^14][^3]<br>✅ Dua CTA: "View Projects" dan "Contact Me" [^3]<br>✅ Foto/avatar profesional<br>✅ Animasi fade-in saat scroll [^15][^16] |

### 5.3 Projects Section

| User Story | Acceptance Criteria |
| :-- | :-- |
| Sebagai recruiter, saya ingin melihat 3–5 proyek terbaik dengan live demo dan source code | ✅ 3–5 project cards dengan screenshot/GIF [^2][^17][^3]<br>✅ Setiap card: nama proyek, deskripsi 1–2 kalimat, tech stack tags [^17][^3]<br>✅ Dua tombol: "Live Demo" dan "GitHub" [^18][^5]<br>✅ Animasi fade-in staggered saat scroll [^15][^19] |

### 5.4 About Section

| User Story | Acceptance Criteria |
| :-- | :-- |
| Sebagai visitor, saya ingin tahu latar belakang dan passion developer ini | ✅ 3–5 paragraf singkat tentang background, skills, dan goals [^11][^5]<br>✅ Foto profesional (opsional)<br>✅ Animasi fade-up saat scroll [^15] |

### 5.5 Skills Section

| User Story | Acceptance Criteria |
| :-- | :-- |
| Sebagai technical recruiter, saya ingin melihat tech stack yang digunakan | ✅ Skills dikelompokkan: Frontend, Backend, Database, DevOps/Tools [^11][^5]<br>✅ Tidak ada skill bars persentase [^5][^14]<br>✅ Animasi minimal saat scroll [^15] |

### 5.6 Contact Section

| User Story | Acceptance Criteria |
| :-- | :-- |
| Sebagai potential client, saya ingin mudah menghubungi developer ini | ✅ Email yang jelas dan clickable [^1][^10]<br>✅ Link sosial: GitHub, LinkedIn (dan opsional: Twitter, Dev.to) [^14][^3]<br>✅ Form kontak sederhana (opsional)<br>✅ CTA prominent "Let's Talk" [^11] |

### 5.7 Resume Download

| User Story | Acceptance Criteria |
| :-- | :-- |
| Sebagai recruiter, saya ingin download resume PDF untuk review offline | ✅ Link download resume PDF yang selalu updated [^1][^11][^5]<br>✅ File size <2MB<br>✅ Nama file: `FirstName_LastName_Resume.pdf` |


***

## 6. Functional Requirements

### 6.1 Tech Stack

| Layer | Technology | Version |
| :-- | :-- | :-- |
| **Framework** | Next.js (App Router) | 14+ |
| **Language** | TypeScript | 5.x |
| **Styling** | Tailwind CSS | 3.4+ / 4.x |
| **Animation** | motion (Framer Motion) | Latest [^15][^20] |
| **Database** | PostgreSQL (opsional, via Prisma) | Latest |
| **Deployment** | Vercel | Latest |
| **Version Control** | Git + GitHub | Latest |

### 6.2 Pages \& Routes

| Route | Description | Priority |
| :-- | :-- | :-- |
| `/` | Homepage dengan Hero, Projects, About, Skills, Contact | P0 |
| `/projects` | (Opsional) Halaman detail semua proyek | P1 |
| `/about` | (Opsional) Halaman about lebih detail | P2 |
| `/contact` | (Opsional) Halaman contact dengan form | P2 |

### 6.3 Components

| Component | Description | Priority |
| :-- | :-- | :-- |
| `SplashScreen` | Intro animation on first visit | P0 |
| `Hero` | Hero section dengan nama, role, CTA | P0 |
| `ProjectCard` | Card untuk setiap proyek | P0 |
| `ProjectsSection` | Grid/list proyek | P0 |
| `AboutSection` | Bio dan background | P0 |
| `SkillsSection` | Daftar skills grouped | P0 |
| `ContactSection` | Email, sosial links, form | P0 |
| `FadeIn` | Wrapper untuk animasi scroll | P0 |
| `Navbar` | Navigation bar (sticky) | P1 |
| `Footer` | Footer dengan copyright dan links | P1 |

### 6.4 Animations

| Animation | Trigger | Library | Priority |
| :-- | :-- | :-- | :-- |
| Splash screen entrance/exit | On page load (first visit) | motion [^12][^21] | P0 |
| Hero fade-in | On page load | motion [^15] | P0 |
| Section fade-up on scroll | Scroll into view | motion `useInView` [^15][^19] | P0 |
| Project cards staggered fade | Scroll into view | motion [^15] | P0 |
| Button hover effects | Hover | Tailwind + motion | P1 |

### 6.5 Color Palette (Dark Theme)

| Role | Hex | Tailwind |
| :-- | :-- | :-- |
| Background Base | `#050505` | `bg-black` |
| Background Surface | `#0D0D0D` | `bg-zinc-950` |
| Border | `#1A1A1A` | `border-zinc-900` |
| Text Primary | `#F5F5F5` | `text-zinc-100` |
| Text Secondary | `#999999` | `text-zinc-500` |
| Accent | `#22D3EE` | `text-cyan-400` / `bg-cyan-500` |

**Catatan:** Hindari pure black `#000000` untuk background utama.[^9][^22][^7]

### 6.6 localStorage Implementation

| Key | Value | Purpose |
| :-- | :-- | :-- |
| `hasVisited` | `'true'` | Flag untuk splash screen first visit only [^13] |


***

## 7. Non-Functional Requirements

### 7.1 Performance

- **Lighthouse Performance Score:** ≥90
- **First Contentful Paint (FCP):** <1.5 detik
- **Time to Interactive (TTI):** <3 detik
- **Bundle Size:** <200KB (gzipped)
- **Image Optimization:** Gunakan Next.js `<Image>` component dengan lazy loading[^13][^23]


### 7.2 Accessibility

- **Lighthouse Accessibility Score:** ≥90
- **WCAG 2.1 Level AA compliance**
- **Keyboard navigation:** Semua elemen interaktif dapat diakses via keyboard
- **Screen reader friendly:** ARIA labels untuk tombol dan links
- **Reduced motion:** Support `prefers-reduced-motion`[^13]


### 7.3 SEO

- **Meta tags:** Unique title, description untuk setiap halaman[^23]
- **Open Graph:** OG image untuk social sharing
- **Schema.org:** Person, Project schema[^23]
- **Sitemap:** Auto-generated sitemap.xml
- **Robots.txt:** Configured properly


### 7.4 Security

- **HTTPS:** Mandatory (Vercel auto-provision)
- **No sensitive data:** Tidak ada API keys atau credentials di client code
- **Form validation:** Sanitize input untuk contact form (jika ada)


### 7.5 Browser Support

- **Modern browsers:** Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile:** iOS Safari, Chrome Android
- **Graceful degradation:** Animasi dinonaktifkan jika `prefers-reduced-motion`

***

## 8. Dependencies \& Integrations

| Dependency | Purpose | Priority |
| :-- | :-- | :-- |
| `motion` | Animasi scroll dan splash screen [^15][^20] | P0 |
| `next` | Framework utama | P0 |
| `react` | UI library | P0 |
| `typescript` | Type safety | P0 |
| `tailwindcss` | Styling | P0 |
| `@next/font` | Font optimization (Google Fonts) | P1 |
| `sharp` | Image optimization (auto via Next.js) | P1 |

### 8.1 External Integrations

| Integration | Purpose | Status |
| :-- | :-- | :-- |
| GitHub | Source code links untuk proyek | Required |
| LinkedIn | Social proof dan contact | Required |
| Vercel | Deployment dan hosting | Required |
| Google Analytics (opsional) | Track traffic | P2 |


***

## 9. Milestones \& Phasing

### Phase 1: MVP (Week 1–2)

- [ ] Setup Next.js + TypeScript + Tailwind project
- [ ] Implement color palette dan global styles
- [ ] Build Hero section dengan animasi fade-in
- [ ] Build Projects section dengan 3–5 project cards
- [ ] Build About, Skills, Contact sections
- [ ] Implement splash screen dengan localStorage flag
- [ ] Deploy ke Vercel (staging)


### Phase 2: Polish (Week 3)

- [ ] Add scroll animations (motion `useInView`)
- [ ] Optimize images dan performance
- [ ] Add SEO meta tags dan Open Graph
- [ ] Test accessibility (keyboard, screen reader)
- [ ] Deploy ke production


### Phase 3: Enhancements (Week 4, Optional)

- [ ] Add contact form dengan email integration (Resend/SendGrid)
- [ ] Add blog section (opsional)
- [ ] Add analytics (Vercel Analytics / Google Analytics)
- [ ] Add dark/light mode toggle (opsional)

***

## 10. Open Questions \& Risks

### 10.1 Open Questions

1. Apakah perlu contact form atau cukup email link saja?
2. Apakah perlu halaman proyek detail terpisah atau cukup modal/pop-up?
3. Apakah perlu blog section untuk content marketing?
4. Apakah perlu multi-language support (EN/ID)?

### 10.2 Risks \& Mitigation

| Risk | Impact | Mitigation |
| :-- | :-- | :-- |
| Splash screen terlalu lama | User bounce | Batasi durasi maksimal 2.5 detik, tambah skip button [^12] |
| Animasi berat di mobile | Performance drop | Gunakan `will-change`, batasi animasi di mobile, support reduced motion [^13] |
| Konten proyek tidak cukup | Portofolio terlihat kosong | Fokus pada 3 proyek terbaik dengan dokumentasi lengkap [^2][^3] |
| SEO tidak optimal | Traffic rendah | Implement meta tags, schema.org, sitemap sejak awal [^23] |


***

## 11. Appendix

### 11.1 File Structure

```
portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
├── components/
│   ├── SplashScreen.tsx
│   ├── Hero.tsx
│   ├── ProjectsSection.tsx
│   ├── ProjectCard.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactSection.tsx
│   ├── FadeIn.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── hooks/
│   └── useHasVisited.ts
├── lib/
│   └── utils.ts
├── public/
│   ├── images/
│   ├── resume.pdf
│   └── og-image.png
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```


### 11.2 Code Snippets Reference

#### SplashScreen Component

```tsx
// components/SplashScreen.tsx
'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useEffect, useState } from 'react'

export function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
      setTimeout(onComplete, 600)
    }, 2500)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl font-bold text-[#F5F5F5]"
            >
              Your Name
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[#999999] mt-2"
            >
              Full-Stack Developer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
```


#### useHasVisited Hook

```tsx
// hooks/useHasVisited.ts
'use client'

import { useEffect, useState } from 'react'

export function useHasVisited() {
  const [hasVisited, setHasVisited] = useState<boolean | null>(null)

  useEffect(() => {
    const visited = localStorage.getItem('hasVisited')
    setHasVisited(visited === 'true')
  }, [])

  const markAsVisited = () => {
    localStorage.setItem('hasVisited', 'true')
    setHasVisited(true)
  }

  return { hasVisited, markAsVisited }
}
```


#### FadeIn Component

```tsx
// components/FadeIn.tsx
'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export function FadeIn({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```


### 11.3 References

- – Struktur dan konten portofolio[^1][^2][^4][^5][^11]
- – Motion/Framer Motion animations[^12][^15][^16][^19][^20][^21]
- – Dark theme color palettes dan best practices[^8][^22][^7][^9][^13]
- – Developer portfolio best practices 2026[^6][^3]
- – Next.js portfolio SEO dan optimization[^23]
- – PRD template dan structure[^24][^25][^26]

***

## 12. Approval \& Sign-off

| Role | Name | Date | Status |
| :-- | :-- | :-- | :-- |
| Product Owner | [Your Name] | TBD | Pending |
| Lead Developer | AI Agent | TBD | Pending |
| Designer | AI Agent | TBD | Pending |


***

**Dokumen ini siap untuk diimplementasikan oleh AI agent.** Semua requirements, components, dan code snippets telah didefinisikan dengan jelas untuk memastikan eksekusi yang konsisten dan berkualitas tinggi.
<span style="display:none">[^27][^28][^29][^30][^31][^32][^33]</span>

<div align="center">⁂</div>

[^1]: https://www.hostinger.com/tutorials/web-developer-portfolio/

[^2]: https://scrimba.com/articles/how-to-build-a-web-developer-portfolio-that-gets-you-hired/

[^3]: https://dev.to/_d7eb1c1703182e3ce1782/how-to-build-a-developer-portfolio-that-gets-you-hired-in-2026-396g

[^4]: https://portfoliostudio.dev/blog/how-to-build-developer-portfolio-website

[^5]: https://scaletwice.com/blog-post/create-developer-portfolio-website-what-to-include

[^6]: https://codelucky.com/developer-portfolio-that-gets-you-hired-2026/

[^7]: https://empire-ui.com/blog/best-color-palettes-ui-2026

[^8]: https://colorhero.io/blog/dark-mode-color-palettes-2025

[^9]: https://dev.to/imran_khan_a3cc224344dbcf/dark-mode-website-template-ultimate-guide-2026-mb9

[^10]: https://arc.dev/talent-blog/web-developer-portfolio/

[^11]: https://designtocodes.com/blog/developer-portfolio-website-that-gets-you-hired/

[^12]: https://www.framer.com/marketplace/components/loader-logo-reveal/

[^13]: https://safdarali.in/blog/framer-motion-performance-guide-2026

[^14]: https://bigtee.dev/blog/web-developer-portfolio-examples/

[^15]: https://dev.to/stacknotice/framer-motion-motion-react-animations-complete-guide-2026-3e7l

[^16]: https://www.nexus-ui.com/blog/motion-scroll-choreography

[^17]: https://middlehost.com/blog/web-developer-portfolio-examples/

[^18]: https://www.wix.com/blog/web-developer-portfolio-examples

[^19]: https://react-news.com/a-deep-dive-into-scroll-based-animations-with-framer-motion-and-react

[^20]: https://smoothui.dev/blog/framer-motion-tutorial

[^21]: https://freefrontend.com/react-framer-motion/

[^22]: https://www.a1.gallery/websites/dark-portfolio

[^23]: https://pydevhub.com/blog/building-a-modern-portfolio-website-with-next-js-15-and-tailwind-css-2025-guide

[^24]: https://techsy.io/en/blog/product-requirements-document-template

[^25]: https://www.makemyprd.com/templates/prd-template-for-ai-agent

[^26]: https://annsa.ai/product-requirements-document

[^27]: https://foundstep.com/tools/prd-template

[^28]: https://www.ideaplan.io/templates/ai-product-prd-template

[^29]: https://getnextjstemplates.com/blogs/best-nextjs-portfolio-templates

[^30]: https://sureprompts.com/prompts/business/product-requirements-document

[^31]: https://dev.to/_d7eb1c1703182e3ce1782/best-developer-portfolio-examples-2026-2d8m

[^32]: https://dev.to/__be2942592/how-to-build-a-developer-portfolio-that-actually-gets-you-hired-2026-6kn

[^33]: https://myseera.com/portfolio-examples/developer

