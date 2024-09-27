'use client'
import AdminDashboard from "@/app/pages/admin";
import UserProfile from "@/app/pages/user";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";


export default function Home() {
  const [view, setView] = useState<'admin' | 'user' | null>(null);
  return (
    // <div style={{textAlign: 'center', padding: '2rem'}}>
    //   <h1>HR Management System</h1>
    //   {/* Button để chuyển giữa màn hình của admin và user  */}
    //   <div style={{margin: '1.5rem'}}>
    //     <button style={{marginRight: '1rem', padding:'0.5rem 1rem', cursor:'pointer'}} onClick={() => setView('admin')}>
    //       View Admin Dashboard
    //     </button>
    //     <button style={{padding:'0.5rem 1rem', cursor:'pointer'}} onClick={() => setView('user')}>
    //       View User Profile
    //     </button>
    //   </div>
    //   {/* Render dựa theo view đã chọn */}
    //   {view === 'admin' && <AdminDashboard/>}
    //   {view === 'user' && <UserProfile/>}
    // </div>
    <>
      <DefaultLayout>
        <div style={{textAlign: 'center', padding: '2rem'}}>
        <h1>HR Management System</h1>
        {/* Button để chuyển giữa màn hình của admin và user  */}
        <div style={{margin: '1.5rem'}}>
          <button style={{marginRight: '1rem', padding:'0.5rem 1rem', cursor:'pointer'}} onClick={() => setView('admin')}>
            View Admin Dashboard
          </button>
          <button style={{padding:'0.5rem 1rem', cursor:'pointer'}} onClick={() => setView('user')}>
            View User Profile
          </button>
        </div>
        {/* Render dựa theo view đã chọn */}
        {view === 'admin' && <AdminDashboard/>}
        {view === 'user' && <UserProfile/>}
      </div>
      </DefaultLayout>
    </>
  );
}

