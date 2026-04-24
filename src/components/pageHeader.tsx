import { Plus } from "lucide-react";

interface PageHeaderProps{
    title: string;
    description: string;
    hideButton: string;
    buttonText: string;
}

//Se o botão não é necessário, só precisa colocar no hideButton: hidden
//depois tem q fazer os botoes serem funcionais

export function PageHeader({title, description, hideButton, buttonText}: PageHeaderProps)
{
    return (
        <section className="flex flex-row items-center justify-between max-w-[80%] w-full">
            <div className="flex flex-col gap-3">
                <h2 className="text-[42px] text-orange-500 font-bold">{title}</h2>
                <p className="text-[18px] text-gray-500">{description}</p>
            </div>
            <div className="flex items-center justify-center">
                <button className={`${hideButton} items-center justify-center bg-orange-500 px-6 flex flex-row py-3 text-nowrap rounded-md text-white gap-2`}><Plus className="h-8 w-8"></Plus> {buttonText}</button>
            </div>
        </section>
    );
    
}