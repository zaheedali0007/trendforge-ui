'use client';
import React, { useEffect, useState } from 'react';

type Trend = {
  title: string;
  date: string;
  google_interest: number;
  reddit_upvotes: number;
};

export default function TrendForgeDashboard() {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://trendforge-api.onrender.com/top-trends')
      .then(res => res.json())
      .then(data => {
        setTrends(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold mb-8 text-center">🔥 TrendForge AI Weekly Trends</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading trends...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {trends.map((trend, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md transition hover:shadow-xl border border-gray-200"
            >
              <h2 className="text-xl font-semibold mb-2">{trend.title}</h2>
              <p className="text-sm text-gray-500 mb-1">📅 {trend.date}</p>
              <p className="text-sm text-blue-600">🔍 Google Interest: {trend.google_interest}</p>
              <p className="text-sm text-orange-600">⬆️ Reddit Upvotes: {trend.reddit_upvotes}</p>
              <p className="text-xs italic mt-2 text-gray-700">
                Smart Suggestion: Leverage <strong>{trend.title}</strong> in your content today!
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
