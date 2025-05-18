import { useState, useRef } from 'react'

import { cn } from '@/lib/utils'

import { useLogout } from '@/hooks/userLogout'

import { LogOut, User } from 'lucide-react'
import { ChevronDown } from 'lucide-react'

import { Button } from './ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

const ButtonUserLogout = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const username = localStorage.getItem("aUsr")?.split('@')[0] || 'Guest';

  const handleLogout = useLogout();

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="link"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={cn(
          'flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-white focus:outline-none !no-underline',
          '!px-0',
        )}
      >
        <User />
        {username}
        <ChevronDown
          className={cn(
            'transition-all duration-300',
            dropdownOpen ? 'rotate-180': '',
          )}
        />
      </Button>

      {dropdownOpen && (
        <div className={cn(
          'absolute right-0 mt-2 min-w-50 py-2',
          'bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded shadow-md z-10',
        )}>
          <AlertDialog>
            <AlertDialogTrigger
              className={cn(
                'w-full flex gap-3 items-center justify-start px-4 py-2 text-sm text-red-500 cursor-pointer',
                'bg-background hover:bg-accent',
                'dark:text-red-300 dark:bg-transparent dark:hover:bg-accent',
              )}
            >
              <LogOut size={16} />
              <span className="font-bold">Sign Out</span>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Done for now?</AlertDialogTitle>
                <AlertDialogDescription>
                  Your tasks will be right here when you're back.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel
                  className="cursor-pointer"
                  onClick={() => setDropdownOpen(false)}
                >
                  Keep working
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-400 text-white cursor-pointer"
                >
                  I'm done
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )}
    </div>
  );
};

export default ButtonUserLogout;
