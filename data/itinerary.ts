import type { ItineraryDay, TripSummary } from "@/types/trip";

export const trip: TripSummary = {
  title: "2026 瑞士湖光山色自駕旅行",
  subtitle: "Luzern・Pilatus・Zermatt・Matterhorn・Grindelwald・Interlaken・Lauterbrunnen・Zürich",
  startDate: "2026-06-18",
  endDate: "2026-06-28",
  travelers: 3,
  localDays: 9,
  currencyRate: 41,
  transportStrategy: "前段火車 + 中段租車 + 後段火車",
  recommendedPass: "Swiss Half Fare Card"
};

export const itineraryDays: ItineraryDay[] = [
  {
    id: 1,
    date: "2026-06-18",
    weekday: "Thu",
    theme: "台灣出發，經新加坡前往瑞士",
    region: "Taichung / Taoyuan / Singapore",
    weatherPlaceId: "tpe",
    routePlaceIds: ["tpe", "sin", "zurich-airport"],
    placeIds: ["tpe", "sin"],
    flights: [
      "全鋒接送 D3803617：2026/06/18 13:30 台中市西屯區台灣大道四段1360號 → 桃園機場二航",
      "SQ879：2026/06/18 17:45 桃園機場 T2 → 22:15 新加坡樟宜機場（4h 30m，經濟艙 N）",
      "新加坡轉機：1h 10m（不同航廈，行李直掛）",
      "LX177：2026/06/18 23:25 新加坡樟宜機場 T2 → 2026/06/19 06:15 蘇黎世機場（12h 50m，經濟艙 L）"
    ],
    timeline: [
      {
        period: "下午",
        items: [
          { time: "13:30", title: "全鋒機場接送上車", description: "預約單號 D3803617；台中市西屯區台灣大道四段1360號出發。" },
          { time: "15:00 前", title: "抵達桃園機場 T2", description: "報到、托運行李、安檢與晚餐。" },
          { time: "17:45", title: "SQ879 起飛", transport: { mode: "flight", from: "TPE", to: "SIN", duration: "4 小時 30 分" } }
        ]
      },
      {
        period: "晚上",
        items: [
          { time: "22:15", title: "抵達新加坡樟宜機場", description: "轉機 1 小時 10 分，不同航廈，先確認登機門。" },
          { time: "23:25", title: "LX177 轉機飛往蘇黎世", transport: { mode: "flight", from: "SIN", to: "ZRH", duration: "12 小時 50 分" } }
        ]
      }
    ],
    restaurants: ["桃園機場管制區簡餐", "樟宜機場轉機點心"],
    bookingReminders: ["SQ879 / LX177 機票與護照", "全鋒機場接送 D3803617"],
    notes: ["第一天不要安排太滿，抵達瑞士後先以調時差與體力為優先。", "行李直掛仍要留意新加坡轉機登機門變更。"]
  },
  {
    id: 2,
    date: "2026-06-19",
    weekday: "Fri",
    theme: "抵達瑞士、Luzern、Pilatus Golden Round Trip",
    region: "Zürich / Luzern / Pilatus / Hergiswil",
    accommodation: "Restaurant & Hotel Roggerli",
    hotelPlaceId: "hotel-roggerli",
    weatherPlaceId: "pilatus",
    routePlaceIds: ["zurich-airport", "luzern", "alpnachstad", "pilatus", "fraekmuentegg", "kriens", "europcar-luzern", "pilatusmarkt", "hotel-roggerli"],
    placeIds: ["zurich-airport", "luzern", "alpnachstad", "pilatus", "fraekmuentegg", "kriens", "europcar-luzern", "pilatusmarkt", "hotel-roggerli"],
    timeline: [
      {
        period: "上午",
        items: [
          { time: "06:15–07:05", title: "抵達 Zürich Airport", description: "入境、領行李，前往機場地下 SBB 車站。" },
          { time: "07:15–08:25", title: "Zürich Flughafen → Luzern", description: "IR75；若入境延誤，改查 SBB 備案班次。", transport: { mode: "train", from: "Zürich Flughafen", to: "Luzern", duration: "約 1 小時 10 分" } },
          { time: "08:25–09:25", title: "Luzern 車站寄行李 / 早餐 / 步行至 Pier 2", description: "碼頭在車站旁，預留寄放行李與早餐時間。" },
          { time: "09:38–10:49", title: "Luzern Pier 2 → Alpnachstad 搭船", transport: { mode: "boat", from: "Luzern Pier 2", to: "Alpnachstad", duration: "1 小時 11 分" } },
          { time: "11:40–12:07", title: "Alpnachstad → Pilatus Kulm 齒軌列車", description: "已訂 11:40 齒軌列車，以此班次為準。", transport: { mode: "train", from: "Alpnachstad", to: "Pilatus Kulm", duration: "27 分" } }
        ]
      },
      {
        period: "中午",
        items: [
          { time: "12:07–13:25", title: "Pilatus Kulm 觀景＋簡單午餐", description: "Restaurant Bellevue 自助或簡餐最省時；天氣好可短走觀景點。" },
          { time: "13:30 左右", title: "Pilatus Kulm → Fräkmüntegg", description: "搭 Dragon Ride 下山。", transport: { mode: "cablecar", from: "Pilatus Kulm", to: "Fräkmüntegg", duration: "約 10 分" } }
        ]
      },
      {
        period: "下午",
        items: [
          { time: "13:45–14:30", title: "Fräkigaudi Sommer-Rodelbahn", description: "玩 1 次，含買票、排隊與實際滑行；活動票折扣現場確認。" },
          { time: "14:45 前", title: "Fräkmüntegg → Kriens", description: "搭 Panorama Gondola 下山往 Kriens。", transport: { mode: "cablecar", from: "Fräkmüntegg", to: "Kriens", duration: "約 30 分" } },
          { time: "15:15–15:40", title: "Kriens → Luzern Bahnhof，Bus 1", transport: { mode: "train", from: "Kriens", to: "Luzern Bahnhof", duration: "約 25 分" } },
          { time: "15:40–16:00", title: "Luzern 車站取行李" },
          { time: "16:00–16:20", title: "前往 Europcar Lakefront Center" },
          { time: "16:20–17:00 前", title: "Europcar 取車", description: "檢查車況、保險、導航、行李與第二駕駛。" }
        ]
      },
      {
        period: "晚上",
        items: [
          { time: "17:00–17:30", title: "Pilatusmarkt Kriens 補給", description: "視取車時間買晚餐、飲水與隔日路上補給。" },
          { time: "17:30–18:00", title: "開車至 Restaurant & Hotel Roggerli 入住", transport: { mode: "car", from: "Kriens", to: "Hergiswil", duration: "約 20-30 分" } }
        ]
      }
    ],
    restaurants: ["Pilatus Kulm 簡餐", "Coop Supermarkt Kriens Pilatusmarkt", "Restaurant & Hotel Roggerli"],
    bookingReminders: ["Pilatus Golden Round Trip", "Pilatus cogwheel railway seat reservation：11:40", "Europcar Luzern 租車"],
    notes: ["齒軌列車已訂 11:40，山頂午餐與 Fräkigaudi 時間要抓緊。", "若入境或火車延誤，優先保住 11:40 齒軌與取車時間。"]
  },
  {
    id: 3,
    date: "2026-06-20",
    weekday: "Sat",
    theme: "A8 湖景自駕、Brienz、Spiez、Loetschberg 載車火車前往 Zermatt",
    region: "Hergiswil / Brienz / Spiez / Täsch / Zermatt",
    accommodation: "Alpen Resort & Spa, Zermatt",
    hotelPlaceId: "alpen-resort",
    weatherPlaceId: "zermatt",
    routePlaceIds: ["hotel-roggerli", "lungern", "brienz", "spiez", "kandersteg", "goppenstein", "tasch", "zermatt", "alpen-resort"],
    placeIds: ["hotel-roggerli", "lungern", "brienz", "spiez", "kandersteg", "goppenstein", "tasch", "zermatt", "alpen-resort", "matterhorn-viewpoint"],
    timeline: [
      {
        period: "上午",
        items: [
          { time: "09:00", title: "Hotel Roggerli 出發", description: "走 A8，不走 Route 6 高山路線。", transport: { mode: "car", from: "Hergiswil", to: "Brienz / Spiez", duration: "移動日" } },
          { time: "09:40–09:55", title: "Lungern 短停", description: "觀景、洗手間、拍照 10-15 分即可。" },
          { time: "10:25–11:05", title: "Brienz 湖邊散步", description: "建議停 Parkplatz Schiffstation/Ländte，短走湖邊。" }
        ]
      },
      {
        period: "中午",
        items: [
          { time: "11:50–12:50", title: "Schloss Spiez / Spiez Bucht", description: "Coop Spiez 買超市午餐，湖邊吃；城堡外觀與葡萄園即可。" },
          { time: "13:10–13:40", title: "Spiez → Kandersteg BLS Autoverlad", description: "到站前查 BLS current waiting times；Half Fare Card 不適用。", transport: { mode: "car", from: "Spiez", to: "Kandersteg", duration: "約 30 分" } }
        ]
      },
      {
        period: "下午",
        items: [
          { time: "約 13:40–14:10", title: "Kandersteg → Goppenstein 載車火車", description: "BLS Loetschberg car transport，車上約 15 分，另加候車時間。", transport: { mode: "train", from: "Kandersteg", to: "Goppenstein", duration: "約 15 分 + 等候" } },
          { time: "14:10–15:00", title: "Goppenstein → Visp → Matterhorn Terminal Täsch", description: "Zermatt 禁一般車輛；Täsch 停車已預約。", transport: { mode: "car", from: "Goppenstein", to: "Täsch", duration: "約 50 分" } },
          { time: "15:05 / 15:25", title: "Täsch → Zermatt Shuttle", transport: { mode: "shuttle", from: "Täsch", to: "Zermatt", duration: "約 12 分" } },
          { time: "15:30–16:00", title: "Alpen Resort & Spa 入住" }
        ]
      },
      { period: "晚上", items: [{ time: "晚餐", title: "Zermatt Coop 超市", description: "簡單晚餐、補水、準備隔天高山日零食。" }] }
    ],
    restaurants: ["Coop Spiez 超市午餐", "Zermatt Coop 超市晚餐"],
    bookingReminders: ["Täsch Matterhorn Terminal 停車", "BLS Loetschberg 載車火車現場/線上票"],
    notes: ["Half Fare Card 不適用於 BLS 載車火車。", "當天早上先看 BLS waiting time，避免在 Kandersteg 等太久。"]
  },
  {
    id: 4,
    date: "2026-06-21",
    weekday: "Sun",
    theme: "Gornergrat + Matterhorn Glacier Paradise（Peak2Peak 替代版）",
    region: "Zermatt / Matterhorn",
    accommodation: "Alpen Resort & Spa",
    hotelPlaceId: "alpen-resort",
    weatherPlaceId: "gornergrat",
    routePlaceIds: ["alpen-resort", "zermatt", "gornergrat", "zermatt", "matterhorn-glacier-paradise", "zermatt"],
    placeIds: ["zermatt", "gornergrat", "klein-matterhorn", "matterhorn-glacier-paradise", "alpen-resort"],
    timeline: [
      { period: "上午", items: [{ time: "07:30–07:55", title: "早餐，查 webcams", description: "查 Gornergrat / Matterhorn；若山頂白牆，先改村內或低海拔。" }, { time: "08:00–08:33", title: "Zermatt → Gornergrat", description: "Gornergrat Bahn 可選 08:00、08:24、08:48；晴天早班優先。", transport: { mode: "train", from: "Zermatt", to: "Gornergrat", duration: "約 33 分" } }, { time: "08:35–10:15", title: "Gornergrat 觀景", description: "ZOOOM、Matterhorn 全景；天氣好可短停 Rotenboden / Riffelsee。" }, { time: "10:24 / 10:48", title: "Gornergrat → Zermatt", transport: { mode: "train", from: "Gornergrat", to: "Zermatt" } }] },
      { period: "中午", items: [{ time: "11:30–12:20", title: "Zermatt 村內快速午餐 / 休息", description: "Migros、Coop 或簡餐；高海拔日清淡補水。" }, { time: "12:30–13:15", title: "前往 Matterhorn Glacier Paradise 纜車站並上山", description: "首末班與風況看 live operating info。", transport: { mode: "cablecar", from: "Zermatt", to: "Matterhorn Glacier Paradise" } }] },
      { period: "下午", items: [{ time: "13:15–15:15", title: "Matterhorn Glacier Paradise / Klein Matterhorn", description: "觀景台、Glacier Palace、Cinema Lounge；風大或低能見度即縮短。" }, { time: "15:15–16:15", title: "下山回 Zermatt", transport: { mode: "cablecar", duration: "預留排隊與轉乘" } }, { time: "16:30–19:45", title: "飯店休息 / 泡湯", description: "避免再排長步道。" }] },
      { period: "晚上", items: [{ time: "20:15", title: "晚餐：Restaurant Pinte", description: "已訂位。" }] }
    ],
    restaurants: ["Zermatt 村內快速午餐", "Restaurant Pinte（20:15 已訂）"],
    bookingReminders: ["Gornergrat Bahn", "Matterhorn Glacier Paradise cable car"],
    notes: ["Peak2Peak ticket 2026 僅 6/27-8/16 可用，6/21 不適用。", "改買 Gornergrat + Matterhorn Glacier Paradise 分開票。"]
  },
  {
    id: 5,
    date: "2026-06-22",
    weekday: "Mon",
    theme: "早離開 Zermatt，Loetschberg 前往 Grindelwald，First + Mountain Cart",
    region: "Zermatt / Kandersteg / Grindelwald",
    accommodation: "Hotel Restaurant Hirschen - Grindelwald",
    hotelPlaceId: "hotel-hirschen",
    weatherPlaceId: "grindelwald",
    routePlaceIds: ["alpen-resort", "zermatt", "tasch", "goppenstein", "kandersteg", "grindelwald", "hotel-hirschen", "first"],
    placeIds: ["zermatt", "tasch", "goppenstein", "kandersteg", "grindelwald", "hotel-hirschen", "first"],
    timeline: [
      { period: "上午", items: [{ time: "07:30–08:20", title: "早餐、退房、簡短散步", description: "不要安排博物館或長行程。" }, { time: "08:20–08:32", title: "Zermatt → Täsch Shuttle", description: "若錯過可搭 08:40–08:52。", transport: { mode: "shuttle", from: "Zermatt", to: "Täsch", duration: "約 12 分" } }, { time: "08:45–10:20", title: "Täsch 取車 → Visp → Goppenstein", description: "途中簡單休息，不繞景點。", transport: { mode: "car", from: "Täsch", to: "Goppenstein" } }, { time: "10:30–11:00", title: "Goppenstein → Kandersteg 載車火車", description: "實際等候看 BLS current waiting times；HFC 不適用。", transport: { mode: "train", from: "Goppenstein", to: "Kandersteg", duration: "約 15 分 + 等候" } }] },
      { period: "中午", items: [{ time: "11:00–12:00", title: "Kandersteg / Spiez 方向簡單午餐", description: "超市、加油站或簡餐，不坐太久。" }, { time: "12:00–13:30", title: "Kandersteg / Spiez → Interlaken → Grindelwald", description: "抵達 Hirschen 後先停飯店車位、放行李。", transport: { mode: "car", to: "Grindelwald", duration: "約 1.5 小時" } }] },
      { period: "下午", items: [{ time: "13:45–14:00", title: "步行至 Firstbahn", description: "若飯店不可停車，改停 Grindelwald Terminal。" }, { time: "14:00–14:30", title: "Grindelwald → First 纜車", transport: { mode: "cablecar", from: "Grindelwald", to: "First", duration: "約 25 分" } }, { time: "14:30–15:15", title: "First Cliff Walk / First View", description: "不安排 Bachalpsee，保留 Mountain Cart 時間。" }, { time: "15:15–15:30", title: "纜車下至 Schreckfeld", description: "準備 Mountain Cart。" }, { time: "15:30–16:20", title: "Mountain Cart：Schreckfeld → Bort", description: "官方 09:00–17:30；排隊與領裝備另抓時間。" }, { time: "16:20–17:00", title: "Bort → Grindelwald 下山", description: "不要壓末班。", transport: { mode: "cablecar", from: "Bort", to: "Grindelwald" } }] },
      { period: "晚上", items: [{ time: "19:15", title: "晚餐：Barry's Restaurant", description: "已訂位。" }] }
    ],
    restaurants: ["Kandersteg / Spiez 簡單午餐", "Barry's Restaurant（19:15 已訂）"],
    bookingReminders: ["First cable car", "First Mountain Cart 活動票現場確認"],
    notes: ["目標 13:30 前到 Hirschen；若 14:30 後才到，Mountain Cart 改看現場排隊與末班。", "BLS Loetschberg 載車火車 HFC 不適用。"]
  },
  {
    id: 6,
    date: "2026-06-23",
    weekday: "Tue",
    theme: "Jungfraujoch 早班上山，下午 Neuhaus / Interlaken 輕鬆湖畔",
    region: "Grindelwald / Jungfraujoch / Interlaken",
    accommodation: "Golf- & Strandhotel Neuhaus zum See",
    hotelPlaceId: "hotel-neuhaus",
    weatherPlaceId: "jungfraujoch",
    routePlaceIds: ["hotel-hirschen", "grindelwald-terminal", "jungfraujoch", "grindelwald-terminal", "hotel-neuhaus", "interlaken"],
    placeIds: ["grindelwald", "grindelwald-terminal", "jungfraujoch", "interlaken", "hotel-neuhaus"],
    timeline: [
      { period: "上午", items: [{ time: "06:45–07:30", title: "早餐、退房，行李放車上", description: "查 Jungfraujoch / Sphinx / Grindelwald Terminal webcam。" }, { time: "07:40–08:05", title: "開車至 Grindelwald Terminal 停車", description: "建議預約停車。", transport: { mode: "car", duration: "約 5-10 分" } }, { time: "08:15–09:00", title: "Grindelwald Terminal → Jungfraujoch", description: "Eiger Express + Jungfrau Railway；座位預約需綁定時段。", transport: { mode: "train", from: "Grindelwald Terminal", to: "Jungfraujoch", duration: "約 45 分" } }, { time: "09:00–11:15", title: "Jungfraujoch", description: "Sphinx、Plateau、Ice Palace；海拔 3,454m，慢走保暖。" }, { time: "11:45–12:30", title: "Jungfraujoch → Grindelwald Terminal", transport: { mode: "train", duration: "約 45 分" } }] },
      { period: "中午", items: [{ time: "12:45–13:30", title: "Grindelwald Terminal 或村內簡單午餐", description: "避免拖太晚。" }] },
      { period: "下午", items: [{ time: "13:45–14:20", title: "開車到 Golf- & Strandhotel Neuhaus zum See", description: "入住、湖畔休息。", transport: { mode: "car", duration: "約 25-35 分" } }, { time: "15:00 後", title: "輕鬆小行程", description: "優先飯店湖畔休息 / Unterseen 舊城散步 / Interlaken West 補給；Spiez 已於 6/20 去過，不必再跑。" }] },
      { period: "晚上", items: [{ time: "晚餐", title: "簡單吃", description: "Coop Interlaken Post / Lidl / Coop Pronto 或飯店附近簡餐。" }] }
    ],
    restaurants: ["Grindelwald Terminal 簡單午餐", "Coop Interlaken Post / Lidl / Coop Pronto"],
    bookingReminders: ["Jungfraujoch ticket + mandatory seat reservation", "Grindelwald Terminal parking"],
    notes: ["5/1-10/31/2026 Jungfraujoch 座位預約 mandatory，CHF 10/人，且不等於交通票。", "若 webcam 白牆、強風或低能見度，當天早上再取消或延後。"]
  },
  {
    id: 7,
    date: "2026-06-24",
    weekday: "Wed",
    theme: "Lauterbrunnen / Trümmelbach + Lake Brienz 船班 + Iseltwald",
    region: "Lauterbrunnen / Interlaken / Iseltwald",
    accommodation: "Golf- & Strandhotel Neuhaus zum See",
    hotelPlaceId: "hotel-neuhaus",
    weatherPlaceId: "lauterbrunnen",
    routePlaceIds: ["hotel-neuhaus", "lauterbrunnen-parking", "staubbach", "trummelbach", "interlaken", "iseltwald", "interlaken", "hotel-neuhaus"],
    placeIds: ["interlaken", "lauterbrunnen", "lauterbrunnen-parking", "staubbach", "trummelbach", "iseltwald", "brienzersee", "hotel-neuhaus"],
    timeline: [
      { period: "上午", items: [{ time: "08:30–09:10", title: "Neuhaus → Lauterbrunnen Parking", description: "早到較好停車。", transport: { mode: "car", duration: "約 40 分" } }, { time: "09:15–10:15", title: "Staubbachfall / Lauterbrunnen 村莊", description: "經典瀑布視角，不走太遠。" }, { time: "10:30–12:00", title: "Trümmelbach Falls", description: "官方 4-6 月 09:00–17:00；需階梯、濕滑，雨大不建議。" }] },
      { period: "中午", items: [{ time: "12:00–13:00", title: "Lauterbrunnen / Interlaken 簡單午餐", description: "Airtime Cafe / Hotel Oberland / 超市外帶。" }, { time: "13:00–13:40", title: "開車至 Interlaken Ost，停車 / 上廁所", description: "預留停車與找碼頭時間。", transport: { mode: "car", from: "Lauterbrunnen", to: "Interlaken Ost" } }] },
      { period: "下午", items: [{ time: "14:07–14:51", title: "Interlaken Ost → Iseltwald 船", description: "BLS Lake Brienz 2026 timetable；14:07 是關鍵班次。", transport: { mode: "boat", from: "Interlaken Ost", to: "Iseltwald", duration: "44 分" } }, { time: "14:51–16:08", title: "Iseltwald 湖邊散步、咖啡", description: "停留約 1 小時 15 分。" }, { time: "16:08–16:53", title: "Iseltwald → Interlaken Ost 船", transport: { mode: "boat", from: "Iseltwald", to: "Interlaken Ost", duration: "45 分" } }, { time: "17:00–18:30", title: "Interlaken / Unterseen 鎮上短逛", description: "Hohematte、Interlaken West、Unterseen 舊城依體力選。" }] },
      { period: "晚上", items: [{ time: "晚餐", title: "簡單便宜吃", description: "Coop Interlaken Post / Lidl Matten / kebab / pizza。" }] }
    ],
    restaurants: ["Airtime Cafe", "Hotel Oberland", "Coop Interlaken Post / Lidl Matten"],
    bookingReminders: ["Lauterbrunnen Parking", "Trümmelbach Falls 現場票", "Lake Brienz 船票"],
    notes: ["若 13:30 前無法離開 Lauterbrunnen，改成開車去 Iseltwald，不要硬趕船。", "Lake Brienz 船班下午不密集，14:07 與 16:08 要特別注意。"]
  },
  {
    id: 8,
    date: "2026-06-25",
    weekday: "Thu",
    theme: "Neuhaus / Interlaken、Luzern 還車、市區、前往 Zürich",
    region: "Interlaken / Luzern / Zürich",
    accommodation: "Hotel Limmathof",
    hotelPlaceId: "hotel-limmathof",
    weatherPlaceId: "zurich",
    routePlaceIds: ["hotel-neuhaus", "luzern", "europcar-luzern", "chapel-bridge", "lion-monument", "zurich-hb", "hotel-limmathof"],
    placeIds: ["interlaken", "luzern", "europcar-luzern", "chapel-bridge", "lion-monument", "zurich-hb", "hotel-limmathof"],
    timeline: [
      { period: "上午", items: [{ time: "08:30–10:00", title: "Neuhaus → Luzern Europcar Lakefront Center", description: "走 Brünig 路線，約 1 小時 20 分-1 小時 40 分。", transport: { mode: "car", duration: "約 1.5 小時" } }, { time: "10:00–10:30", title: "還車", description: "確認油量、車況、收據。" }, { time: "10:30–13:45", title: "Luzern 市區", description: "卡貝爾橋、獅子紀念碑、耶穌會教堂、湖畔午餐；行李可寄 Luzern 車站。" }] },
      { period: "下午", items: [{ time: "14:09–14:50", title: "備選：Luzern → Zürich HB", description: "IR70；若剛好可搭就提早進 Zürich。", transport: { mode: "train", duration: "約 41 分" } }, { time: "14:35–15:25", title: "目標：Luzern → Zürich HB", description: "IR75；原行程目標班次。", transport: { mode: "train", duration: "約 50 分" } }, { time: "15:25–16:00", title: "步行至 Hotel Limmathof 入住" }, { time: "16:30–18:30", title: "Zürich 舊城輕鬆散步", description: "Niederdorf、Limmatquai、Grossmünster / Fraumünster 外觀。" }] },
      { period: "晚上", items: [{ time: "晚餐", title: "Zürich 舊城 / 車站附近", description: "Swiss Chuchi、Haus Hiltl、Zeughauskeller 或簡餐。" }] }
    ],
    restaurants: ["Luzern 湖畔午餐", "Swiss Chuchi", "Haus Hiltl", "Zeughauskeller"],
    bookingReminders: ["Luzern → Zürich 火車當天用 SBB App 複核"],
    notes: ["還車日不要在 Luzern 市區繞停車，直接還車後步行遊覽。", "火車用 HFC 買半價票，月台與班次當天再複核。"]
  },
  {
    id: 9,
    date: "2026-06-26",
    weekday: "Fri",
    theme: "Zürich 慢遊",
    region: "Zürich",
    accommodation: "Hotel Limmathof",
    hotelPlaceId: "hotel-limmathof",
    weatherPlaceId: "zurich",
    routePlaceIds: ["hotel-limmathof", "lindenhof", "fraumunster", "grossmunster", "zurichsee", "bahnhofstrasse"],
    placeIds: ["zurich-hb", "bahnhofstrasse", "lindenhof", "grossmunster", "fraumunster", "zurichsee", "hotel-limmathof"],
    timeline: [
      { period: "上午", items: [{ time: "09:00–10:00", title: "Lindenhof、Schipfe、舊城巷弄", description: "步行即可。" }, { time: "10:00–11:30", title: "Fraumünster / Grossmünster 或 Kunsthaus Zürich", description: "下雨則 Kunsthaus 較適合。" }] },
      { period: "中午", items: [{ time: "12:00–13:30", title: "午餐", description: "Sternen Grill / Haus Hiltl / Zeughauskeller。" }] },
      { period: "下午", items: [{ time: "14:00–16:00", title: "Lake Zurich / Bürkliplatz", description: "天氣好再買短程遊船，不強制。" }, { time: "16:00–18:00", title: "Bahnhofstrasse / Paradeplatz / 採買", description: "輕鬆行程。" }] },
      { period: "晚上", items: [{ time: "晚餐", title: "舊城區餐廳", description: "保留彈性。" }] }
    ],
    restaurants: ["Sternen Grill", "Haus Hiltl", "Zeughauskeller"],
    bookingReminders: ["市區短程交通依實際需要購票"],
    notes: ["此日不需預購交通，市區以步行為主。", "短程交通用 HFC / SBB 或 ZVV 依實際需要購票。"]
  },
  {
    id: 10,
    date: "2026-06-27",
    weekday: "Sat",
    theme: "Zürich 最後半日 + 前往機場",
    region: "Zürich / Zürich Flughafen",
    weatherPlaceId: "zurich-airport",
    routePlaceIds: ["hotel-limmathof", "zurich", "zurich-hb", "zurich-airport", "bkk"],
    placeIds: ["zurich", "zurich-hb", "zurich-airport"],
    flights: [
      "LX180：2026/06/27 17:55 蘇黎世機場 → 2026/06/28 09:50 曼谷蘇凡納布機場（10h 55m，經濟艙 U）",
      "曼谷轉機：2h 35m（行李直掛）"
    ],
    timeline: [
      { period: "上午", items: [{ time: "09:00–11:00", title: "瑞士國家博物館或舊城咖啡散步", description: "若行李多可寄飯店。" }, { time: "11:30–12:45", title: "午餐與最後採買", description: "避免離車站太遠。" }] },
      { period: "下午", items: [{ time: "13:30–13:50", title: "回飯店取行李，步行至 Zürich HB", description: "預留電梯與行李時間。" }, { time: "14:08–14:20", title: "Zürich HB → Zürich Flughafen", description: "備案 14:04 / 14:32 等；實際以 SBB App 為準。", transport: { mode: "train", duration: "約 10-15 分" } }, { time: "14:20–17:55", title: "機場：退稅 / 報到 / 安檢 / 登機", description: "國際線建議至少提前 3 小時抵達。" }, { time: "17:55", title: "LX180 起飛", transport: { mode: "flight", from: "ZRH", to: "BKK", duration: "約 10 小時 55 分" } }] },
      { period: "晚上", items: [{ time: "機上", title: "飛往曼谷", description: "調整時差，準備隔日返台。" }] }
    ],
    restaurants: ["Zürich 市區早午餐", "Zürich Flughafen 機場餐飲"],
    bookingReminders: ["Zürich HB → Zürich Flughafen 火車", "LX180 回程機票"],
    notes: ["國際線建議至少提前 3 小時抵達機場，尤其若需退稅。", "Zurich HB 到機場班次密集，但仍用 SBB App 複核。"]
  },
  {
    id: 11,
    date: "2026-06-28",
    weekday: "Sun",
    theme: "曼谷轉機返回台灣",
    region: "Bangkok / Taipei / Taichung",
    weatherPlaceId: "tpe",
    routePlaceIds: ["bkk", "tpe"],
    placeIds: ["bkk", "tpe"],
    flights: [
      "BR212：2026/06/28 12:25 曼谷蘇凡納布機場 → 17:15 桃園機場 T2（3h 50m，經濟艙 M）",
      "全鋒接送 D3803621：2026/06/28 17:15 桃園機場二航 → 台中市西屯區台灣大道四段1360號"
    ],
    timeline: [
      { period: "上午", items: [{ time: "09:50", title: "抵達曼谷蘇凡納布機場", description: "轉機 2 小時 35 分，行李直掛。" }] },
      { period: "下午", items: [{ time: "12:25", title: "BR212 曼谷起飛", transport: { mode: "flight", from: "BKK", to: "TPE", duration: "3 小時 50 分" } }, { time: "17:15", title: "抵達桃園機場 T2" }, { time: "17:15 後", title: "全鋒機場接送返回台中", description: "預約單號 D3803621；桃園機場二航上車。" }] },
      { period: "晚上", items: [{ time: "晚上", title: "回家整理照片與票據" }] }
    ],
    restaurants: ["曼谷機場轉機餐飲"],
    bookingReminders: ["BR212 回程機票", "全鋒機場接送 D3803621"],
    notes: ["回程保留退稅、領行李與接送會合時間。", "重要票根、退稅單與購物收據務必收好。"]
  }
];
