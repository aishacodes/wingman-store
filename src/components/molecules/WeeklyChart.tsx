import { weeklyData } from './../../../data.ts';
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Heading2 from "../atom/Heading2.tsx";

const renderLegendText = (value: string) => {
  return (
    <span className="text-xs" style={{ color: '#667085' }}>
      {value}
    </span>
  );
};
const WeeklyChart: React.FC = () => {
  return (
    <div className="bg-white p-6 w-[16.25rem] shadow-cardShadow  rounded-[1.25rem]">
      <div className="flex gap-2 mb-6">
        <img src={`/svgs/chart.svg`} alt="" />
        <Heading2>VS PAST PERIOD</Heading2>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={weeklyData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="period"
              tick={{
                fill: '#6b7280',
                fontSize: 12,
              }}
              axisLine={false}
              tickMargin={10}
            />
            <YAxis
              tick={{
                fill: '#6b7280',
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
              domain={[0, 25]}
              width={30}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '0.375rem',
                fontSize: '12px',
              }}
            />
            <Legend
              wrapperStyle={{
                paddingTop: '1rem',
              }}
              iconSize={10}
              fontSize={12}
              formatter={renderLegendText}
            />
            <Bar
              dataKey="consultations"
              name="Consultations"
              fill="#CCFBEF"
              barSize={20}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="ordersClosed"
              name="Orders closed"
              fill="#134E48"
              barSize={20}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyChart;
