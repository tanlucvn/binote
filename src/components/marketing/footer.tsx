import { ChevronDown, Facebook, Globe, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/logo";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-10 px-14 lg:py-20 lg:px-28 gap-9 lg:gap-24">
      <div className="grow-0 flex flex-col gap-6">
        <Logo />
        <div className="flex flex-col">
          <div className="flex -ml-2">
            <Button variant="ghost" size="icon">
              <Link
                href="https://github.com/tanlucvn"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="text-zinc-700  dark:text-zinc-300 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon">
              <Link
                href="https://fb.com/tanluc1e"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Facebook className="text-zinc-700 dark:text-zinc-300 w-5 h-5" />
              </Link>
            </Button>
          </div>
          <div className="pt-3">
            <Button variant="outline" className="dark:border-zinc-500">
              <Globe className="text-zinc-700 dark:text-zinc-300 mr-2 w-4 h-4" />
              English
              <ChevronDown className="text-zinc-700 dark:text-zinc-300 ml-2 h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      <div className="grow w-full flex flex-col">
        <div className="grid md:grid-cols-3">
          <ul className="mb-8">
            <li className="pb-2 font-bold">Product</li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Wikis
            </li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Projects
            </li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Docs
            </li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Planing
            </li>
          </ul>
          <ul className="mb-8">
            <li className="pb-2 font-bold">Download</li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              iOS & Android
            </li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Mac & Windows
            </li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Web Clipper
            </li>
          </ul>
          <ul className="mb-8">
            <li className="pb-2 font-bold">Get started</li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Switch from Confluence
            </li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Switch from Asana
            </li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Switch from Evernote
            </li>
            <li className="pb-1 text-zinc-500 dark:text-zinc-300 hover:text-sky-500 dark:hover:text-sky-600 hover:underline hover:cursor-pointer">
              Compare vs Monday
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-1 pt-4">
          <p className="text-sm font-semibold">
            Your use of the site is solely at your own risk.
          </p>
          <p className="text-muted-foreground text-sm">
            Created by{" "}
            <a
              className="hover:underline"
              href="https://github.com/tanlucvn"
              aria-label="Salimi"
              target="_blank"
              rel="noreferrer"
            >
              TanlucVN
            </a>{" "}
            &copy; {new Date().getFullYear()}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
