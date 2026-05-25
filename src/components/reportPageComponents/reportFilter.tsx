"use client";

import { RefreshCcw, ChevronDown, Calendar, Search } from "lucide-react";

export function ReportFilter() {
  return (
    <section className="w-full bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-base font-semibold text-gray-800">
            Filtros de Pesquisa
          </h3>
          <button
            type="button"
            className="cursor-pointer active:scale-95 duration-300 ease-in-out flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-all"
          >
            <RefreshCcw className="h-3.5 w-3.5" />
            Limpar filtros
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 items-end mb-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Nº da Ordem de Serviço
            </label>
            <input
              type="text"
              placeholder="Ex: OS-000123"
              className="w-full px-3 py-2 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400 bg-gray-50/50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Secretaria
            </label>
            <div className="relative">
              <select
                className="w-full px-3 py-2 text-xs border border-gray-200 rounded-md appearance-none focus:outline-none focus:border-orange-500 text-gray-500 bg-gray-50/50 pr-8"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Selecione
                </option>
                <option value="1">Secretaria de Saúde</option>
                <option value="2">Secretaria de Infraestrutura</option>
              </select>
              <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">Placa</label>
            <input
              type="text"
              placeholder="Ex: ABC-1234"
              className="w-full px-3 py-2 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400 bg-gray-50/50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Veículo
            </label>
            <input
              type="text"
              placeholder="Ex: Gol, Onix, Hilux..."
              className="w-full px-3 py-2 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400 bg-gray-50/50"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-700">
              Período de Conclusão
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Selecione o período"
                className="w-full pl-8 pr-3 py-2 text-xs border border-gray-200 rounded-md focus:outline-none focus:border-orange-500 placeholder:text-gray-400 bg-gray-50/50"
              />
              <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            type="button"
            className="cursor-pointer active:scale-95 duration-300 ease-in-out flex items-center gap-1 px-3 py-2 text-xs font-medium text-gray-700 border border-gray-200 rounded-md hover:bg-gray-50 transition-all"
          >
            Mais filtros
            <ChevronDown className="h-3.5 w-3.5" />
          </button>

          <button
            type="submit"
            className="cursor-pointer active:scale-95 duration-300 ease-in-out flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#f25000] hover:bg-[#d94800] rounded-md transition-all shadow-sm"
          >
            <Search className="h-3.5 w-3.5" />
            Pesquisar
          </button>
        </div>
      </form>
    </section>
  );
}
