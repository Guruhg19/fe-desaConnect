# DesaConnect Frontend --- Desa : Communication & Online Network for E-Citizen Technology

![Vue](https://img.shields.io/badge/Vue.js-3-42b883?style=flat&logo=vue.js)
![Vite](https://img.shields.io/badge/Vite-Build-646cff?style=flat&logo=vite)
![Pinia](https://img.shields.io/badge/Pinia-Store-yellow?style=flat&logo=pinia)
![Axios](https://img.shields.io/badge/Axios-HTTP_Client-informational?style=flat&logo=axios)

DesaConnect adalah aplikasi **Desa Digital Modern** berbasis web yang dikembangkan menggunakan Laravel 12 dan Vue 3.  
Repository ini berisi **kode sumber Frontend** untuk proyek DesaConnect.

## 📚 Tentang Proyek

Frontend ini berfungsi sebagai antarmuka pengguna (SPA - Single Page Application) yang berkomunikasi dengan API backend Laravel.

---

## 🌟 Fitur Utama Frontend

- Dashboard interaktif untuk Kepala Desa dan Kepala Rumah Tangga
- Formulir dinamis untuk pengajuan bantuan sosial
- Sistem pembelian tiket acara desa terintegrasi Midtrans
- Visualisasi data desa dalam bentuk grafik
- Manajemen akun dan autentikasi berbasis token
- Notifikasi real-time (opsional)

---

## 🧑‍💻 Teknologi yang Digunakan

- **Vue 3** – Framework Frontend
- **Vite** – Build tool untuk pengembangan cepat
- **Pinia** – Manajemen state modern
- **Axios** – Untuk berkomunikasi dengan API Backend
- **Vue Router** – Navigasi antar halaman

---

## 👥 Role User

1. **Kepala Desa**
   - Mengelola data penduduk, acara, bantuan sosial, dan pembangunan
2. **Kepala Rumah Tangga**
   - Melihat informasi keluarga
   - Mengajukan bantuan
   - Membeli tiket acara desa secara online

---

## 🚀 Cara Menjalankan Proyek

### Persiapan
Pastikan sudah menginstal:
- Node.js ^18
- npm atau pnpm
- (Opsional) Vue Devtools Extension

### Langkah-langkah
1. Clone repository:
```bash
git clone https://github.com/Guruhg19/fe-desaConnect.git
cd fe-desaConnect
```

2. Install dependency:
```bash
npm install
```

3. Copy file environment:
```bash
cp .env.example .env
```

4. Sesuaikan `.env` untuk mengatur **base URL API** ke server backend Laravel-mu, misalnya:
```
VITE_API_URL=http://localhost:8000/api
```

5. Jalankan server lokal:
```bash
npm run dev
```

Frontend bisa diakses di `http://localhost:5173`

---

## 🧐 Penutup

Dengan **DesaConnect**, pelayanan masyarakat desa menjadi lebih modern, responsif, dan efisien.  
Mari wujudkan digitalisasi desa bersama!

---

> 🌐 Repository GitHub: [DesaConnect Frontend](https://github.com/Guruhg19/Desa-Connect-Frontend.git)

Silakan kontribusi, fork, dan beri bintang ⭐ jika kamu suka proyek ini!

---

## 📝 Lisensi

Proyek ini dibuat untuk kebutuhan pembelajaran dan portofolio.

---

Happy coding! 🚀

