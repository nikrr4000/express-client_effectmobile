# Appeal Management System API

REST API сервис для управления обращениями, построенный на Express.js и TypeScript.

## Технологии

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Swagger/OpenAPI
- Docker

## Требования

- Docker и Docker Compose
- Node.js 18+ (для локальной разработки)
- PostgreSQL (для локальной разработки)

## Быстрый старт

### Запуск через Docker

```bash
# Клонировать репозиторий
git clone <repository-url>

# Перейти в директорию проекта
cd express-client_effectmobile

# Создать файл .env
cp .env.example .env

# Запустить приложение
docker-compose up --build
```

После запуска:
- API доступно по адресу: `http://localhost:3000`
- Swagger документация: `http://localhost:3000/api-docs`
- База данных PostgreSQL: `localhost:5432`

### Локальная разработка

```bash
# Установить зависимости
npm install

# Сгенерировать Prisma клиент
npx prisma generate

# Применить миграции
npm run db:migrate:dev

# Запустить в режиме разработки
npm run dev
```

## API Endpoints

### Обращения (Appeals)

- `POST /appeal/create` - Создание нового обращения
- `PATCH /appeal/take` - Взятие обращения в работу
- `PATCH /appeal/complete` - Завершение обращения
- `PATCH /appeal/cancel` - Отмена обращения
- `PATCH /appeal/cancel/all` - Отмена всех обращений
- `GET /appeal` - Получение списка обращений

Подробная документация доступна через Swagger UI (`/api-docs`).

## Статусы обращений

- `NEW` - Новое обращение
- `PENDING` - В работе
- `RESOLVED` - Решено
- `CANCELLED` - Отменено

## Скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка проекта
- `npm start` - Запуск собранного проекта
- `npm run db:migrate:dev` - Применение миграций
- `npm run db:reset` - Сброс базы данных

## Разработка

### Добавление новых эндпоинтов

1. Создать контроллер в `src/controllers`
2. Добавить маршрут в `src/routes`
3. Добавить Swagger документацию
4. Обновить тесты (если есть)

### Работа с базой данных

1. Изменить схему в `prisma/schema.prisma`
2. Создать миграцию: `npx prisma migrate dev`
3. Применить миграцию: `npm run db:migrate:dev`