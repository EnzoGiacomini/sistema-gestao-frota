"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";



export function Pagination() {
  // 1. Estado para controlar qual página está ativa
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  // 2. Estilos padronizados
  const baseStyle = "px-4 py-2 rounded-xl text-sm transition-all";
  const activeStyle = "border-2 border-orange-500 text-orange-500 font-bold";
  const inactiveStyle = "border border-zinc-200 text-zinc-600 font-medium hover:bg-zinc-100 hover:text-zinc-900";


  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-white border border-zinc-200 rounded-b-2xl gap-4 w-6/10">
      
      {/* Esquerda: Texto informativo estático */}
      <span className="text-sm text-zinc-500 font-medium">
        Mostrando 1 a 6 de 24 ordens de serviço
      </span>

      {/* Direita: Botões de navegação */}
      <div className="flex items-center gap-2">
        
        {/* Botão Anterior */}
        <button 
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="flex items-center gap-1 px-4 py-2 border border-zinc-200 rounded-xl text-orange-500 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-bold"
        >
          Anterior
          <ChevronRight size={16} />
        </button>

        {/* Lógica para renderizar os números das páginas */}
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`${baseStyle} ${currentPage === page ? activeStyle : inactiveStyle}`}
          >
            {page}
          </button>
        ))}

        {/* Botão Próximo */}
        <button 
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="flex items-center gap-1 px-4 py-2 border border-zinc-200 rounded-xl text-orange-500 hover:bg-zinc-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm font-bold"
        >
          Próximo
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}