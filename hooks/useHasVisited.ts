"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "hasVisited";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): boolean {
  return localStorage.getItem(STORAGE_KEY) === "true";
}

function getServerSnapshot(): boolean {
  return true;
}

export function useHasVisited() {
  const hasVisited = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const markAsVisited = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    window.dispatchEvent(new Event("storage"));
  };

  return { hasVisited, markAsVisited };
}
