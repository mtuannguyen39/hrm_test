import { useEffect, useState } from 'react';
import styles from '../../styles/AdminDashboard.module.css';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

type Employee = {
    id: string;
    name: string;
    email: string;
}

const AdminDashboard: React.FC = () => {
    const[employees, setEmployees] = useState<Employee[]>([]);

    useEffect(() => {
        const fetchEmployees = async () => {
            const res = await fetch('/pages/api/admin');
            const data = await res.json();
            setEmployees(data);
        };
        fetchEmployees();
    }, []);

    return (
        <div className="text-center bg-white p-5 rounded-2xl shadow-xl">
            <h1 className="text-2xl text-black">Admin DashBooard</h1>
            <h2 className="text-xl text-black">Employee List</h2>
            <ul className={styles.list}>
                {employees.map((employee) => (
                    <li key={employee.id} className="text-l text-black">
                        {employee.name} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;