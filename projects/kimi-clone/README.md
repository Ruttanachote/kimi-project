# Kimi Clone

Clone ของ Kimi web app - ใช้เองส่วนตัว

## เริ่มต้นใช้งาน

```bash
# 1. Clone repo
git clone https://github.com/Ruttanachote/kimi-project.git
cd kimi-project/projects/kimi-clone

# 2. รัน Docker
docker-compose up -d

# 3. เปิด browser
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
```

## Services

| Service | URL | คืออะไร |
|---------|-----|---------|
| Frontend | http://localhost:3000 | React app |
| Backend | http://localhost:8000 | API server |

## Development

```bash
# ดู logs
docker-compose logs -f frontend
docker-compose logs -f backend

# Restart
docker-compose restart

# Stop
docker-compose down
```

## Project Structure

ดู `PROJECT.md` สำหรับแผนละเอียดทั้งหมด

---

*สร้างโดย Kimi Claw สำหรับนายท่าน* ❤️‍🔥
