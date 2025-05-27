import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // Here you'd check if the cookie 'discord.sid' exists and is valid
  const cookie = req.headers.get("cookie") || "";
  if (!cookie.includes("discord.sid")) {
    return NextResponse.json({ loggedIn: false });
  }

  // Optionally, verify the session or token validity here via backend logic
  // For demo, assume presence of cookie means logged in
  return NextResponse.json({ loggedIn: true });
}
