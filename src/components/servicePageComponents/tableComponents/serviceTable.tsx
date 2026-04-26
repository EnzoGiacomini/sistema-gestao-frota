import { TableHeader } from "./tableHeader";
import { TableRow } from "./tableRow";

interface ServiceTableProps{
    services: any[];
}

export function ServiceTable({services}:ServiceTableProps)
{
    return (
        <div className="w-full max-w-full overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-250 border-collapse text-left">
                <TableHeader/>
                <tbody>
                    {services.map((service, index) => (
                        <TableRow 
                            key={index}
                            numId={service.numId}
                            date={service.date}
                            plate={service.plate}
                            status={service.status}
                            problem={service.problem}
                            numPiece={service.numPiece}
                            price={service.price}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}