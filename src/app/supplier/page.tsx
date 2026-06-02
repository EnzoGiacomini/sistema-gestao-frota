import { SummaryCard } from "@/components/servicePageComponents/summaryCard";
import { SupplierTable } from "@/components/supplierPageComponents/supplierTable";
import { FileText, Send, CheckCircle2, XCircle } from "lucide-react";

export default function SupplierOrdersPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] p-6 md:p-8 w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8 text-zinc-900">
        
        <div className="flex flex-col gap-1">
          <h1 className="text-[32px] font-bold text-gray-900">Ordens de Serviço</h1>
          <p className="text-[16px] text-gray-500">
            Veja abaixo as ordens de serviço disponíveis para orçamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard
            icon={<FileText className="text-orange-500" size={28} />}
            total={7}
            classe="Aguardando orçamento"
            description="Ordens disponíveis"
            iconBg="bg-orange-50"
          />
          <SummaryCard
            icon={<Send className="text-blue-500" size={28} />}
            total={3}
            classe="Orçamentos enviados"
            description="Aguardando análise"
            iconBg="bg-blue-50"
          />
          <SummaryCard
            icon={<CheckCircle2 className="text-green-500" size={28} />}
            total={1}
            classe="Aprovadas"
            description="Orçamentos aprovados"
            iconBg="bg-green-50"
          />
          <SummaryCard
            icon={<XCircle className="text-red-500" size={28} />}
            total={0}
            classe="Recusadas"
            description="Orçamentos recusados"
            iconBg="bg-red-50"
          />
        </div>

        <SupplierTable />
      </div>
    </div>
  );
}