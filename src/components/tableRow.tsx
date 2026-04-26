import { Trash, Printer, EllipsisVertical } from "lucide-react";

interface TableRowProps {
    numId: string;
    date: string;
    plate: string;
    status: string;
    problem: string;
    numPiece: number;
    price: number;
}

//isso aq seria como um dicionário, um jeito mais bonito de fazer um if else
const statusColors: Record<string, string> = {
    "em progresso": "bg-blue-100 text-blue-600",
    "aberta": "bg-orange-100 text-orange-600",
    "fechada": "bg-green-100 text-green-600",
};

export function TableRow({ numId, date, plate, status, problem, numPiece, price }: TableRowProps) {

    //normaliza pra nao dar erro por letra maiuscula
    const normalizedStatus = status.toLowerCase();
    //Pega o input e traduz no dicionário, se não for nenhum dos casos, deixa cinza.
    const currentStatusStyle = statusColors[normalizedStatus] || "bg-gray-100 text-gray-600";

    //Lógica para traduzir data do api:


    return (
        <tr className="border border-gray-200 hover:bg-gray-50 transition-colors text-nowrap">
            <td className="font-extrabold p-4 border-r border-gray-200 align-middle text-center">{numId}</td>
            <td className="p-4 border-r border-gray-200 align-middle">
                <div className="flex flex-col items-center text-gray-500 gap-1 text-sm">
                    <span>{date}</span>
                    <span>10:30</span>
                </div>
            </td>
            <td className="p-4 border-r border-gray-200 align-middle">
                <div className="flex flex-col items-center gap-1 text-sm">
                    <span className="font-bold text-black">{plate}</span>
                    <span className="text-gray-500">Fiat Strada</span>
                </div>
            </td>
            <td className="p-4 border-r border-gray-200 align-middle text-center">
                <span className={`px-3 py-1 rounded-full font-bold text-base ${currentStatusStyle}`}>
                    {status}
                </span>
            </td>
            <td className="font-bold p-4 border-r border-gray-200 align-middle text-center">{problem}</td>
            <td className="font-bold p-4 border-r border-gray-200 align-middle text-center">{numPiece} itens</td>
            <td className="text-gray-500 p-4 border-r border-gray-200 align-middle text-center">R$ {price}</td>
            <td className="p-4 align-middle">
                <div className="flex flex-row gap-3 justify-center">
                    <button className="flex flex-row gap-1 px-4 cursor-pointer py-2 border border-orange-500 hover:bg-orange-50 transition-all rounded-xl text-orange-500 items-center font-semibold">
                        <Printer className="w-5 h-5"/>
                        Imprimir
                    </button>
                    <button className="p-2 border border-red-500 cursor-pointer hover:bg-red-50 transition-all rounded-xl text-red-500 flex items-center justify-center">
                        <Trash className="w-5 h-5"/>
                    </button>
                    <button className="p-2 transition-all rounded-xl cursor-pointer text-gray-400 hover:text-black flex items-center justify-center">
                        <EllipsisVertical className="w-5 h-5"/>
                    </button>
                </div>
            </td>
        </tr>
    );
}