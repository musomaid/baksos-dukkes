import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts/AppLayout';
import * as P from './pages';

export const AppRouter = () => (
  <Routes>
    <Route element={<AppLayout />}>
      <Route path='/' element={<P.DashboardPage />} />
      <Route path='/patients' element={<P.PatientsPage />} />
      <Route path='/patients/new' element={<P.NewPatientPage />} />
      <Route path='/patients/:id' element={<P.PatientDetailPage />} />
      <Route path='/services' element={<P.ServicesPage />} />
      <Route path='/visits/:id' element={<P.VisitDetailPage />} />
      <Route path='/pharmacy' element={<P.PharmacyPage />} />
      <Route path='/reports' element={<P.ReportsPage />} />
    </Route>
  </Routes>
);
