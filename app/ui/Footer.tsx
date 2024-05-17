import Image from "next/image"
import Link from "next/link"

const logos = [
  {
    name: "LinkedIn",
    path: "/linkedin_icon.svg",
    link: "https://www.linkedin.com/in/youkilewis/"
  },
  {
    name: "Github",
    path: "/github_icon.svg",
    link: "https://github.com/YolkiNii"
  }
]

export default function Footer() {
  return (
    <footer className="fixed md:static bottom-0 my-4 w-10/12 md:w-full">
      <nav className="flex justify-end space-x-4 md:mx-8">
        {logos.map((logo) => {
          return (
            <Link 
              key={logo.name}
              href={logo.link}
            >
              <Image
                src={logo.path} 
                alt={logo.name}
                width={48}
                height={48}
                className="duration-500 hover:scale-110 hover:brightness-110"
              />
            </Link>
          )
        })}
      </nav>
    </footer>
  )
}