import { redirect } from "next/navigation";

export default function LogoutPage() {
  // Redirect to another route, e.g. homepage
  redirect("https://api.tenkaistudio.com/auth/logout");

  // This component won’t actually render because redirect will stop it
  return null;
}
