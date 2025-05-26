import { redirect } from 'next/navigation';

export default function LoginPage() {
  // Redirect to another route, e.g. homepage
  redirect('https://api.tenkaistudio.com/auth/discord');

  // This component won’t actually render because redirect will stop it
  return null;
}
