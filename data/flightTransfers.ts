export interface AirportTransfer {
  id: string;
  reservationNo: string;
  dateTime: string;
  pickup: string;
  dropoff: string;
  note: string;
}

export interface FlightSegment {
  id: string;
  flightNo: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  from: string;
  to: string;
  duration: string;
  cabin: string;
}

export interface FlightTransferGroup {
  id: string;
  title: string;
  dateRange: string;
  dayIds: number[];
  transfers: AirportTransfer[];
  segments: FlightSegment[];
  transitNote: string;
  luggageNote: string;
}

export const flightTransferGroups: FlightTransferGroup[] = [
  {
    id: "outbound",
    title: "\u53bb\u7a0b\uff1a\u53f0\u7063 \u2192 \u745e\u58eb",
    dateRange: "2026/06/18-2026/06/19",
    dayIds: [1, 2],
    transfers: [
      {
        id: "outbound-transfer",
        reservationNo: "D3803617",
        dateTime: "2026/06/18 (\u56db) 13:30",
        pickup: "\u53f0\u4e2d\u5e02\u897f\u5c6f\u5340\u53f0\u7063\u5927\u9053\u56db\u6bb51360\u865f",
        dropoff: "\u6843\u5712\u6a5f\u5834\u4e8c\u822a",
        note: "\u5168\u92d2\u6a5f\u5834\u63a5\u9001\uff1b\u5efa\u8b70\u63d0\u524d\u78ba\u8a8d\u53f8\u6a5f\u806f\u7d61\u65b9\u5f0f\u8207\u884c\u674e\u4ef6\u6578\u3002"
      }
    ],
    segments: [
      {
        id: "sq879",
        flightNo: "SQ879",
        departureDate: "2026/06/18",
        departureTime: "17:45",
        arrivalDate: "2026/06/18",
        arrivalTime: "22:15",
        from: "\u6843\u5712\u6a5f\u5834 T2 (TPE)",
        to: "\u65b0\u52a0\u5761\u6a1f\u5b9c\u6a5f\u5834 (SIN)",
        duration: "4h 30m",
        cabin: "\u7d93\u6fdf\u8259 N"
      },
      {
        id: "lx177",
        flightNo: "LX177",
        departureDate: "2026/06/18",
        departureTime: "23:25",
        arrivalDate: "2026/06/19",
        arrivalTime: "06:15 (+1\u5929)",
        from: "\u65b0\u52a0\u5761\u6a1f\u5b9c\u6a5f\u5834 T2 (SIN)",
        to: "\u8607\u9ece\u4e16\u6a5f\u5834 (ZRH)",
        duration: "12h 50m",
        cabin: "\u7d93\u6fdf\u8259 L"
      }
    ],
    transitNote: "\u65b0\u52a0\u5761\u8f49\u6a5f 1h 10m\uff08\u4e0d\u540c\u822a\u5ec8\uff09",
    luggageNote: "\u884c\u674e\u76f4\u639b\u5230\u8607\u9ece\u4e16\uff0c\u8f49\u6a5f\u6642\u4ecd\u5efa\u8b70\u7559\u610f\u767b\u6a5f\u9580\u8207\u5b89\u6aa2\u6642\u9593\u3002"
  },
  {
    id: "return",
    title: "\u56de\u7a0b\uff1a\u745e\u58eb \u2192 \u53f0\u7063",
    dateRange: "2026/06/27-2026/06/28",
    dayIds: [10, 11],
    transfers: [
      {
        id: "return-transfer",
        reservationNo: "D3803621",
        dateTime: "2026/06/28 (\u65e5) 17:15",
        pickup: "\u6843\u5712\u6a5f\u5834\u4e8c\u822a",
        dropoff: "\u53f0\u4e2d\u5e02\u897f\u5c6f\u5340\u53f0\u7063\u5927\u9053\u56db\u6bb51360\u865f",
        note: "\u5168\u92d2\u6a5f\u5834\u63a5\u9001\uff1b\u4e58\u8eca\u6642\u9593\u4f9d\u62b5\u9054\u6843\u5712\u6a5f\u5834\u6642\u9593\u5b89\u6392\u3002"
      }
    ],
    segments: [
      {
        id: "lx180",
        flightNo: "LX180",
        departureDate: "2026/06/27",
        departureTime: "17:55",
        arrivalDate: "2026/06/28",
        arrivalTime: "09:50 (+1\u5929)",
        from: "\u8607\u9ece\u4e16\u6a5f\u5834 (ZRH)",
        to: "\u66fc\u8c37\u8607\u51e1\u7d0d\u5e03\u6a5f\u5834 (BKK)",
        duration: "10h 55m",
        cabin: "\u7d93\u6fdf\u8259 U"
      },
      {
        id: "br212",
        flightNo: "BR212",
        departureDate: "2026/06/28",
        departureTime: "12:25",
        arrivalDate: "2026/06/28",
        arrivalTime: "17:15",
        from: "\u66fc\u8c37\u8607\u51e1\u7d0d\u5e03\u6a5f\u5834 (BKK)",
        to: "\u6843\u5712\u6a5f\u5834 T2 (TPE)",
        duration: "3h 50m",
        cabin: "\u7d93\u6fdf\u8259 M"
      }
    ],
    transitNote: "\u66fc\u8c37\u8f49\u6a5f 2h 35m",
    luggageNote: "\u884c\u674e\u76f4\u639b\u5230\u6843\u5712\u6a5f\u5834\uff0c\u56de\u7a0b\u8acb\u4fdd\u7559\u9000\u7a05\u3001\u9818\u884c\u674e\u8207\u63a5\u9001\u6703\u5408\u6642\u9593\u3002"
  }
];

export function getFlightTransferGroupsByDay(dayId: number) {
  return flightTransferGroups.filter((group) => group.dayIds.includes(dayId));
}
