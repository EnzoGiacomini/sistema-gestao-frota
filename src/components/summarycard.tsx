import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  total: number;
  classe: string;
  description: string;
  iconBg: string;
}

export function SummaryCard({
  icon,
  total,
  classe,
  description,
  iconBg,
}: SummaryCardProps) {
  return (
    <div className="p-6 lg:pr-30 flex items-start gap-4 w-full rounded-2xl border border-gray-200 shadow-sm flex-row">
      <div className={`${iconBg} p-2 rounded-2xl`}>{icon}</div>
      <div className="flex flex-col">
        <span className="font-extrabold text-[24px]">{total}</span>
        <span className="font-medium text-[18px]">{classe}</span>
        <p className="text-gray-400 text-[16px]">{description}</p>
      </div>
    </div>
  );
}
