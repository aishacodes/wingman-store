import SideBarItem from '../organisms/SideBarItem';
import { sideBarLinks } from './../../../data';

const SideBar = () => {
  return (
    <aside className="bg-primary py-6 px-3 flex flex-col">
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
  );
};

export default SideBar;
