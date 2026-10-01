# DESIGN.md — Portfolio Website

> Dokumen spesifikasi desain untuk diimplementasikan oleh AI agent.
> **Tech-agnostic**: bisa dipakai untuk HTML/CSS/JS vanilla, Tailwind, maupun React/Next.js. Pengecualian: Section 6 (Motion & Scroll Animation) ditulis spesifik untuk **Next.js (App Router)** sesuai keputusan tech stack.
> **Bahasa konten**: Inggris (mengikuti referensi). Ganti semua token `{{...}}` dengan data asli sebelum build.
> **Referensi visual**: hero meniru layout gambar referensi (nama raksasa outline + solid, foto portrait cutout hitam-putih yang overlap ke teks, kartu rounded).

---

## 1. Gambaran Umum

### 1.1 Konsep

Portfolio personal satu halaman (one-page) dengan gaya **monokrom editorial**: background terang, teks hitam pekat, tanpa gradient, tanpa warna tambahan kecuali satu aksen hijau untuk indikator status. Kesan yang ditargetkan: premium, bersih, percaya diri, dengan tipografi raksasa sebagai dekorasi utama.

### 1.2 Prinsip desain (wajib dipatuhi)

1. **Disiplin monokrom** — hanya hitam, putih, abu-abu, plus hijau aksen untuk dot status. Tidak ada warna lain.
2. **Tipografi sebagai dekorasi** — ukuran dan kontras huruf menggantikan elemen grafis.
3. **Whitespace lega** — jangan takut ruang kosong; kepadatan rendah adalah fitur.
4. **Semua sudut membulat** — pill (999px) atau kartu (20–28px). Tidak ada sudut tajam pada komponen.
5. **Motion halus dan sedikit** — reveal on scroll + hover state saja, tanpa animasi berlebihan.

---

## 2. Design Tokens

### 2.1 Warna

| Token       | Hex     | Dipakai untuk                                  |
|-------------|---------|------------------------------------------------|
| `--page-bg` | #E9E9E9 | Background halaman (area di luar kartu)        |
| `--card-bg` | #F5F5F5 | Background kartu hero dan kartu section        |
| `--surface` | #FFFFFF | Pill, badge, kartu proyek, nav mengambang      |
| `--ink`     | #111111 | Teks utama, tombol primer, stroke outline      |
| `--muted`   | #6B7280 | Teks sekunder, angka/count di nav dan judul    |
| `--border`  | #E5E5E5 | Border pill, divider antar baris               |
| `--accent`  | #22C55E | Dot status "available" SAJA, tidak untuk yang lain |

> Larangan: jangan memakai warna di luar tabel ini. Jangan memakai gradient dalam bentuk apa pun.

### 2.2 Tipografi

- **Font utama**: `"Inter Tight"`, fallback `"Inter"`, lalu `system-ui, sans-serif`. (Alternatif yang disetujui: `"Archivo"`.)
- Sumber: Google Fonts. Sertakan weight 400, 500, 600, 800, 900.
- Semua display text: `text-transform: uppercase`.
- Tracking display: `letter-spacing: -0.02em` sampai `-0.04em`.

| Pemakaian              | Ukuran                              | Weight | Keterangan                    |
|------------------------|-------------------------------------|--------|-------------------------------|
| Nama hero (display)    | `clamp(3rem, 12vw, 11rem)`          | 900    | Satu baris di desktop          |
| Judul section          | `clamp(2rem, 5vw, 3.5rem)`          | 800    | Uppercase                      |
| Judul service          | `clamp(1.5rem, 3vw, 2.5rem)`        | 700    | Tidak harus uppercase          |
| Peran / subtitle hero  | 24px                                | 600    | Contoh: "UI/UX Designer"       |
| Body                   | 15–16px, `line-height: 1.6`         | 400    | Warna `--muted`                |
| Nav / label kecil      | 14px                                | 500    |                                |
| Kicker section         | 13px, uppercase, tracking `0.08em`  | 500    | Warna `--muted`                |
| Count `[n]`            | 0.55em dari judul induk             | 400    | Warna `--muted`, contoh `[40]` |

**Outline text** (untuk kata pertama nama hero):

```css
.text-outline {
  color: transparent;
  -webkit-text-stroke: 2px var(--ink);
}
```

### 2.3 Spacing & Radius

- Basis spacing: 8px.
- Padding vertikal section: `clamp(48px, 8vw, 120px)`.
- Padding horizontal konten: 24px (mobile), 48px (desktop).
- Max width konten: 1400px, center.
- Radius: pill `999px`; kartu `20–24px`; kartu hero `28px`.

### 2.4 Shadow

- Nav mengambang / badge: `0 8px 24px rgba(0,0,0,0.06)`.
- Kartu proyek saat hover: `0 16px 40px rgba(0,0,0,0.08)`.

---

## 3. Struktur Halaman

```
<body>  (background --page-bg)
├── <nav>            floating pill, hide-on-scroll-down / show-on-scroll-up
└── <main>           (max-width 1400px, centered)
    ├── <section id="hero">       kartu besar rounded, min-height 92vh
    ├── <section id="projects">   grid kartu proyek
    ├── <section id="about">      profil + tombol CV
    ├── <section id="skills">     daftar baris keahlian
    ├── <section id="contact">    kartu hitam + CTA besar
    └── <footer>     copyright, sosmed mini, back-to-top
```

Urutan nav dan anchor: Work → About → Skills → Contact.

---

## 4. Spesifikasi per Section

### 4.1 Navigasi (floating pill, hide-on-scroll, global)

Menggantikan nav internal di dalam kartu hero pada gambar referensi — cukup **satu** nav global agar konsisten di full page.

- Posisi: `fixed` top, center horizontal (`left: 50%; transform: translateX(-50%)`), `margin-top: 16px`, `z-index: 50`.
- Bentuk: pill, `background: rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)`, border 1px `--border`, shadow halus.
- Isi (kiri ke kanan):
  1. Status badge: dot hijau (animasi pulse) + teks "Available for New Project".
  2. Link tengah: Work, About, Skills, Contact (anchor ke `#id` masing-masing).
  3. Tombol kanan: "Let's Talk ↗" (`.btn-primary` ukuran kecil).
- Mobile (<768px): sembunyikan link tengah; tampilkan badge + tombol CTA saja (atau hamburger bila link dirasa perlu).
- Perilaku scroll: nav bersembunyi saat scroll ke bawah dan muncul kembali saat scroll ke atas, agar tidak menutupi konten. Nonaktif saat `prefers-reduced-motion: reduce`.

### 4.2 Hero (`#hero`)

Replika setia gambar referensi.

- **Kartu**: `background: var(--card-bg)`, `border-radius: 28px`, padding `clamp(24px, 4vw, 64px)`, `min-height: 92vh`, `position: relative`, `overflow: hidden`.
- **Nama raksasa**: center, satu baris di desktop.
  - Kata pertama (`{{FIRST_NAME}}`): class `.text-outline`.
  - Kata kedua (`{{LAST_NAME}}`): solid `color: var(--ink)`.
  - Di mobile boleh wrap menjadi 2 baris.
- **Foto portrait**:
  - File: `{{PORTRAIT}}` — PNG cutout (background transparan), **grayscale**. Rasio sekitar 3:4.
  - Lebar: `clamp(240px, 30vw, 400px)`, center horizontal.
  - Posisi: `margin-top` negatif (sekitar `-8vw`) sehingga **overlap ke teks nama**; `z-index` di atas teks; bagian bawah menempel ke dasar kartu.
  - Opsional: mask fade ~40px di tepi bawah agar menyatu dengan kartu.
  - Jika foto sumber masih berwarna: tambahkan `filter: grayscale(1)`.
- **Blok kiri bawah**:
  - Peran: `{{ROLE}}` — 24px, weight 600. Contoh: "UI/UX Designer".
  - Deskripsi: `{{TAGLINE}}` — 15px, `--muted`, `max-width: 300px`.
  - Tombol: "Let's collaborate ↗" (`.btn-primary`).
- **Kolom kanan bawah**: tumpukan vertikal pill sosmed — Dribbble, Instagram, LinkedIn, Behance. Tiap pill: ikon + label, border 1px `--border`, background transparan/putih, radius 999px, gap 12px antar pill, rata kanan.
- **Dekorasi**: SVG kursor tangan kecil di dekat area sosmed (opsional, `aria-hidden="true"`).
- **Entrance animation**: tiap blok `fade + translateY(24px)`, stagger 0.08s.

### 4.3 Work (`#work`)

- **Section head**: kicker "Selected Work" + judul "Work" + count badge `[{{WORK_COUNT}}]` (muted, kecil).
- **Grid**: 2 kolom di desktop, `gap: 24px`. Tampilkan 4 proyek unggulan.
- **Kartu proyek**:
  - Thumbnail 16:10, `border-radius: 20px`, `overflow: hidden`.
  - Gambar default grayscale; saat hover: berwarna + `scale(1.03)` (transisi 0.4s).
  - Di bawah thumbnail: judul proyek (20px/600), meta "Kategori · Tahun" (14px, `--muted`), ikon panah ↗ di sisi kanan.
  - Hover kartu: shadow medium, `cursor: pointer`.
- **Mobile**: 1 kolom.
- Opsional: tombol "View all projects" (`.btn-ghost`) di bawah grid.

### 4.4 About (`#about`)

- **Section head**: kicker "Profile" + judul "About" + nomor urut `[01]`.
- **Kartu aside gelap** (`background: var(--ink)`, teks putih, radius 24px):
  - Label lokasi ("Based in Indonesia", dengan `aria-label` eksplisit agar screen reader membaca spasi).
  - Statement 1 kalimat (3xl/600).
  - Tombol "Download CV ↗" (`.btn-light`).
- **Kartu body** (`background: var(--card-bg)`, radius 24px): headline besar + 2 paragraf (15px, `--muted`).

### 4.5 Skills & Tools (`#skills`)

- **Section head**: kicker "How I Build" + judul "Skills & Tools" + nomor urut `[03]`.
- **Daftar baris** (4 grup):
  - Kolom 1: nomor "01", "02", … (14px, `--muted`).
  - Kolom 2: judul grup (`clamp(1.65rem, 3vw, 2.5rem)`, 700).
  - Kolom 3: deskripsi 1–2 kalimat (15px, `--muted`) + tags kecil (pill outline).
- Divider 1px `--border` antar baris.
- Hover (desktop): background `--surface`.

### 4.6 Contact (`#contact`)

- **Kartu penutup**: seperti kartu hero tetapi **background `--ink` (hitam), teks putih** — memberi kontras penutup yang tegas.
  - Kicker: "Get in Touch" (`--muted` terang).
  - Headline: "Let's work together" — `clamp(2.5rem, 6vw, 5rem)`, 800.
  - Email raksasa sebagai link `mailto:`: `{{EMAIL}}` — underline saat hover.
  - Tombol: "Let's Talk ↗" varian `.btn-light` (background putih, teks `--ink`).
  - Status badge ("Available for New Project") boleh diulang di sini.
- **Footer** (di bawah kartu, di atas `--page-bg`):
  - Kiri: `© {{YEAR}} {{FULL_NAME}}`.
  - Tengah/kanan: link sosmed mini (teks saja).
  - Kanan: "Back to top ↑" (anchor ke `#hero`).

---

## 5. Komponen Reusable

### 5.1 `.btn-primary`

```css
.btn-primary {
  background: var(--ink);
  color: #fff;
  border-radius: 999px;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-primary:hover { background: #000; transform: translateY(-2px); }
.btn-primary:active { transform: translateY(0); }
```

- Ikon panah ↗ 16px di kanan teks.
- Varian `.btn-light`: background `#fff`, teks `var(--ink)` (untuk dipakai di atas kartu hitam).

### 5.2 `.btn-ghost` / `.pill`

- Background transparan/putih, `border: 1px solid var(--border)`, radius 999px, padding 10px 20px, font 14px/500.
- Hover: `border-color: var(--ink)`.

### 5.3 `.status-badge`

- Pill putih, padding 10px 18px, font 13px/500.
- Dot 8px `--accent` + animasi pulse (`box-shadow` mengembang, durasi 2s, infinite).

### 5.4 `.section-head` (pola header tiap section)

- Kicker (13px, uppercase, tracking 0.08em, `--muted`).
- Judul besar (lihat tabel tipografi).
- Count `[n]` — `--muted`, weight 400, ukuran 0.55em dari judul.

---

## 6. Motion, Scroll Animation & Interaksi

> Bagian ini mengasumsikan implementasi **Next.js (App Router)**.

### 6.1 Stack animasi

| Kebutuhan                | Library                                                        | Catatan                     |
|--------------------------|----------------------------------------------------------------|-----------------------------|
| Scroll-triggered animation | **Motion** (`motion`, import dari `motion/react`; dulu bernama Framer Motion) | Deklaratif, SSR-friendly    |
| Smooth scrolling         | **Lenis** (`lenis`)                                            | Efek buttery scroll, ringan |

Install: `npm install motion lenis`

Documentation: `https://github.com/darkroomengineering/lenis/blob/main/README.md`

Aturan wajib:

- Semua komponen yang memakai browser API (`useScroll`, `useEffect`, Lenis) harus diawali `"use client"`.
- Jangan memakai CSS `scroll-behavior: smooth` — smooth scroll ditangani Lenis. Tetap pertahankan `scroll-padding-top: 96px` untuk kompensasi nav sticky.
- Prinsip tetap: animasi halus dan sedikit. Durasi 0.4–0.7s, easing `easeOut` (atau `cubic-bezier(0.22, 1, 0.36, 1)`).

### 6.2 Komponen reusable

**`<Reveal>`** — pembungkus reveal-on-scroll standar. Dipakai di semua section.

```tsx
"use client";
import { motion } from "motion/react";

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

**`<SmoothScroll>`** — wrapper Lenis, dipasang sekali di root layout.

```tsx
"use client";
import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1 });
    let raf: number;
    const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return <>{children}</>;
}
```

**`<CountUp>`** — animasi angka pada count badge (`[40]`, `[9y+]`, dst.) saat masuk viewport. Gunakan `useInView` + `animate` dari `motion/react`, atau implementasi manual dengan `requestAnimationFrame`. Durasi ~1s, easing easeOut. Format akhir harus sama persis dengan teks statis (mis. `[40]`, `[9y+]`).

### 6.3 Spesifikasi animasi per section

- **Hero**
  - Entrance: tiap blok (nama, foto, blok kiri-bawah, sosmed) `fade + translateY(24px)`, stagger 0.08–0.12s, mulai 0.1s setelah load.
  - Parallax saat scroll — wajib pakai `useScroll` dengan `target` ref hero dan `offset: ["start start", "end start"]`:
    - Teks nama: `y` 0 → 120px.
    - Foto: `y` 0 → 40px (lebih lambat dari teks → efek depth karena keduanya overlap).
- **Work**: tiap kartu dibungkus `<Reveal delay={index * 0.08}>`. Thumbnail: `whileInView` scale 1.06 → 1 (transisi 0.7s).
- **About & Skills**: tiap blok/baris `<Reveal delay={index * 0.06}>`.
- **Contact**: kartu hitam `whileInView` fade + scale 0.98 → 1; headline di-reveal **per kata** (pecah teks menjadi array kata, tiap kata stagger 0.04s).
- **Nav sticky** (opsional): tambahkan blur/shadow setelah scroll > 40px via `useScroll` atau scroll listener.

### 6.4 Hover & fokus

- Tombol: `translateY(-2px)` + shadow.
- Kartu proyek: shadow medium + gambar `scale(1.03)`; gambar default grayscale → berwarna saat hover.
- Baris service/experience: highlight background `--surface`.
- Fokus keyboard: `:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }`.

### 6.5 Aksesibilitas gerak

- Gunakan hook `useReducedMotion()` dari `motion/react`: jika `true`, render semua elemen langsung dalam state final (tanpa animasi).
- Lenis: jangan inisialisasi (atau langsung `destroy`) saat `prefers-reduced-motion: reduce`.
- Fallback CSS untuk elemen non-Motion: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }`.

