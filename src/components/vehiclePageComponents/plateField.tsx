"use client";
import { Search, Check, X } from "lucide-react";

interface PlateFieldProps {
  API: boolean;
}

export function PlateField({ API }: PlateFieldProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <label className="text-[15px]">Placa</label>
      <div>
        <form className="flex flex-row items-center gap-3">
          <input
            type="text"
            id="plateId"
            name="plate"
            placeholder="EX: ABC1D23"
            required
            className="border rounded p-1 w-75 text-center"
          ></input>
          <button className="text-orange-500 font-bold text-[13px] flex flex-row gap-2 items-center justify-center cursor-pointer p-[6px] border border-orange-500 rounded">
            <Search className="h-4 w-4 text-orange-500" />
            Consultar placa
          </button>
          {/*
          <div className="flex items-center text-green-600 bg-green-100 p-1 rounded-full">
            <Check className="h-5 w-5" />
          </div>
          */}

          {/* 
          <div className="flex items-center text-red-600 bg-red-100 p-1 rounded-full">
            <X className="h-5 w-5" />
          </div> 
          */}
        </form>
      </div>
      <p className="text-gray-400 text-[10px] font-bold">
        Dados consultados automaticamente pela API
      </p>
    </div>
  );
}
