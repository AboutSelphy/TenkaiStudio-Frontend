export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TenkaiStudio",
  description: "Make streaming experience better.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "How to use",
      href: "/how-to-use",
    },
    {
      label: "Features / Demo",
      href: "/features",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Widgets",
      href: "/Widgets",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    twitter: "https://twitter.com/hero_ui",
    discord: "https://discord.gg/3jZJXyevfj",
    sponsor: "https://www.patreon.com/c/AboutSelphy",
    login: "https://youtube.com",
  },
};
