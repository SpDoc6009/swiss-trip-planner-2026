export interface TravelImageCard {
  id: string;
  title: string;
  kicker: string;
  description: string;
  src: string;
  alt: string;
  days?: [number, number] | [number];
}

export const dualDayItineraryImages: TravelImageCard[] = [
  {
    id: "day-1-2",
    title: "Day 1-2 \u62b5\u9054\u745e\u58eb\u8207 Luzern",
    kicker: "\u96d9\u65e5\u5716\u6587\u884c\u7a0b",
    description: "\u9069\u5408\u653e\u53f0\u7063\u51fa\u767c\u3001\u8f49\u6a5f\u62b5\u9054\u3001Luzern \u8207 Pilatus \u7684\u5716\u6587\u7248\u6458\u8981\u3002",
    src: "/images/itinerary/day-1-2.jpg",
    alt: "Day 1-2 \u884c\u7a0b\u5716\u6587",
    days: [1, 2]
  },
  {
    id: "day-3-4",
    title: "Day 3-4 Zermatt \u8207 Matterhorn",
    kicker: "\u96d9\u65e5\u5716\u6587\u884c\u7a0b",
    description: "\u9069\u5408\u653e Luzern \u81ea\u99d5\u524d\u5f80 Zermatt\u3001Gornergrat \u8207 Matterhorn Glacier Paradise \u7684\u5716\u6587\u7248\u6458\u8981\u3002",
    src: "/images/itinerary/day-3-4.jpg",
    alt: "Day 3-4 \u884c\u7a0b\u5716\u6587",
    days: [3, 4]
  },
  {
    id: "day-5-6",
    title: "Day 5-6 Grindelwald \u8207 Jungfraujoch",
    kicker: "\u96d9\u65e5\u5716\u6587\u884c\u7a0b",
    description: "\u9069\u5408\u653e Zermatt \u8f49\u5f80 Grindelwald\u3001First\u3001Jungfraujoch \u8207 Interlaken \u6e56\u5340\u7684\u5716\u6587\u7248\u6458\u8981\u3002",
    src: "/images/itinerary/day-5-6.jpg",
    alt: "Day 5-6 \u884c\u7a0b\u5716\u6587",
    days: [5, 6]
  },
  {
    id: "day-7-8",
    title: "Day 7-8 Lauterbrunnen \u8207 Z\u00fcrich",
    kicker: "\u96d9\u65e5\u5716\u6587\u884c\u7a0b",
    description: "\u9069\u5408\u653e Lauterbrunnen \u5c71\u8c37\u3001Interlaken \u6e56\u5340\u3001\u9084\u8eca\u3001Luzern \u8207 Z\u00fcrich \u7684\u5716\u6587\u7248\u6458\u8981\u3002",
    src: "/images/itinerary/day-7-8.jpg",
    alt: "Day 7-8 \u884c\u7a0b\u5716\u6587",
    days: [7, 8]
  },
  {
    id: "day-9-10",
    title: "Day 9-10 Z\u00fcrich \u57ce\u5e02\u8207\u8fd4\u7a0b",
    kicker: "\u96d9\u65e5\u5716\u6587\u884c\u7a0b",
    description: "\u9069\u5408\u653e Z\u00fcrich \u5e02\u5340\u6f2b\u6b65\u3001\u6700\u5f8c\u63a1\u8cb7\u8207\u524d\u5f80\u6a5f\u5834\u7684\u5716\u6587\u7248\u6458\u8981\u3002",
    src: "/images/itinerary/day-9-10.jpg",
    alt: "Day 9-10 \u884c\u7a0b\u5716\u6587",
    days: [9, 10]
  },
  {
    id: "day-11",
    title: "Day 11 \u66fc\u8c37\u8f49\u6a5f\u8fd4\u53f0",
    kicker: "\u96d9\u65e5\u5716\u6587\u884c\u7a0b",
    description: "\u9069\u5408\u653e\u8fd4\u7a0b\u822a\u73ed\u3001\u8f49\u6a5f\u8207\u7e3d\u6574\u7406\u7684\u5716\u6587\u7248\u6458\u8981\u3002",
    src: "/images/itinerary/day-11.jpg",
    alt: "Day 11 \u884c\u7a0b\u5716\u6587",
    days: [11]
  }
];

export const magazineGuides: TravelImageCard[] = [
  {
    id: "guide-1",
    title: "\u6e56\u5149\u5c71\u8272\u7684\u51fa\u767c\u611f",
    kicker: "\u745e\u58eb\u65c5\u884c\u9748\u611f\u8a8c",
    description: "\u9069\u5408\u653e\u745e\u58eb\u6574\u9ad4\u884c\u524d\u9748\u611f\u8207\u5c71\u6e56\u6c1b\u570d\u7684\u653b\u7565\u5716\u6587\u3002",
    src: "/images/magazine/guide-1.jpg",
    alt: "\u65c5\u904a\u653b\u7565\u5716\u6587 1"
  },
  {
    id: "guide-2",
    title: "\u9ad8\u5c71\u5929\u6c23\u8207\u7a7f\u642d",
    kicker: "\u745e\u58eb\u65c5\u884c\u9748\u611f\u8a8c",
    description: "\u9069\u5408\u653e\u516d\u6708\u5929\u6c23\u3001\u6d0b\u8525\u5f0f\u7a7f\u642d\u8207\u9632\u98a8\u9632\u6c34\u63d0\u9192\u3002",
    src: "/images/magazine/guide-2.jpg",
    alt: "\u65c5\u904a\u653b\u7565\u5716\u6587 2"
  },
  {
    id: "guide-3",
    title: "Zermatt \u8207 Matterhorn \u89c0\u666f\u65e5",
    kicker: "\u745e\u58eb\u65c5\u884c\u9748\u611f\u8a8c",
    description: "\u9069\u5408\u653e Zermatt\u3001Gornergrat \u6216 Matterhorn Glacier Paradise \u76f8\u95dc\u653b\u7565\u5716\u6587\u3002",
    src: "/images/magazine/guide-3.jpg",
    alt: "\u65c5\u904a\u653b\u7565\u5716\u6587 3"
  },
  {
    id: "guide-4",
    title: "Interlaken \u8207\u5c71\u8c37\u6e56\u5340",
    kicker: "\u745e\u58eb\u65c5\u884c\u9748\u611f\u8a8c",
    description: "\u9069\u5408\u653e Jungfraujoch\u3001Lauterbrunnen\u3001Brienzersee \u8207 Thunersee \u7684\u653b\u7565\u5716\u6587\u3002",
    src: "/images/magazine/guide-4.jpg",
    alt: "\u65c5\u904a\u653b\u7565\u5716\u6587 4"
  },
  {
    id: "guide-5",
    title: "Z\u00fcrich \u57ce\u5e02\u6563\u6b65",
    kicker: "\u745e\u58eb\u65c5\u884c\u9748\u611f\u8a8c",
    description: "\u9069\u5408\u653e Z\u00fcrich \u8001\u57ce\u3001\u6e56\u7554\u6563\u6b65\u3001\u63a1\u8cb7\u8207\u8fd4\u7a0b\u7684\u653b\u7565\u5716\u6587\u3002",
    src: "/images/magazine/guide-5.jpg",
    alt: "\u65c5\u904a\u653b\u7565\u5716\u6587 5"
  }
];

export function findDualDayImage(dayId: number) {
  return dualDayItineraryImages.find((image) => image.days?.includes(dayId));
}
