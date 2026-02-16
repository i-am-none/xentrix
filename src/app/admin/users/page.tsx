import UserTable from "@/components/admin/UserTable";

export default function AdminUsersPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight mb-2">User Management</h1>
                <p className="text-gray-500 text-sm">Manage access and roles.</p>
            </div>
            <button className="px-4 py-2 bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-neon-cyan transition-colors">
                Add User
            </button>
        </header>

        <UserTable />
    </div>
  );
}
