import { Pencil, Trash2, Building2 } from "lucide-react";

interface UserTableRowProps {
  initials: string;
  isCompany?: boolean;
  avatarBg: string;
  avatarText: string;
  name: string;
  role: string;
  type: string;
  contact1: string;
  contact2?: string;
  profile: string;
  status: string;
  date: string;
}

const profileColors: Record<string, string> = {
  administrador: "bg-orange-50 text-orange-600",
  usuário: "bg-blue-50 text-blue-600",
  fornecedor: "bg-purple-50 text-purple-600",
};

const statusColors: Record<string, string> = {
  ativo: "text-green-500",
  inativo: "text-gray-400",
};

export function UserTableRow({
  initials,
  isCompany,
  avatarBg,
  avatarText,
  name,
  role,
  type,
  contact1,
  contact2,
  profile,
  status,
  date,
}: UserTableRowProps) {
  const normalizedProfile = profile.toLowerCase();
  const normalizedStatus = status.toLowerCase();
  const profileStyle = profileColors[normalizedProfile] || "bg-gray-100 text-gray-600";
  const statusStyle = statusColors[normalizedStatus] || "text-gray-500";

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors text-sm">
      <td className="p-4 align-middle">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${avatarBg} ${avatarText}`}>
            {isCompany ? <Building2 size={18} /> : initials}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">{name}</span>
            <span className="text-gray-500 text-xs">{role}</span>
          </div>
        </div>
      </td>
      <td className="p-4 align-middle text-gray-600">{type}</td>
      <td className="p-4 align-middle">
        <div className="flex flex-col">
          <span className="text-gray-600">{contact1}</span>
          {contact2 && <span className="text-gray-500 text-xs">{contact2}</span>}
        </div>
      </td>
      <td className="p-4 align-middle text-center">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${profileStyle}`}>
          {profile}
        </span>
      </td>
      <td className="p-4 align-middle text-center font-semibold">
        <span className={statusStyle}>{status}</span>
      </td>
      <td className="p-4 align-middle text-center text-gray-600">{date}</td>
      <td className="p-4 align-middle">
        <div className="flex flex-row gap-2 justify-center">
          <button className="p-2 border border-orange-500 cursor-pointer hover:bg-orange-50 transition-all rounded-lg text-orange-500 flex items-center justify-center">
            <Pencil className="w-4 h-4" />
          </button>
          <button className="p-2 border border-red-500 cursor-pointer hover:bg-red-50 transition-all rounded-lg text-red-500 flex items-center justify-center">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  );
}