---

## 7. Responsif

| Breakpoint   | Penyesuaian utama                                                                                                  |
|--------------|--------------------------------------------------------------------------------------------------------------------|
| ≥1024px      | Sesuai spesifikasi desktop di atas.                                                                                |
| 768–1023px   | Nama hero ~10vw; grid work boleh tetap 2 kolom; judul service mengecil mengikuti clamp.                            |
| <768px       | Nav: sembunyikan link tengah. Nama hero boleh wrap 2 baris. Foto 65–75% lebar. Blok kiri-bawah dan sosmed jadi 1 kolom (pill sosmed jadi baris horizontal, wrap). Grid work 1 kolom. Padding section mengecil. Sembunyikan dekorasi kursor. |

---

## 8. Aset yang Dibutuhkan (checklist)

- [ ] `{{PORTRAIT}}` — foto portrait PNG, background transparan (cutout), grayscale, rasio ~3:4.
- [ ] Thumbnail proyek (6 buah), 1280×800px. Boleh grayscale; akan diwarnai saat hover via CSS.
- [ ] Ikon (inline SVG, disarankan dari Lucide / Simple Icons): `arrow-up-right`, `dribbble`, `instagram`, `linkedin`, `behance`.
- [ ] Favicon: inisial nama, hitam di atas putih.

---

## 9. Token Konten (wajib diganti sebelum build)

```
{{FIRST_NAME}} {{LAST_NAME}} {{FULL_NAME}}
{{ROLE}}                → contoh: "UI/UX Designer"
{{TAGLINE}}             → contoh: "Designing digital products that are clear, usable, and conversion focused."
{{EMAIL}}
{{WORK_COUNT}} {{SERVICE_COUNT}} {{YEARS}} {{YEAR}}
URL_DRI BBLE / URL_INSTAGRAM / URL_LINKEDIN / URL_BEHANCE
Daftar proyek   → judul, kategori, tahun, thumbnail, link
Daftar service  → judul, deskripsi, tags
Daftar experience → periode, peran, perusahaan, lokasi
```

---

## 10. Larangan (Do NOT)

1. Jangan menambahkan warna di luar tabel token — terutama gradient.
2. Jangan memakai font selain "Inter Tight"/"Archivo" (+ fallback).
3. Jangan membuat komponen bersudut tajam.
4. Jangan menambahkan animasi berat (parallax, marquee, dsb.) tanpa persetujuan.
5. Jangan menampilkan teks placeholder seperti "Lorem ipsum" di hasil akhir — semua `{{TOKEN}}` harus terisi.

---

## 11. Definition of Done

- [ ] Semua section ter-render sesuai spec pada viewport desktop 1440px dan mobile 390px.
- [ ] Tidak ada token `{{...}}` yang tersisa di output.
- [ ] Semua link sosmed dan email berfungsi (`mailto:` untuk email).
- [ ] Kontras teks memenuhi standar dasar; seluruh konten bisa diakses via keyboard.
- [ ] Tidak ada error di browser console.
- [ ] Animasi scroll berfungsi: reveal tiap section, parallax hero (nama vs foto), dan count-up angka.
- [ ] Seluruh animasi dan smooth scroll nonaktif saat `prefers-reduced-motion: reduce`.
- [ ] Halaman tetap utuh dan terbaca dengan `prefers-reduced-motion` aktif.
