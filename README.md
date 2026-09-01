# Portfolio

Клиентское React-приложение (Vite + TypeScript) для портфолио. Сайт собирается в статические файлы и публикуется на GitHub Pages.

**Production URL:** https://samoiloff.github.io/portfolio/

## Требования

- Node.js 22+
- pnpm 11+ (шорткат `np` = `pnpm`)

## Установка

```bash
pnpm install
# или
np install
```

---

## Локальная сборка

Production-сборка создаёт папку `build/` со статическими файлами, готовыми для хостинга.

```bash
pnpm run build
# или: np run build
```

Что происходит по шагам:

1. `tsc -b` — TypeScript проверяет типы во всём проекте (`src/`).
2. `vite build` — Vite собирает React-приложение:
   - компилирует TSX в JS;
   - объединяет и минифицирует бандлы;
   - копирует содержимое `public/` (фото, playable-превью) в `build/`;
   - записывает результат в `build/` (настроено в `vite.config.ts`).

Папка `build/` добавлена в `.gitignore` и **не коммитится** — она создаётся локально или в CI при деплое.

Проверить production-сборку локально:

```bash
pnpm run build
pnpm run preview
```

Preview-сервер откроет сайт по адресу http://localhost:4173/portfolio/ — с тем же `base: '/portfolio/'`, что и на GitHub Pages.

---

## Локальный сервер и отладка

Для разработки используется dev-сервер Vite с hot module replacement (изменения в коде сразу видны в браузере без полной перезагрузки).

```bash
pnpm run dev
# или: np run dev
```

После запуска откройте в браузере:

**http://localhost:5173/portfolio/**

> Путь `/portfolio/` обязателен — в `vite.config.ts` задан `base: '/portfolio/'`, как на GitHub Pages.

### Отладка

- **React DevTools** — установите расширение для Chrome/Firefox, чтобы инспектировать компоненты.
- **Sources / Debugger** — ставьте breakpoints в TSX-файлах в `src/`; Vite отдаёт source maps.
- **Console** — ошибки рантайма и `console.log` видны в DevTools браузера.
- **Network** — проверяйте загрузку ассетов из `public/` (изображения, ссылки на playable).

### Где что лежит

| Путь | Назначение |
|------|------------|
| `src/components/` | React-компоненты (Profile, WorkList, WorkCard) |
| `src/data/works.ts` | Данные работ портфолио |
| `src/styles/` | Глобальные CSS-стили |
| `public/assets/` | Фото и превью проектов |
| `public/html/` | Standalone playable-превью (не часть React SPA) |

Чтобы добавить новую работу, допишите объект в массив `works` в `src/data/works.ts`.

---

## Деплой на GitHub Pages

Собранный сайт публикуется в отдельную ветку `deploy`. GitHub Pages отдаёт **содержимое корня этой ветки** как статический сайт по адресу https://samoiloff.github.io/portfolio/.

### Как это работает

1. `pnpm run deploy` собирает проект в `build/`.
2. Пакет `gh-pages` коммитит содержимое `build/` (без самой папки — файлы попадают в корень ветки) и пушит в ветку `deploy`.
3. GitHub Pages публикует ветку `deploy` на поддомен репозитория.

В ветке `master` хранятся **только исходники**. Папка `build/` в `master` не коммитится (`.gitignore`).

### Первоначальная настройка (один раз)

1. Закоммитьте и запушьте исходники в `master`.
2. Выполните первый деплой: `np run deploy`.
3. На GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Branch: **`deploy`**, folder: **`/ (root)`**.

> **Важно:** источник должен быть именно ветка `deploy`, а не `master`. Если выбран `master`, сайт отдаст dev-версию `index.html` с `/src/main.tsx` — экран будет пустым, в консоли 404.

После смены настроек подождите до 10 минут (кэш GitHub Pages) или выполните `np run deploy` ещё раз.

### Деплой изменений

```bash
np run deploy
```

Команда пересобирает проект и обновляет ветку `deploy` на GitHub. Через минуту изменения появятся на https://samoiloff.github.io/portfolio/.

### Проверка деплоя

В исходном коде страницы (View Page Source) должны быть ссылки на `/portfolio/assets/index-….js`, а **не** на `/src/main.tsx`. Если видите `main.tsx` — Pages всё ещё отдаёт ветку `master`.

---

## Скрипты pnpm

Все команды определены в [`package.json`](package.json). Запускайте через `pnpm run <script>` или `np run <script>`:

| Скрипт | Команда | Описание |
|--------|---------|----------|
| `dev` | `vite` | Запускает dev-сервер с HMR на http://localhost:5173/portfolio/. Используйте для ежедневной разработки и отладки. |
| `build` | `tsc -b && vite build` | Проверяет типы TypeScript и собирает production-версию в папку `build/`. Используется локально и в CI перед деплоем. |
| `preview` | `vite preview` | Запускает локальный статический сервер поверх уже собранной папки `build/`. Нужен для проверки production-сборки перед push. Сначала выполните `pnpm run build`. |
| `deploy` | `pnpm run build && gh-pages …` | Собирает проект и пушит содержимое `build/` в ветку `deploy` для GitHub Pages. |

### Примеры

```bash
# Разработка
np run dev

# Сборка + проверка перед деплоем
np run build
np run preview

# Деплой на GitHub Pages
np run deploy

# Установка зависимостей с нуля
pnpm install --frozen-lockfile
```

### pnpm и build-скрипты

В [`pnpm-workspace.yaml`](pnpm-workspace.yaml) явно разрешён postinstall-скрипт `esbuild` (нужен для Vite). Без этого pnpm 11 блокирует скрипт и установка завершается ошибкой `ERR_PNPM_IGNORED_BUILDS`.
