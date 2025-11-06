# 🔐 Secure Task Manager - Azure Cloud Implementation

**Nama:** Dhea Sila Mukti  
**NIM:** 220170138  
**Mata Kuliah:** Cloud Computing and Security  
**Dosen Pengampu:** Dr. Munirul Ula, ST., M.Eng  
**Universitas Malikussaleh**

---

## 🧭 Deskripsi Proyek

Proyek ini merupakan implementasi aplikasi **Manajemen Tugas Aman berbasis Cloud** menggunakan **Microsoft Azure**.  
Aplikasi ini menerapkan prinsip _Security-by-Design_ dan _Defense-in-Depth_ melalui integrasi berbagai layanan Azure:

- **Azure App Service** → Hosting aplikasi web (ASP.NET Core)
- **Azure Active Directory** → Autentikasi pengguna
- **Azure SQL Database** → Penyimpanan data terenkripsi (TDE)
- **Application Insights** → Monitoring dan logging keamanan

---

☁️ Arsitektur Sistem
![Arsitektur Sistem](docs/gambar-arsitektur.png)

Alur sistem:

1. Pengguna mengakses aplikasi melalui browser.
2. Azure AD memverifikasi identitas pengguna.
3. Data tugas dikirim ke Azure SQL Database menggunakan koneksi terenkripsi (TLS).
4. Aktivitas sistem dicatat secara real-time di Application Insights.

---

⚙️ Fitur Keamanan yang Diterapkan
| Lapisan | Implementasi |
|----------|---------------|
| **Identity Security** | Azure AD Authentication |
| **Data Security** | Transparent Data Encryption (TDE) |
| **Network Security** | HTTPS, Firewall Rule, NSG |
| **Application Security** | Secure headers, input validation |
| **Monitoring** | Application Insights (Telemetry & Log) |

---

## 🧩 Teknologi

- ASP.NET Core 8.0
- Azure App Service
- Azure SQL Database
- Azure Active Directory
- Application Insights
- GitHub Actions (CI/CD)

---

🚀 Deployment
Langkah-langkah singkat:

1. Buat App Service di Azure Portal
2. Hubungkan ke GitHub repo (Continuous Deployment)
3. Buat Azure SQL Database dan aktifkan **TDE**
4. Konfigurasi **Authentication (Azure AD)** di App Service
5. Aktifkan **Application Insights**
6. Deploy aplikasi dan lakukan pengujian

---

📊 Hasil Monitoring
![Monitoring Result](docs/hasil-monitoring.png)

> _Grafik menunjukkan response time rata-rata di bawah 300 ms dengan tingkat keberhasilan request 100%._

---

📹 Demo Video
📺 [Tonton di sini](#) _(link YouTube atau Google Drive setelah kamu upload demo 7 menit)_

---

🧠 Analisis
Penerapan _defense-in-depth_ di Azure berhasil meningkatkan keamanan aplikasi secara menyeluruh.  
Setiap komponen memiliki proteksi spesifik dan saling mendukung untuk menjaga integritas dan kerahasiaan data pengguna.

---

📜 Lisensi
Proyek ini dibuat untuk tujuan akademik dalam mata kuliah **Cloud Computing and Security**.  
Lisensi: [MIT License](LICENSE)
