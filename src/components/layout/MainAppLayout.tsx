import * as React from 'react';

import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  /**
   * The content to be rendered inside the layout.
   */
  children: React.ReactNode;
  /**
   * Optional className to be applied to the main layout container.
   */
  className?: string;
}

/**
 * MainAppLayout provides a centered, full-screen container for application content.
 * It uses flexbox to center its children both vertically and horizontally,
 * fulfilling the role of a basic authentication or centered-content layout.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'flex min-h-screen items-center justify-center bg-background p-4',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
