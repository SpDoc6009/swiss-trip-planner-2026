import type { LucideIcon } from "lucide-react";
import { Backpack, Clock, CloudSun, Languages, Map, MountainSnow, PlugZap, ShieldCheck, Shirt, WalletCards } from "lucide-react";

const essentials: Array<{ title: string; body: string; icon: LucideIcon }> = [
  {
    title: "瑞士天氣",
    body: "瑞士四季分明。夏季（6 月～8 月）約 15°C～30°C，適合徒步旅行和登山；冬季（12 月～2 月）較寒冷，山區可能降至 -10°C 甚至更低。",
    icon: CloudSun
  },
  {
    title: "瑞士簽證",
    body: "台灣護照持有者可免簽進入瑞士，最多停留 90 天。出發前請確認護照仍有 6 個月以上有效期限。",
    icon: ShieldCheck
  },
  {
    title: "瑞士電壓",
    body: "瑞士電壓為 230V／50 Hz，使用 C 型（2 腳）和 J 型（3 腳）插頭，建議準備萬用轉接頭。",
    icon: PlugZap
  },
  {
    title: "瑞士語言",
    body: "瑞士有德語、法語、義大利語和羅曼什語四種官方語言。不同地區使用不同語言，觀光城市多可用英語溝通。",
    icon: Languages
  },
  {
    title: "瑞士貨幣",
    body: "瑞士使用瑞士法郎（CHF）。觀光區部分商店接受歐元，信用卡普遍可用，但小城鎮或鄉村仍建議攜帶少量現金。",
    icon: WalletCards
  },
  {
    title: "瑞士時差",
    body: "夏天瑞士晚台灣 6 小時；冬天晚台灣 7 小時。安排通話、航班與轉機時間時可以特別留意。",
    icon: Clock
  }
];

const layers = [
  "內層穿著速乾排汗衣，方便活動或運動後快速更換。",
  "中層選擇輕便保暖衣物，例如薄款羊毛衫或抓絨衣，抵禦早晚涼意。",
  "外層攜帶輕便防水夾克，以應對突然降雨、山區風勢與溫差。"
];

const outfitStyles = [
  { title: "運動休閒風", body: "適合徒步、騎行與戶外活動，搭配舒適運動鞋與多功能腰包。" },
  { title: "都市時尚風", body: "選擇質感牛仔褲、好質量 T 恤與俐落外套，輕鬆遊走各大城市。" },
  { title: "優雅簡約風", body: "連衣裙搭配舒適低跟鞋，適合藝術館、美術館與城市散步。" },
  { title: "民族風格", body: "融入田園元素的棉麻服飾，在瑞士自然景色中也很協調。" },
  { title: "戶外探險風", body: "選用輕量登山裝備與抓地力好的鞋，適合即興高山日遊。" }
];

const comparison = [
  "文化與氣候：瑞士以歐洲文化和氣候多樣性著稱；斯里蘭卡則以熱帶氣候與豐富文化遺產吸引旅人。",
  "旅遊季節：瑞士六月適合戶外活動；斯里蘭卡最佳旅遊時期則依地區而異。",
  "行程安排：瑞士可結合城市觀光與自然探險；斯里蘭卡則適合把海灘度假與寺廟巡禮放在一起。"
];

const packing = [
  "防水鞋和防雨裝備，以防午後雷陣雨或山區天氣變化。",
  "多功能充電器和轉接器，瑞士插座與台灣不同。",
  "旅遊日記本和照相機，隨時記錄難忘瞬間。",
  "太陽眼鏡與防曬，高海拔地區陽光仍然強烈。"
];

const finalTips = [
  "學習基本德語或法語詞彙：簡單招呼和問候能更容易融入當地文化。",
  "預訂交通和住宿：提前安排火車票和飯店，尤其是想體驗瑞士特色火車的旅程。",
  "個人健康防護：確認是否需要額外旅遊保險或疫苗，以防萬一。"
];

export default function TravelNotesPage() {
  return (
    <main className="bg-slate-100 dark:bg-[#071923]">
      <section className="bg-lake-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-sm font-black text-white/70">Travel Notes</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">瑞士旅遊注意事項總整理</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80">
            把天氣、簽證、電壓、貨幣、六月穿搭、行李準備與行前提醒整理成一頁，適合出發前檢查，也適合旅途中快速回看。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {essentials.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lake-900 text-white dark:bg-white dark:text-lake-900">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-lg font-black text-lake-900 dark:text-white">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
                <MountainSnow className="h-4 w-4" />
                瑞士 6 月氣溫全攻略
              </p>
              <h2 className="mt-2 text-3xl font-black text-lake-900 dark:text-white">準確掌握天氣變化</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                六月的瑞士氣候多變。日間氣溫通常在 15°C 至 25°C 之間，但高山地區或夜晚可能降至 10°C 以下。整體以陽光與清涼為基調，降雨也時有發生，因此需要為突然的天氣變化保留彈性。
              </p>
            </div>
            <div className="rounded-2xl bg-lake-50 p-4 text-sm leading-7 text-lake-900 dark:bg-white/8 dark:text-slate-200">
              <p className="font-black">快速原則</p>
              <p className="mt-1">城市可以輕便，高山務必防風、防水、防曬。</p>
            </div>
          </div>
        </section>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
            <p className="inline-flex items-center gap-2 text-sm font-black text-swiss-red">
              <Shirt className="h-4 w-4" />
              層次穿搭法
            </p>
            <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">面對多變氣候</h2>
            <div className="mt-5 space-y-3">
              {layers.map((item, index) => (
                <div key={item} className="rounded-2xl bg-swiss-snow p-4 dark:bg-lake-900/50">
                  <p className="text-xs font-black text-swiss-red">Layer {index + 1}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
            <p className="text-sm font-black text-swiss-red">穿搭風格建議</p>
            <h2 className="mt-2 text-2xl font-black text-lake-900 dark:text-white">都市與大自然的完美結合</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {outfitStyles.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-swiss-snow p-4 dark:border-white/10 dark:bg-lake-900/50">
                  <h3 className="font-black text-lake-900 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="grid gap-5 lg:grid-cols-3">
          <InfoList icon={Map} title="如何準備瑞士之旅" subtitle="與斯里蘭卡之行的對比" items={comparison} />
          <InfoList icon={Backpack} title="行李準備" subtitle="不可或缺的物品與提示" items={packing} />
          <InfoList icon={ShieldCheck} title="行前小建議" subtitle="讓你的旅遊更加完美" items={finalTips} />
        </section>
      </section>
    </main>
  );
}

function InfoList({ icon: Icon, title, subtitle, items }: { icon: LucideIcon; title: string; subtitle: string; items: string[] }) {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-lake-900 text-white dark:bg-white dark:text-lake-900">
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-4 text-sm font-black text-swiss-red">{subtitle}</p>
      <h2 className="mt-1 text-2xl font-black text-lake-900 dark:text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="rounded-2xl bg-swiss-snow p-4 text-sm leading-7 text-slate-600 dark:bg-lake-900/50 dark:text-slate-300">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
