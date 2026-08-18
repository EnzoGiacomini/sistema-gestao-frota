import { Search, ListFilter, Eraser } from "lucide-react";
import { FilterInput } from "./filterInput";
import { FilterSelect } from "./filterSelect";

export function ReportFilter() {
  const setorOptions = [
    { value: "administrativo", label: "Setor Administrativo" },
    { value: "logistica", label: "Setor de Logística" },
    { value: "operacoes", label: "Setor de Operações" },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Filtros de Pesquisa</h2>
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 border border-gray-300 rounded-md px-3 py-1.5 transition-colors">
          <Eraser size={16} />
          Limpar filtros
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <FilterInput label="Nº da Ordem de Serviço" placeholder="Ex: OS-000123" />
        <FilterSelect label="Setor" options={setorOptions} />
        <FilterInput label="Placa" placeholder="Ex: ABC-1234" />
        <FilterInput label="Veículo" placeholder="Ex: Gol, Onix, Hilux..." />
        <FilterInput label="Período de Conclusão" type="date" />
      </div>

      <div className="flex justify-between items-center mt-2">
        <button className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition-colors">
          Mais filtros
          <ListFilter size={16} />
        </button>
        <button className="flex items-center gap-2 text-sm font-medium text-white bg-[#ea580c] hover:bg-[#c2410c] rounded-md px-6 py-2 transition-colors">
          <Search size={16} />
          Pesquisar
        </button>
      </div>
    </div>
  );
}