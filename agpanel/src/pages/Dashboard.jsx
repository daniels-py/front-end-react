import { AdminLayout } from '../Components/admin/AdminLayout/AdminLayout';


export const Dashboard = () => {
  return (
    <AdminLayout>
      <div className="dashboard">
        <h2>Bienvenido al Dashboard</h2>
        <p>Aquí va el contenido principal de tu panel de administración.</p>
      </div>
    </AdminLayout>
  );
};