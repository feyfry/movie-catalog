# Movie Catalog System
Sistem informasi katalog film dengan fitur review dan rating. Dibangun menggunakan Flask Python untuk backend dan React untuk frontend.

## Prerequisites
Sebelum menginstall aplikasi ini, pastikan sistem anda telah memiliki:

### Wajib
- Python 3.8 atau lebih tinggi
- Node.js v16 atau lebih tinggi
- NPM (Node Package Manager) v8 atau lebih tinggi  
- MySQL 5.7 atau lebih tinggi

### Optional
- Git (untuk clone repository)
- Visual Studio Code atau code editor lainnya
- Postman (untuk testing API)

## Instalasi & Konfigurasi

### 1. Clone Repository
```bash
git clone https://github.com/username/movie-catalog.git
cd movie-catalog
```

### 2. Setup Backend
```bash
# Masuk ke direktori backend
cd backend

# Buat virtual environment
python -m venv venv

# Aktifkan virtual environment
# Windows
venv\Scripts\activate
atau jika menggunakan gitbash, ketikkan perintah:
source venv/Scripts/activate

# Linux/Mac
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Konfigurasi Database

Buat database MySQL baru bernama movie_catalog
Import file SQL yang disediakan dalam folder "database" ke database local Anda.

### 4. Konfigurasi Environment
Buat file .env di folder backend/ dengan isi:
```bash
FLASK_APP=app.py
FLASK_DEBUG=True
DATABASE_URL=mysql+pymysql://username:password@localhost/movie_catalog
JWT_SECRET_KEY=3d6f45a5fc12445dbac2f59c3b6c7cb1

Catatan:
Ganti username dan password sesuai dengan kredensial MySQL Anda, jika passwordnya kosong, cukup kosongkan saja sebelum simbol @
JWT_SECRET_KEY bisa diganti dengan nilai random lain untuk keamanan, Anda bisa gunakan key tersebut jika mau.
```

### 5. Setup Frontend
```bash
# Masuk ke direktori frontend
cd ../frontend

# Install dependencies
npm install

# Build aplikasi
npm run build
```

# Menjalankan Aplikasi
## Development Mode
1. Backend:
   ```bash
   # Di folder backend/ dengan virtual environment aktif
   flask run
   ```
Backend akan berjalan di http://localhost:5000

2. Frontend:
   ```bash
   # Di folder frontend/
   npm run dev
   ```
Frontend akan berjalan di http://localhost:5173

## Production Mode
1. Backend:
   ```bash
   # Di folder backend/
   gunicorn -w 4 app:app
   ```
   
2. Frontend:
   ```bash
   # Di folder frontend/
   npm run build
   ```
Hasil build ada di folder dist/

## Struktur Project
```bash
movie_catalog/
├── backend/
│   ├── app.py
│   ├── config.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── movie.py
│   │   ├── review.py
│   │   └── user.py
│   ├── requirements.txt
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── services/
    ├── package.json
    └── vite.config.js
```


# API Endpoints
## Authentication
- POST /api/register - Register user baru
- POST /api/login - Login user

## Movies
- GET /api/films - Mendapatkan daftar film
- GET /api/films/{id} - Mendapatkan detail film
- GET /api/films/{id}/reviews - Mendapatkan review film
- POST /api/reviews - Membuat review baru (perlu autentikasi)

# Teknologi yang Digunakan
## Backend
- Flask (Python web framework)
- SQLAlchemy (ORM)
- PyMySQL (MySQL connector)
- Flask-JWT-Extended (Authentication)
- Flask-CORS (CORS handling)

## Frontend
- React (JS library)
- Vite (Build tool)
- React Router (Routing)
- Axios (HTTP client)
- Tailwind CSS (Styling)

## Database
- MySQL

# Support & Kontribusi
Silakan buka issue jika menemukan bug atau ingin request fitur baru.

# License
MIT License - silakan lihat file LICENSE untuk detail lebih lanjut.
   
