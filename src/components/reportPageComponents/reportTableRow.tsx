import { Eye } from "lucide-react";

export interface Report {
  id: string;
  date: string;
  setor: string;
  veiculo: string;
  placa: string;
  servico: string;
  responsavel: string;
}

export function ReportTableRow({ report }: { report: Report }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="p-4 font-medium text-gray-900 whitespace-nowrap">{report.id}</td>
      <td className="p-4 whitespace-nowrap">{report.date}</td>
      <td className="p-4 whitespace-nowrap">{report.setor}</td>
      <td className="p-4">
        <span className="block">{report.veiculo.split(" ")[0]} {report.veiculo.split(" ")[1]}</span>
        <span className="block text-gray-500 text-xs">{report.veiculo.split(" ").slice(2).join(" ")}</span>
      </td>
      <td className="p-4 whitespace-nowrap">{report.placa}</td>
      <td className="p-4 min-w-[250px]">{report.servico}</td>
      <td className="p-4 whitespace-nowrap">
        <span className="block">{report.responsavel.split("\n")[0]}</span>
        <span className="block text-gray-500 text-xs">{report.responsavel.split("\n")[1]}</span>
      </td>
      <td className="p-4 whitespace-nowrap text-center">
        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-orange-500 text-orange-600 hover:bg-orange-50 rounded-md text-xs font-medium transition-colors">
          <Eye size={14} />
          Visualizar
        </button>
      </td>
    </tr>
  );
}