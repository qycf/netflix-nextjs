import GlobalState from "@/context";
import "./globals.css";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/auth-provider";
import apiFetch from '@/utils/request';
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// let metadata = null;

export async function generateMetadata() {
  try {
    const { data } = await apiFetch(`/options?key=site_settings`, {
      method: "GET",
    });
    const siteSettings = JSON.parse(data.data.optionValue)
    // metadata = siteSettings
    return {
      title: siteSettings.siteTitle,
      description: siteSettings.siteDescription,
      keywords: siteSettings.siteKeywords,
      icons: {
        icon: siteSettings.siteFavicon || "/favicon.ico",
      }
    }
  }
  catch (e) {
    return {
      title: "Netflix — 在线观看电影和电视节目",
      description: "Watch Netflix movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more.",
      keywords: "watch movies, watch TV shows, Netflix, Netflix movies, Netflix TV shows, watch Netflix, Netflix online, stream movies, stream TV shows, watch online, movies online, TV shows online",
    }
  }
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <Head>
      </Head>
      <body className={inter.className}>
        <NextAuthProvider>
          <GlobalState >
            {children}
          </GlobalState>
        </NextAuthProvider>
      </body>
    </html >
  );
}
