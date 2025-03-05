'use client'

import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    if (resolvedTheme === 'dark') {
        return (
            <button
                onClick={() => setTheme('light')}
                className="p-1 rounded-full"
            >
                <FiSun
                    className="w-5 h-5 cursor-pointer hover:text-[#00d8ff] transition-colors"
                />
            </button>
        )
    }

    if (resolvedTheme === 'light') {
        return (
            <button
                onClick={() => setTheme('dark')}
                className="p-1 rounded-full"
            >
                <FiMoon
                    className="w-5 h-5 cursor-pointer hover:text-[#00d8ff] transition-colors"
                />
            </button>
        )
    }
} 