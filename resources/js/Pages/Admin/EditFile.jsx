import Table from '@/Components/Tables';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';

export default function EditFile({ auth, get_file,folder_name }) {

    console.log(get_file);
    const { data, setData, patch, processing, errors, recentlySuccessful } = useForm({
        file_name: get_file.file_name,
        file: '',
        description: get_file.description,
        uploader_id: auth.user.id,
    });


    const submit = (e) => {
        e.preventDefault();

        

    };
    return (
        <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">File Info</h2>}
    >
        <Head title="Edit Files" />
        <div className='py-32'>
            <form className="p-4 md:p-5 " onSubmit={submit} enctype="multipart/form-data">
                <div className="w-3/4  overflow-hidden mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="col-span-2">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Name</label>
                        <TextInput
                            id="file_name"
                            name="file_name"
                            className="mt-1 block w-full"
                            value={data.file_name}
                            required
                            isFocused = {true}
                            autoComplete="file_name"
                            onChange = {(e) => setData('file_name', e.target.value)}
                        />
                            <InputError message={errors.file_name} className="mt-2" />
                    </div>
                    
                    <div className="col-span-2">
                        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Description</label>
                        <textarea id="description" value={data.description} onChange={(e) => setData('description', e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write the file description here"></textarea>                    
                    </div>
                    
                    <div className="col-span-2 sm:col-span-1">
                        <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Folder Name</label>
                        <span className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>{folder_name}</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">View PDF</label>
                        <a href={route("view_pdf", get_file.id)} target="__blank" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            Open
                        </a>
                        
                    </div>
                    <button type="submit" disabled={processing} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Submit
                </button>
                &nbsp;
                <button disabled={processing} className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">
                    <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    Delete
                </button>
                </div>
               
            </form>
        </div>



        </AuthenticatedLayout>
    );
}