## Быстрый старт

### 1. Клонирование репозитория
```bash
git clone https://github.com/RiddleChe/CRUDswagger.git
```

### 2. Создайте файл `.env`
Создайте в корне проекта файл `.env` и добавьте в него следующие параметры:

```
# === База данных ===
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=2004
DB_DATABASE=nestjs

# === Приложение ===
PORT=3000
NODE_ENV=development
```

### 3. Запуск проекта
Соберите образы и запустите контейнеры командой:
```bash
docker-compose up --build
```

Если контейнеры уже были собраны, можно запустить их без пересборки:
```bash
docker-compose up
```

### 4. Остановка контейнеров
Для остановки контейнеров выполните:
```bash
docker-compose down
```
---
### Доступ
- API: http://localhost:3000
- Swagger UI: http://localhost:3000/api
---

## 🧩 Структура проекта
```
/src
  ├── main.ts         # Точка входа приложения
  ├── app.module.ts   # Главный модуль приложения
  └── ...             # Другие модули, контроллеры и сервисы

/.env                 # Файл с переменными окружения
/Dockerfile           # Инструкции по сборке Docker-образа
/docker-compose.yml   # Конфигурация многоконтейнерной среды
/README.md            # Документация проекта
```

---

## ⚙️ Требования к системе
- **Docker** версии 20.10 или выше
- **Docker Compose** версии 1.29 или выше

---

## ❗ Возможные ошибки и их решение

| Ошибка | Решение |
|---------|----------|
| `Error: connect ECONNREFUSED 127.0.0.1:5432` | Убедитесь, что в `.env` переменная `DB_HOST` указана как `db`, а не `localhost`. |
| `Error: password authentication failed` | Проверьте правильность логина и пароля для PostgreSQL в `.env`. |
