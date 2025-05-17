import { useRef } from 'react'

import { cn } from '@/lib/utils'

import { useLogout } from '@/hooks/userLogout'

import { LogOut } from 'lucide-react'

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
  const dropdownRef = useRef<HTMLDivElement>(null);

  const username = localStorage.getItem("aUsr") || 'Guest';

  const handleLogout = useLogout();

  return (
    <div className="flex items-center space-x-6" ref={dropdownRef}>
      <span
        className={cn(
          'flex items-center gap-2 text-sm font-medium text-zinc-800 !no-underline',
          'dark:text-white focus:outline-none !px-0',
        )}
      >
        {`Hi, ${username.split("@")[0]}!`}
      </span>

      <AlertDialog>
        <AlertDialogTrigger
          className={cn(
            'flex gap-2 items-center justify-start text-sm cursor-pointer',
            'bg-red-500 text-white py-1 px-3 rounded',
            'hover:bg-red-400',
          )}
        >
          <LogOut size={14} />
          Sign Out
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Done for now?</AlertDialogTitle>
            <AlertDialogDescription>
              Your tasks will be right here when you're back.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">Keep working</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout} className="bg-red-500 hover:bg-red-400 text-white cursor-pointer">I’m done</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ButtonUserLogout;
