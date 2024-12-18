import StatisticsCard from '@/components/organisms/StatisticsCard';
import DashboardLayout from '@/components/templates/DashboardLayout';
import { statisticsSummary } from './../../data.ts';

const Home = () => {
  return (
    <DashboardLayout>
      <div className="px-6 py-8">
        <section className="grid md:grid-cols-autofill gap-4">
          {statisticsSummary.map((item) => (
            <StatisticsCard {...item} />
          ))}
        </section>
      </div>
    </DashboardLayout>
  );
};

export default Home;
