import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

// Set up Inter font with Latin subset for optimal performance
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

/**
 * Metadata for the application - used for SEO and browser tab information
 */
export const metadata: Metadata = {
  title: "Dashboard UI",
  description: "Modern gamified dashboard built with Next.js and Tailwind CSS",
};

/**
 * Root layout component that wraps the entire application
 * Provides theme support, font styling, and global layout structure
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {React.JSX.Element} The root layout component
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background font-sans antialiased ${inter.variable}`}
      >
        {/* Background image overlay with no interaction to maintain UI functionality */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: "url(/images/banner.png)",
            backgroundSize: "cover",
            zIndex: 100,
            pointerEvents: "none",
          }}
        />
        {/* Theme provider to manage light/dark modes */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main content container with higher z-index than background */}
          <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
