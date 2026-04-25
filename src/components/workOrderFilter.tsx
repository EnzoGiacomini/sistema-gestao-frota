"use client" ;
import { Search, ChevronDown } from "lucide-react";
import { useState } from "react";


export function WorkOrderFilter(){

    // Estados para o Status
    const [statusOpen, setStatusOpen] = useState(false);
    const [statusSelected, setStatusSelected] = useState("Todos");
    const options = ["Todos", "Aberto", "Concluído"];

    // Estados para o Período
    const [periodoOpen, setPeriodoOpen] = useState(false);
    const [periodoSelected, setPeriodoSelected] = useState("Hoje");
    const periodoOptions = ["Hoje", "Últimos 7 dias", "Últimos 30 dias", "Personalizado"];

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

                {/* Container da caixa de seleção dos status */}
                <div className="relative">
                    <button
                        onClick={() => setStatusOpen(!statusOpen)}
                        onBlur={() => setTimeout(() => setStatusOpen(false), 200)} // Delay para permitir o clique na opção
                        className="w-flex w-full flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-xl outline-none focus:border-orange-500 transition-all text-sm">
                            <span>{statusSelected}</span>
                            <ChevronDown size={20} className={`text-zinc-400 transition-transform duration-300 ${statusOpen ? "rotate-180" : ""}`}/>
                    </button>

                    {/* Lista de Opções (Só aparece se statusOpen for true) */}
                    {statusOpen && (
                        <div className="absolute z-10 w-full mt-2 bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                                {options.map((option) => (
                                    <button key={option}
                                        onClick={() => {
                                            setStatusSelected(option);
                                            setStatusOpen(false);
                                        }}
                                        className="w-full text-left p-3 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">
                                        {option}
                                    </button>
                                ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Dropdown de Período */}
        <div className="flex flex-col gap-2 pt-6">
          <label className="text-sm font-medium text-zinc-500">Período</label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setPeriodoOpen(!periodoOpen)}
              onBlur={() => setTimeout(() => setPeriodoOpen(false), 200)}
              className="w-full flex items-center justify-between p-3 bg-white border border-zinc-200 rounded-xl outline-none focus:border-orange-500 transition-all text-sm text-left"
            >
              <span>{periodoSelected}</span>
              <ChevronDown 
                size={20} 
                className={`text-zinc-400 transition-transform duration-300 ${periodoOpen ? "rotate-180" : ""}`} 
              />
            </button>

            {periodoOpen && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-zinc-200 rounded-xl shadow-lg overflow-hidden">
                {periodoOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setPeriodoSelected(option);
                      setPeriodoOpen(false);
                    }}
                    className="w-full text-left p-3 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
        
        
        
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