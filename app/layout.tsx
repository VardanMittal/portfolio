import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import "./globals.css";


export const metadata: Metadata = {
  title: "Vardan's Portfolio",
  description: "Automating boring stuff...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto">
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
