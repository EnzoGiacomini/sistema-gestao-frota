import { ReportTableRow, Report } from "./reportTableRow";
import { ReportTablePagination } from "./reportTablePagination";

const mockReports: Report[] = [
  { id: "OS-000128", date: "24/05/2024 16:45", secretaria: "Secretaria de Educação", veiculo: "Chevrolet Onix 1.0 LT", placa: "ABC-1234", servico: "Troca de óleo do motor, substituição do filtro de óleo e verificação de sistema de freios.", responsavel: "João Silva\nMecânico" },
  { id: "OS-000127", date: "24/05/2024 10:30", secretaria: "Secretaria de Saúde", veiculo: "Fiat Strada 1.4", placa: "DEF-5678", servico: "Substituição de pastilhas de freio dianteiras, limpeza de freios e teste de rodagem.", responsavel: "Carlos Souza\nMecânico" },
  { id: "OS-000126", date: "23/05/2024 14:15", secretaria: "Secretaria de Obras", veiculo: "Volkswagen Amarok", placa: "GHI-9012", servico: "Alinhamento e balanceamento, verificação de suspensão e troca de buchas.", responsavel: "Marcos Lima\nMecânico" },
  { id: "OS-000125", date: "23/05/2024 09:05", secretaria: "Secretaria de Administração", veiculo: "Renault Master", placa: "JKL-3456", servico: "Diagnóstico elétrico, reparo no sistema de iluminação e substituição de lâmpadas.", responsavel: "João Silva\nMecânico" },
  { id: "OS-000124", date: "22/05/2024 15:20", secretaria: "Secretaria de Educação", veiculo: "Chevrolet Spin 1.8", placa: "MNO-7890", servico: "Revisão geral, troca de óleo, filtros e verificação de itens de segurança.", responsavel: "Carlos Souza\nMecânico" },
];

export function ReportTable() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg flex flex-col">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">Resultados encontrados</h2>
        <span className="text-sm text-gray-500">Total de registros: 128</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <th className="p-4 whitespace-nowrap">Nº da OS</th>
              <th className="p-4 whitespace-nowrap">Data de Conclusão</th>
              <th className="p-4 whitespace-nowrap">Secretaria</th>
              <th className="p-4 whitespace-nowrap">Veículo</th>
              <th className="p-4 whitespace-nowrap">Placa</th>
              <th className="p-4">Serviço Executado</th>
              <th className="p-4 whitespace-nowrap">Responsável</th>
              <th className="p-4 whitespace-nowrap text-center">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
            {mockReports.map((report) => (
              <ReportTableRow key={report.id} report={report} />
            ))}
          </tbody>
        </table>
      </div>

      <ReportTablePagination />
    </div>
  );
}