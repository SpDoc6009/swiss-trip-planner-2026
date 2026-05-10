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
    region: "Taipei / Singapore",
    weatherPlaceId: "tpe",
    routePlaceIds: ["tpe", "sin", "zurich-airport"],
    placeIds: ["tpe", "sin"],
    flights: ["SQ879 17:45 TPE → 22:15 SIN", "LX177 23:25 SIN → 2026/06/19 06:15 ZRH"],
    timeline: [
      {
        period: "下午",
        items: [
          { time: "14:30", title: "抵達桃園機場", description: "辦理報到、托運行李，保留晚餐與安檢時間。" },
          { time: "17:45", title: "SQ879 起飛", transport: { mode: "flight", from: "TPE", to: "SIN", duration: "4 小時 30 分" } }
        ]
      },
      {
        period: "晚上",
        items: [
          { time: "22:15", title: "抵達新加坡", description: "轉機時間偏緊，先確認登機門。" },
          { time: "23:25", title: "LX177 轉機飛往蘇黎世", transport: { mode: "flight", from: "SIN", to: "ZRH", duration: "12 小時 50 分" } }
        ]
      }
    ],
    restaurants: ["桃園機場管制區簡餐", "樟宜機場轉機點心"],
    bookingReminders: ["確認新加坡航空與瑞士航空聯程行李", "檢查護照效期與申根入境文件"],
    notes: ["長程飛行前一天避免排太滿。", "隨身包準備保暖衣物、牙刷與簡易盥洗。"]
  },
  {
    id: 2,
    date: "2026-06-19",
    weekday: "Fri",
    theme: "抵達瑞士、Luzern、Pilatus Golden Round Trip",
    region: "Zürich / Luzern / Pilatus",
    accommodation: "Restaurant & Hotel Roggerli",
    hotelPlaceId: "hotel-roggerli",
    weatherPlaceId: "pilatus",
    routePlaceIds: ["zurich-airport", "luzern", "kriens", "pilatus", "alpnachstad", "europcar-luzern", "hotel-roggerli"],
    placeIds: ["zurich-airport", "luzern", "pilatus", "kriens", "alpnachstad", "europcar-luzern", "hotel-roggerli"],
    timeline: [
      {
        period: "上午",
        items: [
          { time: "06:15", title: "抵達 Zürich Flughafen", description: "出關、領行李、整理網路與票券。" },
          { time: "07:30–08:45", title: "機場整備", description: "購票或啟用 SBB App 票券，確認 Luzern 火車月台。" },
          { time: "08:47–09:51", title: "火車 Zürich Flughafen → Luzern", transport: { mode: "train", from: "Zürich Flughafen", to: "Luzern", duration: "約 1 小時" } },
          { time: "10:15", title: "寄放行李或簡單整理", description: "保持行李輕量，準備 Pilatus 半日路線。" }
        ]
      },
      {
        period: "下午",
        items: [
          { time: "10:45–16:30", title: "Pilatus Golden Round Trip", description: "依當天船班、纜車與齒軌列車班次調整順序。", transport: { mode: "cablecar", duration: "約 5-6 小時" } },
          { time: "17:00", title: "Europcar Luzern 取車", description: "確認保險、第二駕駛、雪鏈或道路規定。" },
          { time: "17:30–18:00", title: "開車前往 Hotel Roggerli", transport: { mode: "car", from: "Luzern", to: "Hergiswil", duration: "約 30 分" } }
        ]
      },
      { period: "晚上", items: [{ time: "18:30", title: "湖畔晚餐", description: "飯店餐廳或 Luzern 湖畔簡餐，早點休息調時差。" }] }
    ],
    restaurants: ["Restaurant & Hotel Roggerli", "Luzern 湖畔簡餐"],
    bookingReminders: ["Pilatus Golden Round Trip", "Pilatus cogwheel railway seat reservation", "Europcar 租車"],
    notes: ["剛抵達歐洲不要把晚上塞滿。", "Pilatus 屬高山景點，若雲層太厚可縮短停留。"]
  },
  {
    id: 3,
    date: "2026-06-20",
    weekday: "Sat",
    theme: "Luzern 自駕前往 Zermatt，沿途湖景與山路",
    region: "Luzern / Täsch / Zermatt",
    accommodation: "Alpen Resort & Spa, Zermatt",
    hotelPlaceId: "alpen-resort",
    weatherPlaceId: "zermatt",
    routePlaceIds: ["hotel-roggerli", "hergiswil", "andermatt", "tasch", "zermatt", "alpen-resort", "matterhorn-viewpoint"],
    placeIds: ["hergiswil", "andermatt", "tasch", "zermatt", "alpen-resort", "matterhorn-viewpoint"],
    timeline: [
      { period: "上午", items: [{ time: "08:30", title: "飯店早餐" }, { time: "09:30", title: "出發前往 Täsch", description: "途中安排 1-2 個休息點，不趕路。", transport: { mode: "car", duration: "約 4.5-5 小時含休息" } }] },
      { period: "中午", items: [{ time: "12:30", title: "午餐或高速公路休息站", description: "以好停車、好補給為優先。" }] },
      { period: "下午", items: [{ time: "15:00", title: "抵達 Täsch Matterhorn Terminal 停車" }, { time: "15:15–15:35", title: "Täsch → Zermatt shuttle train", transport: { mode: "shuttle", duration: "約 20 分" } }, { time: "16:00", title: "入住 Alpen Resort & Spa" }] },
      { period: "晚上", items: [{ time: "17:00", title: "Bahnhofstrasse / Matterhorn viewpoint 散步", description: "以熟悉小鎮與看山景為主。" }] }
    ],
    restaurants: ["高速公路休息站餐廳", "Zermatt Bahnhofstrasse 周邊餐廳"],
    bookingReminders: ["Täsch Matterhorn Terminal 停車"],
    notes: ["Zermatt 禁止一般車輛進入。", "自駕日把彈性留給路況與休息。"]
  },
  {
    id: 4,
    date: "2026-06-21",
    weekday: "Sun",
    theme: "Zermatt 經典高山景觀日",
    region: "Zermatt / Matterhorn",
    accommodation: "Alpen Resort & Spa",
    hotelPlaceId: "alpen-resort",
    weatherPlaceId: "gornergrat",
    routePlaceIds: ["alpen-resort", "zermatt", "gornergrat", "zermatt", "matterhorn-glacier-paradise", "zermatt"],
    placeIds: ["zermatt", "gornergrat", "klein-matterhorn", "matterhorn-glacier-paradise"],
    timeline: [
      { period: "上午", items: [{ time: "07:30", title: "早餐" }, { time: "08:30–11:30", title: "Gornergrat Bahn", description: "若天氣清楚，優先把最重要的馬特洪峰觀景排在早上。", transport: { mode: "train", duration: "約 3 小時" } }] },
      { period: "中午", items: [{ time: "12:00", title: "Zermatt 午餐", description: "回村內吃飯，讓高海拔活動中間有恢復時間。" }] },
      { period: "下午", items: [{ time: "13:00–16:30", title: "Matterhorn Glacier Paradise / Klein Matterhorn", description: "看雲量與風速決定是否上山。", transport: { mode: "cablecar", duration: "約 3.5 小時" } }, { time: "17:00", title: "返回 Zermatt" }] },
      { period: "晚上", items: [{ time: "18:30", title: "晚餐", description: "保留體力，隔日還有移動日。" }] }
    ],
    restaurants: ["Zermatt 村內餐廳", "Gornergrat 景觀餐廳"],
    bookingReminders: ["Gornergrat Bahn", "Matterhorn Glacier Paradise cable car"],
    notes: ["若天氣不好，保留彈性，不要硬上兩個高山景點。", "高海拔注意補水、保暖與防曬。"]
  },
  {
    id: 5,
    date: "2026-06-22",
    weekday: "Mon",
    theme: "Zermatt 輕鬆半日 + 前往 Grindelwald / First",
    region: "Zermatt / Grindelwald",
    accommodation: "Hotel Restaurant Hirschen - Grindelwald",
    hotelPlaceId: "hotel-hirschen",
    weatherPlaceId: "grindelwald",
    routePlaceIds: ["alpen-resort", "zermatt", "sunnegga", "tasch", "grindelwald", "hotel-hirschen", "first"],
    placeIds: ["zermatt", "sunnegga", "tasch", "grindelwald", "first", "hotel-hirschen"],
    timeline: [
      { period: "上午", items: [{ time: "08:30", title: "早餐" }, { time: "09:30", title: "Zermatt 輕鬆散步", description: "可選 Sunnegga 或村內咖啡，不排硬行程。" }] },
      { period: "中午", items: [{ time: "11:30", title: "Zermatt → Täsch shuttle", transport: { mode: "shuttle", duration: "約 20 分" } }, { time: "12:00", title: "取車" }] },
      { period: "下午", items: [{ time: "12:15–15:30", title: "開車前往 Grindelwald", description: "途中休息，避免山路疲勞。", transport: { mode: "car", duration: "約 3-3.5 小時含休息" } }, { time: "16:00", title: "入住 Hotel Restaurant Hirschen" }, { time: "16:30", title: "First 或村內散步", description: "若天氣好且體力足夠再上 First。" }] },
      { period: "晚上", items: [{ time: "18:30", title: "Grindelwald 晚餐" }] }
    ],
    restaurants: ["Zermatt 村內咖啡", "Hotel Restaurant Hirschen"],
    bookingReminders: ["Grindelwald First cable car 可視天氣購買"],
    notes: ["這天重點是轉場，First 是加分題。", "山路自駕以安全和休息為優先。"]
  },
  {
    id: 6,
    date: "2026-06-23",
    weekday: "Tue",
    theme: "Jungfraujoch 或 Interlaken 湖區輕鬆日",
    region: "Grindelwald / Interlaken",
    accommodation: "Golf- & Strandhotel Neuhaus zum See",
    hotelPlaceId: "hotel-neuhaus",
    weatherPlaceId: "jungfraujoch",
    routePlaceIds: ["hotel-hirschen", "grindelwald-terminal", "jungfraujoch", "interlaken", "hotel-neuhaus"],
    placeIds: ["grindelwald", "grindelwald-terminal", "jungfraujoch", "interlaken", "spiez", "brienzersee", "thunersee", "hotel-neuhaus"],
    timeline: [
      { period: "上午", items: [{ time: "07:30", title: "早餐" }, { time: "08:30", title: "前往 Grindelwald Terminal", transport: { mode: "car", duration: "約 10-15 分" } }, { time: "09:00–14:00", title: "方案 A：Jungfraujoch", description: "天氣好再上山，座位與回程班次先確認。", transport: { mode: "train", duration: "約 5 小時" } }] },
      { period: "下午", items: [{ time: "14:30–15:30", title: "前往 Interlaken", transport: { mode: "car", duration: "約 45-60 分" } }, { time: "16:00", title: "入住 Neuhaus zum See" }] },
      { period: "晚上", items: [{ time: "17:00", title: "Thunersee 湖邊休息", description: "住湖邊就把傍晚留給湖景。" }] }
    ],
    alternatives: [
      {
        label: "方案 B：天氣普通走湖區",
        timeline: [
          { time: "09:30", title: "出發前往 Interlaken" },
          { time: "11:00", title: "Spiez 湖畔散步" },
          { time: "13:00", title: "午餐" },
          { time: "15:00", title: "Brienzersee / Thunersee" },
          { time: "16:00", title: "入住飯店" }
        ]
      }
    ],
    restaurants: ["Jungfraujoch 或 Grindelwald Terminal 餐廳", "Spiez 湖畔餐廳", "Neuhaus 湖畔餐廳"],
    bookingReminders: ["Jungfraujoch ticket + seat reservation", "Grindelwald Terminal parking"],
    notes: ["Jungfraujoch 是高成本高天氣依賴景點，務必看即時雲況。", "湖區備案不要視為降級，體驗會更鬆。"]
  },
  {
    id: 7,
    date: "2026-06-24",
    weekday: "Wed",
    theme: "Lauterbrunnen 經典山谷 + Interlaken 湖區",
    region: "Lauterbrunnen / Interlaken",
    accommodation: "Golf- & Strandhotel Neuhaus zum See",
    hotelPlaceId: "hotel-neuhaus",
    weatherPlaceId: "lauterbrunnen",
    routePlaceIds: ["hotel-neuhaus", "lauterbrunnen-parking", "staubbach", "trummelbach", "iseltwald", "hotel-neuhaus"],
    placeIds: ["interlaken", "lauterbrunnen", "lauterbrunnen-parking", "staubbach", "trummelbach", "iseltwald", "hotel-neuhaus"],
    timeline: [
      { period: "上午", items: [{ time: "08:30", title: "早餐" }, { time: "09:30", title: "開車前往 Lauterbrunnen", transport: { mode: "car", duration: "約 30-40 分" } }, { time: "10:15", title: "停車" }, { time: "10:30", title: "Staubbach Falls 拍照散步" }, { time: "11:30", title: "Trümmelbachfälle", description: "現場購票，注意濕滑與防水外套。" }] },
      { period: "中午", items: [{ time: "13:00", title: "午餐", description: "Lauterbrunnen 或返回 Interlaken 周邊。" }] },
      { period: "下午", items: [{ time: "14:30", title: "返回 Interlaken 周邊湖區" }, { time: "16:00", title: "飯店休息或湖邊散步" }] },
      { period: "晚上", items: [{ time: "18:30", title: "湖畔晚餐" }] }
    ],
    restaurants: ["Lauterbrunnen 村內餐廳", "Interlaken / Neuhaus 湖畔餐廳"],
    bookingReminders: ["Lauterbrunnen Parking", "Trümmelbachfälle 可現場買"],
    notes: ["瀑布區濕滑，防水鞋會很有感。", "Lauterbrunnen 停車旺季請早。"]
  },
  {
    id: 8,
    date: "2026-06-25",
    weekday: "Thu",
    theme: "還車、Luzern 市區、前往 Zürich",
    region: "Interlaken / Luzern / Zürich",
    accommodation: "Hotel Limmathof",
    hotelPlaceId: "hotel-limmathof",
    weatherPlaceId: "zurich",
    routePlaceIds: ["hotel-neuhaus", "luzern", "europcar-luzern", "chapel-bridge", "lion-monument", "zurich-hb", "hotel-limmathof"],
    placeIds: ["interlaken", "luzern", "europcar-luzern", "chapel-bridge", "lion-monument", "zurich-hb", "hotel-limmathof"],
    timeline: [
      { period: "上午", items: [{ time: "08:30", title: "早餐" }, { time: "09:30", title: "開車前往 Luzern", transport: { mode: "car", duration: "約 2 小時" } }, { time: "11:30", title: "抵達 Luzern，還車" }] },
      { period: "中午", items: [{ time: "12:00", title: "Luzern 午餐" }] },
      { period: "下午", items: [{ time: "13:00", title: "Chapel Bridge / Lion Monument" }, { time: "14:35–15:25", title: "Luzern → Zürich HB 火車", transport: { mode: "train", duration: "約 50 分" } }, { time: "16:00", title: "入住 Hotel Limmathof" }] },
      { period: "晚上", items: [{ time: "17:00", title: "Zürich Old Town 散步" }] }
    ],
    restaurants: ["Luzern 老城午餐", "Zürich Old Town 晚餐"],
    bookingReminders: ["Luzern → Zürich 火車可當天買，不需訂座"],
    notes: ["還車前記得加滿油並拍照留存。", "Zürich 住宿靠近車站，最後兩天移動壓力低。"]
  },
  {
    id: 9,
    date: "2026-06-26",
    weekday: "Fri",
    theme: "Zürich 市區深度散步",
    region: "Zürich",
    accommodation: "Hotel Limmathof",
    hotelPlaceId: "hotel-limmathof",
    weatherPlaceId: "zurich",
    routePlaceIds: ["hotel-limmathof", "zurich-hb", "bahnhofstrasse", "lindenhof", "grossmunster", "fraumunster", "zurichsee"],
    placeIds: ["zurich-hb", "bahnhofstrasse", "lindenhof", "grossmunster", "fraumunster", "zurichsee", "hotel-limmathof"],
    timeline: [
      { period: "上午", items: [{ time: "09:30", title: "早餐" }, { time: "10:30", title: "Bahnhofstrasse" }, { time: "11:30", title: "Lindenhof" }] },
      { period: "中午", items: [{ time: "12:30", title: "午餐" }] },
      { period: "下午", items: [{ time: "14:00", title: "Grossmünster / Fraumünster" }, { time: "16:00", title: "Zürichsee 湖邊" }] },
      { period: "晚上", items: [{ time: "18:30", title: "晚餐" }] }
    ],
    restaurants: ["Zürich 老城餐廳", "湖畔咖啡"],
    bookingReminders: ["市區景點依開放時間彈性安排"],
    notes: ["這天適合作為購物、補行李與城市散步日。", "教堂參觀請留意服裝與拍照規定。"]
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
    flights: ["LX180 17:55 ZRH → 2026/06/28 09:50 BKK"],
    timeline: [
      { period: "上午", items: [{ time: "09:30", title: "早餐" }, { time: "10:30", title: "Zürich 市區最後採買" }] },
      { period: "下午", items: [{ time: "13:30", title: "回飯店取行李" }, { time: "14:15", title: "Zürich HB → Zürich Flughafen", transport: { mode: "train", duration: "約 10-15 分" } }, { time: "15:00", title: "抵達機場" }, { time: "17:55", title: "LX180 起飛", transport: { mode: "flight", from: "ZRH", to: "BKK" } }] },
      { period: "晚上", items: [{ time: "機上", title: "飛往曼谷", description: "調整時差，準備隔日返台。" }] }
    ],
    restaurants: ["Zürich 市區早午餐", "Zürich Flughafen 機場餐飲"],
    bookingReminders: ["Zürich HB → Zürich Flughafen 火車"],
    notes: ["退稅與托運時間抓寬一點。", "最後採買不要離車站太遠。"]
  },
  {
    id: 11,
    date: "2026-06-28",
    weekday: "Sun",
    theme: "曼谷轉機返回台灣",
    region: "Bangkok / Taipei",
    weatherPlaceId: "tpe",
    routePlaceIds: ["bkk", "tpe"],
    placeIds: ["bkk", "tpe"],
    flights: ["BR212 12:25 BKK → 17:15 TPE"],
    timeline: [
      { period: "上午", items: [{ time: "09:50", title: "抵達曼谷" }] },
      { period: "下午", items: [{ time: "12:25", title: "BR212 曼谷起飛", transport: { mode: "flight", from: "BKK", to: "TPE" } }, { time: "17:15", title: "抵達桃園機場" }] },
      { period: "晚上", items: [{ time: "晚上", title: "回家整理照片與票據" }] }
    ],
    restaurants: ["曼谷機場轉機餐飲"],
    bookingReminders: ["確認回程行李是否直掛"],
    notes: ["長程旅行最後一天保留緩衝。"]
  }
];
