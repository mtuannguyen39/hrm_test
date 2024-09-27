import { useEffect, useState } from 'react';
import styles from '../../styles/AdminDashboard.module.css';

type Employee = {
    id: string;
    name: string;
    email: string;
}

const AdminDashboard = () => {
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
        <div className={styles.container}>
            <h1 className={styles.textHeader}>Admin DashBooard</h1>
            <h2 className={styles.textContent}>Employee List</h2>
            <ul className={styles.list}>
                {employees.map((employee) => (
                    <li key={employee.id} className={styles.contentList}> 
                        {employee.name} - {employee.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard
