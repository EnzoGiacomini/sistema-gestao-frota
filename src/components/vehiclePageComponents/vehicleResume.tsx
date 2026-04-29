import {CircleDot} from "lucide-react"

interface VehicleResumeProps{
    img: string,
    plate: string,
    model: string,
    year: number,
    hasStep: boolean,
    hasJack: boolean,
    hasWheelWrench: boolean,
    obs: string
}


export function VehicleResume({img, plate, model, year, hasStep, hasJack, hasWheelWrench, obs}:VehicleResumeProps)
{
    //Traduzir as entradas:
    const textStep = hasStep ? "Sim" : "Não";
    const textJack = hasJack ? "Sim" : "Não";
    const textWheelWrench = hasWheelWrench ? "Sim" : "Não";

    return (
        <section className="flex flex-col gap-5 p-6 border border-gray-200 rounded-2xl">
            <h3 className="font-bold text-[20px]">Resumo do Veículo</h3>
            <div className="flex flex-col gap-3">
                <img className="w-100 h-50 border border-gray-200 rounded-2xl" src={img}/>
                <div className="flex flex-row justify-between">
                    <label>Placa</label>
                    <span className="font-bold">{plate}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <label>Marca / Modelo</label>
                    <span className="font-bold">{model}</span>
                </div>
                <div className="flex flex-row justify-between">
                    <label>Ano</label>
                    <span className="font-bold">{year}</span>
                </div>
            </div>
            <hr className="border border-gray-200"/>
            <div className="flex flex-col gap-3">
                <h4>Itens</h4>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <CircleDot className={`h-5 w-5 ${hasStep ? "text-green-600" : "text-red-600"}`}/>
                        <label>Step</label>
                    </div>
                    <span className={`py text-center font-bold px-2 rounded-lg ${hasStep ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>{textStep}</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <CircleDot className={`h-5 w-5 ${hasJack ? "text-green-600" : "text-red-600"}`}/>
                        <label>Macaco</label>
                    </div>
                    <span className={`py text-center font-bold px-2 rounded-lg ${hasJack ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>{textJack}</span>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center gap-2">
                        <CircleDot className={`h-5 w-5 ${hasWheelWrench ? "text-green-600" : "text-red-600"}`}/>
                        <label>Chave de Roda</label>
                    </div>
                    <span className={`py text-center font-bold px-2 rounded-lg ${hasWheelWrench ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}>{textWheelWrench}</span>
                </div>
            </div>
            <hr className="border border-gray-200"/>
            <div className="flex flex-col gap-3 pb-8">
                <h4 className="font-bold">Observações</h4>
                <p className="text-wrap">{obs}</p>
            </div>
        </section>
    );
}