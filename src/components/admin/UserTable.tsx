"use client";

import { Edit, MoreHorizontal, Trash2 } from "lucide-react";

const USERS = [
    { id: 1, name: "Nexus_Prime", email: "nexus@xentrix.gg", role: "User", status: "Active", joined: "Oct 24, 2025" },
    { id: 2, name: "Viper_X", email: "viper@xentrix.gg", role: "Moderator", status: "Active", joined: "Nov 12, 2025" },
    { id: 3, name: "Ghost_Ops", email: "ghost@xentrix.gg", role: "User", status: "Suspended", joined: "Dec 01, 2025" },
    { id: 4, name: "Sarah_Connor", email: "sarah@xentrix.gg", role: "Admin", status: "Active", joined: "Jan 10, 2026" },
];

export default function UserTable() {
  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-wider text-gray-400">
                    <th className="p-4 font-medium">User</th>
                    <th className="p-4 font-medium">Role</th>
                    <th className="p-4 font-medium">Status</th>
                    <th className="p-4 font-medium">Joined</th>
                    <th className="p-4 font-medium text-right">Actions</th>
                </tr>
            </thead>
            <tbody className="text-sm text-gray-300">
                {USERS.map((user) => (
                    <tr key={user.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="p-4">
                            <div className="font-bold text-white">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.email}</div>
                        </td>
                        <td className="p-4">
                            <span className={`px-2 py-1 rounded text-xs font-bold ${user.role === 'Admin' ? 'bg-purple-900/30 text-purple-400 border border-purple-500/20' : 'bg-zinc-800 text-gray-400'}`}>
                                {user.role}
                            </span>
                        </td>
                        <td className="p-4">
                            <span className={`flex items-center gap-2 text-xs font-bold ${user.status === 'Active' ? 'text-green-500' : 'text-red-500'}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`} />
                                {user.status}
                            </span>
                        </td>
                        <td className="p-4 font-mono text-xs">{user.joined}</td>
                        <td className="p-4 text-right">
                             <button className="text-gray-500 hover:text-white p-1">
                                <MoreHorizontal className="w-4 h-4" />
                             </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}
