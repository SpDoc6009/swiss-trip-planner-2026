"use client";

import { useEffect, useState } from "react";
import { CloudSun, Mountain, RefreshCw, Wind } from "lucide-react";

import { fetchWeatherForecast, type WeatherResult, weatherIcon, weatherLabel } from "@/lib/weather";
import type { ItineraryDay, TripPlace } from "@/types/trip";

const highMountainIds = new Set(["gornergrat", "jungfraujoch", "pilatus", "matterhorn-glacier-paradise", "klein-matterhorn"]);

export function WeatherCard({ day, place }: { day: ItineraryDay; place: TripPlace }) {
  const [weather, setWeather] = useState<WeatherResult>({ status: "loading" });

  useEffect(() => {
    let active = true;
    setWeather({ status: "loading" });

    fetchWeatherForecast(place.lat, place.lng, day.date).then((result) => {
      if (active) setWeather(result);
    });

    return () => {
      active = false;
    };
  }, [day.date, place.lat, place.lng]);

  const isMountain = highMountainIds.has(place.id) || place.type === "mountain";

  return (
    <section className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-200 dark:bg-white/8 dark:ring-white/10">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-black uppercase tracking-wide text-slate-500 dark:text-slate-300">Weather</p>
          <h3 className="mt-1 text-lg font-black text-lake-900 dark:text-white">{place.name}</h3>
        </div>
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lake-50 text-lake-900 dark:bg-white/10 dark:text-white">
          <CloudSun className="h-6 w-6" />
        </span>
      </div>

      {weather.status === "loading" ? (
        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-slate-50 p-4 text-sm font-bold text-slate-600 dark:bg-lake-900/50 dark:text-slate-300">
          <RefreshCw className="h-4 w-4 animate-spin" />
          讀取天氣資料中
        </div>
      ) : null}

      {weather.status === "available" && weather.daily ? (
        <div className="mt-5">
          <div className="grid grid-cols-[auto_1fr] gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-lake-900 text-3xl font-black text-white dark:bg-white dark:text-lake-900">
              {weatherIcon(weather.daily.weatherCode)}
            </div>
            <div>
              <p className="text-xl font-black text-lake-900 dark:text-white">{weatherLabel(weather.daily.weatherCode)}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                最高 {Math.round(weather.daily.maxTemp)}°C / 最低 {Math.round(weather.daily.minTemp)}°C
              </p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">降雨機率 {weather.daily.precipitationProbability}%</p>
            </div>
          </div>
          <div className="mt-4 grid gap-2 text-sm text-slate-600 dark:text-slate-300">
            {weather.daily.cloudCover !== undefined ? <p>雲量：{Math.round(weather.daily.cloudCover)}%</p> : null}
            {weather.daily.windSpeed !== undefined ? (
              <p className="flex items-center gap-1">
                <Wind className="h-4 w-4" />
                風速：{Math.round(weather.daily.windSpeed)} km/h
              </p>
            ) : null}
            {weather.updatedAt ? <p>更新時間：{new Date(weather.updatedAt).toLocaleString("zh-TW")}</p> : null}
          </div>
        </div>
      ) : null}

      {weather.status === "out-of-range" || weather.status === "error" ? (
        <div className="mt-5 rounded-2xl bg-lake-50 p-4 text-sm leading-6 text-lake-900 dark:bg-white/8 dark:text-slate-100">
          {weather.message}
        </div>
      ) : null}

      <div className="mt-4 rounded-2xl border border-slate-200 p-4 text-sm leading-6 text-slate-600 dark:border-white/10 dark:text-slate-300">
        <p className="font-black text-lake-900 dark:text-white">6 月瑞士穿著提醒</p>
        <p className="mt-1">洋蔥式穿搭、防風外套、防水鞋、太陽眼鏡、防曬都建議帶上。</p>
        {isMountain ? (
          <p className="mt-2 flex gap-2 font-bold text-swiss-red">
            <Mountain className="mt-0.5 h-4 w-4 shrink-0" />
            高山景點請特別看雲量與風速，天氣不清楚時保留彈性。
          </p>
        ) : null}
      </div>
    </section>
  );
}
