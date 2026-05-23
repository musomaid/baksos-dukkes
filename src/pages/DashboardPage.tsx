import { StatCard } from '../components/ui';

const stats = [
  ['Pasien Hari Ini', 42],
  ['Menunggu Antrean', 8],
  ['Selesai Dilayani', 20],
  ['Perlu Triage Cepat', 3],
  ['Stok Obat Kritis', 2]
] as const;

export const DashboardPage = () => (
  <div className='space-y-3'>
    <div className='card'>MVP Fase 1 aktif: alur dari registrasi sampai laporan harian.</div>
    <div className='grid grid-cols-2 gap-3'>
      {stats.map(([label, value]) => (
        <StatCard key={label} label={label} value={value} />
      ))}
    </div>
    <div className='card'>Lokasi: Lapangan Dukkes · 23 Mei 2026</div>
  </div>
);
