import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';

interface Tab {
  routeName: string;
  icon: string;
  path: string;
}

const NavigationTabs = ({ tabs }: { tabs: Tab[] }) => {
  return (
    <div className="flex gap-3">
      {tabs.map((tab) => (
        <NavLink
          to={tab.path}
          key={tab.routeName}
          className={({ isActive }) =>
            cn(
              'flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors',
              isActive
                ? 'bg-emerald-100 text-darkBlue hover:text-gray-700'
                : 'text-gray-500 hover:text-gray-700'
            )
          }
        >
          <img src={`/svgs/${tab.icon}`} />

          {tab.routeName}
        </NavLink>
      ))}
    </div>
  );
};

export default NavigationTabs;
