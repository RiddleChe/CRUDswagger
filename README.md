## 🛠️ Требования
Перед установкой убедитесь, что на вашем компьютере установлены:

- [Docker](https://docs.docker.com/get-docker/)  
- [Git](https://git-scm.com/downloads)  

Если их нет, следуйте инструкциям ниже.

---

## 🔧 Установка Docker и Git

### Установка Docker
1. Перейдите на официальный сайт [Docker](https://docs.docker.com/get-docker/).
2. Выберите свою операционную систему и скачайте установочный файл.
3. Установите Docker, следуя инструкциям на экране.
4. После установки проверьте корректность работы командой:  
```bash
docker --version
```

### Установка Git
1. Перейдите на официальный сайт [Git](https://git-scm.com/downloads).
2. Скачайте установочный файл в соответствии с вашей операционной системой.
3. Установите Git, следуя инструкциям на экране.
4. После установки проверьте корректность работы командой:  
```bash
git --version
```

---

## 📥 Установка проекта

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/RiddleChe/CRUDswagger.git
   ```

2. **Перейдите в папку проекта:**
   ```bash
   cd CRUDswagger
   ```

3. **Создайте файл `.env` на основе `.env.example` и укажите свои настройки.**  
Если `.env.example` отсутствует, создайте `.env` вручную и добавьте в него следующие параметры:

```
DB_USERNAME=postgres
DB_PASSWORD=your_password
DB_DATABASE=your_database
DB_PORT=5432
DB_HOST=db
```

---

## 🚀 Запуск проекта

1. Выполните команду для сборки и запуска контейнеров:
   ```bash
   docker-compose up -d
   ```

2. После успешного запуска убедитесь, что все сервисы работают:
   ```bash
   docker ps
   ```

   Вы должны увидеть 2 контейнера:
   - **app-1** (NestJS)
   - **db-1** (PostgreSQL)

3. **Swagger будет доступен по адресу:**  
   ```
   http://localhost:3000/api
   ```

---

## Развертывание на сервере

```bash

# Клонирование репозитория
git clone https://github.com/RiddleChe/CRUDswagger.git
cd hw-docker

# Установка Docker (если не установлен)
sudo apt update
sudo apt install -y docker.io

# Установка Docker Compose (если не установлен)
sudo apt install -y docker-compose

# Запуск проекта
docker-compose up -d

# Проверка статуса
docker ps
```

---
## ⚠️ Решение возможных проблем

1. **Ошибка:** `ERROR: getaddrinfo ENOTFOUND db`  
   ➡️ Убедитесь, что в `.env` значение `DB_HOST` указано как `db`, а в `docker-compose.yml` сервис PostgreSQL называется также `db`.

2. **Ошибка:** `database files are incompatible with server`  
   ➡️ Эта ошибка возникает, если версия PostgreSQL в контейнере не совпадает с версией базы данных в вашем локальном хранилище.

**Решение:**  
- Удалите старые тома и пересоздайте их:  
```bash
docker-compose down -v
docker-compose up -d
```

3. **Ошибка:** `connect EHOSTUNREACH 172.18.0.2:5432`  
   ➡️ Убедитесь, что PostgreSQL контейнер работает. Выполните:  
```bash
docker ps
```
Если контейнер не запущен, попробуйте перезапустить сервис:  
```bash
docker-compose restart db
```

---

## 📋 Полезные команды

- Остановить все контейнеры:
  ```bash
  docker-compose down
  ```

- Перезапустить контейнеры:
  ```bash
  docker-compose restart
  ```

- Просмотреть логи приложения:
  ```bash
  docker-compose logs -f app
  ```

- Удалить все контейнеры и тома (⚠️ удалит данные PostgreSQL):
  ```bash
  docker-compose down -v
  ```
