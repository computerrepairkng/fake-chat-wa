# WA Chat Studio - Bantu Warga Marketing Generator

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Vanilla_CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

Web tool mandiri (**Standalone & Offline-Ready**) untuk tim **Digital Marketing Bantu Warga (`bantuwarga.online`)**.  
Aplikasi ini menghasilkan tangkapan layar percakapan WhatsApp yang realistis dalam bentuk **3-Slide Carousel** atau konten video bersambung (TikTok, Instagram Carousel, Facebook Ads, dan WhatsApp Status) dengan dialog yang natural, relatable, dan mengedukasi warga tentang keamanan sistem **Rekening Bersama (Escrow)** serta **Verifikasi KTP** di Bantu Warga.

---

## 🌟 Fitur Utama

### 1. 🤖 Smart AI Scenario Generator (Multi-Bahasa)
- **13 Kategori Master & 60+ Subkategori**: Sinkron langsung dengan master database Laravel Bantu Warga (`KategoriJasaSeeder.php`).
- **3 Pilihan Bahasa Daerah & Nasional**:
  - 🇮🇩 **Bahasa Indonesia**
  - 🌾 **Basa Sunda**
  - 🏛️ **Basa Jawa**
- **Generator Random (Non-Monoton)**: Menghasilkan skenario cerita yang dinamis lengkap dengan variasi dialog lokal, patokan rumah unik tetangga, dan keramahan khas warga.

### 2. 📱 Realistic WhatsApp Phone Mockup (375x720 Retina Display)
- Mockup HP modern dengan notch kamera, status bar (jam & baterai dinamis), serta doodle background khas WhatsApp.
- Status kontak dinamis (*online*, *sedang mengetik...*, *terakhir dilihat*).
- Indikator centang pesan otentik (1 abu-abu, 2 abu-abu terkirim, 2 biru terbaca).
- **Green Story Ring Avatar**: Ring gradasi hijau untuk efek status WhatsApp aktif.
- **Kartu Share Lokasi Google Maps Asli**: Pratinjau peta satelit/vektor Google Maps resolusi tinggi lengkap dengan pin merah dan watermark Google resmi.

### 3. 🛡️ Pola Transaksi Asli Bantu Warga (Alur 3 Slide)
- **Slide 1 (Checkout & Sharelok OTW)**:
  - Warga menginfokan pesanan sudah dicekout & dibayar di Bantu Warga via Rekber.
  - Pekerja meminta share lokasi atau patokan rumah.
  - Warga mengirimkan kartu lokasi WhatsApp + patokan rumah unik (misal: pohon mangga lebat, anjing dirantai aman, bel wireless putih).
  - Pekerja mengonfirmasi GPS dan langsung meluncur OTW.
- **Slide 2 (Tiba di Lokasi & Keramahan Warga)**:
  - Pekerja tiba di lokasi dengan alat lengkap.
  - Keramahan warga (kopi hitam panas, pisang goreng, bala-bala haneut).
  - Dialog edukasi keamanan transaksi Rekber Escrow & verifikasi identitas KTP.
- **Slide 3 (Penyelesaian & Pencairan Instan)**:
  - Pengerjaan selesai rapi dan bersih.
  - Warga mengonfirmasi "Selesai" di aplikasi Bantu Warga.
  - Dana detik itu juga otomatis cair ke saldo dompet aplikasi pekerja.

### 4. ✍️ Editor Pesan & Kustomisasi Interaktif
- Ubah teks, pengirim (Saya/Lawan), jam, dan status centang secara langsung.
- Toggle instan mode **Share Lokasi GPS** per balon pesan.
- Geser urutan balon pesan (*Move Up / Move Down*) atau tambah/hapus balon pesan.
- Ganti foto profil avatar pekerja secara instan dari 6 preset lokal Indonesia atau unggah foto kustom.

### 5. 📸 Export Gambar Resolusi Tinggi (2x Retina PNG)
- Ekspor **Slide Aktif** atau **Download Semua Slide (Slide 1–3)** secara berurutan.
- Menggunakan build offline `html2canvas.min.js` dengan fallback CDN, menghasilkan gambar tajam tanpa pecah untuk konten media sosial.

### 6. 📋 Generator Copywriting & Tagar Otomatis
- Pilihan sudut pandang cerita (*Angle/Tone*): **Drama / Emosional**, **Solutif / Edukatif**, dan **Humor Santai**.
- Format otomatis disesuaikan untuk **TikTok**, **Instagram**, **Facebook**, dan **WhatsApp Status**.
- Salin 1-klik untuk seluruh deskripsi, hook viral, cerita, CTA, atau kumpulan tagar.

---

## 📂 Struktur Project

```text
fake-chat-wa/
├── assets/
│   ├── gmaps_preview.jpg      # Snapshot peta Google Maps realistis
│   └── gmaps_komplek.jpg      # Snapshot peta komplek perumahan
├── avatars/
│   ├── kang_asep.jpg          # Tukang / pekerja harian lokal
│   ├── bunda_hijab.jpg        # Ibu rumah tangga / pemesan
│   ├── ayah_bapak.jpg         # Bapak warga / driver pick-up
│   ├── bu_rt.jpg              # Ibu RT / ART harian
│   ├── pak_rt.jpg             # Ketua RT / pawang hama
│   └── teh_neng.jpg           # Mahasiswi / cleaning service
├── .gitignore                 # Filter file repository
├── app.js                     # Master Controller & DOM Synchronizer
├── data.js                    # Database Kategori Laravel, Avatar, dan Caption
├── generator.js               # Smart AI Scenario Generator Engine
├── html2canvas.min.js         # Library rendering canvas resolusi tinggi
├── index.html                 # Struktur antarmuka utama (3-kolom studio)
├── LICENSE                    # Lisensi MIT
├── README.md                  # Dokumentasi project
└── style.css                  # Desain sistem & WhatsApp mockup stylesheet
```

---

## 🚀 Cara Menjalankan

Project ini dibuat menggunakan **Vanilla HTML, CSS, dan JavaScript**, sehingga **tidak membutuhkan build process** (seperti Webpack, Vite, atau npm build).

### 1. Menggunakan Laragon / XAMPP (Rekomendasi)
Letakkan folder ini di direktori `www` atau `htdocs`:
```text
c:\laragon\www\fake-chat-wa\
```
Buka browser dan akses:
```text
http://localhost/fake-chat-wa/
```

### 2. Langsung Buka di Browser (File Protocol)
Klik dua kali berkas:
```text
c:\laragon\www\fake-chat-wa\index.html
```
atau buka via URL browser:
```text
file:///c:/laragon/www/fake-chat-wa/index.html
```

### 3. Deploy ke GitHub Pages
1. Push project ini ke repository GitHub.
2. Buka **Settings** > **Pages** di repository GitHub Anda.
3. Pada bagian **Branch**, pilih `main` dan folder `/ (root)`, lalu klik **Save**.
4. Website langsung online dan bisa diakses oleh seluruh tim marketing!

---

## 🛠️ Teknologi yang Digunakan
- **HTML5 Semantic Markup**
- **Vanilla CSS3** (CSS Variables, Flexbox, CSS Grid, Glassmorphism)
- **JavaScript Modern (ES6+)**
- **Font Awesome 6.5.1** (Icon set)
- **Google Fonts** (*Plus Jakarta Sans* & *Roboto*)
- **html2canvas 1.4.1** (High-res canvas snapshot)

---

## 📄 Lisensi
Didistribusikan di bawah lisensi MIT. Lihat berkas [LICENSE](LICENSE) untuk informasi lebih lanjut.
