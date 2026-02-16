"use client";

import { Home, LayoutDashboard, LineChart, Package, Settings, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

const NAV_ITEMS = [
  { icon: Home, label: "Overview", href: "/dashboard" },
  { icon: LineChart, label: "Stats", href: "/dashboard/stats" },
  { icon: Package, label: "Inventory", href: "/dashboard/inventory" },
  { icon: Users, label: "Community", href: "/dashboard/community" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  { icon: LayoutDashboard, label: "Admin Panel", href: "/admin", className: "text-red-500 hover:text-red-400" }, // Mock Admin Link
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row">
      
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 z-40 bg-zinc-950 border-b border-white/10 backdrop-blur-xl">
          <div className="flex items-center justify-between p-4">
              <Link href="/" className="block">
                  <img 
                      src="/logo/xentrix-logo.png" 
                      alt="Xentrix" 
                      className="h-8 w-auto object-contain" 
                  />
              </Link>
              <Link href="/" className="text-gray-400 hover:text-white text-sm font-bold uppercase tracking-widest">
                  Exit
              </Link>
          </div>
      </div>

      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-zinc-950/50 backdrop-blur-xl h-screen sticky top-0">
        <div className="p-8 border-b border-white/5">
            <Link href="/" className="block">
                <img 
                    src="/logo/xentrix-logo.png" 
                    alt="Xentrix" 
                    className="h-25 w-auto object-contain" 
                />
            </Link>
        </div>

        <nav className="flex-1 p-6 space-y-2">
            {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link 
                        key={item.href} 
                        href={item.href}
                        className={cn(
                            "flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-colors",
                            isActive 
                                ? "bg-white text-black" 
                                : "text-gray-500 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <item.icon className="w-4 h-4" />
                        {item.label}
                    </Link>
                )
            })}
        </nav>

        <div className="p-6 border-t border-white/5">
             <button className="w-full py-3 border border-red-900/50 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-950/30 rounded-xl transition-colors">
                Log Out
             </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950 border-t border-white/10 backdrop-blur-xl z-50">
          <nav className="flex justify-around items-center py-3 px-2">
              {NAV_ITEMS.slice(0, 4).map((item) => {
                  const isActive = pathname === item.href;
                  return (
                      <Link 
                          key={item.href} 
                          href={item.href}
                          className={cn(
                              "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors",
                              isActive 
                                  ? "bg-white text-black" 
                                  : "text-gray-500"
                          )}
                      >
                          <item.icon className="w-5 h-5" />
                          <span className="text-[10px] font-bold uppercase">{item.label}</span>
                      </Link>
                  )
              })}
          </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-20 md:pb-0">
        {children}
      </main>

    </div>
  );
}
