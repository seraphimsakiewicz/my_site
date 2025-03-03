// import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  // imageUrl: string
  techStack: string[]
  liveLink?: string
  githubLink?: string
}

export const ProjectCard = ({
  title,
  description,
  // imageUrl,
  techStack,
  liveLink = "#",
  githubLink = "#",
}: ProjectCardProps) => {
  return (
    <div className="bg-white dark:bg-[#363636] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        {/* <Image
          // src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        /> */}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-[#666666] dark:text-[#a7a7a7] text-sm mb-4 line-clamp-3">{description}</p>

        <div className="mb-4">
          <p className="text-xs font-medium text-[#42446e] dark:text-white mb-2">Tech stack:</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="text-xs text-[#42446e] dark:text-white">
                {tech}
                {index < techStack.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link href={liveLink} className="flex items-center text-sm hover:text-[#00d8ff] transition-colors">
            <ExternalLink className="w-4 h-4 mr-1" />
            Live Preview
          </Link>

          <Link href={githubLink} className="flex items-center text-sm hover:text-[#00d8ff] transition-colors">
            <Github className="w-4 h-4 mr-1" />
            View Code
          </Link>
        </div>
      </div>
    </div>
  )
}

