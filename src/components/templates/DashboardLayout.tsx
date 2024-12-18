import { ReactNode } from 'react';
import SideBar from './SideBar';
import TopNav from './TopNav';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen w-screen  lg:grid grid-cols-[3.75rem_1fr] ">
      <SideBar />
      <section className="flex flex-col h-full overflow-hidden">
        <TopNav />
        <div className="py-9 px-4 md:px-10 overflow-y-auto flex-grow"> {children}</div>
      </section>
    </main>
  );
};

export default DashboardLayout;
