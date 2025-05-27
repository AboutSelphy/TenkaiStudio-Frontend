"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  DiscordIcon,
  HeartFilledIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkSession() {
      try {
        const res = await fetch("/api/auth/session", {
          credentials: "include", // send cookies
        });
        if (!res.ok) throw new Error("Not logged in");
        const data = await res.json();
        setIsLoggedIn(data.loggedIn);
      } catch {
        setIsLoggedIn(false);
      }
    }
    checkSession();
  }, []);

  const handleLogin = () => {
    window.location.href = "https://api.tenkaistudio.com/auth/discord";
  };

const handleLogout = async () => {
  try {
    await fetch("https://api.tenkaistudio.com/auth/logout", {
      method: "GET",
      credentials: "include", // important to send cookies
    });
    setIsLoggedIn(false);
    window.location.href = "/";
  } catch (error) {
    console.error("Logout failed", error);
  }
};


  return (
    <HeroUINavbar
      isBordered
      shouldHideOnScroll
      isBlurred={false}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Tenkai Studio</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color={index === 4 ? "primary" : "foreground"}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="sm:flex md:hidden lg:flex gap-2">
          <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
            <DiscordIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem>
          {isLoggedIn ? (
            <Button
              onClick={handleLogout}
              variant="flat"
              color="danger"
              className="hidden lg:flex"
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={handleLogin}
              variant="flat"
              color="primary"
              className="hidden lg:flex"
            >
              Login with Discord
            </Button>
          )}
        </NavbarItem>

        <NavbarItem className="hidden md:flex md:justify-center">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 hidden md:flex lg:flex"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="ghost"
          >
            Support
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="center">
        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
          <TwitterIcon className="text-default-500" />
        </Link>
        <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
          <DiscordIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`} className="w-full">
              <Link
                className="w-full"
                color={index === 4 ? "primary" : "foreground"}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}

          <NavbarMenuItem>
            {isLoggedIn ? (
              <Button onClick={handleLogout} color="danger" fullWidth>
                Logout
              </Button>
            ) : (
              <Button onClick={handleLogin} color="primary" fullWidth>
                Login with Discord
              </Button>
            )}
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
