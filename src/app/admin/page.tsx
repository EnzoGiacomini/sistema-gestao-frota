import { OptionCard } from "@/components/globalComponents/optionCard";
import { Users, FileText, Truck, BarChart } from "lucide-react";
import Link from "next/link";

export default function AdminHomePage() {
  return (
    <section className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-400 justify-items-center">
        <OptionCard
          name="Ordens de Serviço"
          about="Acompanhe e gerencie as ordens de serviço da oficina."
          arrList={[
            "Criar novas ordens",
            "Visualizar status e problemas",
            "Registrar peças, valores e ações",
          ]}
          icon={<FileText className="w-12 h-12 text-amber-600" />}
        >
          <Link
            href="/admin/services"
            className="w-full h-14 rounded-xl bg-amber-600 text-white cursor-pointer font-extrabold flex items-center justify-center hover:bg-amber-700 transition-all active:scale-95 text-center"
          >
            Ir para Ordens de Serviço
          </Link>
        </OptionCard>

        <OptionCard
          name="Veículos"
          about="Gerencie a frota de veículos."
          arrList={[
            "Cadastrar veículos",
            "Visualizar informações",
            "Acompanhar histórico de serviços",
          ]}
          icon={<Truck className="w-12 h-12 text-amber-600" />}
        >
          <Link
            href="/admin/vehicles"
            className="w-full h-14 rounded-xl bg-amber-600 text-white cursor-pointer font-extrabold flex items-center justify-center hover:bg-amber-700 transition-all active:scale-95 text-center"
          >
            Ver Veículos
          </Link>
        </OptionCard>

        <OptionCard
          name="Usuários"
          about="Gerencie quem pode acessar o sistema."
          arrList={[
            "Cadastrar novos usuários",
            "Definir permissões",
            "Controlar acessos",
          ]}
          icon={<Users className="w-12 h-12 text-amber-600" />}
        >
          <Link
            href="/admin/users"
            className="w-full h-14 rounded-xl bg-amber-600 text-white cursor-pointer font-extrabold flex items-center justify-center hover:bg-amber-700 transition-all active:scale-95 text-center"
          >
            Gerenciar Usuários
          </Link>
        </OptionCard>

        <OptionCard
          name="Relatórios"
          about="Gere relatórios e acompanhe resultados."
          arrList={[
            "Serviços realizados",
            "Custos por período",
            "Histórico de veículos",
          ]}
          icon={<BarChart className="w-12 h-12 text-amber-600" />}
        >
          <Link
            href="/admin/report"
            className="w-full h-14 rounded-xl bg-amber-600 text-white cursor-pointer font-extrabold flex items-center justify-center hover:bg-amber-700 transition-all active:scale-95 text-center"
          >
            Ver Relatórios
          </Link>
        </OptionCard>
      </div>
    </section>
  );
}
