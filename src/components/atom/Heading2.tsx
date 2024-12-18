import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const Heading2 = ({
  children,
  classNames,
}: {
  children: ReactNode;
  classNames?: string;
}) => {
  return (
    <p className={cn('text-xs font-semibold text-[#667085]', classNames)}>
      {children}
    </p>
  );
};

export default Heading2;
