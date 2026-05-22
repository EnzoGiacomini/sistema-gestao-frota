export function TableHeader() {
  return (
    <thead className="bg-gray-100 border-b border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider text-left w-full">
      <tr>
        <th className="p-4 rounded-tl-2xl text-center">Número</th>
        <th className="p-4 text-center">Data</th>
        <th className="p-4 text-center">Placa / Veículo</th>
        <th className="p-4 text-center">Status</th>
        <th className="p-4 text-center">Problemas</th>
        <th className="p-4 text-center">Peças</th>
        <th className="p-4 text-center">Valor</th>
        <th className="p-4 rounded-tr-2xl text-center">Ações</th>
      </tr>
    </thead>
  );
}