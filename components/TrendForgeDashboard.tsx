'use client';
import React, { useEffect, useState } from 'react';

interface Trend {
  title: string;
  date: string;
  google_interest: number;
  reddit_upvotes: number;
  platforms: string;
  trend_score: number;
}

export default function TrendForgeDashboard() {
  const [trends, setTrends] = useState<Trend[]>([]);

  useEffect(() => {
    fetch('https://trendforge-api.onrender.com/top-trends')
      .then(res => res.json())
      .then(data => setTrends(data))
      .catch(err => console.error('Failed to fetch trends:', err));
  }, []);

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-3xl font-bold mb-6">🔥 TrendForge AI Weekly Trends</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {trends.map((trend, i) => (
          <div key={i} className="border p-5 rounded-xl shadow hover:shadow-lg transition">
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(trend.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:underline"
            >
              {trend.title}
            </a>
            <p className="text-sm text-gray-500">{trend.date}</p>
            <p className="text-sm mt-1">📈 Google Interest: {trend.google_interest}</p>
            <p className="text-sm">⬆️ Reddit Upvotes: {trend.reddit_upvotes}</p>
            <p className="text-sm text-gray-600">🧠 Platforms: {trend.platforms}</p>
            <p className="text-xs mt-2 italic">
              🚀 Smart Tip: Create content on "{trend.title}" now!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
