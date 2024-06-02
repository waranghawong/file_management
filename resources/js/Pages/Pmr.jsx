import { useState } from 'react';
import InputError from '@/Components/InputError';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm} from '@inertiajs/react';
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import { Button } from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiMenu } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import Pagination from '@/Components/Pagination';
import PmrTable from '@/Components/PmrTable';

import PmrFrom from './PmrFrom';
import Others from './Others';
import LastForm from './LastForm';

export default function Pmr({auth, users, latest_pmr_id, pmr}) {

  const { data, setData, post, processing, errors, reset } = useForm({

  });


  const [disableButton, setDisableButton] = useState(false);

  const [page, setPage] = useState(0);
  const [showPmr, showAddPmrButton] = useState(true);

  const [ampState, setAmpState] = useState(false)
  const [compiState, setCompiState] = useState(false)

  const [error, setError] = useState('');


  
  const [formData, setFormData] = useState({
    pr_number: latest_pmr_id,
    rfq_number: latest_pmr_id,
    procurement: "",
    end_user: "",
    pre_proc: "",
    eligibility_check: "",
    post_quality: "",
    contract_signing: "",
    posting_philgeps: "",
    notice_of_proceed: "",
    date: "",
    opening_canvass: "",
    bid_evaluation: "",
    pre_bid: "",
    notice_of_awardd: "",

    pr_recieved: "",
    rfq_posting: "",
    pr_for_rfq: "",
    rfq_canvass: "",
    rfq_returned: "",
    rfq_deliberation: "",
    rfq_abstract: "",
    original_abstract: "",
    bac_resolution: "",
    noa: "",
    justification: "",
    pr_supply: "",
    pre_end: "",
  
    data: latest_pmr_id,

    source_of_funds: '',
    supplier: '',
    abc: '',
    contract_amount: '',
    status: '',
    others: '',
    amp_others: '',

  });



  const [isOpen , setIsOpen] = useState(false);

 const submitData = () => {
    if (page === FormTitles.length - 1) {
      if(formData.source_of_funds == '' || formData.supplier == '' || formData.abc == '' || formData.contract_amount == '' || formData.status == ''){
        setError('required*');
      }
      else{
        alert("FORM SUBMITTED");

        setIsOpen(false)
        post(route('submit_pmr', formData),{
            preserveScroll: true,
            onSuccess: () => {
              window.location.reload()
            },
        });

      }
      
    } else {
      
      if(formData.procurement == '' || formData.end_user == '' || formData.date == ''){
        setError('required*');
      }
      else{
        setPage((currPage) => currPage + 1);
      }
     
    }
  }



  const FormTitles = ["PMR FORM", "Additional Info", "Last Step"];

  const PageDisplay = () => {
    if (page === 0) {
      return <PmrFrom formData={formData} setFormData={setFormData} error={error}/>;
    }
    else if (page === 1) {
      return <Others formData={formData} setFormData={setFormData} users={users} />;
    } 
    else {
      return <LastForm formData={formData} setFormData={setFormData} errors={error}/>;
    }
  };
 
  return (
    <div>
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="PMR" />

            <div className="py-12">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                <button onClick={() => setIsOpen(true)} className="block text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800" type="button">
                    Create PMR
                </button> <br />
                    <div className="ml-2 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                    <Modal show={isOpen} maxWidth={'lg'}   >
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 z-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          
                        </h3>
                        <button type="button" onClick={() => setIsOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="form p-4 md:p-5">
                    <div class="w-full h-4 mb-4 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div class="h-4 bg-pink-600 rounded-full dark:bg-pink-500" style={{ width: page === 0 ? "33.3%" : page == 1 ? " 66.6%" : "100%" }}></div>
                    </div>
                        <div className="form-container">
                          <div className="header">
                          
                              <ol class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
                                  <li class="flex md:w-full items-center text-pink-600 dark:text-pink-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                      <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                          </svg>
                                          PMR <span class="hidden sm:inline-flex sm:ms-2">Form</span>
                                      </span>
                                  </li>
                                  <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                    {
                                      page >= 1
                                      ?
                                    <li class="flex md:w-full items-center text-pink-600 dark:text-pink-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
                                      <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                          <span class="me-2">2</span>
                                          <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                          </svg>
                                          Additional <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                                      </span>
                                    </li>
                                      : 

                                      <span class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                                          <span class="me-2">2</span>
                                          Additional <span class="hidden sm:inline-flex sm:ms-2">Info</span>
                                      </span>
                                    }
                                  
                                  </li>
                                  {
                                    page == 2
                                    ?
                                    <li class="flex items-center  text-pink-600">
                                        <svg class="w-3.5 h-3.5 sm:w-4 sm:h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                          </svg>
                                      <span class="me-2">3</span>
                                      Confirmation
                                   </li>
                                    :
                                    <li class="flex items-center">
                                      <span class="me-2">3</span>
                                      Confirmation
                                    </li>
                                  }
                                 
                              </ol>

                          </div>
                          <div className="body mb-6 mt-6">{PageDisplay()}</div>
                            <div className="footer mb-9">
                              <div class="flex justify-around">
                              <button
                                type="button"
                                class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                
                                disabled={page == 0}
                                onClick={() => {
                                  setPage((currPage) => currPage - 1);
                                }}
                              >
                                  Prev
                              </button>
                              <button
                              class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                                  onClick={submitData}
                                >
                                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                              </button>
                              </div>
                            </div>
                        </div>
                      </div>
                    </Modal>

                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        {/* <div className="p-6 text-gray-900 dark:text-gray-100"></div> */}
                        {/* <Table items={files.data} columns={columns} primary="Id Number" action="users.edit"></Table> */}
                        <PmrTable items ={pmr} action="edit_pmr"/>
                    </div>

                    
                      {/* add style */}
                      <style>{`
                        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
                      `}</style>
                    
                    </div>
                </div>
            </div>

            
    </AuthenticatedLayout>
    </div>
  )
} 
