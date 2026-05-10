import type { LucideIcon } from "lucide-react";

export type PlaceType =
  | "airport"
  | "train"
  | "hotel"
  | "mountain"
  | "lake"
  | "town"
  | "parking"
  | "restaurant"
  | "viewpoint";

export type TransportMode = "flight" | "train" | "car" | "walk" | "cablecar" | "boat" | "shuttle";

export type TimePeriod = "上午" | "中午" | "下午" | "晚上";

export interface TripSummary {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  travelers: number;
  localDays: number;
  currencyRate: number;
  transportStrategy: string;
  recommendedPass: string;
}

export interface TripPlace {
  id: string;
  name: string;
  type: PlaceType;
  lat: number;
  lng: number;
  stay?: string;
  note?: string;
  dayIds?: number[];
  region?: string;
}

export interface TimelineItem {
  time: string;
  title: string;
  description?: string;
  transport?: {
    mode: TransportMode;
    duration?: string;
    from?: string;
    to?: string;
  };
}

export interface TimelineGroup {
  period: TimePeriod;
  items: TimelineItem[];
}

export interface ItineraryDay {
  id: number;
  date: string;
  weekday: string;
  theme: string;
  region: string;
  accommodation?: string;
  hotelPlaceId?: string;
  weatherPlaceId: string;
  routePlaceIds: string[];
  placeIds: string[];
  timeline: TimelineGroup[];
  restaurants: string[];
  bookingReminders: string[];
  notes: string[];
  alternatives?: {
    label: string;
    timeline: TimelineItem[];
  }[];
  flights?: string[];
}

export interface BookingItem {
  id: string;
  category: "must" | "recommended" | "onsite";
  date: string;
  item: string;
  required: string;
  suggestedTiming: string;
  officialSource: string;
  halfFare: "適用" | "部分適用" | "不適用" | "視票種";
  note: string;
}

export interface CostLineItem {
  id: string;
  label: string;
  amountNtd: number;
  kind: "pass" | "train" | "mountain" | "parking" | "car";
}

export interface CostScenario {
  id: "swissTravelPass" | "halfFareCard";
  name: string;
  recommendation?: string;
  lineItems: CostLineItem[];
}

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
}
