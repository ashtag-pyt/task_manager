import "./globals.css";
import SideBar from "@/components/SideBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SideBar/>
        {children}</body>
    </html>
  );
}

