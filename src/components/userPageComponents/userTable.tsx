import { UserTableHeader } from "./userTableHeader";
import { UserTableRow } from "./userTableRow";
import { Pagination } from "../tableComponents/tableNavigation";

const mockUsers = [
  { initials: "GF", isCompany: false, avatarBg: "bg-orange-100", avatarText: "text-orange-600", name: "Gustavo Fonseca da Cunha", role: "Admin do Sistema", type: "Interno", contact1: "gustavo.cunha@pelotas.rs.gov.br", profile: "Administrador", status: "Ativo", date: "15/01/2024" },
  { initials: "EG", isCompany: false, avatarBg: "bg-blue-100", avatarText: "text-blue-600", name: "Enzo Giacomini", role: "Gerente de Oficina", type: "Interno", contact1: "enzo.giacomini@pelotas.rs.gov.br", profile: "Administrador", status: "Ativo", date: "20/01/2024" },
  { initials: "PH", isCompany: false, avatarBg: "bg-green-100", avatarText: "text-green-600", name: "Pedro Henrique M. Bortoli", role: "Mecânico", type: "Interno", contact1: "pedro.bortoli@pelotas.rs.gov.br", profile: "Usuário", status: "Ativo", date: "25/01/2024" },
  { initials: "", isCompany: true, avatarBg: "bg-purple-100", avatarText: "text-purple-600", name: "Auto Peças Pelotas Ltda", role: "Fornecedor de Peças", type: "Fornecedor", contact1: "contato@autopecaspelotas.com.br", contact2: "(53) 3225-1234", profile: "Fornecedor", status: "Ativo", date: "05/02/2024" },
  { initials: "", isCompany: true, avatarBg: "bg-purple-100", avatarText: "text-purple-600", name: "Distribuidora Sul Peças", role: "Fornecedor", type: "Fornecedor", contact1: "vendas@sulpecas.com.br", contact2: "(51) 3770-5678", profile: "Fornecedor", status: "Ativo", date: "10/02/2024" },
  { initials: "JA", isCompany: false, avatarBg: "bg-yellow-100", avatarText: "text-yellow-600", name: "Juliana Andrade", role: "Almoxarifado", type: "Interno", contact1: "juliana.andrade@pelotas.rs.gov.br", profile: "Usuário", status: "Inativo", date: "18/02/2024" },
  { initials: "", isCompany: true, avatarBg: "bg-purple-100", avatarText: "text-purple-600", name: "Motor&cia Componentes", role: "Fornecedor de Peças", type: "Fornecedor", contact1: "comercial@motorecia.com.br", contact2: "(53) 3301-9876", profile: "Fornecedor", status: "Ativo", date: "01/03/2024" },
  { initials: "LS", isCompany: false, avatarBg: "bg-cyan-100", avatarText: "text-cyan-600", name: "Lucas Santos", role: "Auxiliar de Oficina", type: "Interno", contact1: "lucas.santos@pelotas.rs.gov.br", profile: "Usuário", status: "Ativo", date: "05/03/2024" },
];

export function UserTable() {
  return (
    <div className="w-full max-w-full overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col">
      <div className="overflow-x-auto w-full">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <UserTableHeader />
          <tbody>
            {mockUsers.map((user, index) => (
              <UserTableRow key={index} {...user} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
}