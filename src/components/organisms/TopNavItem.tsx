import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const TopNavItem = ({
  path,
  icon,
  routeName,
}: {
  path: string;
  icon: string;
  routeName: string;
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        clsx(
          'flex items-center px-2 md:px-3 py-2 gap-x-3 text-sm md:text-lg bg-[#CCFBEF] rounded-full',
          isActive ? 'border-white' : 'border-transparent '
        )
      }
    >
      <img src={`/svgs/${icon}`} />
      <p className="text-primary">{routeName}</p>
    </NavLink>
  );
};

export default TopNavItem;
