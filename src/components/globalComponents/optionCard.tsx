import { Check } from "lucide-react";
import { ReactNode } from "react";

interface OptionCardProps {
  name: string;
  about: string;
  arrList: string[]; 
  icon: ReactNode;
  children: ReactNode;
}

export function OptionCard({ name, about, arrList, icon, children }: OptionCardProps)
{
    return(
        <div className="max-w-125 bg-white w-full h-full border-2 border-amber-600 rounded-2xl flex flex-col items-start p-6 gap-2">
            <div>
                {icon}
            </div>
            <h3 className="text-amber-600 font-bold text-[24px]">{name}</h3>
            <p className="text-gray-400 font-medium">{about}</p>
            <ul className="flex flex-col gap-2 flex-1 w-full">
                {arrList.map((item, index) => (
                    <li key={index} className="text-sm text-gray-800 flex items-center text-nowrap gap-2">
                        <Check className="w-6 h-6 text-orange-500 shrink-0 mt-0.5 " />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <div className="w-full mt-auto pt-4 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
}