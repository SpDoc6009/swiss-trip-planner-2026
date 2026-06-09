import type { TripPlace } from "@/types/trip";

export type UrgencyLevel = "critical" | "important" | "normal";

export interface EmergencyContact {
  id: string;
  title: string;
  description: string;
  phone?: string;
  url?: string;
  note: string;
  level: UrgencyLevel;
}

export interface TravelDocumentItem {
  id: string;
  date: string;
  title: string;
  category: string;
  suggestedStorage: string;
  note: string;
}

export interface ParkingTask {
  id: string;
  title: string;
  date: string;
  place: TripPlace;
  checklist: string[];
  note: string;
}

export const emergencyContacts: EmergencyContact[] = [
  {
    id: "eu-emergency",
    title: "\u6b50\u6d32\u901a\u7528\u7dca\u6025\u96fb\u8a71",
    description: "\u9047\u5230\u751f\u547d\u5b89\u5168\u3001\u91cd\u5927\u4e8b\u6545\u6216\u9700\u8981\u7acb\u5373\u6551\u63f4\u6642\u64a5\u6253\u3002",
    phone: "112",
    note: "\u5728\u745e\u58eb\u53ef\u7528\u65bc\u7dca\u6025\u72c0\u6cc1\u3002",
    level: "critical"
  },
  {
    id: "police",
    title: "\u8b66\u5bdf",
    description: "\u76dc\u7aca\u3001\u4e8b\u6545\u3001\u500b\u4eba\u5b89\u5168\u6216\u9700\u8981\u8b66\u65b9\u5354\u52a9\u3002",
    phone: "117",
    note: "\u4e0d\u662f\u7dca\u6025\u91ab\u7642\u6642\u512a\u5148\u627e\u8b66\u65b9\u3002",
    level: "critical"
  },
  {
    id: "ambulance",
    title: "\u6551\u8b77\u8eca / \u91ab\u7642\u6025\u6551",
    description: "\u53d7\u50b7\u3001\u6025\u75c5\u3001\u9ad8\u5c71\u4e0d\u9069\u6216\u9700\u8981\u91ab\u7642\u6551\u63f4\u3002",
    phone: "144",
    note: "\u5c71\u5340\u6d3b\u52d5\u5f8c\u82e5\u6709\u660e\u986f\u4e0d\u9069\uff0c\u4e0d\u8981\u786c\u6490\u3002",
    level: "critical"
  },
  {
    id: "fire",
    title: "\u6d88\u9632",
    description: "\u706b\u707d\u3001\u7159\u9727\u3001\u7206\u70b8\u6216\u9700\u8981\u6d88\u9632\u5354\u52a9\u3002",
    phone: "118",
    note: "\u5728\u98ef\u5e97\u5148\u770b\u9003\u751f\u8def\u7dda\u6703\u66f4\u5b89\u5fc3\u3002",
    level: "critical"
  },
  {
    id: "taiwan-help",
    title: "\u53f0\u7063\u65c5\u5916\u570b\u4eba\u6025\u96e3\u6551\u52a9",
    description: "\u8b77\u7167\u907a\u5931\u3001\u91cd\u5927\u4e8b\u6545\u3001\u7dca\u6025\u806f\u7d61\u5bb6\u4eba\u7b49\u60c5\u6cc1\u3002",
    phone: "+886-800-085-095",
    url: "https://www.boca.gov.tw/",
    note: "\u51fa\u767c\u524d\u5efa\u8b70\u518d\u78ba\u8a8d\u6700\u65b0\u99d0\u5916\u806f\u7d61\u8cc7\u8a0a\u3002",
    level: "important"
  },
  {
    id: "insurance",
    title: "\u65c5\u904a\u5e73\u5b89\u96aa / \u91ab\u7642\u5354\u52a9",
    description: "\u5148\u653e\u4f60\u7684\u4fdd\u96aa\u516c\u53f8 24 \u5c0f\u6642\u5354\u52a9\u96fb\u8a71\u8207\u4fdd\u55ae\u865f\u78bc\u3002",
    note: "\u5efa\u8b70\u5728\u6587\u4ef6\u9801\u88dc\u4e0a\u4fdd\u55ae PDF / Drive \u9023\u7d50\u3002",
    level: "important"
  },
  {
    id: "credit-card",
    title: "\u4fe1\u7528\u5361\u639b\u5931",
    description: "\u82e5\u5361\u7247\u907a\u5931\u6216\u88ab\u76dc\u5237\uff0c\u7acb\u5373\u806f\u7d61\u767c\u5361\u9280\u884c\u3002",
    note: "\u8acb\u5148\u5728\u624b\u6a5f\u5099\u5fd8\u9304\u6216\u6587\u4ef6\u9801\u653e\u9280\u884c\u6d77\u5916\u639b\u5931\u96fb\u8a71\u3002",
    level: "normal"
  }
];

