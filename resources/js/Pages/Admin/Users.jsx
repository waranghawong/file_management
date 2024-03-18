import Table from '@/Components/Tables';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';


const columns = [
    'name',
    'role',
] 
export default function Dashboard({ auth, users }) {
    console.log(users)
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Users</h2>}
        >
            <Head title="Users" />
           
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8"> <Link className="ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href={route("users.new")}>Add User</Link> <br /><br />
                    <div className="ml-2 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900 dark:text-gray-100"></div> */}
                        <Table items={users.data} columns={columns} primary="Id Number" action="users.edit"></Table>
                        <Pagination class="mt-6" links={users.links} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
