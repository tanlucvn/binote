"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-3 h-3 rounded-full border border-black dark:border-none bg-transparent dark:bg-white"
            aria-label="Toggle theme"
          >
            <span className="block w-3 h-3 rounded-full"></span>
          </button>
        </TooltipTrigger>
        <TooltipContent sideOffset={20}>
          <p>Switch theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
