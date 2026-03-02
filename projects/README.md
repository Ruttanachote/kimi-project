# Google Clone Project

โปรเจกต์ clone หน้า Google โดยใช้ Playwright + Python

## เริ่มต้นใช้งาน

### วิธีที่ 1: ใช้ Docker (แนะนำ)

```bash
# รัน server
docker-compose up -d

# เปิด browser ไปที่ http://localhost:8080

# หยุด server
docker-compose down
```

### วิธีที่ 2: เปิดไฟล์ตรงๆ

เปิดไฟล์ `google-clone/index.html` ใน browser ได้เลย

## สร้าง Clone ใหม่

```bash
# ติดตั้ง dependencies
pip3 install playwright --break-system-packages
playwright install chromium

# รัน script
python3 clone_google.py
```

## โครงสร้างไฟล์

```
projects/
├── docker-compose.yml      # Docker Compose config
├── clone_google.py         # Python script สำหรับ clone
└── google-clone/
    ├── index.html          # หน้า Google clone
    └── preview.png         # Screenshot ตัวอย่าง
```

## หมายเหตุ

- Search ทำงานได้ (ส่งไปยัง Google จริง)
- บางฟีเจอร์อาจไม่ทำงานเต็มที่เพราะต้องต่อ Google API
