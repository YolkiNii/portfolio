"use client";

import Link from "next/link";
import Footer from "./ui/Footer";
import { useState } from "react";

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Projects",
    path: "/projects"
  }
]

export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <header className="sticky top-0 w-full bg-cream">
        <nav className="flex justify-center border-b-2 border-light-red-orange">
          <div className="md:hidden flex justify-center space-x-40">
            {links.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  className="my-4 text-red-orange"
                >
                  <p className="text-5xl font-semibold hover:cursor-pointer duration-300 hover:scale-110">{link.name}</p>
                </Link>
              )
            })}
          </div>
          {isOpen ? (
            <div className="fixed top-0 z-1 flex flex-col w-full border-b-2 border-light-red-orange text-red-orange bg-cream">
              <div className="flex w-full mt-4 justify-end h-3">
                <button className="flex mr-4" onClick={() => setIsOpen(false)}>
                  <span className="w-7 h-1 bg-red-orange rotate-45 translate-x-3.5"/>
                  <span className="w-7 h-1 bg-red-orange -rotate-45 -translate-x-3.5"/>
                </button>
              </div>
              {links.map((link) => {
                return (
                  <div key={link.path} className="flex w-full justify-center my-2">
                    <Link
                      key={link.name}
                      href={link.path}
                      className="text-red-orange"
                    >
                      <p className="font-semibold hover:cursor-pointer duration-300 hover:scale-110">{link.name}</p>
                    </Link>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="hidden md:flex w-full my-2 justify-end">
              <button className="flex flex-col mr-5" onClick={() => setIsOpen(true)}>
                <span className="w-7 h-1 my-0.5 bg-red-orange rounded-full"/>
                <span className="w-7 h-1 my-0.5 bg-red-orange rounded-full"/>
                <span className="w-7 h-1 my-0.5 bg-red-orange rounded-full"/>
              </button>
            </div>
          )}
        </nav>
      </header>
      {children}
      <Footer />
    </div>
  )
}