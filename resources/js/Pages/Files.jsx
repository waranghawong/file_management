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

export default function Files({auth, get_file, subfolder, id}) {
    const fileNames = get_file.map(obj => ({
        fileName: obj?.file_name,
        fileId: obj?.id
    }));
    console.log(subfolder)

  const [isOpen , setIsOpen] = useState(false)
  const { data, setData, post, processing, errors, reset } = useForm({
        file_name: '',
        file: '',
        description: '',
        folder_name: get_file == false ?  '' : get_file[0].folder.folder_name ,
        folder_id: id ,
        subfolder_name: '', 
        subfolder_id: '', 
        uploader_id: auth.user.id,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('uploadfile'),{
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
                                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <select 
                                        id="category" 
                                        onChange={newFolderSelected} 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    >
                                        <option value="">Select Sub Folder</option> 
                                        {
                                            subfolder.map((option) => (
                                                <option value={option.value}>{option.label}</option>
                                            ))
                                        }
                                        <option value="other">New Sub Folder</option>
                            
                                        
                                    </select>
                                    <br />
                                    <TextInput
                                            id="folder_name"
                                            name="subfolder_name"
                                            className={ showFolderInput  ? 'hidden' : ''  + "p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
                                            value={data.subfolder_name}
                                            placeholder="Sub Folder Name"
                                            onChange = {(e) => setData('subfolder_name', e.target.value)}
                                        
                                        />
                                    <InputError message={errors.subfolder_name} className="mt-2" />
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
                <div className="w-full  mx-auto sm:px-6 lg:px-8 space-y-6 p-4 shadow-lg bg-white dark:bg-slate-800 rounded-xl bg-white">
                        <div class="grid grid-cols-4 md:grid-cols-6 gap-4">
                            {
                                 subfolder.map((item, index) => (
                                    <div className='mt-5 '>
                                        <a href={route("show_files", item.value)}>
                                            <div class="w-64 h-50 bg-white rounded-lg shadow-md p-4 inline-flex items-center  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                                                </svg> <span className='ml-2'>{item.label}</span>
                                            </div>
                                        </a>
                                    </div>
                                 ))
                            }

{
                                 fileNames.map((item, index) => (
                                    <div className='mt-5 '>
                                        <a href={route("edit_file_info", item.fileId)}>
                                            <div class="w-64 h-50 bg-white rounded-lg shadow-md p-4 inline-flex items-center  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"/>
                                            </svg>
                                                <span className='ml-2'>{item.fileName}</span>
                                            </div>
                                        </a>
                                    </div>
                                 ))
                            }
                       
                        
                        </div>
                    </div>


                
                 
                </div>
            </div>

        </AuthenticatedLayout>
    </div>
  )
}
