import type { CostScenario } from "@/types/trip";

export const costAssumptions = {
  travelers: 3,
  currencyRate: 41,
  carRentalNtd: 25000,
  note: "金額為規劃用估算，出發前請以 SBB、山岳鐵道與租車公司即時價格更新。"
};

export const costScenarios: CostScenario[] = [
  {
    id: "swissTravelPass",
    name: "Swiss Travel Pass",
    lineItems: [
      { id: "stp-pass", label: "票券價格", amountNtd: 60500, kind: "pass" },
      { id: "stp-train", label: "火車", amountNtd: 2500, kind: "train" },
      { id: "stp-mountain", label: "山岳鐵道 / 纜車", amountNtd: 51500, kind: "mountain" },
      { id: "stp-parking", label: "停車費", amountNtd: 7600, kind: "parking" },
      { id: "stp-car", label: "租車費", amountNtd: 25000, kind: "car" }
    ]
  },
  {
    id: "halfFareCard",
    name: "Swiss Half Fare Card",
    recommendation: "推薦方案",
    lineItems: [
      { id: "hfc-pass", label: "票券價格", amountNtd: 14760, kind: "pass" },
      { id: "hfc-train", label: "火車", amountNtd: 6800, kind: "train" },
      { id: "hfc-mountain", label: "山岳鐵道 / 纜車", amountNtd: 35700, kind: "mountain" },
      { id: "hfc-parking", label: "停車費", amountNtd: 7600, kind: "parking" },
      { id: "hfc-car", label: "租車費", amountNtd: 25000, kind: "car" }
    ]
  }
];
