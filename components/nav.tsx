"use client";
import Link from 'next/link';import { usePathname } from 'next/navigation';
const items=[['/','Home'],['/patients','Pasien'],['/services','Layanan'],['/pharmacy','Farmasi'],['/reports','Laporan']];
export function BottomNav(){const p=usePathname();return <nav className='fixed bottom-0 inset-x-0 bg-white border-t p-2 grid grid-cols-5 gap-1'>{items.map(([href,label])=><Link key={href} href={href} className={`text-center text-xs py-2 rounded-lg ${p===href?'bg-blue-600 text-white':'text-slate-600'}`}>{label}</Link>)}</nav>}
