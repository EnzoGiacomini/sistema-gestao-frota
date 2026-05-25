"use client";
import { Search, Check, X } from "lucide-react";

interface PlateFieldProps {
  API: boolean;
}

export function PlateField({ API }: PlateFieldProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-[15px]">Placa</label>
      <div className="flex flex-col min-[400px]:flex-row items-center gap-2 w-full">
        <input
          type="text"
          id="plateId"
          name="plate"
          placeholder="EX: ABC1D23"
          required
          className="border border-gray-300 rounded p-1.5 w-full flex-1 max-w-70 text-center"
        />
        <button
          type="button"
          className="bg-white text-orange-500 font-bold text-[13px] flex flex-row gap-2 items-center justify-center cursor-pointer px-3 py-1.5 border border-orange-500 rounded shrink-0 whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-orange-50 hover:shadow-md active:scale-95"
        >
          <Search className="h-4 w-4 text-orange-500 shrink-0" />
          Consultar placa
        </button>

        {/*
          <div className="flex items-center text-green-600 bg-green-100 p-1 rounded-full shrink-0">
            <Check className="h-4 w-4" />
          </div>
        */}

        {/* <div className="flex items-center text-red-600 bg-red-100 p-1 rounded-full shrink-0">
            <X className="h-4 w-4" />
          </div> 
        */}
      </div>
      <p className="text-gray-400 text-[10px] font-bold">
        Dados consultados automaticamente pela API
      </p>
    </div>
  );
}