export const travelDocuments: TravelDocumentItem[] = [
  {
    id: "flight-outbound",
    date: "2026-06-18",
    title: "\u53bb\u7a0b\u6a5f\u7968 / \u767b\u6a5f\u8cc7\u8a0a",
    category: "\u6a5f\u7968",
    suggestedStorage: "Google Drive / iCloud / \u622a\u5716\u96e2\u7dda",
    note: "SQ879 17:45 TPE T2 \u2192 22:15 SIN\uff1bLX177 23:25 SIN T2 \u2192 06:15(+1) ZRH\u3002\u65b0\u52a0\u5761\u8f49\u6a5f 1h 10m\uff0c\u884c\u674e\u76f4\u639b\u3002"
  },
  {
    id: "airport-transfer-outbound",
    date: "2026-06-18",
    title: "\u5168\u92d2\u6a5f\u5834\u63a5\u9001\uff08\u53bb\u7a0b\uff09",
    category: "\u6a5f\u5834\u63a5\u9001",
    suggestedStorage: "\u9810\u7d04\u55ae\u865f D3803617 / \u622a\u5716\u96e2\u7dda",
    note: "2026/06/18 (\u56db) 13:30\uff1b\u53f0\u4e2d\u5e02\u897f\u5c6f\u5340\u53f0\u7063\u5927\u9053\u56db\u6bb51360\u865f \u2192 \u6843\u5712\u6a5f\u5834\u4e8c\u822a\u3002"
  },
  {
    id: "half-fare-card",
    date: "2026-06-18",
    title: "Swiss Half Fare Card",
    category: "\u7968\u5238",
    suggestedStorage: "\u96e2\u7dda PDF + \u624b\u6a5f\u76f8\u7c3f",
    note: "\u642d\u706b\u8eca\u3001\u5c71\u5cb3\u9435\u9053\u8207\u7e9c\u8eca\u6642\u6703\u5e38\u7528\u5230\u3002"
  },
  {
    id: "hotels",
    date: "2026-06-19",
    title: "\u98ef\u5e97\u8a02\u623f\u78ba\u8a8d",
    category: "\u4f4f\u5bbf",
    suggestedStorage: "Booking / Agoda / Email / Drive",
    note: "Roggerli\u3001Alpen Resort\u3001Hirschen\u3001Neuhaus\u3001Limmathof \u90fd\u5efa\u8b70\u653e\u5165\u3002"
  },
  {
    id: "rental-car",
    date: "2026-06-19",
    title: "Europcar Luzern \u79df\u8eca voucher",
    category: "\u79df\u8eca",
    suggestedStorage: "\u96e2\u7dda PDF + \u96fb\u5b50\u90f5\u4ef6",
    note: "\u53d6\u8eca\u3001\u9084\u8eca\u6642\u9593\u8207\u4fdd\u96aa\u689d\u4ef6\u5efa\u8b70\u5148\u770b\u904e\u3002"
  },
  {
    id: "pilatus",
    date: "2026-06-19",
    title: "Pilatus Golden Round Trip",
    category: "\u5c71\u5340\u7968\u5238",
    suggestedStorage: "\u96e2\u7dda QR Code",
    note: "\u82e5\u6709\u9810\u8a02\u9f52\u8ecc\u5217\u8eca\u5ea7\u4f4d\uff0c\u8acb\u4e00\u8d77\u6536\u7d0d\u3002"
  },
  {
    id: "matterhorn-terminal",
    date: "2026-06-20",
    title: "T\u00e4sch Matterhorn Terminal \u505c\u8eca",
    category: "\u505c\u8eca",
    suggestedStorage: "\u9810\u8a02\u9801\u9762 / \u622a\u5716",
    note: "\u8a18\u5f97\u5728\u505c\u8eca\u52a9\u624b\u9801\u8a18\u9304\u6a13\u5c64\u8207\u5340\u57df\u3002"
  },
  {
    id: "zermatt-mountain",
    date: "2026-06-21",
    title: "Gornergrat / Matterhorn Glacier Paradise",
    category: "\u5c71\u5340\u7968\u5238",
    suggestedStorage: "\u96e2\u7dda QR Code",
    note: "\u4e0a\u5c71\u524d\u5148\u78ba\u8a8d\u5929\u6c23\u3001webcam\u3001\u98a8\u901f\u3002"
  },
  {
    id: "jungfraujoch",
    date: "2026-06-23",
    title: "Jungfraujoch ticket + seat reservation",
    category: "\u5c71\u5340\u7968\u5238",
    suggestedStorage: "\u96e2\u7dda QR Code + SBB App",
    note: "\u82e5\u5929\u6c23\u4e0d\u4f73\uff0c\u4fdd\u7559\u6539\u8d70\u6e56\u5340\u884c\u7a0b\u7684\u5f48\u6027\u3002"
  },
  {
    id: "flight-return",
    date: "2026-06-27",
    title: "\u56de\u7a0b\u6a5f\u7968 / \u9000\u7a05\u8cc7\u6599",
    category: "\u6a5f\u7968",
    suggestedStorage: "\u96e2\u7dda PDF + \u624b\u6a5f\u76f8\u7c3f",
    note: "LX180 17:55 ZRH \u2192 09:50(+1) BKK\uff1bBR212 12:25 BKK \u2192 17:15 TPE T2\u3002\u66fc\u8c37\u8f49\u6a5f 2h 35m\uff0c\u884c\u674e\u76f4\u639b\u3002"
  },
  {
    id: "airport-transfer-return",
    date: "2026-06-28",
    title: "\u5168\u92d2\u6a5f\u5834\u63a5\u9001\uff08\u56de\u7a0b\uff09",
    category: "\u6a5f\u5834\u63a5\u9001",
    suggestedStorage: "\u9810\u7d04\u55ae\u865f D3803621 / \u622a\u5716\u96e2\u7dda",
    note: "2026/06/28 (\u65e5) 17:15\uff1b\u6843\u5712\u6a5f\u5834\u4e8c\u822a \u2192 \u53f0\u4e2d\u5e02\u897f\u5c6f\u5340\u53f0\u7063\u5927\u9053\u56db\u6bb51360\u865f\u3002"
  }
];

