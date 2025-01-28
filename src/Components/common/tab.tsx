// src/Components/common/tab.tsx

// React import
import React from 'react';
import { useTranslation } from 'react-i18next';

// Format import
import { formatString } from '@/utils/format-string';

// Use interface
interface TabsProps {
  tabs: string[];
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}

// Tab
const Tab = ({ tabs, setTab, tab, className }: TabsProps) => {
  const isSelected = (i: number) => tab == i;

  // Translation
  const { t } = useTranslation();

  return (
    <div
      className={`border border-secondary-100 rounded-lg p-1.5 flex-wrap flex w-full justify-between items-center gap-x-3 ${className}`}
    >
      {/* Button  */}
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => setTab(i)}
          className={`${isSelected(i) ? 'bg-primary text-white rounded-lg' : 'text-secondary-700'} py-2.5 px-4 capitalize`}
        >
          {t(formatString(tab))}
        </button>
      ))}
    </div>
  );
};

export default Tab;
