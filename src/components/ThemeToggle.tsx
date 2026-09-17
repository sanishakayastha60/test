"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);
  return (
    <div className="">
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute bottom-4 right-4 border p-2 rounded-full bg-blue-200 dark:bg-pink-200"
      >
        {isDark ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}
