import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const SideBarItem = ({ path, icon }: { path: string; icon: string }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx('', isActive ? 'border-white' : 'border-transparent')
      }
    >
      <img src={`/svgs/${icon}`} className="w-[2.25rem] h-[2.25rem]" />
    </NavLink>
  );
};

export default SideBarItem;
