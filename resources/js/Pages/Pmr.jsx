import { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Modal from '@/Components/Modal';
import TextInput from '@/Components/TextInput';
import { Button } from 'flowbite-react';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiMenu } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

export default function Pmr({auth}) {

  const [isOpen , setIsOpen] = useState(false)
  const handleComplete = () => {
    console.log("Form completed!");
    // Handle form completion logic here
  };
  const tabChanged = (prevIndex, nextIndex) =>{
  //  console.log("prevIndex", prevIndex)
  //  console.log("nextIndex", nextIndex)

   }
  return (
    <div>
    <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="PMR" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <button onClick={() => setIsOpen(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Create PMR
                </button> <br />
                    <div className="ml-2 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">

                    <Modal show={isOpen} maxWidth={'lg'}   >
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          
                        </h3>
                        <button type="button" onClick={() => setIsOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <FormWizard
                        shape="circle"
                        color="rgb(219 39 119)"
                        onComplete={handleComplete}
                        onTabChange={tabChanged}
                      >
                        <FormWizard.TabContent title="PMR FORM" icon="ti-notepad">
                          {/* Add your form inputs and components for the frst step */}
                          <form class="max-w-sm mx-auto">
                             <div class="mb-5">
                                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PR Number</label>
                                <TextInput type="text" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RFQ Number</label>
                                <TextInput type="text" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Procurement Project</label>
                                <TextInput type="text" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End-User</label>
                                <TextInput type="text" class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                          </form>
                        </FormWizard.TabContent>
                        <FormWizard.TabContent title="Additional Info" icon="ti-files">

                            <h1>Please choose form</h1>

                            <div className="overflow-x-auto">
                                <Tabs aria-label="Full width tabs" style="fullWidth">
                                  <Tabs.Item active title="AMP" icon={HiMenu}>
                                  <form class="max-w-xlg mx-auto overflow-y-scroll">
                                    <div class="grid md:grid-cols-2 md:gap-6  mt-3">
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option selected>Select Account</option>
                                            <option value="">user</option>
                                        </select>
                                        <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PR Recieved</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option selected>Select Account</option>
                                            <option value="">user</option>
                                        </select>
                                        <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for Posting</label>
                                        
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                            <option selected>Select Account</option>
                                            <option value="">user</option>
                                        </select>
                                        <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for Posting</label>
                                        
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for canvas</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs Returned(Sealed)</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for Deliberation of ABC</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for Abstract</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Original Abstract, PR, RFQs Supply</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">BAC Resolution Supply</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NOA, NTP & Contract-Supply</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Justification</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PR-Supply</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                        <select id="underline_select" class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                                              <option selected>Select Account</option>
                                              <option value="">user</option>
                                          </select>
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-blue-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PR-END-User</label>
                                      </div>
                                 
                                      </div>
                                  </form>

                                  </Tabs.Item>
                                  <Tabs.Item title="Competitive" icon={MdDashboard}>
                                  <form class="max-w-xlg mx-auto">
                                    <div class="grid md:grid-cols-2 md:gap-6">
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="pre-proc" id="pre-proc" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="pre-proc" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pre-Proc Conf</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="eligibility_check" id="eligibility_check" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="eligibility_check" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Eligibility Check</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="post_quality" id="post_quality" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="post_quality" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Post Quality</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="contract_signing" id="contract_signing" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="contract_signing" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contract Signing</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="posting_philgeps" id="posting_philgeps" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="posting_philgeps" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Posting on PhilGEPS</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="opening_canvass" id="opening_canvass" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="opening_canvass" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Opening of Canvas/Bid</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="date_of_bac" id="date_of_bac" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="date_of_bac" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of BAC</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="notice_of_proceed" id="notice_of_proceed" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="notice_of_proceed" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Notice of Proceed</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="pre_bid" id="pre_bid" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="pre_bid" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pre-Bid Conf</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="bid_evaluation" id="bid_evaluation" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="bid_evaluation" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bid Evaluation</label>
                                      </div>
                                      <div class="relative z-0 w-full group">
                                          <input type="date" name="notice_of_awardd" id="notice_of_awardd" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " requiblue />
                                          <label for="notice_of_awardd" class="peer-focus:font-medium absolute text-sm text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Notice of Award</label>
                                      </div>
                                    </div>
                                  </form>



                                  </Tabs.Item>
                                </Tabs>
                              </div>
                          
                          </FormWizard.TabContent>
                          <FormWizard.TabContent title="Last step" icon="ti-check">


                          <form class="max-w-sm mx-auto">
                            <div class="mb-5">
                              <label for="sof" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source of Funds</label>
                              <input type="text" id="sof" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div class="mb-5">
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label>
                              <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div class="mb-5">
                              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ABC</label>
                              <div class="relative w-full">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
                                    <text x="0" y="35" font-size="20" font-family="Verdana" fill="#000000">₱</text>
                                  </svg>
                                </div>
                                <input type="number" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                             </div>
                            </div>
                            <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contract Amount</label>
                              <div class="relative w-full">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
                                    <text x="0" y="35" font-size="20" font-family="Verdana" fill="#000000">₱</text>
                                  </svg>
                                </div>
                                <input type="number" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                             </div>
                            </div>
                            <div class="mb-5">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Amount</label>
                            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                  <option selected>Select Account</option>
                                  <option value="awarded">Awarded</option>
                                  <option value="failed">Failed</option>
                                  <option value="close">Close</option>
                                  <option value="partially_awarded">Partially Awarded</option>
                                  <option value="cancelled">Cancelled</option>
                                  <option value="incomplete">Incomplete</option>
                                  <option value="othere">Others</option>
                              </select>
                             
                            </div>
                        
                          </form>

                          </FormWizard.TabContent>
                        </FormWizard>
                    </Modal>

                    
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
