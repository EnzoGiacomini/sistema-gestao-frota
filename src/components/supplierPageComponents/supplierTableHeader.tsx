export function SupplierTableHeader() {
  return (
    <thead className="bg-white border-b border-gray-100 text-gray-500 text-[11px] font-bold uppercase tracking-wider text-left w-full">
      <tr>
        <th className="p-4 rounded-tl-2xl">Nº OS</th>
        <th className="p-4">Data</th>
        <th className="p-4">Veículo</th>
        <th className="p-4">Problema Relatado</th>
        <th className="p-4 text-center">Prioridade</th>
        <th className="p-4">Prazo para Orçamento</th>
        <th className="p-4 rounded-tr-2xl text-center">Ações</th>
      </tr>
    </thead>
  );
}