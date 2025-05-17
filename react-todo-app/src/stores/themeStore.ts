import { create } from 'zustand'

type ThemeState = {
  darkMode: boolean
};

type FooterCopyTextState = {
  footerCopyText: string
}

type ThemeAction = {
  toggleTheme: (darkMode: ThemeState['darkMode']) => void
};

const getInitialDarkMode = (): boolean => {
  const stored = localStorage.getItem("darkMode");
  return stored ? JSON.parse(stored) : false;
}

export const useToggleTheme = create<ThemeState & ThemeAction>((set) => ({
  darkMode: getInitialDarkMode(),
  toggleTheme: () => set((state) => {
    const next = !state.darkMode;
    localStorage.setItem("darkMode", JSON.stringify(next));

    return { darkMode: next };
  }),
}));

export const useFooterCopyText = create<FooterCopyTextState>(() => ({
  footerCopyText: "Developed by @rizzkijo © 2025.",
}));
