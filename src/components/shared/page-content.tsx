"use client";

import { useEffect, useState } from "react";

interface PageContentProps {
  title: string;
}

export function PageContent({ title }: PageContentProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div
        className={`text-4xl font-bold transition-all duration-500 ${
          isLoaded
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        {title}
      </div>
      <div
        className={`mt-4 text-muted-foreground transition-all duration-700 delay-200 ${
          isLoaded
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-10"
        }`}
      >
        This is the {title} page
      </div>
    </div>
  );
}
