import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

export function ReportTablePagination() {
  return (
    <div className="p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <span>Exibir</span>
        <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-orange-500">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        <span>registros por página</span>
      </div>

      <div className="flex items-center gap-1">
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-400">
          <ChevronLeft size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#ea580c] text-white font-medium">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">3</button>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">
          <MoreHorizontal size={16} />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-gray-600">13</button>
        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 text-orange-600">
          <ChevronRight size={16} />
        </button>
      </div>

      <div>1-10 de 128 registros</div>
    </div>
  );
}