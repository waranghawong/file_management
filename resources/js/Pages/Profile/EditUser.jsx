import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UpdateUserInformation from './Partials/UpdateUserForm';

export default function EditUser({ auth, userprofile}) {

    const onSubmit = ev => {
        ev.preventDefault()
        
      }

      
    return (
        <AuthenticatedLayout
            user={auth.user}

            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Edit User {userprofile.name}</h2>}
            
        >   
    
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                  <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateUserInformation
                            userprofile = {userprofile} className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    {userprofile.role}
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                    {userprofile.email}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
