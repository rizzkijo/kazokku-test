import useToggleTheme from "@/stores/themeStore";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { cn } from "@/lib/utils";

type ButtonToggleThemeProps = React.ComponentProps<typeof Switch> & {
  wrapperClassName?: string;
};

const ButtonToggleTheme = ({ wrapperClassName, ...props }: ButtonToggleThemeProps) => {
  const { darkMode, toggleTheme } = useToggleTheme();

  return (
    <div className={cn(
      'flex items-center space-x-2', wrapperClassName,
    )}>
      <Switch
        id="toggleTheme"
        checked={darkMode}
        {...props }
        onCheckedChange={toggleTheme}
      />
      <Label htmlFor="toggleTheme" className="cursor-pointer">Dark Mode</Label>
    </div>
  );
};

export default ButtonToggleTheme;
