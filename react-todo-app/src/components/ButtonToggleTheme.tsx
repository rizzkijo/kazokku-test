import { useToggleTheme } from "@/stores/themeStore";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";

type ButtonToggleThemeProps = React.ComponentProps<typeof Switch> & {
  wrapperClassName?: string;
};

const ButtonToggleTheme = ({ wrapperClassName, ...props }: ButtonToggleThemeProps) => {
  const { darkMode, toggleTheme } = useToggleTheme();

  return (
    <div className={cn(
      'flex items-center space-x-3', wrapperClassName,
    )}>
      <Label htmlFor="toggleTheme" className="cursor-pointer text-xs">
        <Sun size={15} />
        Light
      </Label>
      <Switch
        id="toggleTheme"
        checked={darkMode}
        {...props }
        onCheckedChange={toggleTheme}
      />
      <Label htmlFor="toggleTheme" className="cursor-pointer text-xs">
        Dark
        <Moon size={15} />
      </Label>
    </div>
  );
};

export default ButtonToggleTheme;
