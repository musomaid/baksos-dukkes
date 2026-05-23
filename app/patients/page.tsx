import Link from 'next/link';
export default function P(){return <div className='space-y-2'><div className='card flex justify-between'><span>Daftar Pasien</span><Link className='btn bg-blue-600 text-white' href='/patients/new'>+ Pasien</Link></div></div>}
