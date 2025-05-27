import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface User {
  id: number;
  discordId: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export default async function DashboardPage() {
  const cookieStore = await cookies(); // ✅ await here

  const cookieHeader = cookieStore
    .getAll()
    .map(c => `${c.name}=${c.value}`)
    .join('; ');

  const res = await fetch('https://api.tenkaistudio.com/profile/user', {
    headers: {
      Cookie: cookieHeader,
    },
    credentials: 'include',
    cache: 'no-store',
  });

  const raw = await res.text();

  if (!res.ok) {
    console.error('Error response from backend:', raw);
    redirect('/login');
  }

  let user: User;
  try {
    const parsed = JSON.parse(raw);
    user = parsed.user;
  } catch (err) {
    console.error('Failed to parse JSON:', raw);
    return <div>❌ Failed to load user profile</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">🎉 Welcome back!</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Discord ID:</strong> {user.discordId}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Created:</strong> {new Date(user.createdAt).toLocaleString()}</p>
        <p><strong>Updated:</strong> {new Date(user.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
}
