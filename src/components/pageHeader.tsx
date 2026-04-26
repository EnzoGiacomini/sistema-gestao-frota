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
        <section className="flex flex-col min-[800px]:flex-row items-center gap-8 min-[800px]:gap-0 justify-between w-[95%]">
            <div className="flex flex-col gap-3 text-center min-[800px]:text-start">
                <h2 className="text-[42px] text-orange-500 font-bold">{title}</h2>
                <p className="text-[18px] text-gray-500">{description}</p>
            </div>
            <div className="flex items-center justify-center">
                <button className={`${hideButton} items-center justify-center bg-orange-500 px-6 flex flex-row py-3 text-nowrap rounded-md text-white gap-2 cursor-pointer hover:bg-orange-600 transition-all active:scale-95`}><Plus className="h-8 w-8"></Plus> {buttonText}</button>
            </div>
        </section>
    );
    
}