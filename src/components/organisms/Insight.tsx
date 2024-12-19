import { TrendingUp } from 'lucide-react';
import Heading from '../atom/Heading';
import Heading2 from '../atom/Heading2';
import ConsultationChart from '../molecules/ConsultationChart';
import WeeklyChart from '../molecules/WeeklyChart';

const Insight = () => {
  return (
    <section>
      <Heading classNames="py-8">Insights</Heading>
      <div className=" flex flex-wrap gap-6">
        <ConsultationChart />
        <WeeklyChart />
        <div className="bg-custom-linear p-6 w-[16.25rem] rounded-[1.25rem] relative">
          <img src="/svgs/pulse.svg" alt="" className="absolute top-0 right-0 left-0" />
          <div className="flex items-center gap-2 mb-6">
            <img src={`/svgs/green-chat.svg`} alt="" />
            <Heading2 classNames="text-lightGreen">Forecast</Heading2>
          </div>
          <div className="mb-6 text-white">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-[3.5rem] font-semibold">+15%</span>
              <TrendingUp className="w-9 h-9" />
            </div>
            <p className="text-sm leading-snug">
              forecasted increase in your sales closed by the end of the current
              month
            </p>
          </div>
          <div className=" text-white">
            <div className="flex items-start gap-2 mb-3">
              <span className="text-[3.5rem] font-semibold">+20%</span>
              <TrendingUp className="w-9 h-9" />
            </div>
            <p className="text-sm leading-snug">
              forecasted increase in consultations by the end of the current
              month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
