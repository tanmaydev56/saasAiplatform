// app/auth/AuthLayout.tsx (or wherever you structure your layouts)
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased min-h-screen flex items-center justify-center bg-gray-50">
        <main className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
          {children}
        </main>
      </body>
    </html>
  );
}
