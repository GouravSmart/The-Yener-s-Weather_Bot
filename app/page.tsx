"use client";

// import React from "react";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function Home() {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getWeather = async (): Promise<void> => {
    if (!city) return;
    setLoading(true);
    try {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
      if (!apiKey) {
        alert("API key not set. Please add it to your .env.local");
        setLoading(false);
        return;
      }

      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
      );
      setWeather(res.data);
    } catch (err: any) {
      alert("Error: " + (err.response?.data?.error?.message || err.message));
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <main className="flex-1 flex flex-col items-center justify-center px-4 mt-16">
        <h1 className="text-5xl font-bold mb-4">🌤️ Weather-Bot</h1>
        <p className="text-lg mb-6 text-center max-w-xl text-gray-300">
          Get real-time weather for any city, powered by WeatherAPI.com
        </p>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter city..."
            className="px-4 py-2 rounded-md w-64 border-2 border-black bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            onClick={getWeather}
            className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Get Forecast"}
          </button>
        </div>

        {weather && (
          <div className="bg-white/10 p-6 rounded-xl text-center shadow-lg backdrop-blur-md max-w-md w-full mb-8">
            <h2 className="text-2xl font-semibold">
              {weather.location.name}, {weather.location.country}
            </h2>
            <p className="text-xl mt-2 capitalize">{weather.current.condition.text}</p>
            <div className="mx-auto my-2 relative w-20 h-20">
              <Image
                src={`https:${weather.current.condition.icon}`}
                alt="Weather Icon"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
            <p className="text-5xl mt-2 font-light">{weather.current.temp_c}°C</p>
            <div className="mt-4 flex justify-center gap-6 text-sm text-gray-300">
              <div>🌡️ Feels: {weather.current.feelslike_c}°C</div>
              <div>💧 Humidity: {weather.current.humidity}%</div>
              <div>💨 Wind: {weather.current.wind_kph} kph</div>
            </div>
          </div>
        )}

        {/* Why Choose Us Section */}
        <div className="bg-white/5 p-6 rounded-xl text-center shadow-md max-w-2xl w-full mb-10">
          <h2 className="text-3xl font-bold mb-4 text-cyan-300">Why Choose Us?</h2>
          <p className="text-gray-300 mb-6">
            Weather-Bot brings you hyper-accurate weather data from trusted sources, with a sleek
            and scalable design perfect for personal or SaaS usage. Built with performance and
            simplicity in mind.
          </p>
          <a
            href="https://dev-yener.pantheonsite.io"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-6 rounded-md transition"
          >
            About Us
          </a>
        </div>
      </main>

      <footer className="text-center py-4 bg-gray-900 text-gray-400 border-t border-gray-700">
        © 2025 Weather-Bot. All rights reserved.
      </footer>
    </div>
  );
}
