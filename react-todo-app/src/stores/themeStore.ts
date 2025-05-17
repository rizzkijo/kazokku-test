import { create } from 'zustand'

type ThemeState = {
  darkMode: boolean
};

type ThemeAction = {
  toggleTheme: (darkMode: ThemeState['darkMode']) => void
};

const getInitialDarkMode = (): boolean => {
  const stored = localStorage.getItem("darkMode");
  return stored ? JSON.parse(stored) : false;
}

const useToggleTheme = create<ThemeState & ThemeAction>((set) => ({
  darkMode: getInitialDarkMode(),
  toggleTheme: () => set((state) => {
    const next = !state.darkMode;
    localStorage.setItem("darkMode", JSON.stringify(next));

    return { darkMode: next };
  }),
}));

export default useToggleTheme;
