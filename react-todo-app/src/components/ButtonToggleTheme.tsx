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
      'flex items-center space-x-1 md:space-x-2', wrapperClassName,
    )}>
      <Label htmlFor="toggleTheme" className="cursor-pointer text-xs" title="Light mode!">
        <Sun className={cn(
          'w-[15px] h-[15px] md:w-[20px] md:h-[20px]',
          darkMode ? 'text-gray-500' : 'text-yellow-600',
        )} />
      </Label>
      <Switch
        id="toggleTheme"
        checked={darkMode}
        onCheckedChange={toggleTheme}
        title="Toggle Theme"
        {...props }
      />
      <Label htmlFor="toggleTheme" className="cursor-pointer text-xs" title="Dark mode!">
        <Moon className={cn(
          'w-[15px] h-[15px] md:w-[20px] md:h-[20px]',
          darkMode ? 'text-yellow-500' : 'text-gray-400',
        )} />
      </Label>
    </div>
  );
};

export default ButtonToggleTheme;
