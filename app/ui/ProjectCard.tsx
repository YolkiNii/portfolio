import Image from "next/image"
import Link from "next/link"

export type ProjectCardProps = {
  title: string,
  subheader: string,
  demoVideoPath: string,
  demoVideoAlt: string,
  projectLink: string,
  usedTechnologies: string[]
}

export default function ProjectCard({
  title,
  subheader,
  demoVideoPath,
  demoVideoAlt,
  projectLink,
  usedTechnologies
} : ProjectCardProps) {
  return (
    <div className="text-center max-w-[750px] rounded-lg mx-auto">
      <h1 className="text-2xl font-bold text-red-orange">{title}</h1>
      <h3 className="text-base text-light-red-orange">{subheader}</h3>
      <Link className="mx-auto" href={projectLink}>
        <Image
          src={demoVideoPath}
          alt={demoVideoAlt}
          width={750}
          height={750}
        />
      </Link>
      <div className="grid grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-1 mx-auto mt-2">
        {usedTechnologies.map((tech) => {
          return (
            <p key={tech} className="bg-light-pink rounded-full font-bold w-4/5 mx-auto text-red-orange md:text-sm md:font-semibold">{tech}</p>
          )
        })}
      </div>
    </div>
  )
}