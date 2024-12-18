import React from 'react';

const StatisticsCard = ({ name }: { name: string }) => {
  return (
    <div className=" p-6 shadow-cardShadow rounded-[1.25rem]">
      <p>{name}</p>
    </div>
  );
};

export default StatisticsCard;
