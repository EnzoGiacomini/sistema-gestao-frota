export function UserTableHeader() {
  return (
    <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 text-[11px] font-bold uppercase tracking-wider text-left w-full">
      <tr>
        <th className="p-4 rounded-tl-2xl">Nome</th>
        <th className="p-4">Tipo</th>
        <th className="p-4">Email / Contato</th>
        <th className="p-4 text-center">Perfil</th>
        <th className="p-4 text-center">Status</th>
        <th className="p-4 text-center">Data Cadastro</th>
        <th className="p-4 rounded-tr-2xl text-center">Ações</th>
      </tr>
    </thead>
  );
}