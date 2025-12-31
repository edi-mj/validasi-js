# Validasi JS - Sistem Manajemen Akun

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Deskripsi

Sebuah aplikasi web sederhana untuk mengelola daftar akun terdaftar dengan fitur validasi input menggunakan Regular Expression (Regex). Proyek ini dibuat untuk demonstrasi implementasi validasi form menggunakan JavaScript vanilla tanpa framework atau library tambahan.

## Fitur

- **Tambah Akun** - Menambahkan akun baru dengan validasi username dan password
- **Hapus Akun** - Menghapus akun berdasarkan nomor urut
- **Validasi Username** - Hanya menerima huruf alfabet dengan minimal 3 karakter
- **Validasi Password** - Minimal 8 karakter dengan kombinasi huruf kecil, huruf kapital, dan angka
- **Tampilan Tabel** - Data akun ditampilkan dalam format tabel yang rapi
- **UI Responsif** - Desain yang clean dan mudah digunakan

## Tech Stack

- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan layout
- **JavaScript (Vanilla)** - Logic dan validasi

## Aturan Validasi

### Username

- Hanya boleh mengandung huruf alfabet (a-z, A-Z)
- Minimal 3 karakter
- Pattern Regex: `/^[a-z]{3,}$/i`

### Password

- Minimal 8 karakter
- Harus mengandung minimal 1 huruf kecil
- Harus mengandung minimal 1 huruf kapital
- Harus mengandung minimal 1 angka
- Pattern Regex: `/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/`
- Contoh password valid: `Edimj244`

## Cara Menggunakan

### Opsi 1: Coba Langsung (Live Demo)

Kunjungi link berikut untuk mencoba aplikasi secara langsung:
👉 **[https://edi-mj.github.io/validasi-js/](https://edi-mj.github.io/validasi-js/)**

### Opsi 2: Jalankan di Lokal

1. Clone repository ini

   ```bash
   git clone https://github.com/edi-mj/validasi-js.git
   ```

2. Buka file `index.html` di browser favorit Anda

### Cara Penggunaan

1. Klik tombol **"Tambah Akun"** untuk menambahkan akun baru
   - Masukkan username sesuai aturan
   - Masukkan password sesuai aturan
2. Klik tombol **"Hapus Akun"** untuk menghapus akun yang sudah ada
   - Masukkan nomor urut akun yang ingin dihapus
   - Konfirmasi penghapusan

## 📂 Struktur Proyek

```
validasi-js/
│
├── index.html      # File HTML utama
├── style.css       # Styling dan layout
├── script.js       # Logic JavaScript dan validasi
└── README.md       # Dokumentasi proyek
```

## Konsep yang Digunakan

- **Regular Expression (Regex)** - Untuk validasi pattern input
- **DOM Manipulation** - Manipulasi elemen HTML menggunakan JavaScript
- **Event Handling** - Menangani event click pada tombol
- **Array Methods** - Menggunakan array untuk menyimpan data akun
- **Dialog Boxes** - Menggunakan `prompt()`, `alert()`, dan `confirm()`

## Tujuan Pembelajaran

Proyek ini cocok untuk:

- Belajar dasar-dasar validasi form menggunakan JavaScript
- Memahami penggunaan Regular Expression
- Praktik DOM manipulation
- Implementasi CRUD sederhana tanpa database

## Lisensi

Proyek ini dibuat untuk keperluan pembelajaran dan dapat digunakan secara bebas.

---

Dibuat dengan ❤️ untuk belajar JavaScript
