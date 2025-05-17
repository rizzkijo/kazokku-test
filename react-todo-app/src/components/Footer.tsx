import { useFooterCopyText } from '@/stores/themeStore'

const Footer = () => {
  const { footerCopyText } = useFooterCopyText();

  return (
    <footer className="bg-accent px-4 h-[60px] flex items-center justify-center text-sm text-neutral-500 dark:text-neutral-400">
      <div className="w-full flex items-center justify-center container mx-auto">
        <p>{footerCopyText}</p>
      </div>
    </footer>
  );
};

export default Footer;
