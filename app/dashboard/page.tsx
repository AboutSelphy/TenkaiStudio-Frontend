import { cookies } from 'next/headers';

export default async function DashboardPage() {
  const cookieStore = await cookies();  // <-- await here

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

  if (!res.ok) {
    // Handle errors (like 401 unauthorized)
    return <div>Not logged in</div>;
  }

  const user = await res.json();

  return (
    <div>
      Welcome, {user.discordId || user.name || 'user'}
    </div>
  );
}
