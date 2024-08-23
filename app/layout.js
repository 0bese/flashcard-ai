import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Flashcards-ai",
  description: "AI generated flashcards about a topic",
};

export default function RootLayout({ children }) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div>{userId ? <Navbar /> : ""}</div>
          <div>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
