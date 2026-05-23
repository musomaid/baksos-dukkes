import { StatCard } from '../components/ui';
export const DashboardPage=()=> <div className='grid grid-cols-2 gap-3'>{[['Pasien Hari Ini',42],['Menunggu',8],['Selesai',20],['Obat Kritis',2],['Rujukan',3]].map(([l,v])=><StatCard key={String(l)} label={String(l)} value={String(v)}/>)}<div className='card col-span-2'>Lokasi: Lapangan Dukkes, 23 Mei 2026</div></div>;
