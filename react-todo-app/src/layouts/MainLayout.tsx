import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { useToggleTheme } from '@/stores/themeStore';
import Header from '@/components/Header';

const MainLayout = () => {
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
    <>
      <Header />
      <main className="min-h-screen bg-accent text-foreground">
        <Outlet />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
      <Toaster richColors position="bottom-right" />
    </>
  );
};

export default MainLayout;
