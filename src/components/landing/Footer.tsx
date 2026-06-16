import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Footer() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="container py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="flex flex-col items-center text-center">
        <a href="#" className="flex items-center justify-center gap-2.5 mb-4">
          <img
            src="https://cdn.poehali.dev/projects/fa5e3117-862f-4fec-ba3c-dccb9fa61e48/bucket/d2698f42-7df9-48eb-a458-7a892b71f64a.jpeg"
            alt="Nate Logo"
            className="h-8 w-8 object-contain rounded-md mix-blend-multiply dark:mix-blend-normal"
          />
          <span className="text-2xl font-bold text-black dark:text-white">
            nate <span className="text-[#7A7FEE]">portfolio</span>
          </span>
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Видеомонтаж, который держит внимание зрителя до конца.
        </p>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {new Date().getFullYear()} nate portfolio. Все права защищены.
        </p>
      </div>
    </footer>
  )
}