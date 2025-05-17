import { Outlet } from 'react-router-dom'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { useToggleTheme } from '@/stores/themeStore';
import { useEffect } from 'react';

const LoginLayout = () => {
  const { darkMode } = useToggleTheme();

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-background text-foreground">
      <main className="flex items-center justify-between">
        <div className="h-screen flex-2/5 flex items-center justify-center">
          <Outlet />
        </div>
        <div className={cn(
          'hidden lg:flex relative h-screen flex-3/5 items-center justify-center'
        )}>
          <div className="absolute top-1 right-1 bottom-1 left-0 bg-primary dark:bg-primary-foreground rounded-md overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1652170228217-eeccbe82bcf4?q=80&w=1920&auto=format&fit=crop"
              className="h-full w-full object-cover object-[center_bottom] opacity-40"
              alt="jusdoit! background image"
            />
          </div>
        </div>
      </main>
      <Toaster richColors position="bottom-right" />
    </div>
  );
};

export default LoginLayout;
