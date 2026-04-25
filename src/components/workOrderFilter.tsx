"use client" ;
import { Search, ChevronDown } from "lucide-react";

export function WorkOrderFilter(){
   return(
    <div className="w-[400px] h-[600px] p-6 bg-white rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-6 text-zinc-900">
        
        {/* Título */}
        <div className="pt-5 text-lg font-bold">
            <h2>Filtros</h2>
        </div>

        {/* Seleção de filtros */}
        <div>

            <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-zinc-500">Status</label>
                
                <div className="relative">
                    <select className="w-full p-3 bg-white border border-zinc-200 rounded-xl appearance-none outline-none focus:border-orange-500 cursor-pointer">
                        <option value="todos">Todos</option>
                        <option value="aberto">Aberto</option>
                        <option value="concluido">Concluído</option>
                    </select>

                    {/* Ícone da seta de seleção */}
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronDown size={20} className="text-zinc-400" />
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-2">
                    <label className="pt-6 text-sm font-medium text-zinc-500">Período</label>
    
                    <div className="relative">
                        <select className="w-full p-3 bg-white border border-zinc-200 rounded-xl appearance-none outline-none focus:border-orange-500 cursor-pointer">
                            <option value="todos">Todos</option>
                            <option value="aberto">Aberto</option>
                            <option value="concluido">Concluído</option>
                        </select>
                        
                        {/* Ícone da seta de seleção */}
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown size={20} className="text-zinc-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div > 
        
        {/* Pesquisa específica */}
        
        <div className="flex flex-col gap-2">
            {/* O rótulo (label) indicando o que pesquisar */}
            <label className="text-sm font-medium text-zinc-500">
                Busca
            </label>
            
            {/* Container com "relative" para a lupa ficar no lugar certo */}
            <div className="relative flex items-center">
                <input 
                type="text"
                placeholder="Buscar por número, placa..."
                className="w-full p-3 bg-white border border-zinc-200 rounded-xl appearance-none outline-none focus:border-orange-500 cursor-pointer"
                />
                
                {/* Ícone de Lupa */}
                <div className="absolute right-3 pointer-events-none">
                    <Search size={20} className="text-zinc-400" />
                </div>
            </div>

        </div>
    
        {/* Ação do filtro */}
        <div>
            <div className="flex flex-col gap-3 mt-6">
                {/* Botão Limpar Filtros */}
                <button 
                    type="button"
                    className=" w-full py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-xl transition-all duration-300 ease-in-out hover:bg-orange-50 hover:shadow-mdactive:scale-95">
                    Limpar filtros
                </button>

                {/* Botão Aplicar Filtros */}
                <button 
                    type="submit"
                     className=" w-full py-3 border-2 bg-orange-500 border-orange-500 text-white font-bold rounded-xl transition-all duration-300 ease-in-out hover:bg-amber-700 hover:shadow-mdactive:scale-95">
                    Aplicar filtros
                </button>
            </div>

        </div>


    </div>
   )
}