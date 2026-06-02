import { Eye } from "lucide-react";

interface SupplierTableRowProps {
  numId: string;
  date: string;
  plate: string;
  vehicle: string;
  problem: string;
  priority: string;
  deadline: string;
  daysLeft: string;
}

const priorityColors: Record<string, string> = {
  alta: "bg-red-50 text-red-500",
  média: "bg-yellow-50 text-yellow-600",
  baixa: "bg-green-50 text-green-600",
};

export function SupplierTableRow({
  numId,
  date,
  plate,
  vehicle,
  problem,
  priority,
  deadline,
  daysLeft,
}: SupplierTableRowProps) {
  const normalizedPriority = priority.toLowerCase();
  const priorityStyle = priorityColors[normalizedPriority] || "bg-gray-100 text-gray-600";

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors text-sm">
      <td className="p-4 font-bold text-gray-900 align-middle">{numId}</td>
      <td className="p-4 align-middle text-gray-600">{date}</td>
      <td className="p-4 align-middle">
        <div className="flex flex-col">
          <span className="font-bold text-gray-900">{plate}</span>
          <span className="text-gray-500 text-xs">{vehicle}</span>
        </div>
      </td>
      <td className="p-4 align-middle text-gray-600 font-medium">{problem}</td>
      <td className="p-4 align-middle text-center">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${priorityStyle}`}>
          {priority}
        </span>
      </td>
      <td className="p-4 align-middle">
        <div className="flex flex-col">
          <span className="text-gray-900">{deadline}</span>
          <span className="text-gray-500 text-xs">{daysLeft}</span>
        </div>
      </td>
      <td className="p-4 align-middle">
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors text-sm font-semibold">
            <Eye size={16} />
            Ver detalhes
          </button>
        </div>
      </td>
    </tr>
  );
}