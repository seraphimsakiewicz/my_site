import Image from "next/image";

export const TechStack = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20 mb-2">
          <Image src="/icons/html.svg" alt="HTML" width={32} height={32} />
        </div>
        <span className="text-sm">HTML</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20 mb-2">
          <Image src="/icons/css.svg" alt="CSS" width={32} height={32} />
        </div>
        <span className="text-sm">CSS</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/20 mb-2">
          <Image src="/icons/javascript.svg" alt="JavaScript" width={32} height={32} />
        </div>
        <span className="text-sm">JavaScript</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/20 mb-2">
          <Image src="/icons/react.svg" alt="React" width={32} height={32} />
        </div>
        <span className="text-sm">React</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/20 mb-2">
          <Image src="/icons/redux.svg" alt="Redux" width={32} height={32} />
        </div>
        <span className="text-sm">Redux</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/20 mb-2">
          <Image src="/icons/material-ui.svg" alt="Bootstrap" width={32} height={32} />
        </div>
        <span className="text-sm">Material UI</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900/20 mb-2">
          <Image src="/icons/nodejs.svg" alt="NodeJS" width={32} height={32} />
        </div>
        <span className="text-sm">NodeJS</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20 mb-2">
          <Image src="/icons/git.svg" alt="Git" width={32} height={32} />
        </div>
        <span className="text-sm">Git</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/20 mb-2">
          <Image src="/icons/typescript.svg" alt="TypeScript" width={32} height={32} />
        </div>
        <span className="text-sm">TypeScript</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20 mb-2">
          <Image
            src="/icons/aws.svg"
            alt="AWS"
            width={32}
            height={32}
            className="dark:invert dark:hue-rotate-180"
          />
        </div>
        <span className="text-sm">AWS</span>
      </div>
    </div>
  )
}

