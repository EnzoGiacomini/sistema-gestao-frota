"use client";
import Link from 'next/link'
import { Home, Users, FileText, Truck, BarChart,LogOut } from "lucide-react";
import { usePathname } from 'next/navigation';

//Falta fazer o botao 'sair' funcional

export function Header()
{
    //Controle de rota para mudar o fundo do link
    const pathname = usePathname();

    return(
        <header className="w-full h-18 bg-black flex flex-row items-center justify-around">
            <a href='https://www.pelotas.com.br/' target="_blank" rel="noopener noreferrer">
                <img src="/logoPrefPelBlack.png" className="w-50 h-18 cursor-pointer"/>
            </a>

            <div className='border-l border-white h-10'></div>

            <nav className='flex flex-row gap-5'>
                <Link href="/admin" className={`gap-2 px-5 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center ${pathname === '/admin' ? 'bg-orange-500' : 'bg-transparent'}`}>
                    <Home className="w-5 h-5"/>
                    <span>Início</span>
                </Link>
                <Link href="/admin/services" className={`gap-2 px-5 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center ${pathname === '/admin/services' ? 'bg-orange-500' : 'bg-transparent'}`}>
                    <FileText className="w-5 h-5"/>
                    <span>Ordens de Serviço</span>
                </Link>
                <Link href="/admin/vehicles" className={`gap-2 px-5 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center ${pathname === '/admin/vehicles' ? 'bg-orange-500' : 'bg-transparent'}`}>
                    <Truck className="w-5 h-5"/>
                    <span>Veículos</span>
                </Link>
                <Link href="/admin/report" className={`gap-2 px-5 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center ${pathname === '/admin/report' ? 'bg-orange-500' : 'bg-transparent'}`}>
                    <BarChart className="w-5 h-5"/>
                    <span>Relatório</span>
                </Link>
                <Link href="/admin/users" className={`gap-2 px-5 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center ${pathname === '/admin/users' ? 'bg-orange-500' : 'bg-transparent'}`}>
                    <Users className="w-5 h-5"/>
                    <span>Usuários</span>
                </Link>
            </nav>

            <div className='border-l border-white h-10'></div>

            <div className='flex flex-row gap-8'>
                <div className='flex flex-col'>
                    <span className='text-white'>Gustavo Fonseca da Cunha</span>
                    <span className='flex justify-end text-gray-400'>ADMIN</span>
                </div>
                <div className='text-white flex flex-row gap-3 items-center justify-center'>
                    <LogOut/>
                    <a>Sair</a>
                </div>
            </div>
        </header>
    );
}