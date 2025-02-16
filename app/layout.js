import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvidor from "./store/StoreProvidor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatAi",
  description: "Generate your AI Helper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvidor>
        {children}
        </StoreProvidor>
      </body>
    </html>
  );
}
