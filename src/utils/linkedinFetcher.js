// LinkedIn Epoch Feed Fetcher
// Uses local cache and handles CORS/API proxying with automatic fallback

import { epoch } from "../data/content";

const CACHE_KEY = "epoch_linkedin_feed_cache";
const CACHE_TIME_KEY = "epoch_linkedin_feed_time";
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

export async function fetchEpochLinkedInPosts() {
  // Check local cache
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const cachedTime = localStorage.getItem(CACHE_TIME_KEY);
    if (cachedData && cachedTime && Date.now() - parseInt(cachedTime, 10) < CACHE_TTL_MS) {
      return {
        source: "cache",
        posts: JSON.parse(cachedData),
        lastSync: new Date(parseInt(cachedTime, 10)).toLocaleDateString(),
      };
    }
  } catch (e) {
    // LocalStorage error or private mode
  }

  // If environment provides an API proxy route (e.g. Vercel function or webhook)
  const proxyUrl = import.meta.env.VITE_LINKEDIN_PROXY_URL;
  if (proxyUrl) {
    try {
      const response = await fetch(proxyUrl, {
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(data));
            localStorage.setItem(CACHE_TIME_KEY, Date.now().toString());
          } catch (e) {}
          return {
            source: "live",
            posts: data,
            lastSync: new Date().toLocaleDateString(),
          };
        }
      }
    } catch (err) {
      console.warn("LinkedIn proxy fetch failed, using fallback:", err);
    }
  }

  // Graceful fallback to verified curated dispatches
  return {
    source: "curated",
    posts: epoch.dispatches,
    lastSync: "September 2026",
  };
}
