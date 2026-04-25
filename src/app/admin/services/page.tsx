import { SummaryCard } from "@/components/summarycard";
import { WorkOrderFilter } from "@/components/workOrderFilter";
export default function ServicePage() {
  return (
    <section className="w-full flex justify-center">
      <div className="justify-center items-center pt-10">
        <WorkOrderFilter />
      </div>
    </section>
  );
}
