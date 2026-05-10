import type { BookingItem } from "@/types/trip";

export const bookingItems: BookingItem[] = [
  { id: "half-fare", category: "must", date: "出發前", item: "Swiss Half Fare Card", required: "必須先訂", suggestedTiming: "出發前 2-4 週", officialSource: "SBB 官方網站或 App", halfFare: "不適用", note: "本行程推薦票券，搭配火車與山岳交通較有彈性。" },
  { id: "europcar", category: "must", date: "2026-06-19", item: "Europcar Luzern Lakefront Center 租車", required: "必須先訂", suggestedTiming: "出發前 1-2 個月", officialSource: "Europcar 官方網站", halfFare: "不適用", note: "確認自排車、保險、第二駕駛與還車時間。" },
  { id: "pilatus-trip", category: "recommended", date: "2026-06-19", item: "Pilatus Golden Round Trip", required: "強烈建議先訂", suggestedTiming: "出發前 1-2 週並看天氣", officialSource: "Pilatus 官方網站", halfFare: "部分適用", note: "船、纜車、齒軌列車順序依營運時間調整。" },
  { id: "pilatus-seat", category: "recommended", date: "2026-06-19", item: "Pilatus cogwheel railway seat reservation", required: "強烈建議先訂", suggestedTiming: "出發前 1-2 週", officialSource: "Pilatus 官方網站", halfFare: "不適用", note: "旺季齒軌列車座位預約很有價值。" },
  { id: "tasch-parking", category: "recommended", date: "2026-06-20", item: "Täsch / Matterhorn Terminal 停車", required: "強烈建議先訂", suggestedTiming: "出發前 1-2 週", officialSource: "Matterhorn Terminal Täsch", halfFare: "不適用", note: "Zermatt 禁車，停車與接駁時間要抓好。" },
  { id: "gornergrat", category: "recommended", date: "2026-06-21", item: "Gornergrat Bahn", required: "強烈建議先訂", suggestedTiming: "出發前 3-7 天看天氣", officialSource: "Gornergrat Bahn 官方網站", halfFare: "適用", note: "馬特洪峰清楚時優先安排早上。" },
  { id: "glacier-paradise", category: "recommended", date: "2026-06-21", item: "Matterhorn Glacier Paradise", required: "強烈建議先訂", suggestedTiming: "出發前 3-7 天看天氣", officialSource: "Zermatt Bergbahnen", halfFare: "適用", note: "高海拔需看風速、雲量與開放狀態。" },
  { id: "first", category: "onsite", date: "2026-06-22", item: "Grindelwald First", required: "可現場買", suggestedTiming: "當日看天氣", officialSource: "Jungfrau 官方網站或現場", halfFare: "適用", note: "這天是轉場日，適合彈性處理。" },
  { id: "jungfraujoch", category: "recommended", date: "2026-06-23", item: "Jungfraujoch ticket + seat reservation", required: "強烈建議先訂", suggestedTiming: "出發前 3-7 天看天氣", officialSource: "Jungfrau 官方網站", halfFare: "部分適用", note: "座位預約能降低旺季排隊風險。" },
  { id: "grindelwald-parking", category: "recommended", date: "2026-06-23", item: "Grindelwald Terminal parking", required: "強烈建議先訂", suggestedTiming: "出發前 1 週", officialSource: "Grindelwald Terminal parking", halfFare: "不適用", note: "若改走湖區可取消或不使用。" },
  { id: "lauterbrunnen-parking", category: "recommended", date: "2026-06-24", item: "Lauterbrunnen Parking", required: "強烈建議先訂", suggestedTiming: "出發前 1 週或早到", officialSource: "Lauterbrunnen parking information", halfFare: "不適用", note: "山谷熱門停車位，早點到更安心。" },
  { id: "trummelbach", category: "onsite", date: "2026-06-24", item: "Trümmelbachfälle", required: "可現場買", suggestedTiming: "當日", officialSource: "Trümmelbachfälle 現場售票", halfFare: "不適用", note: "注意開放時間與天候。" },
  { id: "luzern-zurich", category: "onsite", date: "2026-06-25", item: "Luzern → Zürich 火車", required: "可現場買", suggestedTiming: "當日或前一天", officialSource: "SBB App", halfFare: "適用", note: "瑞士城際火車通常不需訂座。" },
  { id: "zurich-airport-train", category: "onsite", date: "2026-06-27", item: "Zürich HB → Zürich Flughafen 火車", required: "可現場買", suggestedTiming: "當日", officialSource: "SBB App", halfFare: "適用", note: "班次密集，抓退稅與托運時間即可。" }
];
