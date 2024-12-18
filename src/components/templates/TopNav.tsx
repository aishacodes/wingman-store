import TopNavItem from '../organisms/TopNavItem';
import { topBarItems } from './../../../data';

const TopNav = () => {
  return (
    <nav className="h-[5.875rem] border-b border-gray1 flex items-center px-4 md:px-10 py-6">
      <div className="flex gap-x-3 items-center">
        {topBarItems.map((route) => (
          <TopNavItem {...route} key={`dash-top-link-${route.routeName}`} />
        ))}
      </div>
    </nav>
  );
};

export default TopNav;
