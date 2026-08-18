"use client";
import { LogOut } from "lucide-react";

export function SupplierHeader() {
  return (
    <header className="w-full bg-black">
      <div className="w-full h-18 flex flex-row items-center justify-between px-4 md:px-8 xl:px-16">
        
        <div className="flex items-center gap-4">
          <a href="/supplier">
            <img src="/logo-light.svg" className="w-40 xl:w-50 h-18 cursor-pointer" alt="Logo GFO" />
          </a>
          <div className="hidden sm:block border-l border-zinc-800 h-10 mx-2"></div>
          <div className="hidden sm:flex flex-col">
            <span className="text-white font-bold text-xs tracking-wide uppercase">Portal do Fornecedor</span>
            <span className="text-[#ea580c] text-[10px] font-bold tracking-wider">GESTÃO DE FROTA</span>
          </div>
        </div>

        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-col text-right">
            <span className="text-white text-sm font-semibold">Auto Peças Central Ltda</span>
            <span className="text-gray-400 text-xs tracking-wider font-medium">FORNECEDOR</span>
          </div>
          
          <div className="border-l border-zinc-800 h-10 hidden sm:block"></div>
          
          <button className="text-white flex flex-row gap-2 items-center justify-center cursor-pointer hover:text-red-500 transition-colors font-medium text-sm">
            <LogOut className="w-5 h-5 text-[#ffffff]" />
            <span>Sair</span>
          </button>
        </div>

      </div>
    </header>
  );
}