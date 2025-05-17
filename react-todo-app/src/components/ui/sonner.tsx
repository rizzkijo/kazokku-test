import { Toaster as Sonner, type ToasterProps } from "sonner";
import useToggleTheme from "@/stores/themeStore";

const Toaster = ({ ...props }: ToasterProps) => {
  const { darkMode } = useToggleTheme();

  return (
    <Sonner
      theme={darkMode ? "dark" : "light"} // ✅ based on Zustand
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
