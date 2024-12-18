import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface Option {
  value: number;
  label: string;
}

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option>({ value: 7, label: '7 days' });

  const options: Option[] = [
    { value: 7, label: '7 days' },
    { value: 14, label: '14 days' },
    { value: 30, label: '30 days' },
    { value: 90, label: '90 days' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-gray-700 text-sm hover:bg-gray-50 focus:outline-none focus:ring-gray-200 "
      >
        <span>{selected.label}</span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white rounded-lg border border-gray-200 shadow-lg py-1 z-10">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                selected.value === option.value ? 'bg-gray-50' : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;