import { Outlet, useLocation } from 'react-router-dom';
import { AppHeader, BottomNav } from '../components/ui';

const titles: Record<string, string> = {
  '/': 'Dashboard',
  '/patients': 'Registrasi Pasien',
  '/patients/new': 'Registrasi Pasien Baru',
  '/services': 'Antrean & Triage',
  '/pharmacy': 'Farmasi',
  '/reports': 'Laporan Harian'
};

export const AppLayout = () => {
  const { pathname } = useLocation();
  const title = titles[pathname] ?? 'Baksos Dukkes';

  return (
    <div className='mx-auto min-h-screen max-w-md bg-slate-50 pb-24'>
      <AppHeader title={title} />
      <main className='space-y-3 p-4'>
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};
