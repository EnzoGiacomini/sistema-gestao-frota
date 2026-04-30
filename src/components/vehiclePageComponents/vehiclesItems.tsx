"use client";

import { useState } from 'react';


interface VehicleItemsProps {
  item: string;
  Icone: React.ElementType; 
}


export function  VehicleItems ({ item, Icone }:VehicleItemsProps) {
    
    //controle de estados da seleção
    const [selected, setSelected] = useState('sim');

    return(

        <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm max-w-xs">
        {/* Cabeçalho com Ícone e Nome do Item */}
            <div className="flex items-center gap-2 mb-4 text-gray-600">
                <Icone size={24} className="transform -rotate-45" /> 

                
                <span className="font-medium text-sm">{item}</span>
            </div>

            {/* Container das Opções */}
            <div className="flex gap-6">

                {/* Opção Sim */}
                <label className="flex items-center gap-2 cursor-pointer group">

                <input 
                    type="radio" 
                    name={item} 
                    className="hidden" 
                    checked={selected === 'sim'}
                    onChange={() => setSelected('sim')}
                />

                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                    ${selected === 'sim' ? 'border-green-500' : 'border-gray-300'}`}>
                    {selected === 'sim' && <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />}
                </div>

                <span className="text-sm text-gray-500">Sim</span>
                </label>

                {/* Opção Não */}
                <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                    type="radio" 
                    name={item} 
                    className="hidden" 
                    checked={selected === 'nao'}
                    onChange={() => setSelected('nao')}
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                    ${selected === 'nao' ? 'border-green-500' : 'border-gray-300'}`}>
                    {selected === 'nao' && <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />}
                </div>

                <span className="text-sm text-gray-500">Não</span>
                </label>

            </div>
        </div>
  );
}