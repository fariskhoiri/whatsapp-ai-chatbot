# Webhook AI Chatbot

Aplikasi backend berbasis Node.js dan Express.js yang berfungsi sebagai webhook. Aplikasi ini bertindak sebagai jembatan yang menghubungkan pesan dari pengguna WhatsApp ke model Kecerdasan Buatan.

Aplikasi ini menggunakan dua layanan utama, yaitu Fonnte sebagai penyedia API WhatsApp dan Langflow sebagai penyedia model bahasa AI.


## Apa yang diperlukan?

Sebelum memulai, pastikan komputer telah terinstal:

1. Node.js versi 18.x atau terbaru. Bisa diunduh di [nodejs.org](https://nodejs.org/en)

2. Ngrok (Opsional tapi disarankan). Digunakan untuk mengekspos server localhost ke internet agar bisa menerima webhook dari Fonnte. Bisa diunduh di [ngrok.com](https://ngrok.com/download/windows)

3. Akun dan Token API dari Fonnte.

4. URL Endpoint dan API Key dari proyek Langflow.


## Installation

Clone repositori ini ke direktori yang diinginkan.

```bash
  git clone https://github.com/fariskhoiri/whatsapp-ai-chatbot.git
```

Lalu jalankan perintah berikut untuk mengunduh semua pustaka yang dibutuhkan aplikasi.

```bash
  npm install
```


## Environment Variables

Aplikasi membutuhkan konfigurasi kredensial agar bisa berjalan.

1. Salin file .env.example menjadi file baru bernama .env:

Windows:
```bash 
copy .env.example .env
```

Mac/Linux: 
```bash
cp .env.example .env
```
2. Buka file .env dan isi nilainya.
```
FONNTE_TOKEN=isi_dengan_token_fonnte

LANGFLOW_URL=https://url-langflow-anda.com/api/v1/run/xxx

LANGFLOW_API_KEY=isi_dengan_api_key_langflow
```


## Menjalankan Aplikasi

Gunakan perintah ini untuk menjalankan aplikasi dengan mode pengembangan

```bash
  npm run dev
```

Jika berhasil terminal akan menunjukkan pesan
```bash
  Server running on port 3000
```


## Menghubungkan Webhook Lokal ke Fonnte
Karena aplikasi berjalan di localhost:3000, API Fonnte yang berada di internet tidak bisa mengirimkan pesan ke komputer lokal. Maka dibutuhkan Ngrok untuk membuat tunneling.

1. Buka terminal baru dan biarkan terminal Node.js tetap berjalan.

2. Jalankan perintah Ngrok berikut untuk mengekspos port 3000:
```bash
ngrok http 3000
```
3. Ngrok akan memberikan URL publik (Forwarding).

Contoh:\
`https://a1b2-c3d4.ngrok-free.app -> http://localhost:3000`

Salin URL publik berawalan https:// tersebut dan tambahkan path webhook, sehingga menjadi:\
`https://a1b2-c3d4.ngrok-free.app/webhook`

4. Masuk ke dasbor akun Fonnte, navigasi ke pengaturan device/API, dan masukkan URL tersebut ke dalam kolom Webhook URL.


## Struktur Log
Aplikasi ini menggunakan `winston` untuk mencatat aktivitas. Jika terjadi error atau untuk melihat riwayat aktivitas bot, periksa folder `logs/` yang akan otomatis terbuat saat aplikasi dijalankan:

`logs/app.log`: mencatat semua aktivitas pesan masuk dan pesan keluar

`logs/error.log`: khusus mencatat jika terjadi error pada sistem.
