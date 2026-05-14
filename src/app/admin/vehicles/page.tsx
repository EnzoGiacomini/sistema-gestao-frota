"use client";
import { VehicleResume } from "@/components/vehiclePageComponents/vehicleResume";
import { VehicleItems } from "@/components/vehiclePageComponents/vehiclesItems";
import { CarDetails } from "@/components/vehiclePageComponents/carDetails";
import { PlateField } from "@/components/vehiclePageComponents/plateField";
import { NoteInput } from "@/components/vehiclePageComponents/vehicleNote";
import { PageHeader } from "@/components/pageHeader";

export default function VehiclesPage() {
  return (
    <div className="flex flex-col items-center gap-8 h-auto w-full px-4 md:px-8 pb-12 overflow-x-hidden">
      <div className="w-full max-w-7xl">
        <PageHeader
          title="Cadastrar Veículo"
          description="Informe os dados do veículo para cadastro no sistema."
          hideButton="hidden"
          buttonText=""
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        <div className="lg:col-span-2 border rounded-2xl p-6 border-gray-200">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label className="font-bold text-gray-800">
                Dados do Veículo
              </label>
              <PlateField API />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <CarDetails item="Marca" result="" />
                <CarDetails item="Modelo" result="" />
                <CarDetails item="Ano" result="" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-bold text-gray-800">
                Itens do Veículo
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                <VehicleItems item="Step" />
                <VehicleItems item="Macaco" />
                <VehicleItems item="Chave de Roda" />
              </div>
            </div>

            <NoteInput />

            <hr className="border-gray-200 mt-2" />
            <div className="flex flex-row justify-between items-center mt-2 gap-5">
              <button
                type="button"
                className="px-2 py-1 min-[340px]:py-2 min-[340px]:px-4 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 font-medium transition-colors cursor-pointer"
              >
                ✕ Cancelar
              </button>
              <button
                type="submit"
                className="px-2 py-1 min-[340px]:py-2 min-[340px]:px-4 bg-orange-600 rounded-lg text-white font-medium hover:bg-orange-700 flex items-center gap-2 transition-colors cursor-pointer"
              >
                Salvar Veículo
              </button>
            </div>
          </form>
        </div>

        <div className="lg:col-span-1">
          <VehicleResume
            img="/s10Img.avif"
            plate="ABC-1234"
            model="Fiat Strada"
            year={2021}
            secretary="Educação"
            hasStep={true}
            hasJack={true}
            hasWheelWrench={true}
            obs="Veículo utilizado predominantemente para serviços externos."
          />
        </div>
      </div>
    </div>
  );
}
