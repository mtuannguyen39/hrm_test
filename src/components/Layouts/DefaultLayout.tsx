'use client'
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';



export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <>
            {/* <!-- ==== Page Wrapper Start ==== --> */}
            <div className="flex">
                {/* Sidebar Start */}
                <Sidebar sidebarOpen ={sidebarOpen} setSidebarOpen = {setSidebarOpen}/>
                {/* Sidebar End */}

                {/* Content Start */}
                <div className="relative flex flex-1 flex-col lg:ml-72.5">
                    {/* Header Start */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen = {setSidebarOpen}/>
                    {/* Header End */}

                    {/* Content Body Start */}
                    <main>
                        <div className="h-[680px] max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                            {children}
                        </div>
                    </main>
                    {/* Content Body End */}
                </div>
            </div>
        </>
    )
}