import type { PropsWithChildren } from 'react'
import { createContext, useContext } from 'react'

export type ThemeMode = 'light' | 'dark'

type RessourcesValue = {
  theme: ThemeMode
  toggleTheme: () => void
}

const Ressources = createContext<RessourcesValue | null>(null)

export function ThemeProvider({
  theme,
  toggleTheme,
  children,
}: PropsWithChildren<RessourcesValue>) {
  return (
    <Ressources.Provider value={{ theme, toggleTheme }}>
      {children}
    </Ressources.Provider>
  )
}

export function useTheme() {
  const value = useContext(Ressources)
  if (!value) {
    throw new Error('useTheme must be used within <ThemeProvider>')
  }
  return value
}
