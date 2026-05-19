"use client";

import { WifiOff } from "lucide-react";
import { useEffect, useState } from "react";

const labels = {
  offline: "\u76ee\u524d\u96e2\u7dda\uff0c\u986f\u793a\u5df2\u5feb\u53d6\u7684\u65c5\u884c\u8cc7\u6599\u3002",
  online: "\u7db2\u8def\u5df2\u6062\u5fa9\u3002"
};

export function OfflineNotice() {
  const [online, setOnline] = useState(true);
  const [showBackOnline, setShowBackOnline] = useState(false);

  useEffect(() => {
    setOnline(navigator.onLine);

    function handleOffline() {
      setOnline(false);
      setShowBackOnline(false);
    }

    function handleOnline() {
      setOnline(true);
      setShowBackOnline(true);
      window.setTimeout(() => setShowBackOnline(false), 2400);
    }

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  if (online && !showBackOnline) return null;

  return (
    <div className="fixed inset-x-4 top-20 z-[60] md:top-24">
      <div className="mx-auto flex max-w-xl items-center gap-3 rounded-2xl bg-lake-900 px-4 py-3 text-sm font-black text-white shadow-soft ring-1 ring-white/10">
        <WifiOff className="h-4 w-4 shrink-0" />
        <span>{online ? labels.online : labels.offline}</span>
      </div>
    </div>
  );
}

