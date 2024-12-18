import { consultationData } from './../../../data.ts';
import React from 'react';
import {
  ComposedChart,
  Line,
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

const ConsultationChart: React.FC = () => {
  return (
    <div className="p-6 shadow-cardShadow rounded-[1.25rem] w-full lg:w-[42.75rem]">
      <div className="flex items-center gap-2 mb-6">
        <img src={`/svgs/gray-chat.svg`} alt="" />
        <Heading2>Consultations</Heading2>
      </div>
      <div className="h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={consultationData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              scale="point"
              padding={{ left: 30, right: 30 }}
              tick={{ fill: '#6b7280' }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              domain={[0, 60]}
              tick={{ fill: '#6b7280' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, 20]}
              tick={{ fill: '#6b7280' }}
            />
            <Tooltip />
            <Legend formatter={renderLegendText} />
            <Bar
              yAxisId="left"
              dataKey="expertsOnline"
              fill="#FFF3C6"
              name="Experts online"
              barSize={40}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="incoming"
              stroke="#8A94A6"
              strokeDasharray="5 5"
              name="Incoming"
              dot={false}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="answered"
              stroke="#15B79F"
              strokeWidth={2}
              name="Answered"
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>{' '}
    </div>
  );
};

export default ConsultationChart;