export const parkingTasks: ParkingTask[] = [
  {
    id: "europcar-pickup",
    title: "Europcar Luzern \u53d6\u8eca",
    date: "2026-06-19",
    place: {
      id: "europcar-luzern-tool",
      name: "Europcar Lakefront Center Luzern",
      type: "parking",
      lat: 47.0475,
      lng: 8.3137,
      region: "Luzern"
    },
    checklist: [
      "\u8b77\u7167\u3001\u99d5\u7167\u3001\u570b\u969b\u99d5\u7167\u3001\u4fe1\u7528\u5361",
      "\u79df\u8eca voucher \u8207\u4fdd\u96aa\u689d\u4ef6",
      "\u62cd\u8eca\u8eab\u56db\u5468\u3001\u8f2a\u80ce\u3001\u6cb9\u91cf\u8207\u91cc\u7a0b\u6578"
    ],
    note: "\u53d6\u8eca\u5f8c\u5148\u8a2d\u5b9a\u7b2c\u4e00\u6bb5\u5c0e\u822a\u518d\u51fa\u767c\u3002"
  },
  {
    id: "tasch-parking",
    title: "T\u00e4sch Matterhorn Terminal \u505c\u8eca",
    date: "2026-06-20",
    place: {
      id: "tasch-terminal-tool",
      name: "T\u00e4sch Matterhorn Terminal",
      type: "parking",
      lat: 46.0673,
      lng: 7.7766,
      region: "Valais"
    },
    checklist: [
      "\u8a18\u9304\u6a13\u5c64\u3001\u5340\u57df\u3001\u8eca\u4f4d\u865f\u78bc",
      "\u78ba\u8a8d\u63a5\u99c1\u706b\u8eca\u65b9\u5411",
      "\u5c07\u8eca\u4f4d\u7167\u7247\u653e\u5165\u76f8\u7c3f"
    ],
    note: "Zermatt \u70ba\u7121\u8eca\u5c71\u57ce\uff0c\u8eca\u5b50\u9700\u505c\u5728 T\u00e4sch\u3002"
  },
  {
    id: "grindelwald-terminal",
    title: "Grindelwald Terminal Parking",
    date: "2026-06-23",
    place: {
      id: "grindelwald-terminal-tool",
      name: "Grindelwald Terminal",
      type: "parking",
      lat: 46.6246,
      lng: 8.0189,
      region: "Grindelwald"
    },
    checklist: [
      "\u5148\u67e5 Jungfraujoch \u5929\u6c23\u8207 webcam",
      "\u9810\u7559\u6392\u968a\u8207\u8f49\u4e58\u6642\u9593",
      "\u8a18\u9304\u505c\u8eca\u5340\u57df\u8207\u4ed8\u8cbb\u65b9\u5f0f"
    ],
    note: "\u82e5\u5929\u6c23\u4e0d\u4f73\uff0c\u53ef\u6539\u70ba Interlaken / Spiez \u6e56\u5340\u884c\u7a0b\u3002"
  },
  {
    id: "lauterbrunnen-parking",
    title: "Lauterbrunnen Parking",
    date: "2026-06-24",
    place: {
      id: "lauterbrunnen-parking-tool",
      name: "Lauterbrunnen Parking",
      type: "parking",
      lat: 46.596,
      lng: 7.9077,
      region: "Lauterbrunnen"
    },
    checklist: [
      "\u65fa\u5b63\u505c\u8eca\u4f4d\u8f03\u7dca\u5f35\uff0c\u5efa\u8b70\u65e9\u5230",
      "\u78ba\u8a8d Staubbach Falls \u8207 Tr\u00fcmmelbachf\u00e4lle \u8def\u7dda",
      "\u82e5\u96e8\u52e2\u5927\uff0c\u5c71\u8c37\u6b65\u9053\u6ce8\u610f\u6fd5\u6ed1"
    ],
    note: "\u9069\u5408\u4e0a\u5348\u9032\u5165\u5c71\u8c37\uff0c\u4e0b\u5348\u518d\u56de\u6e56\u5340\u3002"
  },
  {
    id: "europcar-return",
    title: "Europcar Luzern \u9084\u8eca",
    date: "2026-06-25",
    place: {
      id: "europcar-return-tool",
      name: "Europcar Lakefront Center Luzern",
      type: "parking",
      lat: 47.0475,
      lng: 8.3137,
      region: "Luzern"
    },
    checklist: [
      "\u52a0\u6cb9\u898f\u5247\u8207\u6cb9\u91cf\u78ba\u8a8d",
      "\u79c1\u4eba\u7269\u54c1\u3001\u5145\u96fb\u7dda\u3001\u884c\u674e\u6aa2\u67e5",
      "\u62cd\u9084\u8eca\u5f8c\u8eca\u8eab\u72c0\u614b"
    ],
    note: "\u9084\u8eca\u5f8c\u6539\u642d Luzern \u5230 Z\u00fcrich \u706b\u8eca\u3002"
  }
];
