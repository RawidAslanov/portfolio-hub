# Как дать клиентам САМИМ увидеть записи в Google Sheets

## Идея

Клиент **не редактирует** таблицу — только **смотрит** (Viewer).  
Он бронирует на сайте → открывает ссылку на таблицу → **F5** → видит новую строку на листе **Bookings**.

---

## Шаг 1 — отдельная DEMO-таблица

1. Открой свою рабочую Google Таблицу барбершопа  
2. **File → Make a copy** → назови `Barbershop DEMO (portfolio)`  
3. На Vercel для **демо-сайта** укажи `GOOGLE_SPREADSHEET_ID` от **этой копии** (не продакшен!)  
4. Раз в неделю удаляй тестовые строки на листе Bookings  

---

## Шаг 2 — доступ «только просмотр»

1. В DEMO-таблице: **Share** (Настройки доступа)  
2. **General access** → **Anyone with the link**  
3. Роль: **Viewer** (Читатель) — **не Editor!**  
4. Copy link  

Ссылка вида:  
`https://docs.google.com/spreadsheets/d/XXXXXXXX/edit?usp=sharing`

Опционально — сразу лист Bookings (узнай gid вкладки в URL при открытии вкладки):  
`.../edit#gid=0` (замени 0 на свой gid)

---

## Шаг 3 — вставить в portfolio

В Vercel → portfolio-hub → Environment Variables:

```
NEXT_PUBLIC_BARBER_DEMO_SHEETS_URL=https://docs.google.com/spreadsheets/d/ВАШ_ID/edit?usp=sharing
```

Передеплой portfolio. На карточках барбершопов появится блок **Try booking + Google Sheets**.

---

## Шаг 4 — текст для Fiverr

```
How to test the booking system:
1) Open premium-barbershop-red.vercel.app → Online Randevu → book a test slot
2) Open [your view-only Sheets link] → Bookings tab → refresh
3) You'll see the new row (website / telegram source, status pending)

Admin panel = Google Sheets. No CRM subscription needed.
```

---

## Что НЕ делать

- Не давать **Editor** на таблицу незнакомцам  
- Не показывать продакшен-таблицу с реальными клиентами  
- Не публиковать `GOOGLE_PRIVATE_KEY` и `TELEGRAM_BOT_TOKEN`

---

## Если строка не появляется

- На Vercel демо-сайта проверь `GOOGLE_SPREADSHEET_ID` = ID **той же** таблицы, что открывает клиент  
- Сервисный аккаунт должен иметь доступ к таблице (Share → email сервисного аккаунта → Editor)
