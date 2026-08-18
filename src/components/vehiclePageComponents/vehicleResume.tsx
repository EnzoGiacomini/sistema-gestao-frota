import { CircleDot } from "lucide-react";

interface VehicleResumeProps {
  img: string;
  plate: string;
  model: string;
  year: number;
  sector: string;
  hasStep: boolean;
  hasJack: boolean;
  hasWheelWrench: boolean;
  obs: string;
}

export function VehicleResume({
  img,
  plate,
  model,
  year,
  sector,
  hasStep,
  hasJack,
  hasWheelWrench,
  obs,
}: VehicleResumeProps) {
  const textStep = hasStep ? "Sim" : "Não";
  const textJack = hasJack ? "Sim" : "Não";
  const textWheelWrench = hasWheelWrench ? "Sim" : "Não";

  return (
    <section className="flex flex-col gap-6 p-6 border border-gray-200 rounded-2xl h-auto bg-gray-50/30 shadow-sm">
      <h3 className="font-bold text-[18px]">Resumo do Veículo</h3>

      <div className="flex flex-col gap-4">
        <div className="w-full bg-gray-100 rounded-2xl flex items-center justify-center p-4">
          <img
            className="w-full h-40 object-contain mix-blend-multiply"
            alt="Imagem do veículo encontrado"
            src={img}
          />
        </div>

        <div className="flex flex-col gap-3 text-sm mt-2">
          <div className="flex flex-row justify-between">
            <label className="text-gray-500">Placa</label>
            <span className="font-bold">{plate}</span>
          </div>
          <div className="flex flex-row justify-between">
            <label className="text-gray-500">Marca / Modelo</label>
            <span className="font-bold">{model}</span>
          </div>
          <div className="flex flex-row justify-between">
            <label className="text-gray-500">Ano</label>
            <span className="font-bold">{year}</span>
          </div>
          <div className="flex flex-row justify-between">
            <label className="text-gray-500">Setor</label>
            <span className="font-bold">{sector}</span>
          </div>
        </div>
      </div>

      <hr className="border border-gray-200" />

      <div className="flex flex-col gap-4 text-sm">
        <h4 className="text-gray-500">Itens</h4>
        <div className="flex flex-col gap-3">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <CircleDot
                className={`h-4 w-4 ${hasStep ? "text-green-600" : "text-red-600"}`}
              />
              <label>Step</label>
            </div>
            <span
              className={`py-1 text-center font-bold px-3 text-xs rounded-lg ${hasStep ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}
            >
              {textStep}
            </span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <CircleDot
                className={`h-4 w-4 ${hasJack ? "text-green-600" : "text-red-600"}`}
              />
              <label>Macaco</label>
            </div>
            <span
              className={`py-1 text-center font-bold px-3 text-xs rounded-lg ${hasJack ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}
            >
              {textJack}
            </span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-2">
              <CircleDot
                className={`h-4 w-4 ${hasWheelWrench ? "text-green-600" : "text-red-600"}`}
              />
              <label>Chave de Roda</label>
            </div>
            <span
              className={`py-1 text-center font-bold px-3 text-xs rounded-lg ${hasWheelWrench ? "text-green-700 bg-green-100" : "text-red-700 bg-red-100"}`}
            >
              {textWheelWrench}
            </span>
          </div>
        </div>
      </div>

      <hr className="border border-gray-200" />

      <div className="flex flex-col gap-2 pb-2 text-sm">
        <h4 className="text-gray-500">Observações</h4>
        <p className="text-wrap text-gray-700">{obs}</p>
      </div>
    </section>
  );
}
