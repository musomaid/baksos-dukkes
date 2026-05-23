import { Outlet,useLocation } from 'react-router-dom';import { AppHeader,BottomNav } from '../components/ui';
const titles:Record<string,string>={'/':'Dashboard','/patients':'Pasien','/services':'Layanan','/pharmacy':'Farmasi','/reports':'Laporan','/settings':'Pengaturan'};
export const AppLayout=()=>{const {pathname}=useLocation();const title=titles[pathname]??'Baksos Dukkes';return <div className='mx-auto max-w-md min-h-screen bg-slate-50 pb-24'><AppHeader title={title}/><main className='p-4 space-y-3'><Outlet/></main><BottomNav/></div>};
