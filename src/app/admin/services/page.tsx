import { SummaryCard } from "@/components/servicePageComponents/summaryCard";
import { WorkOrderFilter } from "@/components/servicePageComponents/workOrderFilter"
import { PageHeader } from "@/components/pageHeader";
import { ServiceTable } from "@/components/servicePageComponents/tableComponents/serviceTable";
import { FileText, Clock, RefreshCcw, BadgeCheck } from "lucide-react";

const mockServices = [
  { 
    numId: "OS-2024-001", 
    date: "24/05/2024", 
    plate: "ABC-1234", 
    status: "Aberta", 
    problem: "Troca de óleo e filtros", 
    numPiece: 3, 
    price: 350.00 
  },
  { 
    numId: "OS-2024-002", 
    date: "25/05/2024", 
    plate: "DEF-5678", 
    status: "Em progresso", 
    problem: "Revisão das pastilhas de freio", 
    numPiece: 4, 
    price: 890.50 
  },
  { 
    numId: "OS-2024-003", 
    date: "26/05/2024", 
    plate: "GHI-9012", 
    status: "Fechada", 
    problem: "Alinhamento e balanceamento", 
    numPiece: 0, 
    price: 150.00 
  },
  { 
    numId: "OS-2024-004", 
    date: "27/05/2024", 
    plate: "JKL-3456", 
    status: "Aberta", 
    problem: "Bateria descarregada", 
    numPiece: 1, 
    price: 450.00 
  },
  { 
    numId: "OS-2024-005", 
    date: "28/05/2024", 
    plate: "MNO-7890", 
    status: "Em progresso", 
    problem: "Suspensão barulhenta", 
    numPiece: 2, 
    price: 1200.00 
  },
  { 
    numId: "OS-2024-006", 
    date: "29/05/2024", 
    plate: "PQR-1234", 
    status: "Fechada", 
    problem: "Troca de palhetas do limpador", 
    numPiece: 2, 
    price: 80.00 
  }
];

export default function ServicePage() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 w-full px-4 md:px-8 overflow-hidden">
      <div className="flex items-center justify-center w-full">
        <PageHeader 
          title="Ordens de Serviço"
          description="Acompanhe e gerencie as ordens de serviço da oficina"
          hideButton=""
          buttonText="Nova Ordem de Serviço"
        />
      </div>
      <div className="flex flex-col min-[635px]:grid min-[635px]:grid-cols-2 xl:flex xl:flex-row gap-10 items-center justify-center">
        <SummaryCard 
          icon={<FileText className="h-16 w-16 text-gray-500" />}
          total={24}
          classe="Total"
          description="Ordens de Serviço"
          iconBg="bg-gray-50"
        />
        <SummaryCard 
          icon={<Clock className="h-16 w-16 text-orange-500" />}
          total={8}
          classe="Aberto"
          description="Aguardando Início"
          iconBg="bg-orange-50"
        />
        <SummaryCard 
          icon={<RefreshCcw className="h-16 w-16 text-blue-500" />}
          total={10}
          classe="Em andamento"
          description="Em Execução"
          iconBg="bg-blue-50"
        />
        <SummaryCard 
          icon={<BadgeCheck className="h-16 w-16 text-green-500" />}
          total={6}
          classe="Fechadas"
          description="Concluídas"
          iconBg="bg-green-50"
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-10 items-center">
          <WorkOrderFilter />
        <div className="flex-1 min-w-0 w-full">
          <ServiceTable 
            services={mockServices}
          />
        </div>
        
      </div>
    </div>
  );
}
