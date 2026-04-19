"use client";
import Link from 'next/link'
import { Home, Users, FileText, Truck, BarChart, LogOut, Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export function Header() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-black">
            <div className="w-full h-18 flex flex-row items-center justify-between xl:justify-around px-4 xl:px-0">
                
                <a href='https://www.pelotas.com.br/' target="_blank" rel="noopener noreferrer">
                    <img src="/logoPrefPelBlack.png" className="w-40 xl:w-50 h-auto cursor-pointer" alt="Logo Prefeitura" />
                </a>

                <div className='hidden xl:block border-l border-white h-10'></div>

                <nav className='hidden xl:flex flex-row gap-2 2xl:gap-5'>
                    <Link href="/admin" className={`gap-2 px-4 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center whitespace-nowrap ${pathname === '/admin' ? 'bg-orange-500' : 'bg-transparent hover:bg-zinc-900 transition-colors'}`}>
                        <Home className="w-5 h-5"/>
                        <span>Início</span>
                    </Link>
                    <Link href="/admin/services" className={`gap-2 px-4 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center whitespace-nowrap ${pathname === '/admin/services' ? 'bg-orange-500' : 'bg-transparent hover:bg-zinc-900 transition-colors'}`}>
                        <FileText className="w-5 h-5"/>
                        <span>Ordens de Serviço</span>
                    </Link>
                    <Link href="/admin/vehicles" className={`gap-2 px-4 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center whitespace-nowrap ${pathname === '/admin/vehicles' ? 'bg-orange-500' : 'bg-transparent hover:bg-zinc-900 transition-colors'}`}>
                        <Truck className="w-5 h-5"/>
                        <span>Veículos</span>
                    </Link>
                    <Link href="/admin/report" className={`gap-2 px-4 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center whitespace-nowrap ${pathname === '/admin/report' ? 'bg-orange-500' : 'bg-transparent hover:bg-zinc-900 transition-colors'}`}>
                        <BarChart className="w-5 h-5"/>
                        <span>Relatório</span>
                    </Link>
                    <Link href="/admin/users" className={`gap-2 px-4 py-3 rounded-sm text-white cursor-pointer flex flex-row justify-center items-center whitespace-nowrap ${pathname === '/admin/users' ? 'bg-orange-500' : 'bg-transparent hover:bg-zinc-900 transition-colors'}`}>
                        <Users className="w-5 h-5"/>
                        <span>Usuários</span>
                    </Link>
                </nav>

                <div className='hidden xl:block border-l border-white h-10'></div>

                <div className='hidden xl:flex flex-row gap-6'>
                    <div className='flex flex-col whitespace-nowrap'>
                        <span className='text-white text-sm'>Gustavo Fonseca da Cunha</span>
                        <span className='flex justify-end text-gray-400 text-xs'>ADMIN</span>
                    </div>
                    <div className='text-white flex flex-row gap-2 items-center justify-center cursor-pointer hover:text-red-500 transition-colors'>
                        <LogOut className="w-5 h-5"/>
                        <span>Sair</span>
                    </div>
                </div>

                <button 
                    className="xl:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

            </div>

            {isMobileMenuOpen && (
                <div className="xl:hidden flex flex-col bg-zinc-950 border-t border-zinc-800 p-4 gap-2">
                    <Link href="/admin" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-md text-white ${pathname === '/admin' ? 'bg-orange-500' : 'bg-transparent'}`}>
                        <Home className="w-5 h-5"/> Início
                    </Link>
                    <Link href="/admin/services" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-md text-white ${pathname === '/admin/services' ? 'bg-orange-500' : 'bg-transparent'}`}>
                        <FileText className="w-5 h-5"/> Ordens de Serviço
                    </Link>
                    <Link href="/admin/vehicles" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-md text-white ${pathname === '/admin/vehicles' ? 'bg-orange-500' : 'bg-transparent'}`}>
                        <Truck className="w-5 h-5"/> Veículos
                    </Link>
                    <Link href="/admin/report" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-md text-white ${pathname === '/admin/report' ? 'bg-orange-500' : 'bg-transparent'}`}>
                        <BarChart className="w-5 h-5"/> Relatório
                    </Link>
                    <Link href="/admin/users" onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 p-3 rounded-md text-white ${pathname === '/admin/users' ? 'bg-orange-500' : 'bg-transparent'}`}>
                        <Users className="w-5 h-5"/> Usuários
                    </Link>
                    
                    <div className="border-t border-zinc-800 my-2 pt-4 flex items-center justify-between">
                        <div className='flex flex-col'>
                            <span className='text-white text-sm'>Gustavo Fonseca da Cunha</span>
                            <span className='text-gray-400 text-xs'>ADMIN</span>
                        </div>
                        <div className='text-white flex items-center gap-2 cursor-pointer hover:text-red-500'>
                            <LogOut className="w-5 h-5"/> Sair
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}