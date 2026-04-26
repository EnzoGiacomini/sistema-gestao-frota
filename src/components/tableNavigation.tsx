"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white border border-zinc-200 rounded-b-2xl gap-4 w-6/10">
      
      {/* Esquerda: Texto informativo estático */}
      <span className="text-sm text-zinc-500 font-medium">
        Mostrando 1 a 6 de 24 ordens de serviço
      </span>

      {/* Direita: Botões de navegação */}
      <div className="flex items-center gap-2">
        
        {/* Botão Anterior */}
        <button className="flex items-center gap-1 px-4 py-2 border border-zinc-200 rounded-xl text-zinc-500 hover:bg-zinc-50 transition-all text-sm font-medium">
          <ChevronLeft size={16} />
          Anterior
        </button>

        {/* Números das Páginas (Exemplos fixos para ver o estilo) */}
        <button className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-xl text-sm font-bold transition-all">
          1
        </button>
        
        <button className="px-4 py-2 border border-zinc-200 text-zinc-600 rounded-xl text-sm font-medium hover:bg-zinc-50 transition-all">
          2
        </button>

        <button className="px-4 py-2 border border-zinc-200 text-zinc-600 rounded-xl text-sm font-medium hover:bg-zinc-50 transition-all">
          3
        </button>

        <button className="px-4 py-2 border border-zinc-200 text-zinc-600 rounded-xl text-sm font-medium hover:bg-zinc-50 transition-all">
          4
        </button>

        {/* Botão Próximo */}
        <button className="flex items-center gap-1 px-4 py-2 border border-zinc-200 rounded-xl text-orange-500 hover:bg-zinc-50 transition-all text-sm font-bold">
          Próximo
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}