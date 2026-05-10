import { daysUntil } from "@/lib/format";

export interface WeatherDaily {
  maxTemp: number;
  minTemp: number;
  precipitationProbability: number;
  weatherCode: number;
  cloudCover?: number;
  windSpeed?: number;
}

export interface WeatherResult {
  status: "available" | "out-of-range" | "error" | "loading";
  daily?: WeatherDaily;
  updatedAt?: string;
  message?: string;
}

interface OpenMeteoResponse {
  daily?: {
    temperature_2m_max?: number[];
    temperature_2m_min?: number[];
    precipitation_probability_max?: number[];
    weather_code?: number[];
    cloud_cover_mean?: number[];
    wind_speed_10m_max?: number[];
  };
}

export function isForecastAvailable(date: string) {
  const diff = daysUntil(date);
  return diff >= 0 && diff <= 16;
}

export async function fetchWeatherForecast(lat: number, lng: number, date: string): Promise<WeatherResult> {
  if (!isForecastAvailable(date)) {
    return {
      status: "out-of-range",
      message: "尚未進入天氣預報範圍，建議出發前 7–10 天查看。"
    };
  }

  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lng),
    daily: "temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code,cloud_cover_mean,wind_speed_10m_max",
    timezone: "auto",
    start_date: date,
    end_date: date
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`, {
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Open-Meteo request failed");
    }

    const data = (await response.json()) as OpenMeteoResponse;
    const daily = data.daily;

    if (!daily?.temperature_2m_max?.length || !daily.temperature_2m_min?.length) {
      throw new Error("Open-Meteo response missing daily data");
    }

    return {
      status: "available",
      updatedAt: new Date().toISOString(),
      daily: {
        maxTemp: daily.temperature_2m_max[0],
        minTemp: daily.temperature_2m_min[0],
        precipitationProbability: daily.precipitation_probability_max?.[0] ?? 0,
        weatherCode: daily.weather_code?.[0] ?? 0,
        cloudCover: daily.cloud_cover_mean?.[0],
        windSpeed: daily.wind_speed_10m_max?.[0]
      }
    };
  } catch {
    return {
      status: "error",
      message: "天氣資料暫時讀取失敗，請稍後再試。"
    };
  }
}

export function weatherLabel(code: number) {
  if ([0].includes(code)) return "晴朗";
  if ([1, 2, 3].includes(code)) return "多雲";
  if ([45, 48].includes(code)) return "有霧";
  if ([51, 53, 55, 56, 57].includes(code)) return "毛毛雨";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "降雨";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "降雪";
  if ([95, 96, 99].includes(code)) return "雷雨";
  return "天氣";
}

export function weatherIcon(code: number) {
  if ([0].includes(code)) return "☀";
  if ([1, 2, 3].includes(code)) return "☁";
  if ([45, 48].includes(code)) return "≋";
  if ([51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "☂";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄";
  if ([95, 96, 99].includes(code)) return "⚡";
  return "◐";
}
