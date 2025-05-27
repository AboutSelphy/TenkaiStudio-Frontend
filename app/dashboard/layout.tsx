// app/dashboard/layout.tsx
import { Providers } from "@/app/providers";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header"; // Optional dashboard-only components
import clsx from "clsx";
import { fontSans } from "@/config/fonts";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow min-h-72">{children}</main>
      </div>
    </div>
        </Providers>
      </body>
    </html>
  );
}
