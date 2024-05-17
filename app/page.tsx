import Image from "next/image";
import Footer from "./ui/Footer";

const logos = [
  {
    name: "React",
    path: "/react_logo.png"
  },
  {
    name: "NextJS",
    path: "/nextjs_logo.png"
  },
  {
    name: "TailwindCSS",
    path: "/tailwindcss_logo.png"
  },
  {
    name: "NodeJS",
    path: "/nodejs_logo.png"
  },
  {
    name: "ExpressJS",
    path: "/expressjs_logo.png"
  },
  {
    name: "Typescript",
    path: "/typescript_logo.png"
  },
  {
    name: "JavaScript",
    path: "/javascript_logo.png"
  },
  {
    name: "MySQL",
    path: "/mysql_logo.png"
  },
  {
    name: "C++",
    path: "/c++_logo.png"
  },
  {
    name: "Java",
    path: "/java_logo.png"
  },
  {
    name: "Python",
    path: "/python_logo.png"
  }
]

export default function Home() {
  return (
    <main className="flex flex-col grow text-red-orange mx-4">
      <article className="mx-auto my-auto w-9/12 md:w-full">
        <p className="text-8xl font-bold md:text-center">YOUKI</p>
        <p className="text-8xl font-bold indent-24 md:text-center md:indent-0">LEWIS</p>
        <section className="text-xl font-semibold w-4/6 mx-auto md:w-full">
          <p>
            Entry level software engineer interested in working on frontend/backend/full-stack 
            projects and wanting to learn more to help develop meaningful work.
          </p>
          <br />
          <p>
            Experienced with:
          </p>
          <ul className="grid grid-cols-4 gap-4 w-5/6 mx-auto mt-4">
            {
              logos.map((logo) => {
                return (
                  <Image
                    className="mx-auto my-auto"
                    key={logo.name}
                    src={logo.path}
                    alt={logo.name}
                    width={75}
                    height={75}
                  />
                )
              })
            }
          </ul>
        </section>
      </article>
    </main>
  );
}
