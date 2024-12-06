"use client";
import { React, useState, useEffect } from "react";
import { TbUserSquareRounded } from "react-icons/tb";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Menu, ChevronLeft, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token_id");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token_id");
    setIsAuthenticated(false);
    router.push("/pages/auth");
  };

  return (
    <header className="md:fixed sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <BookOpen className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">Web Yatra</span>
          </Link>
          <nav className="flex items-center space-x-3 text-sm font-medium">
            <Link
              href="/courses"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Explore
            </Link>
            <Link
              href="/courses"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Learn
            </Link>
            <Link
              href="/specializations"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Hot Topics
            </Link>
            <Link
              href="/degrees"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Related Topics
            </Link>
            <Link
              href="/programs"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Mentors
            </Link>
            <Link href="/careers" role="menuitem">
              FAQ'S
            </Link>
          </nav>
        </div>
        <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
          </div>
          {!isAuthenticated ? (
            <nav className="hidden md:flex items-center space-x-2">
              <Button variant="ghost">
                <Link href="/pages/auth">Log in</Link>
              </Button>
              <Button>
                <Link href="/pages/auth">Sign up</Link>
              </Button>
            </nav>
          ) : (
            <div>
              <TbUserSquareRounded
                onClick={toggleVisibility}
                className="text-4xl"
                aria-label={
                  isVisible
                    ? "Hide account information"
                    : "Show account information"
                }
              ></TbUserSquareRounded>
              {isVisible && (
                <Card className="absolute top-[20rem] right-[30rem] w-80 bg-white/80 border-black/20 backdrop-blur-lg">
                  <CardContent className="flex flex-col items-center space-y-4 p-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage
                        src="/placeholder.svg?height=96&width=96"
                        alt="User"
                      />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h2 className="text-xl font-semibold text-black">
                        User Name
                      </h2>
                      <p className="text-sm text-gray-900">user@example.com</p>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={handleLogout}
                    >
                      Sign Out
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
