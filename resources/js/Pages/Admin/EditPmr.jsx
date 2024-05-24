import Table from '@/Components/Tables';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import Pagination from '@/Components/Pagination';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteModal from '@/Components/DeleteModal';
import InputLabel from '@/Components/InputLabel';
import { Head, useForm } from '@inertiajs/react';
import { useState, useRef, useEffect} from 'react';
import DangerButton from '@/Components/DangerButton';
import SecondaryButton from '@/Components/SecondaryButton';

export default function EditPmr({auth, pmr}) {
    
    const {  delete: destroy, } = useForm({});
    const [confirmingUserDeletion, setDeletePmr] = useState(false);


    const { data, setData, patch, processing, errors, recentlySuccessful } = useForm({
        pr_number: pmr[0].pr_number,
        rfq_number: pmr[0].rfq_number,
        procurement: pmr[0].procurement_project,
        end_user: pmr[0].end_user,
        date: pmr[0].date,

        pre_proc: pmr[0].competitive ?  pmr[0].competitive.pre_proc_conf : ''  ,
        eligibility_check: pmr[0].competitive ?  pmr[0].competitive.eligibility_check: ''  ,
        post_quality: pmr[0].competitive ? pmr[0].competitive.post_quality : '' ,
        contract_signing: pmr[0].competitive ? pmr[0].competitive.contract_signing : '' ,
        posting_philgeps: pmr[0].competitive ? pmr[0].competitive.posting_on_philgeps : '' ,
        notice_of_proceed: pmr[0].competitive ? pmr[0].competitive.notice_of_proceed : '' ,
        date_of_bac: pmr[0].competitive ? pmr[0].competitive.date_of_bac : '' ,
        opening_canvass: pmr[0].competitive ? pmr[0].competitive.opening_canvass : '' ,
        bid_evaluation: pmr[0].competitive ? pmr[0].competitive.bid_eveluation : '' ,
        pre_bid: pmr[0].competitive ? pmr[0].competitive.pre_bid_conf : '' ,
        notice_of_awardd: pmr[0].competitive ? pmr[0].competitive.notice_of_award : '' ,
    
        pr_recieved: pmr[0].amps ? pmr[0].amps.pr_recieved : '',
        rfq_posting: pmr[0].amps ? pmr[0].amps.rfq_for_posting : '',
        pr_for_rfq: pmr[0].amps ? pmr[0].amps.pr_for_rfqs : '',
        rfq_canvass: pmr[0].amps ? pmr[0].amps.rfq_for_canvass : '',
        rfq_returned: pmr[0].amps ? pmr[0].amps.rfq_returned : '',
        rfq_deliberation: pmr[0].amps ? pmr[0].amps.rfq_for_deliberation : '',
        rfq_abstract: pmr[0].amps ? pmr[0].amps.rfq_for_abstract : '',
        original_abstract: pmr[0].amps ? pmr[0].amps.original_abstract : '',
        bac_resolution: pmr[0].amps ? pmr[0].amps.bac_resolution : '',
        noa: pmr[0].amps ? pmr[0].amps.noa_contract_supply : '',
        justification: pmr[0].amps ? pmr[0].amps.justification : '',
        pr_supply: pmr[0].amps ? pmr[0].amps.pr_supply : '',
        pre_end: pmr[0].amps ? pmr[0].amps.pr_end_user : '',
    
        source_of_funds: pmr[0].source_of_funds,
        supplier: pmr[0].supplier,
        abc: pmr[0].abc,
        contract_amount: pmr[0].contract_amount,
        status: pmr[0].status,
    });

  
    const pr_number = useRef(null);

    const [message, setMessage] = useState('');

    const [popup, openPopup] = useState(false);


    const submit = (e) => {
        e.preventDefault();
        patch(route('update_pmr', pmr[0].id),{
            onSuccess: (page) => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                openPopup(true)
                setMessage('PMR updated successfully!');
            },
            onError: (errors) => {
                setSending(false);
            }

        });
    };

    const confirmUserDeletion = () => {
        setDeletePmr(true);
    };

    const closeModal = () => {
        setDeletePmr(false);

        reset();
    };

    const deletePmr = (e) => {
        e.preventDefault();
        const array_match = JSON.stringify(deleteKeyword) == JSON.stringify(compare)
        if(array_match == true){
            destroy(route('pmr.destroy', pmr[0].id), {
                onSuccess: () => closeModal(),
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        }

    };

    const [deleteKeyword, setKeywordData] = useState({
        delete: '',
    })

    const compare = {"delete" : "delete"}

    const handleKeyDown = (ref) => (event) => {
        if (event.key === 'Enter') {
          ref.current.focus();
        }
    };

    const handleChange = (selectedOption) => {
        setData({ ...data, pr_recieved: selectedOption.target.checked })
       }
       const rfqPosting = (selectedOption) => {
        setData({ ...data, rfq_posting: selectedOption.target.checked })
       }
       const prRfq = (selectedOption) => {
        setData({ ...data, pr_for_rfq: selectedOption.target.checked })
       }
       const rfqCanvass = (selectedOption) => {
        setData({ ...data, rfq_canvass: selectedOption.target.checked })
       }
       const rfqReturned = (selectedOption) => {
        setData({ ...data, rfq_returned: selectedOption.target.checked })
       }
       const rfqDeliberation = (selectedOption) => {
        setData({ ...data, rfq_deliberation: selectedOption.target.checked })
       }
       const rfqAbstract = (selectedOption) => {
        setData({ ...data, rfq_abstract: selectedOption.target.checked })
       }
       const rfqOriginalAbstract = (selectedOption) => {
        setData({ ...data, original_abstract: selectedOption.target.checked })
       }
       const rfqBac = (selectedOption) => {
        setData({ ...data, bac_resolution: selectedOption.target.checked })
       }
       const forNoa = (selectedOption) => {
        setData({ ...data, noa: selectedOption.target.checked })
       }
       const forJustification = (selectedOption) => {
        setData({ ...data, justification: selectedOption.target.checked })
       }
       const prSupply = (selectedOption) => {
        setData({ ...data, pr_supply: selectedOption.target.checked })
       }
       const preEnd = (selectedOption) => {
        setData({ ...data, pre_end: selectedOption.target.checked })
       }

     

  return (
 
    <AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Procurement Monitoring Report</h2>}
    >
        <Head title="Edit Files" />
        <div className="py-32">
        <div>
            {popup && 
           <div id="success-alert" class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
            Success! {message}
            <button type="button" onClick={() => openPopup(false)}  class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
             
                <span class="sr-only">Close</span>
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            
            </button>
            </div>
            
            }
        </div>
            <div className="w-1/2  mx-auto sm:px-6 lg:px-8 space-y-6 p-4 shadow-lg bg-white dark:bg-slate-800 rounded-xl bg-white">
                <form onSubmit={submit} className="mt-6 space-y-6">
                    <div className="sm:p-8 sm:rounded-lg  p-4">
                        <div className="content-center">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Procurement Monitoring Information</h2>
                            </header>
                            <br />
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center flex-wrap">
                                <div class="relative z-0 w-full group">
                                    <label htmlFor="pr_number" className="block mb-2 text-xs font-medium text-gray-900 mr-10 dark:text-white ">
                                    PR Number
                                    </label>
                                    <TextInput
                                    value={data.pr_number}
                                    onChange={(event) =>
                                        setData({ ...data, pr_number: event.target.value })
                                    }
                                    onKeyDown={handleKeyDown(pr_number)}
                                    type="text"
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div class="relative z-0 w-full group">
                                    <label htmlFor="rfq_number" className="block mb-2 text-xs font-medium text-gray-900 mr-10 dark:text-white ">
                                    RFQ Number
                                    </label>
                                    <TextInput
                                    value={data.rfq_number}
                                    onChange={(event) =>
                                        setData({ ...data, rfq_number: event.target.value })
                                    }
                                    type="text"
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div class="relative z-0 w-full text-wrap">
                                    <label htmlFor="procurement" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                    Procurement Project
                                    </label>
                                    <TextInput
                                     value={data.procurement}
                                     onChange={(event) =>
                                         setData({ ...data, procurement: event.target.value })
                                     }
                                    type="text"
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div class="relative z-0 w-full group">
                                    <label htmlFor="end_user" className="block mb-2 text-xs font-medium text-gray-900 mr-12 dark:text-white ">
                                    End-User
                                    </label>
                                    <TextInput
                                     value={data.end_user}
                                     onChange={(event) =>
                                         setData({ ...data, end_user: event.target.value })
                                     }
                                    type="text"
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div class="relative z-0 w-full group">
                                    <label htmlFor="end_user" className="block mb-2 text-xs font-medium text-gray-900 mr-12 dark:text-white ">
                                    Date
                                    </label>
                                    <TextInput
                                     value={data.date}
                                     onChange={(event) =>
                                         setData({ ...data, date: event.target.value })
                                     }
                                    type="date"
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        pmr[0].amps

                        ?
                        <div className="sm:p-8 sm:rounded-lg  p-4">
                        <div className="content-center">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Amp</h2>
                            </header>
                            <br />
                            <div class="grid md:grid-cols-3 md:gap-6 p-6">
                                <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                    <input
                                        type="checkbox"
                                        defaultChecked={data.pr_recieved}
                                        onChange={(event) =>
                                        handleChange(event)
                                        }
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                    
                                    <label for="pr_for_rfq" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PR Recieved</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.pr_for_rfq} 
                                        onChange={prRfq} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="pr_for_rfq" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PR for RFQs</label>
                                    
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.rfq_posting} 
                                        onChange={rfqPosting} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="rfq_posting" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">RFQs for Posting</label>
                                    
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.rfq_canvass} 
                                        onChange={rfqCanvass} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="rfq_canvass" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">RFQs for canvas</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.rfq_returned} 
                                        onChange={rfqReturned} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="rfq_returned" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">RFQs Returned(Sealed)</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.rfq_deliberation} 
                                        
                                    
                                        onChange={rfqDeliberation} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="rfq_deliberation" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">RFQs for Deliberation of ABC</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.rfq_abstract} 
                                        onChange={rfqAbstract} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="rfq_abstract" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">RFQs for Abstract</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.original_abstract} 
                                        onChange={rfqOriginalAbstract} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="original_abstract" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Original Abstract, PR, RFQs Supply</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.bac_resolution} 
                                        onChange={rfqBac} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="bac_resolution" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">BAC Resolution Supply</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.noa} 
                                        onChange={forNoa} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="noa" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">NOA, NTP & Contract-Supply</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.justification} 
                                        onChange={forJustification} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="justification" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Justification</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.pr_supply} 
                                        onChange={prSupply} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="pr_supply" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PR-Supply</label>
                                    </div>
                                    <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                        <input 
                                        type="checkbox"
                                        defaultChecked={data.pre_end} 
                                        onChange={preEnd} 
                                        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'/>
                                        <label for="pre_end" class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PR-END-User</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                        :

                        ''
                    }
                   
                    {
                        pmr[0].competitive

                        ?

                        <div className="sm:p-8 sm:rounded-lg  p-4">
                            <div className="content-center">
                                <header>
                                    <h2 className="text-lg font-medium text-gray-900 dark:text-white">Competitive</h2>
                                </header>
                                <br />
                                <div class="grid md:grid-cols-2 md:gap-6">
                                    <div class="relative z-0 w-full group">
                                        <input type="date"
                                        name="pre-proc"
                                        id="pre-proc"
                                        value={data.pre_proc}
                                        onChange={(event) =>
                                            setData({ ...data, pre_proc: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="pre-proc" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pre-Proc Conf</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="eligibility_check"
                                        value={data.eligibility_check}
                                        onChange={(event) =>
                                            setData({ ...data, eligibility_check: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="eligibility_check" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Eligibility Check</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="post_quality"
                                        value={data.post_quality}
                                        onChange={(event) =>
                                            setData({ ...data, post_quality: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="post_quality" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Post Quality</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="contract_signing"
                                        value={data.contract_signing}
                                        onChange={(event) =>
                                            setData({ ...data, contract_signing: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="contract_signing" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contract Signing</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="posting_philgeps"
                                        value={data.posting_philgeps}
                                        onChange={(event) =>
                                            setData({ ...data, posting_philgeps: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="posting_philgeps" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Posting on PhilGEPS</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="opening_canvass"
                                        value={data.opening_canvass}
                                        onChange={(event) =>
                                            setData({ ...data, opening_canvass: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="opening_canvass" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Opening of Canvas/Bid</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="date_of_bac"
                                        value={data.date_of_bac}
                                        onChange={(event) =>
                                            setData({ ...data, date_of_bac: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="date_of_bac" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of BAC</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="notice_of_proceed"
                                        value={data.notice_of_proceed}
                                        onChange={(event) =>
                                            setData({ ...data, notice_of_proceed: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="notice_of_proceed" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Notice of Proceed</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="pre_bid"
                                        value={data.pre_bid}
                                        onChange={(event) =>
                                            setData({ ...data, pre_bid: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="pre_bid" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pre-Bid Conf</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="bid_evaluation"
                                        value={data.bid_evaluation}
                                        onChange={(event) =>
                                            setData({ ...data, bid_evaluation: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="bid_evaluation" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bid Evaluation</label>
                                    </div>
                                    <div class="relative z-0 w-full group">
                                    <input type="date"
                                        name="notice_of_awardd"
                                        value={data.notice_of_awardd}
                                        onChange={(event) =>
                                            setData({ ...data, notice_of_awardd: event.target.value })
                                            }
                                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="notice_of_awardd" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Notice of Award</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        :

                        ''
                    }
                   
                    <div className="sm:p-8 sm:rounded-lg  p-4">
                        <div className="content-center">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Additional Info</h2>
                            </header>
                            <br />
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center flex-wrap">
                                <div class="relative z-0 w-full group">
                                    <label htmlFor="source_of_funds" className="block mb-2 text-xs font-medium text-gray-900 mr-10 dark:text-white ">
                                    Source of Funds
                                    </label>
                                    <TextInput
                                     value={data.source_of_funds}
                                     onChange={(event) =>
                                         setData({ ...data, source_of_funds: event.target.value })
                                     }
                                    type="text"
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div class="relative z-0 w-full group">
                                    <label htmlFor="supplier" className="block mb-2 text-xs font-medium text-gray-900 mr-10 dark:text-white ">
                                    Supplier
                                    </label>
                                    <TextInput
                                    type="text"
                                    value={data.supplier}
                                    onChange={(event) =>
                                        setData({ ...data, supplier: event.target.value })
                                    }
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div class="relative z-0 w-full text-wrap">
                                    <label htmlFor="procurement" className="block mb-2 text-xs font-medium text-gray-900 dark:text-white">
                                    ABC
                                    </label>
                                    <TextInput
                                    type="text"
                                    value={data.abc}
                                    onChange={(event) =>
                                        setData({ ...data, abc: event.target.value })
                                    }
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div class="relative z-0 w-full group">
                                    <label htmlFor="contract_amount" className="block mb-2 text-xs font-medium text-gray-900 mr-12 dark:text-white ">
                                    Contract Amount
                                    </label>
                                    <TextInput
                                    type="text"
                                    value={data.contract_amount}
                                    onChange={(event) =>
                                        setData({ ...data, contract_amount: event.target.value })
                                    }
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                                <div class="relative z-0 w-full group">
                                    <label htmlFor="status" className="block mb-2 text-xs font-medium text-gray-900 mr-12 dark:text-white ">
                                    Status
                                    </label>
                                    <TextInput
                                    type="text"
                                    value={data.status}
                                    onChange={(event) =>
                                        setData({ ...data, status: event.target.value })
                                    }
                                    className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                    <button 
                            type="submit" 
                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                            Submit
                        </button>
                        &nbsp;
                        &nbsp;
                        <button 
                            disabled={processing} 
                            onClick={confirmUserDeletion}
                            className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                            >
                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                Delete
                        </button>
                </form>
            </div>
        </div>
        <DeleteModal show={confirmingUserDeletion} onClose={closeModal} maxWidth={'md'}>    
        <form onSubmit={deletePmr} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Are you sure you want to delete this file?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once your file is deleted, all of its resources and data will be permanently deleted. Please
                        type <span className="text-red-800 font-medium">delete</span> to confirm you would like to permanently delete the file.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="text"
                            name="password"
                            value={deleteKeyword.delete}
                            onChange={(e) => setKeywordData({ ...deleteKeyword, delete: e.target.value })}
                            className="mt-1 block w-full"
                            isFocused
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            Delete
                        </DangerButton>
                    </div>
                </form>

         </DeleteModal>

    </AuthenticatedLayout>
   
  )
}
