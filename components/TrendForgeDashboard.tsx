'use client';
import React, { useEffect, useState } from 'react';

export default function TrendForgeDashboard() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    fetch('https://trendforge-api.onrender.com/top-trends')
      .then(res => res.json())
      .then(data => setTrends(data));
  }, []);

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-3xl font-bold mb-4">🔥 TrendForge AI Weekly Trends</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {trends.map((trend, i) => (
          <div key={i} className="border p-4 rounded-xl shadow">
            <h2 className="text-xl font-semibold">{trend.title}</h2>
            <p className="text-sm text-gray-600">{trend.date}</p>
            <p className="text-sm">Google Interest: {trend.google_interest}</p>
            <p className="text-sm">Reddit Upvotes: {trend.reddit_upvotes}</p>
            <p className="text-xs mt-2 italic">
              Smart Suggestion: Capitalize on '{trend.title}' with engaging content!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}