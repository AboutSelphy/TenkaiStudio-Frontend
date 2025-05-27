// components/dashboard/Sidebar.tsx
'use client';

import Link from 'next/link';

export function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r shadow-sm p-4">
      <h2 className="text-lg font-bold mb-6">Dashboard</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
          Home
        </Link>
        <Link href="/dashboard/profile" className="flex items-center gap-2 p-2 rounded hover:bg-gray-100">
          Profile
        </Link>
        {/* Add more links here */}
      </nav>
    </aside>
  );
}
