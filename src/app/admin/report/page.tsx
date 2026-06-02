import { ReportFilter } from "@/components/reportPageComponents/reportFilter";
import { ReportTable } from "@/components/reportPageComponents/reportTable";

export default function ReportPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] p-8 w-full">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-[#ea580c]">Relatórios</h1>
          <p className="text-sm text-gray-500">
            Consulte os registros das ordens de serviço já concluídas.
          </p>
        </div>
        
        <ReportFilter />
        <ReportTable />
      </div>
    </div>
  );
}