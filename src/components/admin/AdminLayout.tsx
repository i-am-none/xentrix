"use client";

import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-black text-white font-sans selection:bg-neon-cyan/30">
        <AdminSidebar />
        <main className="flex-1 min-w-0 bg-black">
            {children}
        </main>
    </div>
  );
}
