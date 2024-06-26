import { useState } from 'react';

export default function Others({ formData, setFormData,users,amp, compi }) {


   const handleChange = (selectedOption) => {
    setFormData({ ...formData, pr_recieved: selectedOption.target.checked })
   }
   const rfqPosting = (selectedOption) => {
    setFormData({ ...formData, rfq_posting: selectedOption.target.checked })
   }
   const prRfq = (selectedOption) => {
    setFormData({ ...formData, pr_for_rfq: selectedOption.target.checked })
   }
   const rfqCanvass = (selectedOption) => {
    setFormData({ ...formData, rfq_canvass: selectedOption.target.checked })
   }
   const rfqReturned = (selectedOption) => {
    setFormData({ ...formData, rfq_returned: selectedOption.target.checked })
   }
   const rfqDeliberation = (selectedOption) => {
    setFormData({ ...formData, rfq_deliberation: selectedOption.target.checked })
   }
   const rfqAbstract = (selectedOption) => {
    setFormData({ ...formData, rfq_abstract: selectedOption.target.checked })
   }
   const rfqOriginalAbstract = (selectedOption) => {
    setFormData({ ...formData, original_abstract: selectedOption.target.checked })
   }
   const rfqBac = (selectedOption) => {
    setFormData({ ...formData, bac_resolution: selectedOption.target.checked })
   }
   const forNoa = (selectedOption) => {
    setFormData({ ...formData, noa: selectedOption.target.checked })
   }
   const forJustification = (selectedOption) => {
    setFormData({ ...formData, justification: selectedOption.target.checked })
   }
   const prSupply = (selectedOption) => {
    setFormData({ ...formData, pr_supply: selectedOption.target.checked })
   }
   const preEnd = (selectedOption) => {
    setFormData({ ...formData, pre_end: selectedOption.target.checked })
   }


   
  //  const loadOptions = (searchValue, callback) => {
  //   setTimeout(()=>{
  //     setFormData({ ...formData, pr_recieved: null })
  //     setFormData({ ...formData, pre_end: null })
  //     setFormData({ ...formData, pr_supply: null })
  //     setFormData({ ...formData, rfq_posting: null })
  //     setFormData({ ...formData, pr_for_rfq: null })
  //     setFormData({ ...formData, rfq_returned: null })
  //     setFormData({ ...formData, rfq_canvass: null })
  //     setFormData({ ...formData, rfq_deliberation: null })
  //     setFormData({ ...formData, rfq_abstract: null })
  //     setFormData({ ...formData, original_abstract: null })
  //     setFormData({ ...formData, bac_resolution: null })
  //     setFormData({ ...formData, noa: null })
  //     setFormData({ ...formData, justification: null })
  //     const filteredOptions = users.filter((option => option.label.toLowerCase().includes(searchValue.toLowerCase()))
  //   );
  //   console.log('loadOptions', searchValue, filteredOptions)
  //   callback(filteredOptions)
  //   },1000);
  //  }


   const [showAmp, setAmpShow] = useState(false)
   const [showCompi, setCompiShow] = useState(false)


  return (
    <div>
 
       <div class="container mx-auto align-center">
       <h1>Please choose form</h1>
        <div class="w-full mb-6">
            <button
            onClick = {() => setAmpShow(true)}
            disabled = {showCompi}
             class="w-full md:w-1/2 mx-auto text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-100 dark:focus:ring-pink-100 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium text-lg px-5 py-2.5 text-center"> 
                AMP
            </button>
        
            <button 
             onClick = {() => setCompiShow(true)}
             disabled = {showAmp}
            class="w-full md:w-1/2 mx-auto text-white bg-gradient-to-r from-pink-600 via-pink-600 to-pink-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-100 dark:focus:ring-pink-100 shadow-lg dark:shadow-lg  shadow-pink-500/50 dark:shadow-pink-800/80 font-medium text-lg px-5 py-2.5 text-center">
                COMPETITIVE
            </button>
        </div>
        {
            showCompi 
            ?
            <div className='competitive_form'>
               <form class="max-w-xlg mx-auto">
                 <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full group">
                        <input type="date"
                         name="pre-proc"
                          id="pre-proc"
                          value={formData.pre_proc}
                          onChange={(event) =>
                            setFormData({ ...formData, pre_proc: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="pre-proc" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pre-Proc Conf</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="eligibility_check"
                          value={formData.eligibility_check}
                          onChange={(event) =>
                            setFormData({ ...formData, eligibility_check: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="eligibility_check" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Eligibility Check</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="post_quality"
                          value={formData.post_quality}
                          onChange={(event) =>
                            setFormData({ ...formData, post_quality: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="post_quality" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Post Quality</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="contract_signing"
                          value={formData.contract_signing}
                          onChange={(event) =>
                            setFormData({ ...formData, contract_signing: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="contract_signing" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Contract Signing</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="posting_philgeps"
                          value={formData.posting_philgeps}
                          onChange={(event) =>
                            setFormData({ ...formData, posting_philgeps: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="posting_philgeps" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Posting on PhilGEPS</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="opening_canvass"
                          value={formData.opening_canvass}
                          onChange={(event) =>
                            setFormData({ ...formData, opening_canvass: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="opening_canvass" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Opening of Canvas/Bid</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="date_of_bac"
                          value={formData.date_of_bac}
                          onChange={(event) =>
                            setFormData({ ...formData, date_of_bac: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="date_of_bac" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Date of BAC</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="notice_of_proceed"
                          value={formData.notice_of_proceed}
                          onChange={(event) =>
                            setFormData({ ...formData, notice_of_proceed: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="notice_of_proceed" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Notice of Proceed</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="pre_bid"
                          value={formData.pre_bid}
                          onChange={(event) =>
                            setFormData({ ...formData, pre_bid: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="pre_bid" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pre-Bid Conf</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="bid_evaluation"
                          value={formData.bid_evaluation}
                          onChange={(event) =>
                            setFormData({ ...formData, bid_evaluation: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="bid_evaluation" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bid Evaluation</label>
                    </div>
                    <div class="relative z-0 w-full group">
                    <input type="date"
                         name="notice_of_awardd"
                          value={formData.notice_of_awardd}
                          onChange={(event) =>
                            setFormData({ ...formData, notice_of_awardd: event.target.value })
                            }
                          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="notice_of_awardd" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Notice of Award</label>
                    </div>
                  </div>
                </form>
            </div>

            :

            null
            
        }
        {
           showAmp 
           
           ? 
           <div>
             <form class="max-w-xlg mx-auto">
                <div class="grid md:grid-cols-3 md:gap-6 p-6">
                     <div class="relative z-0 w-full group">
                      <input
                        type="date"
                        value={formData.pr_recieved}
                         onChange={(event) =>
                          setFormData({ ...formData, pr_recieved: event.target.value })
                        }
                         className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                      
                      <label for="pr_for_rfq" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PR Recieved</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.pr_for_rfq} 
                        onChange={(event) =>
                          setFormData({ ...formData, pr_for_rfq: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="pr_for_rfq" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PR for RFQs</label>
                    
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.rfq_posting} 
                        onChange={(event) => 
                          setFormData({ ...formData, rfq_posting: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="rfq_posting" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for Posting</label>
                    
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.rfq_canvass} 
                        onChange={(event) =>
                          setFormData({ ...formData, rfq_canvass: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="rfq_canvass" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for canvas</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.rfq_returned} 
                        onChange={(event) =>
                          setFormData({ ...formData, rfq_returned: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="rfq_returned" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs Returned(Sealed)</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.rfq_deliberation} 
                        onChange={(event) => 
                          setFormData({ ...formData, rfq_deliberation: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="rfq_deliberation" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for Deliberation of ABC</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.rfq_abstract} 
                        onChange={(event) =>
                          setFormData({ ...formData, rfq_abstract: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="rfq_abstract" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">RFQs for Abstract</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.original_abstract} 
                        onChange={(event) =>
                          setFormData({ ...formData, original_abstract: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="original_abstract" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Original Abstract, PR, RFQs Supply</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.bac_resolution} 
                        onChange={(event) => 
                          setFormData({ ...formData, bac_resolution: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="bac_resolution" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">BAC Resolution Supply</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.noa} 
                        onChange={(event) =>
                          setFormData({ ...formData, noa: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="noa" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NOA, NTP & Contract-Supply</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.justification} 
                        onChange={(event) => 
                          setFormData({ ...formData, justification: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="justification" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Justification</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.pr_supply} 
                        onChange={(event) =>
                          setFormData({ ...formData, pr_supply: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="pr_supply" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PR-Supply</label>
                    </div>
                     <div class="relative z-0 w-full group">
                        <input 
                        type="date"
                        value={formData.pre_end} 
                        onChange={(event) =>
                          setFormData({ ...formData, pre_end: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="pre_end" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">PR-END-User</label>
                    </div>
                    <div class="relative z-0 w-full group">
                        <input 
                        type="text"
                        value={formData.amp_others} 
                        onChange={(event) =>
                          setFormData({ ...formData, amp_others: event.target.value })
                        } 
                        className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                        <label for="amp_others" class="peer-focus:font-medium absolute text-lg text-pink-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Others</label>
                    </div>
                
                    </div>
                </form>

           </div>

           :
        null

        }
       
      

   
       
        </div>
      
    </div>
  )
}
