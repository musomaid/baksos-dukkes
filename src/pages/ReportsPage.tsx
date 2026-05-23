import { StatCard } from '../components/ui';

export const ReportsPage = () => (
  <div className='space-y-3'>
    <div className='card'>Rekap harian sederhana (MVP fase 1, tanpa export lanjutan).</div>
    <div className='grid grid-cols-2 gap-3'>
      <StatCard label='Total Pasien' value={42} />
      <StatCard label='Pasien Dirujuk' value={3} />
      <StatCard label='Diagnosis Terbanyak' value='ISPA' />
      <StatCard label='Obat Terbanyak' value='Paracetamol' />
    </div>
  </div>
);
