import { cookies } from 'next/headers';

export default async function DashboardPage() {
  const cookieStore = cookies(); // no await here

  const sessionCookie = cookieStore.get('discord.sid');
  const cookieHeader = sessionCookie ? `${sessionCookie.name}=${sessionCookie.value}` : '';

  const res = await fetch('https://api.tenkaistudio.com/profile/user', {
    headers: {
      Cookie: cookieHeader,
    },
    // credentials: 'include', // no effect in Node.js fetch, safe to omit
    cache: 'no-store',
  });

  if (!res.ok) {
    return <div>Not logged in</div>;
  }

  const user = await res.json();

  return <div>Welcome, {user.discordId || user.name || 'user'}</div>;
}
