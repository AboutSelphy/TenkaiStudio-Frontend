// app/dashboard/page.tsx
import UserProfile from '@/models/UserProfile';

export default function Dashboard() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <UserProfile />
    </main>
  );
}
