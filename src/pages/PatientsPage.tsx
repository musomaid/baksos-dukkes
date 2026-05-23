import { FloatingActionButton, PatientCard } from '../components/ui';
export const PatientsPage=()=> <div className='space-y-3'><input placeholder='Cari nama/NIK/HP' className='w-full rounded-xl border p-3'/>{['Ahmad','Siti','Budi'].map((n,i)=><PatientCard key={n} id={String(i+1)} name={n} complaint='Demam & batuk'/>)}<FloatingActionButton to='/patients/new'/></div>;
