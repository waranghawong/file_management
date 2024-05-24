import { useState,useEffect} from 'react';
import Table from '@/Components/Tables';
import Modal from '@/Components/Modal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import Pagination from '@/Components/Pagination';
import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import SecondaryButton from '@/Components/SecondaryButton';
import Select from 'react-select'
import ReactDataTable from '@/Components/ReactDataTable';
import AsyncSelect from 'react-select/async';

const columns = [
    'file_name',
    'description',
    'created_at',
] 

export default function SubFolder({auth, get_file, subfolder}) {
    console.log(get_file.data[0].subfolder_name_id);

  const [isOpen , setIsOpen] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
        file_name: '',
        file: '',
        description: '',
        folder_name: get_file.data[0] ? get_file.data[0].folder.folder_name : '',
        folder_id: get_file.data[0] ? get_file.data[0].folder.id : '',
        subfolder_name: '', 
        subfolder_id: get_file.data[0].subfolder_name_id, 
        uploader_id: auth.user.id,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('uploadfilesubfolder'),{
            preserveScroll: true,
            onSuccess: ()=>{
                setIsOpen(false)
            }
            
        });

    };

    const [showFolderInput, setFolderInput] = useState(true); 

    const newFolderSelected = (e) =>{
        let index = e.nativeEvent.target.selectedIndex;
        let label = e.nativeEvent.target[index].text;
    
        const value = e.target.value;
    
    
        if(e.target.value == 'other'){
            setFolderInput(false)
            setData({ ...data, subfolder_id: "", subfolder_name: ""})
        }
        else{
            setFolderInput(true)
            setData({ ...data, subfolder_id: e.target.value, subfolder_name: label})
        }
    }

  return (
    <div>
       <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Files</h2>}
        >
            <Head title="File Management" />
            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8"> 
                <button onClick={() => setIsOpen(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Add File
                </button> <br />
                <Modal show={isOpen} maxWidth={'2xl'}  onClose={() => setIsOpen(false)} >
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Create and Upload New File
                        </h3>
                        <button type="button" onClick={() => setIsOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form className="p-4 md:p-5 " onSubmit={submit} enctype="multipart/form-data">
                        <div className="grid gap-4 mb-4 grid-cols-2">
                            <div className="col-span-2">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Name</label>
                                <TextInput
                                    id="file_name"
                                    name="file_name"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={data.file_name}
                                    required
                                    onChange = {(e) => setData('file_name', e.target.value)}
                                />
                                    <InputError message={errors.file_name} className="mt-2" />
                            </div>
                            
                            <div className="col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File Description</label>
                                <textarea id="description" onChange={(e) => setData('description', e.target.value)} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write the file description here"></textarea>                    
                            </div>
                        
                            <div className="col-span-2 sm:col-span-1">
                                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                                <input
                                    className="mt-1 block w-full block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    name="file"
                                    aria-describedby="file_input_help"
                                    isFocused
                                    type="file"
                                    onChange={(e) => setData('file', e.target.files[0])}
                                />
                                <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" >SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                            </div>
                        </div>
                        <button type="submit" disabled={processing} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            Submit
                        </button>
                    </form>
                </Modal>


                
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900 dark:text-gray-100"></div> */}
                        <ReactDataTable items ={get_file.data} action={"edit_file_info"}/>
                        <Pagination class="mt-6" links={get_file.links} />
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    </div>
  )
}