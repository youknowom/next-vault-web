import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "create-next-vault — Next.js Project Generator",
  description:
    "A CLI tool to instantly scaffold a professional Next.js project with Tailwind, shadcn/ui, and more.",
  keywords: [
    "next.js",
    "cli",
    "scaffold",
    "tailwind",
    "shadcn",
    "react",
    "javascript",
    "starter",
    "template",
  ],
  authors: [{ name: "Omkar Bagul" }],
  openGraph: {
    title: "create-next-vault — Next.js Project Generator",
    description:
      "A CLI tool to instantly scaffold a professional Next.js project with Tailwind, shadcn/ui, and more.",
    url: "https://create-next-vault.vercel.app",
    siteName: "create-next-vault",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "create-next-vault — Next.js Project Generator",
    description:
      "A CLI tool to instantly scaffold a professional Next.js project with Tailwind, shadcn/ui, and more.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
