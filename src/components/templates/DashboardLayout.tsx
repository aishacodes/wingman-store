import { ReactNode } from 'react';
import SideBar from './SideBar';
import TopNav from './TopNav';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="h-screen w-screen overflow-hidden grid grid-cols-[3.75rem_1fr]">
      <SideBar />
      <section>
        <TopNav />
        <div className="py-9 px-10 overflow-y-auto">  {children}</div>
      
      </section>
    </main>
  );
};

export default DashboardLayout;
