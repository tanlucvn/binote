"use client";

import { cn } from "@/lib/utils";
import Logo from "@/components/logo";
import { useScrollTop } from "@/hooks/use-scroll-top";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "../ui/button";

const Navbar = () => {
  const scrolled = useScrollTop();
  return (
    <nav
      className={cn(
        "z-30 bg-background dark:bg-[#1F1F1F] sticky top-0 flex items-center w-full px-[15px] py-[15px] mx-auto inset-x-0",
        scrolled && "border-b dark:border-zinc-600"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button variant="ghost" size="sm">
          Log in
        </Button>
        <Button size="sm">Get Motion free</Button>

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
