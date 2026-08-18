"use client" ;
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (option: string) => void;
}

export function FilterDropdown({ label, value, options, onChange }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-500">{label}</label>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="w-full flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-xl outline-none focus:border-orange-500 transition-all text-sm"
        >
          <span>{value}</span>
          <ChevronDown size={20} className={`text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute z-20 w-full mt-2 bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden animate-in fade-in zoom-in duration-200">
            {options.map((option: string) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="w-full text-left p-3 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}