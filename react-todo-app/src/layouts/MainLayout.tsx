import { Outlet } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import { Toaster } from '@/components/ui/sonner';

const MainLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <header>
        <h2>Header</h2>
      </header>
      <main className="min-h-screen bg-background text-foreground">
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
