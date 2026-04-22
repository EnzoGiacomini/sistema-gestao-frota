import { SummaryCard } from "@/components/summarycard";
import { FileText, Clock, RefreshCcw, BadgeCheck } from "lucide-react";

export default function ServicePage() {
  return (
    <section className="w-full flex justify-center">
      <div className="justify-center items-center pt-10">
        <SummaryCard
          icon={<FileText className="w-16 h-16 text-amber-600" />}
          total={24}
          classe="Total"
          description="Ordens de Serviço"
          iconBg="bg-orange-50"
        />
      </div>
    </section>
  );
}
