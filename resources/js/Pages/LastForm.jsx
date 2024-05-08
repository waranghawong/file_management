import { useState, useRef } from 'react'
import TextInput from '@/Components/TextInput'
import Select from 'react-select';

export default function LastForm({ formData, setFormData }) {

  const options = [
    {  value: "awarded", label: "Awarded"},
    {  value: "failed", label: "Failed"},
    {  value: "close", label: "Close"},
    {  value: "partially awarded", label: "Partially Awarded"},
    {  value: "cancelled", label: "Cancelled"},
    {  value: "incomplete", label: "Incomplete"},
    {  value: "others", label: "Others"},
  ]

  const [selectedOption, setSelectedOption] = useState(false)
  const sourceOfFundsRef = useRef(null);
  const supplierRef = useRef(null);
  const abcRef = useRef(null);
  const contractAmountRef = useRef(null);
  const statusRef = useRef(null);

  const handleEnterPress = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextRef.current.focus();
    }
  };

  const handleChange = (selectedOption) => {

      console.log(`Option selected:`, selectedOption)

      setFormData({ ...formData, status: selectedOption.value })

  };

  return (
    <div>
          <div className="max-w-sm mx-auto">
          <div class="mb-6">
            <label for="sof" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source of Funds</label>
            <TextInput 
            type="text" 
            value={formData.source_of_funds}
            onChange={(event) =>
              setFormData({ ...formData, source_of_funds: event.target.value })
            }
            onKeyPress={(e) => handleEnterPress(e, supplierRef)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            ref={sourceOfFundsRef}
             />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label>
            <TextInput 
            type="text" 
            value={formData.supplier}
            onChange={(event) =>
              setFormData({ ...formData, supplier: event.target.value })
            }
            onKeyPress={(e) => handleEnterPress(e, abcRef)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            ref={supplierRef}
             />
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ABC</label>
            <div class="relative w-full">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">
                  <text x="0" y="35" font-size="20" font-family="Verdana" fill="#000000">₱</text>
                </svg>
              </div>
              <TextInput
               type="number" 
              id="simple-search" 
              value={formData.abc}
              onChange={(event) =>
                setFormData({ ...formData, abc: event.target.value })
              }
              onKeyPress={(e) => handleEnterPress(e, contractAmountRef)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" 
              ref={abcRef}
               />
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
              <TextInput 
              type="number" 
              value={formData.contract_amount}
              onChange={(event) =>
                setFormData({ ...formData, contract_amount: event.target.value })
              }
              onKeyPress={(e) => handleEnterPress(e, statusRef)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" 
              ref={contractAmountRef}
              />
            </div>
          </div>
          <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
          <div className='max-w-sm mx-auto overflow-visible z-99999'>
          <Select
           className=""
            defaultValue={selectedOption}
            onChange={(event) =>
              handleChange(event)
            }
            options={options}
            ref={statusRef}
           
          />
          </div>

          
      

          </div>
      
        </div>

    </div>
  )
}
