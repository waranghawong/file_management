import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, users, pmr, files }) {
    const name = auth.user.name
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-blue-800 dark:text-blue-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="mt-7">
                <div className=" max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex flex-col mt-8">
                    <div class="mt-4  grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-14">
                        <div class="flex items-start  bg-white dark:bg-slate-800 rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12  bg-white dark:bg-slate-800 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </div>

                        <div class="ml-4 dark:text-white">
                            <h2 class="font-semibold">Total PMR's</h2>
                            <p class="mt-2 text-sm dark:text-slate-400">{pmr}</p>
                        </div>
                        </div>
                        <div class="flex items-start rounded-xl bg-white dark:bg-slate-800 bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 items-center bg-white dark:bg-slate-800 justify-center rounded-full border border-red-100 bg-red-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>

                        <div class="ml-4 dark:text-white">
                            <h2 class="font-semibold">Total Files</h2>
                            <p class="mt-2 text-md dark:text-slate-400 text-gray-500">{files}</p>
                        </div>
                        </div>

                        <div class="flex items-start bg-white dark:bg-slate-800 rounded-xl bg-white p-4 shadow-lg">
                        <div class="flex h-12 w-12 bg-white dark:bg-slate-800 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>

                        <div class="ml-4 dark:text-white">
                            <h2 class="font-semibold">Total Users</h2>
                            <p class="mt-2 text-sm dark:text-slate-400 text-gray-500">{users}</p>
                        </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
