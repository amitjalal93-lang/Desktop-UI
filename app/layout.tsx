import "./globals.css";
import Sidebar from "../components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-700 select-none">
        <Sidebar />

        <main>{children}</main>
      </body>
    </html>
  );
}
