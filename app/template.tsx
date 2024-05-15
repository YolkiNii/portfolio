import Link from "next/link";
import Footer from "./ui/Footer";

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
  return (
    <div className="flex flex-col min-h-screen animate-fade-in">
      <header className="sticky top-0 min-w-full bg-cream">
        <nav className="flex justify-center border-b-2 border-light-red-orange space-x-40">
          {links.map((link) => {
            return(
              <Link
                key={link.name}
                href={link.path}
                className="my-4 text-red-orange"
              >
                <p className="text-5xl font-semibold hover:cursor-pointer duration-300 hover:scale-110">{link.name}</p>
              </Link>
            )
          })}
        </nav>
      </header>
      {children}
      <Footer />
    </div>
  )
}