import { useState } from 'react';

interface Tab {
  routeName: string;
  icon: string;
}

const NavigationTabs = ({tabs}:{tabs:Tab[]}) => {
  const [activeTab, setActiveTab] = useState('Summary');

  

  return (
    <div className="flex gap-3">
      {tabs.map((tab) => (
        <button
          key={tab.routeName}
          onClick={() => setActiveTab(tab.routeName)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-colors
            ${
              activeTab === tab.routeName
                ? 'bg-emerald-100 text-lightGreen'
                : 'text-gray-500 hover:text-gray-700'
            }
          `}
        >
               <img src={`/svgs/${tab.icon}`} />

          {tab.routeName}
        </button>
      ))}
    </div>
  );
};

export default NavigationTabs;