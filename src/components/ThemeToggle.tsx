"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const handleToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div>
      <Switch
        id="toggle-theme"
        checked={isDarkMode}
        onCheckedChange={handleToggle}
        aria-label="Toggle theme"
      />
    </div>
  );
};

export default ThemeToggle;
