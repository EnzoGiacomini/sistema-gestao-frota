import { SupplierTableHeader } from "./supplierTableHeader";
import { SupplierTableRow } from "./supplierTableRow";
import { Pagination } from "../tableComponents/tableNavigation";
import { Filter } from "lucide-react";

const mockSupplierServices = [
  { numId: "OS-2024-001", date: "24/05/2024", plate: "ABC-1234", vehicle: "Fiat Strada", problem: "Troca de óleo e filtros", priority: "Alta", deadline: "27/05/2024", daysLeft: "3 dias" },
  { numId: "OS-2024-002", date: "25/05/2024", plate: "DEF-5678", vehicle: "Fiat Strada", problem: "Revisão das pastilhas de freio", priority: "Média", deadline: "28/05/2024", daysLeft: "3 dias" },
  { numId: "OS-2024-004", date: "27/05/2024", plate: "JKL-3456", vehicle: "Fiat Strada", problem: "Bateria descarregada", priority: "Alta", deadline: "29/05/2024", daysLeft: "3 dias" },
  { numId: "OS-2024-005", date: "28/05/2024", plate: "MNO-7890", vehicle: "Fiat Strada", problem: "Suspensão barulhenta", priority: "Média", deadline: "30/05/2024", daysLeft: "4 dias" },
  { numId: "OS-2024-007", date: "29/05/2024", plate: "PQR-4321", vehicle: "Renault Master", problem: "Troca de correia dentada", priority: "Alta", deadline: "31/05/2024", daysLeft: "4 dias" },
];

export function SupplierTable() {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col mt-6">
      <div className="p-6 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-lg font-bold text-gray-900">Ordens disponíveis</h2>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
          <Filter size={16} />
          Filtros
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <SupplierTableHeader />
          <tbody>
            {mockSupplierServices.map((service, index) => (
              <SupplierTableRow key={index} {...service} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}