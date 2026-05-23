import { Link, NavLink } from 'react-router-dom';

export const AppHeader = ({ title }: { title: string }) => (
  <header className='sticky top-0 z-10 border-b bg-white/95 p-4 backdrop-blur'>
    <h1 className='text-lg font-semibold'>{title}</h1>
  </header>
);

export const BottomNav = () => (
  <nav className='fixed bottom-0 left-0 right-0 mx-auto grid max-w-md grid-cols-5 border-t bg-white text-xs'>
    {[
      ['/', 'Home'],
      ['/patients', 'Pasien'],
      ['/services', 'Antrean'],
      ['/pharmacy', 'Farmasi'],
      ['/reports', 'Laporan']
    ].map(([to, label]) => (
      <NavLink key={to} to={to} className={({ isActive }) => `p-3 text-center ${isActive ? 'font-semibold text-blue-600' : 'text-slate-500'}`}>
        {label}
      </NavLink>
    ))}
  </nav>
);

export const StatCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className='card'>
    <p className='text-sm text-slate-500'>{label}</p>
    <p className='text-2xl font-bold'>{value}</p>
  </div>
);

export const StatusBadge = ({ status }: { status: string }) => <span className='rounded-full bg-slate-100 px-2 py-1 text-xs'>{status}</span>;
export const PriorityBadge = ({ p }: { p: string }) => <span className='rounded-full bg-amber-100 px-2 py-1 text-xs text-amber-800'>{p}</span>;

export const PatientCard = ({ id, name, complaint }: { id: string; name: string; complaint: string }) => (
  <Link to={`/patients/${id}`} className='card block'>
    <p className='font-semibold'>{name}</p>
    <p className='text-sm text-slate-500'>{complaint}</p>
  </Link>
);

export const QueueCard = ({ no, status, priority, name }: { no: string; status: string; priority: string; name: string }) => (
  <div className='card'>
    <div className='flex justify-between'>
      <p className='font-semibold'>#{no} {name}</p>
      <PriorityBadge p={priority} />
    </div>
    <StatusBadge status={status} />
  </div>
);

export const MedicineStockCard = ({ name, stock, critical }: { name: string; stock: number; critical: number }) => (
  <div className='card'>
    <p className='font-semibold'>{name}</p>
    <p>Stok: {stock}</p>
    {stock <= critical && <StatusBadge status='Stok Kritis' />}
  </div>
);

export const FloatingActionButton = ({ to }: { to: string }) => (
  <Link to={to} className='fixed bottom-20 right-6 grid h-14 w-14 place-content-center rounded-full bg-blue-600 text-2xl text-white'>
    +
  </Link>
);

export const EmptyState = ({ t }: { t: string }) => <div className='card text-center text-slate-500'>{t}</div>;
export const LoadingState = () => <div className='card h-24 animate-pulse' />;
