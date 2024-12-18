import { topBarItems } from "./../../../data.ts";
import NavigationTabs from '../molecules/NavigationTabs';

const TopNav = () => {
  return (
    <nav className="h-[5.875rem] border-b border-gray1 flex items-center px-4 md:px-10 py-6">
      <NavigationTabs tabs={topBarItems} />
    </nav>
  );
};

export default TopNav;
