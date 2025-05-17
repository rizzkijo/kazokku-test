import logo from '@/assets/logo.svg'
import ButtonToggleTheme from './ButtonToggleTheme'
import ButtonUserLogout from './ButtonUserLogout'
import { cn } from '@/lib/utils';

const Header = () => (
  <>
    <header className={cn(
      'sticky top-0 z-1 px-6 py-3 bg-background text-foreground shadow-md',
      'border border-b-primary dark:border-b-primary-foreground',
    )}>
      <div className="flex items-center justify-between container max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-[40px]" />
        </div>

        <ButtonToggleTheme />

        <ButtonUserLogout />
      </div>
    </header>
  </>
);

export default Header;
