import { Plus, Users, User, Building2 } from "lucide-react";
import { SummaryCard } from "@/components/servicePageComponents/summaryCard";
import { UserFilter } from "@/components/userPageComponents/userFilter";
import { UserTable } from "@/components/userPageComponents/userTable";

export default function UsersPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] p-6 md:p-8 w-full">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 text-zinc-900">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold text-[#ea580c]">Usuários</h1>
            <p className="text-sm text-gray-500">
              Gerencie os usuários e fornecedores que acessam o sistema
            </p>
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#ea580c] hover:bg-[#c2410c] text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors">
            <Plus size={18} />
            Novo Usuário / Fornecedor
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <SummaryCard
            icon={<Users size={24} className="text-orange-500" />}
            total={38}
            classe="Total"
            description="Usuários e Fornecedores"
            iconBg="bg-orange-100"
          />
          <SummaryCard
            icon={<User size={24} className="text-blue-500" />}
            total={6}
            classe="Administradores"
            description="Acesso total ao sistema"
            iconBg="bg-blue-100"
          />
          <SummaryCard
            icon={<User size={24} className="text-green-500" />}
            total={26}
            classe="Usuários Internos"
            description="Acesso padrão ao sistema"
            iconBg="bg-green-100"
          />
          <SummaryCard
            icon={<Building2 size={24} className="text-purple-500" />}
            total={12}
            classe="Fornecedores"
            description="Acesso de fornecedores"
            iconBg="bg-purple-100"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          <UserFilter />
          <UserTable />
        </div>
      </div>
    </div>
  );
}