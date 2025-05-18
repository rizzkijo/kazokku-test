import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Eye, EyeOff } from "lucide-react"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  isPassword?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isPassword, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState<boolean>(false);

    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="relative">
        <input
          type={inputType}
          className={cn(
            "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex h-10 w-full min-w-0 rounded-md border border-primary bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            isPassword && 'pr-12',
            className
          )}
          ref={ref}
          {...props}
        />

        {isPassword && (
          <Button
            type="button"
            variant="link"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-0 top-1/2 -translate-y-1/2 border-primary !rounded-bl-[0] !rounded-tl-[0]"
            title={showPassword ? "Hide Password" : "Show Password"}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = "Input"

export { Input }
