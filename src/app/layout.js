import {Geist, Geist_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/next";
import "./globals.css";
import site from "@/data/site.json";
import TopBar from "@/app/ui/components/topBar/TopBar";
import BottomBar from "@/app/ui/components/bottomBar/BottomBar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: {
        default: site.name,
        template: `%s | ${site.name}`,
    },
    description: `${site.name} — ${site.role}. ${site.bio}`,
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <TopBar/>
        {children}
        <BottomBar/>
        <Analytics/>
        </body>
        </html>
    );
}
