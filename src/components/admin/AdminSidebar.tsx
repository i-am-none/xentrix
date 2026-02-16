"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Users, 
  Trophy, 
  Gamepad2, 
  Image as ImageIcon, 
  ShoppingBag, 
  Settings, 
  LogOut 
} from "lucide-react";
import { cn } from "@/utils/cn";

const ADMIN_LINKS = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Users & Roles", href: "/admin/users", icon: Users },
  { name: "Teams & Players", href: "/admin/teams", icon: Gamepad2 },
  { name: "Tournaments", href: "/admin/tournaments", icon: Trophy },
  { name: "Media Content", href: "/admin/media", icon: ImageIcon },
  { name: "Shop & Sales", href: "/admin/shop", icon: ShoppingBag },
  { name: "System Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-zinc-950 border-r border-white/10 flex flex-col h-screen sticky top-0">
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-white/10">
        <span className="text-xl font-bold tracking-widest text-white uppercase">
            XENTRIX <span className="text-neon-cyan text-xs ml-1 align-top">OPS</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {ADMIN_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive 
                        ? "bg-white/10 text-white" 
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
            >
                <link.icon className="w-4 h-4" />
                {link.name}
            </Link>
          );
        })}
      </nav>

      {/* User / Logout */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 mb-4 px-2">
            <div className="w-8 h-8 rounded-full bg-electric-purple flex items-center justify-center text-xs font-bold text-white">
                AD
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-bold text-white truncate">Admin User</p>
                <p className="text-xs text-gray-500 truncate">Super Admin</p>
            </div>
        </div>
        <button className="w-full flex items-center gap-2 justify-center px-4 py-2 bg-red-900/20 text-red-500 hover:bg-red-900/40 text-xs font-bold uppercase tracking-widest rounded-md transition-colors">
            <LogOut className="w-3 h-3" /> Logout
        </button>
      </div>
    </aside>
  );
}
