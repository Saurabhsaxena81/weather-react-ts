import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { text } from "stream/consumers";

import { useTheme } from "@/context/theme-provider";

export function Layout({ children }: PropsWithChildren) {
    const { theme } = useTheme();
  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
      <div className={`container mx-auto px-4 text-center ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
          <p>Made with 💗 by Saurabh Saxena</p>
        </div>
      </footer>
    </div>
  );
}
