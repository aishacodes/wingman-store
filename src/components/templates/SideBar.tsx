import { useState } from 'react';
import SideBarItem from '../organisms/SideBarItem';
import { sideBarLinks } from './../../../data';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-primary lg:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>
      <aside
        className={cn(
          'bg-primary py-6 px-3 flex flex-col absolute lg:relative transform transition-transform duration-300 ease-in-out h-screen',
         isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <img src="/svgs/logo.svg" />
        <p className="my-[1.875rem] mx-1 h-[1px] bg-darkGreen" />
        <div className="flex flex-col gap-y-[1.375rem]">
          {sideBarLinks.map((route) => (
            <SideBarItem {...route} key={`dash-sidelink-${route.path}`} />
          ))}
        </div>
        <p className="flex-grow" />
        <img src="/svgs/settings.svg" />
      </aside>
    </>
  );
};

export default SideBar;
