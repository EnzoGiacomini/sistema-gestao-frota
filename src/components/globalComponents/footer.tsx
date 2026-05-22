import { FaGithub } from 'react-icons/fa';

export function Footer()
{

    const year = new Date().getFullYear();

    return (
        <footer className='bg-transparent w-full min-h-42 border-t-amber-600 border-t-2 flex flex-col'>
            <div className='min-h-34 flex flex-col min-[1060px]:flex-row items-center min-[1060px]:justify-center xl:gap-17 gap-4 px-4 py-4'>
                <div className='flex flex-col min-[560px]:flex-row items-center justify-center gap-3 min-[1060px]:gap-5'>
                    <img src="/logoPrefPelWhite2.png" className='w-70'/>
                    <div className='flex flex-col max-w-87.5 gap-2 text-center min-[560px]:text-start'>
                        <span className='text-black text-[16px] font-bold'>DVO - Departamento de Veículos e Oficinas</span>
                        <p className='text-[12px] text-gray-500 font-extralight'>Sistema desenvolvido para otimizar a gestão de frota, oficinas e serviços no município de Pelotas</p>
                    </div>
                </div>
                <div className='min-[1060px]:border-l-2 border-b-2 border-gray-400 min-[1060px]:h-22 w-50 min-[360px]:w-90 min-[560px]:w-130 min-[1060px]:w-0'></div>
                <div className='flex flex-col gap-1.5'>
                    <span className='text-gray-700 font-bold text-center min-[560px]:text-start'>Feito por:</span>
                    <div className='flex flex-col min-[560px]:flex-row min-[560px]:gap-8 gap-2'>
                        <div className='flex flex-col gap-1 justify-center items-center min-[560px]:items-start'>
                            <span className='font-bold'>Enzo Giacomini</span>
                            <a className='flex flex-row gap-2 items-center justify-center' href='https://github.com/EnzoGiacomini' target="_blank" rel="noopener noreferrer"><FaGithub/>github.com/EnzoGiacomini</a>
                        </div>
                        <div className='flex flex-col gap-1 justify-center items-center min-[560px]:items-start'>
                            <span className='font-bold text-nowrap'>Pedro Henrique Mognon Bortoli</span>
                            <a className='flex flex-row gap-2 items-center justify-center' href='https://github.com/PedroMBortoli' target="_blank" rel="noopener noreferrer"><FaGithub/>github.com/PedroMBortoli</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='min-h-12 bg-mist-900 flex items-center justify-center text-[12px] text-wrap text-center'>
                <span className='text-gray-300'>&copy; {year} Prefeitura Municipal de Pelotas. Todos os direitos reservados.</span>
            </div>
        </footer>
    );
}