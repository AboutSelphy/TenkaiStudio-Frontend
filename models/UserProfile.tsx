'use client';

import { useEffect, useState } from 'react';
import { User } from '@/types/User';

export default function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('https://api.tenkaistudio.com/profile/user', {
          credentials: 'include',
        });

        const raw = await res.text();
        console.log('Raw response:', raw);

        if (!res.ok) {
          try {
            const json = JSON.parse(raw);
            throw new Error(json.error || 'Failed to fetch user');
          } catch {
            throw new Error(raw);
          }
        }

        const data: { user: User } = JSON.parse(raw);
        setUser(data.user);
      } catch (err: any) {
        console.error('Fetch error:', err);
        setError(err.message || 'Unknown error');
      }
    };

    fetchUser();
  }, []);

  if (error) return <p>🚫 Error: {error}</p>;
  if (!user) return <p>⏳ Loading user data...</p>;

  return (
    <div>
      <h2>✅ Welcome, User ID: {user.id}</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
