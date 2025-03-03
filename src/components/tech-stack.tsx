import { Code, FileCode, Braces, Atom, Database, Layers, GitBranch, Cpu, Palette, Globe } from "lucide-react"

export const TechStack = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
      {/* HTML */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-600 mb-2">
          <FileCode size={32} />
        </div>
        <span className="text-sm">HTML</span>
      </div>

      {/* CSS */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 mb-2">
          <Palette size={32} />
        </div>
        <span className="text-sm">CSS</span>
      </div>

      {/* JavaScript */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 mb-2">
          <Braces size={32} />
        </div>
        <span className="text-sm">JavaScript</span>
      </div>

      {/* React */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 mb-2">
          <Atom size={32} />
        </div>
        <span className="text-sm">React</span>
      </div>

      {/* Redux */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20 text-purple-600 mb-2">
          <Layers size={32} />
        </div>
        <span className="text-sm">Redux</span>
      </div>

      {/* Bootstrap */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 mb-2">
          <Globe size={32} />
        </div>
        <span className="text-sm">Bootstrap</span>
      </div>

      {/* Tailwind */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20 text-teal-600 mb-2">
          <Code size={32} />
        </div>
        <span className="text-sm">Tailwind</span>
      </div>

      {/* Git */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20 text-red-600 mb-2">
          <GitBranch size={32} />
        </div>
        <span className="text-sm">Git</span>
      </div>

      {/* VS Code */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 mb-2">
          <Cpu size={32} />
        </div>
        <span className="text-sm">VS Code</span>
      </div>

      {/* MongoDB */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20 text-green-600 mb-2">
          <Database size={32} />
        </div>
        <span className="text-sm">MongoDB</span>
      </div>
    </div>
  )
}

