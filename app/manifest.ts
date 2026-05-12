import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "\u590f\u5b63\u7684\u745e\u58eb\u963f\u723e\u5351\u65af\u81ea\u99d5\u904a",
    short_name: "\u745e\u58eb\u81ea\u99d5\u904a",
    description: "2026 \u5e74 6 \u6708\u745e\u58eb 11 \u5929\u6e56\u5c71\u9435\u9053\u8207\u81ea\u99d5\u65c5\u884c\u898f\u5283\u3002",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f8fafc",
    theme_color: "#082f3d",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
