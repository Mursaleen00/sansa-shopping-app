import React from 'react';

interface TabsProps {
  tabs: string[];
  tab: number;
  setTab: (tab: number) => void;
  className?: string;
}

const Tab = ({ tabs, setTab, tab, className }: TabsProps) => {
  const isSelected = (i: number) => tab == i;

  return (
    <div
      className={`border border-secondary-100 rounded-lg p-1.5 flex-wrap flex w-full justify-between items-center gap-x-3 ${className}`}
    >
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setTab(i)}
          className={`${isSelected(i) ? 'bg-primary text-white rounded-lg' : 'text-secondary-700'} py-2.5 px-4`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
