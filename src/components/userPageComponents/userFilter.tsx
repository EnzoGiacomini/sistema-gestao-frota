"use client";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";
import { FilterDropdown } from "../servicePageComponents/filterSubcomponents/dropdownComponent";

export function UserFilter() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [tipoSelected, setTipoSelected] = useState("Todos");
  const [perfilSelected, setPerfilSelected] = useState("Todos");
  const [statusSelected, setStatusSelected] = useState("Todos");

  const tipoOptions = ["Todos", "Interno", "Fornecedor"];
  const perfilOptions = ["Todos", "Administrador", "Usuário", "Fornecedor"];
  const statusOptions = ["Todos", "Ativo", "Inativo"];

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed top-20 left-6 z-50 bg-orange-500 text-white p-4 rounded-full shadow-lg active:scale-95 transition-all"
      >
        <Filter size={24} />
      </button>

      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60] md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <div
        className={`
        fixed inset-y-0 left-0 z-[70] w-[300px] bg-white shadow-2xl transition-transform duration-300
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        md:relative md:translate-x-0 md:w-[320px] md:h-auto md:rounded-2xl md:shadow-sm md:border md:border-zinc-200
        p-6 flex flex-col gap-6 text-zinc-900 shrink-0
     `}
      >
        <div className="pt-2 text-lg font-bold flex justify-between items-center">
          <h2>Filtros</h2>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-2 text-zinc-400"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <FilterDropdown
            label="Tipo"
            value={tipoSelected}
            options={tipoOptions}
            onChange={setTipoSelected}
          />
          <FilterDropdown
            label="Perfil"
            value={perfilSelected}
            options={perfilOptions}
            onChange={setPerfilSelected}
          />
          <FilterDropdown
            label="Status"
            value={statusSelected}
            options={statusOptions}
            onChange={setStatusSelected}
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-zinc-500">Busca</label>
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Buscar por nome, email ou empresa..."
                className="w-full p-3 bg-white border border-zinc-200 rounded-xl appearance-none outline-none focus:border-orange-500 text-sm"
              />
              <div className="absolute right-3 pointer-events-none">
                <Search size={18} className="text-zinc-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            className="w-full py-3 border border-orange-500 text-orange-500 font-bold rounded-xl transition-all duration-300 ease-in-out hover:bg-orange-50 active:scale-95 text-sm"
          >
            Limpar filtros
          </button>
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 border border-orange-500 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:bg-orange-600 active:scale-95 text-sm"
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </>
  );
}