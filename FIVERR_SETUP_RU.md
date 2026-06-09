# Fiverr — полная настройка гига (без отзывов)

## Что уже готово у тебя

- Портфолио: `portfolio-hub` (коммит локально)
- Фитнес демо: `gym site` → `iron-body-gym` (коммит локально)
- Текст гига EN: `FIVERR_GIG_EN.md`
- Картинки для Gallery: `public/og.png`, `public/projects/*.png`
- Пакеты: Basic $50 · Standard $120 · Premium $400

---

## Шаг 1 — GitHub (5 минут, вручную)

В PowerShell:

```powershell
gh auth login
```

Выбери: **GitHub.com** → **HTTPS** → **Login with a web browser** → скопируй код → войди в аккаунт **RawidAslanov**.

Потом:

```powershell
cd "C:\Users\user\Desktop\portfolio-hub"
.\GITHUB_PUSH.ps1
```

**GitHub Desktop** (альтернатива): File → Add local repository → оба проекта → Publish repository (public).

---

## Шаг 2 — Vercel (10 минут, вручную)

1. [vercel.com](https://vercel.com) → Add New → Import Git Repository
2. Импортируй **portfolio-hub** → Deploy
3. Импортируй **iron-body-gym** → Deploy

### Env для portfolio-hub

| Переменная | Значение |
|------------|----------|
| `NEXT_PUBLIC_SITE_URL` | URL портфолио на Vercel |
| `NEXT_PUBLIC_FIVERR_URL` | `https://www.fiverr.com/ТВОЙ_НИК` |
| `NEXT_PUBLIC_GITHUB_URL` | `https://github.com/RawidAslanov` |
| `NEXT_PUBLIC_GYM_URL` | URL gym на Vercel |
| `NEXT_PUBLIC_BARBER_DEMO_SHEETS_URL` | view-only ссылка на DEMO Google Sheet (опционально) |

После добавления env → **Redeploy**.

### Env для iron-body-gym

| Переменная | Значение |
|------------|----------|
| `NEXT_PUBLIC_SITE_URL` | URL gym на Vercel |
| `NEXT_PUBLIC_PORTFOLIO_URL` | URL портфолио на Vercel |

---

## Шаг 3 — Создать гиг на Fiverr

### Категория

**Programming & Tech → Website Development → Business / E-commerce**

### Title (заголовок)

```
I will build a modern business website with online booking or shop
```

### Описание

Скопируй из `FIVERR_GIG_EN.md`, замени `YOUR_PORTFOLIO_URL` на живой URL Vercel.

### 3 пакета (Packages)

| | Basic | Standard ⭐ | Premium |
|---|-------|------------|---------|
| Цена | **$50** | **$120** | **$400** |
| Срок | 3 дня | 5 дней | 10 дней |
| Ревизии | 1 | 2 | 3 |

**Standard** отметь как **Recommended** — это главный пакет для заказов.

Пункты из пакетов — с сайта портфолио (секция What I offer).

### Gallery (3–5 картинок)

Загрузи с диска:

1. `public/og.png` — обложка гига
2. `public/projects/premium-barber.png`
3. `public/projects/lumiere.png`
4. `public/projects/iron-body-gym.png`
5. Скрин с телефона любого демо (мобильная версия)

**Видео (сильно помогает без отзывов):** 30–60 сек запись экрана — открой портфолио → Live demo барбера → тестовая запись → Google Sheets → новая строка.

### FAQ (добавь в гиг)

- Do you provide hosting? → I deploy to your domain or hosting; setup included.
- Can I see live examples? → Yes, portfolio link in description.
- Do you do booking / Telegram? → Standard and Premium packages.

### Tags

`nextjs` `business website` `barbershop` `booking website` `landing page` `responsive` `ecommerce`

---

## Как получить первых клиентов БЕЗ отзывов

1. **Цена Standard $120** — ниже рынка, но не $5 (фильтрует мусор).
2. **Buyer Requests** на Fiverr — откликайся на запросы «barbershop website», «booking website», «salon landing» в течение 1 часа.
3. **Портфолио в первых 2 строках описания** — клиент должен кликнуть до заказа.
4. **Видео в Gallery** — без отзывов это главное доказательство.
5. **Google Sheets демо** — уникально, конкуренты так не показывают.
6. **Отвечай быстро** — Fiverr ранжирует response rate.
7. **Первый заказ** — сделай идеально, попроси отзыв; 1 отзыв = ×10 доверия.

### Где ещё можно

- Reddit r/forhire, r/slavelabour (осторожно со спамом)
- Telegram чаты предпринимателей TR/RU
- Локальные барбершопы / салоны — покажи Premium Barber демо лично

### Чего не обещай

- «Гарантированные клиенты» — никто не может
- Срок 24 часа на Premium — только Basic/маленький лендинг

---

## Чеклист перед публикацией гига

- [ ] `gh auth login` + `GITHUB_PUSH.ps1`
- [ ] Оба проекта на Vercel, env заданы, redeploy
- [ ] Ссылка портфолио открывается с телефона
- [ ] Gym live demo открывается с портфолио
- [ ] Fiverr URL в env портфолио
- [ ] Gallery загружена (og + 3 проекта + mobile)
- [ ] Видео 30–60 сек (желательно)
- [ ] Профиль Fiverr: фото, описание, языки EN + TR
