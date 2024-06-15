import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <svg
        className="w-5 h-5 mb-[2px]"
        viewBox="0 0 63 63"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M63 31.4C63 14 48.9 -6.1633e-07 31.6 -1.37254e-06C14.2 -2.13312e-06 0.199981 14.1 0.19998 31.4C0.19998 48.7 14.3 62.8 31.6 62.8C48.9 62.8 63 48.8 63 31.4ZM13.4 41.1C13.4 31 21.6 22.9 31.6 22.9C41.6 22.9 49.8 31.1 49.8 41.1C49.8 51.2 41.6 59.3 31.6 59.3C21.6 59.3 13.4 51.2 13.4 41.1Z"
          fill="currentColor"
        />
        <path
          d="M63 31.4C63 14 48.9 -6.1633e-07 31.6 -1.37254e-06C14.2 -2.13312e-06 0.199981 14.1 0.19998 31.4C0.19998 48.7 14.3 62.8 31.6 62.8C48.9 62.8 63 48.8 63 31.4ZM13.4 41.1C13.4 31 21.6 22.9 31.6 22.9C41.6 22.9 49.8 31.1 49.8 41.1C49.8 51.2 41.6 59.3 31.6 59.3C21.6 59.3 13.4 51.2 13.4 41.1Z"
          fill="currentColor"
          fillOpacity="0.2"
        />
      </svg>
      <p className={cn("font-semibold text-lg", font.className)}>BiNote</p>
    </div>
  );
};

export default Logo;
