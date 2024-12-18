import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ahmed Atef Hegazy | Backend Developer",
  description:
    "Experienced .NET Backend Developer specializing in C#, ASP.NET Core, and Azure Cloud Services. View my portfolio, projects, and technical skills.",
  keywords: [
    "Backend Developer",
    ".NET Developer",
    "C# Developer",
    "Software Engineer",
    "Ahmed Atef Hegazy",
    "Azure Cloud",
    "ASP.NET Core",
    "SQL Server",
    "Cairo Developer",
  ],
  authors: [{ name: "Ahmed Atef Hegazy" }],
  creator: "Ahmed Atef Hegazy",
  publisher: "Ahmed Atef Hegazy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://[your-new-username].github.io/portfolio",
    title: "Ahmed Atef Hegazy | Backend Developer",
    description:
      "Experienced .NET Backend Developer specializing in C#, ASP.NET Core, and Azure Cloud Services.",
    siteName: "Ahmed Atef Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Atef Hegazy - Backend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Atef Hegazy | Backend Developer",
    description:
      "Experienced .NET Backend Developer specializing in C#, ASP.NET Core, and Azure Cloud Services.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
