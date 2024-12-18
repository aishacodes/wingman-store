import StatisticsCard from '@/components/organisms/StatisticsCard';
import DashboardLayout from '@/components/templates/DashboardLayout';
import { statisticsSummary } from './../../data.ts';
import Heading from '@/components/atom/Heading.tsx';
import Orders from '@/components/organisms/Orders.tsx';
import Insight from '@/components/organisms/Insight.tsx';

const Home = () => {
  return (
    <DashboardLayout>
      <div className="px-3 md:px-6 py-8 shadow-cardShadow rounded-[1.25rem]">
        <Heading classNames="mb-8">At a glance</Heading>
        <section className="grid md:grid-cols-autofill gap-x-8  gap-y-6 mb-8">
          {statisticsSummary.map((item, index) => (
            <StatisticsCard {...item} key={`stat-${index}`} />
          ))}
        </section>
        <Insight />
        <Orders />
      </div>
    </DashboardLayout>
  );
};

export default Home;
