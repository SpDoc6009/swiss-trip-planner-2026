# 2026 瑞士湖光山色自駕旅行

為 3 位台灣旅客建立的瑞士 11 天互動行程網站。技術棧為 Next.js App Router、TypeScript、Tailwind CSS、Framer Motion、React-Leaflet、OpenStreetMap / 可替換 Mapbox 或 MapTiler、Open-Meteo Weather API，適合部署到 GitHub + Vercel。

## 功能

- 首頁高級旅遊雜誌感 Hero，含日期、旅遊天數、人數、交通策略與推薦票券。
- Day 1 到 Day 11 互動切換，呈現日期、住宿、城市、主題、上午 / 中午 / 下午 / 晚上時間軸、交通、餐廳、票券與注意事項。
- React-Leaflet 互動地圖，支援每日 marker、路線 polyline、popup、今日路線 / 全行程路線切換。
- 地點搜尋，可搜尋 Luzern、Pilatus、Zermatt、Gornergrat、Jungfraujoch、Zürich 等行程資料中的地點並定位地圖。
- Open-Meteo 天氣卡。若日期尚未進入預報範圍，會顯示出發前 7–10 天再查看的提醒。
- 預訂提醒頁，可勾選必須先訂、強烈建議先訂、可現場買的項目。
- 交通與票券試算頁，比較 Swiss Travel Pass 與 Swiss Half Fare Card，含長條圖與圓餅圖。
- 深色模式、手機優先版面、桌機三欄工作區。

## 本機開發

```bash
npm install
npm run dev
```

開啟 `http://localhost:3000`。

檢查與建置：

```bash
npm run lint
npm run build
```

## 專案結構

```text
app/
  page.tsx
  itinerary/page.tsx
  bookings/page.tsx
  costs/page.tsx
components/
  Hero.tsx
  DayTabs.tsx
  ItineraryTimeline.tsx
  TripMap.tsx
  WeatherCard.tsx
  BookingChecklist.tsx
  CostComparison.tsx
  SearchPlaces.tsx
data/
  itinerary.ts
  places.ts
  bookings.ts
  costs.ts
lib/
  weather.ts
  map.ts
  format.ts
types/
  trip.ts
public/images/placeholder/
  swiss-hero.svg
```

## 如何修改行程資料

- 每日行程：編輯 `data/itinerary.ts`。
- 地點、座標、marker 類型、停留時間與 popup 備註：編輯 `data/places.ts`。
- 預訂清單：編輯 `data/bookings.ts`。
- 交通費用、票券價格、匯率與租車費：編輯 `data/costs.ts`。

頁面採 data-driven rendering，元件不硬寫每天行程。

## 如何替換圖片

目前 Hero 使用：

```text
public/images/placeholder/swiss-hero.svg
```

你可以放入自己的照片，例如：

```text
public/images/hero/matterhorn.jpg
```

然後到 `components/Hero.tsx` 把 `src` 改成：

```tsx
src="/images/hero/matterhorn.jpg"
```

請保留有意義的 `alt` 文字，方便無障礙與維護。

## 天氣功能

Open-Meteo 不需要 API key。網站會判斷行程日期是否在可預報範圍內：

- 在預報範圍內：顯示最高溫、最低溫、降雨機率、天氣狀態、更新時間。
- 超出範圍：顯示「尚未進入天氣預報範圍，建議出發前 7–10 天查看」。
- 高山景點如 Gornergrat、Jungfraujoch、Pilatus、Matterhorn Glacier Paradise 會提醒看雲量與風速。

## 切換地圖 provider

預設使用 OpenStreetMap tile，不需要 API key。

若要使用 Mapbox 或 MapTiler，先複製環境變數：

```bash
cp .env.example .env.local
```

填入其中一個：

```env
NEXT_PUBLIC_MAPBOX_TOKEN=
NEXT_PUBLIC_MAPTILER_KEY=
```

地圖 provider 邏輯在 `lib/map.ts`。

## GitHub 建立 repository

```bash
git init
git add .
git commit -m "Initial Swiss trip planner"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/YOUR_REPO.git
git push -u origin main
```

## Vercel 部署

1. 到 Vercel 新增 Project。
2. 匯入 GitHub repository。
3. Framework Preset 選 Next.js。
4. Build Command 使用 `npm run build`。
5. Output Directory 保持 Next.js 預設。
6. Environment Variables 可選填：
   - `NEXT_PUBLIC_MAPBOX_TOKEN`
   - `NEXT_PUBLIC_MAPTILER_KEY`
7. Deploy。

Open-Meteo 不需要設定環境變數。若未設定 Mapbox / MapTiler，網站會使用 OpenStreetMap。

## 出發前建議

- 出發前 7–10 天再確認天氣與高山纜車營運。
- 高山票券不要太早鎖死；租車、核心住宿與 Half Fare Card 可提早處理。
- 交通費用只是規劃估算，請於出發前以官方網站更新 `data/costs.ts`。

## 旅費記帳

新增 `/expenses` 頁面，可在旅行中輸入實際花費。分類包含交通、飲食、住宿、其他雜項；每筆資料有「名目」與「費用」兩個欄位，頁面會即時計算分類小計與總額。資料會存在使用者瀏覽器的 localStorage。
