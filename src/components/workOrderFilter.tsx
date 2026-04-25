"use client" ;

export function WorkOrderFilter(){
   return(
    <div className="w-[400px] h-[600px] p-6 bg-white rounded-2xl shadow-sm border border-zinc-100 flex flex-col gap-6 text-zinc-900">
        
        {/* Título */}
        <div>
            <h2>Filtro</h2>
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

                    {/* Setinha customizada posicionada à direita */}
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    ▼
                    </span>
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
                    
                    {/* Setinha customizada posicionada à direita */}
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                    ▼
                    </span>
                </div>
            </div>
            
            </div>
            
        {/* Pesquisa específica */}
        </div>
            
{/* O rótulo (label) indicando o que pesquisar */}
  <label className="text-sm font-semibold text-zinc-500">
    Busca
  </label>
  
  {/* Container com "relative" para a lupa ficar no lugar certo */}
  <div className="relative flex items-center">
    <input 
      type="text"
      placeholder="Buscar por número, placa..."
      className="w-full p-3 pr-10 bg-white border border-zinc-200 rounded-xl outline-none focus:border-orange-500 text-sm text-zinc-900 placeholder:text-zinc-400"
    />
    
    {/* Ícone de Lupa (posicionado de forma absoluta dentro da div relative) */}
    <div className="absolute right-3 text-zinc-400 pointer-events-none">
      🔍
    </div>
  </div>

        <div>


        </div>

        {/* Ação do filtro */}
        <div>
            <div className="flex flex-col gap-3 mt-auto">
                {/* Botão Limpar Filtros - Efeito Ghost/Outline */}
                <button 
                    type="button"
                    className=" w-full py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-xl transition-all duration-300 ease-in-out hover:bg-orange-50 hover:shadow-mdactive:scale-95">
                    Limpar filtros
                </button>

                {/* Botão Aplicar Filtros - Efeito de Elevação */}
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