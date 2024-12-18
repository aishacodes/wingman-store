import Heading from '../atom/Heading';
import Heading2 from '../atom/Heading2';

const StatisticsCard = ({
  name,
  icon,
  value,
  increase,
  decrease,
}: {
  name: string;
  icon: string;
  value: string;
  increase?: number;
  decrease?: number;
}) => {
  return (
    <div className="p-6 shadow-cardShadow rounded-[1.25rem]">
      <div className="flex items-center gap-2">
        <img src={`/svgs/${icon}`} alt="" />
        <Heading2>{name}</Heading2>
      </div>
      <Heading classNames="my-2">{value}</Heading>
      {increase ? (
        <p className="flex items-center text-sm">
          <img src="/svgs/increase.svg" />{' '}
          <span className="text-[#15B79F] pl-2 pr-1">{increase}%</span> increase
        </p>
      ) : null}
      {decrease ? (
        <p className="flex items-center text-sm">
          <img src="/svgs/decrease.svg" />
          <span className="text-[#F04438] pl-2 pr-1">{decrease}%</span> decrease
        </p>
      ) : null}
    </div>
  );
};

export default StatisticsCard;
