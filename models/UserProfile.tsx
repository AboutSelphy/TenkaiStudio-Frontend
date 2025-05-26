// components/UserProfile.tsx
'use client'; // 👈 IMPORTANT in Next.js App Router

import { useEffect, useState } from 'react';
import { User } from '@/types/user';

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetch('https://api.tenkaistudio.com/profile/user', {
      credentials: 'include',
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Not authenticated');
        const data: { user: User } = await res.json();
        setUser(data.user);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>🚫 {error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, User ID: {user.id}</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
