import logo from '@/assets/logo.svg'
import ButtonToggleTheme from './ButtonToggleTheme'
import ButtonUserLogout from './ButtonUserLogout'
import { cn } from '@/lib/utils';

const Header = () => (
  <>
    <header className={cn(
      'sticky top-0 z-9 bg-background text-foreground shadow-md',
      'h-[60px] flex items-center',
    )}>
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-[30px] md:h-[40px]" />
        </div>

        <ButtonToggleTheme />

        <ButtonUserLogout />
      </div>
    </header>
  </>
);

export default Header;
