"use client";
import { SummaryCard } from "@/components/summarycard";
import { FileText, Clock, RefreshCcw, BadgeCheck } from "lucide-react";
import { Pagination } from "@/components/tableNavigation";

export default function ServicePage() {
  return (
    <section className="w-full flex justify-center">
      <Pagination/>
    </section>
  );
}
