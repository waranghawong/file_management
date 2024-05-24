import { useState } from 'react'
import TextInput from '@/Components/TextInput'
import Select from 'react-select';

export default function LastForm({ formData, setFormData, errors}) {
  const [error, setError] = useState('');
  const [showOthers, setOthers] = useState(true);
  const options = [
    {  value: "Awarded", label: "Awarded"},
    {  value: "Failed", label: "Failed"},
    {  value: "Close", label: "Close"},
    {  value: "Partially Awarded", label: "Partially Awarded"},
    {  value: "Cancelled", label: "Cancelled"},
    {  value: "incomplete", label: "Incomplete"},
    {  value: "Re-PR", label: "Re-PR"},
    {  value: "Re-Canvass", label: "Re-Canvass"},
    {  value: "Others", label: "Others"},
  ]

  const [selectedOption, setSelectedOption] = useState(false)
  
  const handleChange = (selectedOption) => {

      console.log(`Option selected:`, selectedOption)

      if(selectedOption.value == 'Others'){
          console.log('others selected')
          setOthers(false);
          setFormData({ ...formData, status: selectedOption.value })
      }
      else{
        setFormData({ ...formData, status: selectedOption.value })
        setOthers(true);
      }

    

  };

  const contractAmount = (event) => {
    if(formData.abc < event.target.value){
      setError('contract amount should not be greater than abc');
    }
    else{
      setError('');
      setFormData({ ...formData, contract_amount: event.target.value })
    }


    
  }

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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
            {errors && <p className='text-red-500'>{errors}</p>}
          </div>
          <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label>
            <TextInput 
            type="text" 
            value={formData.supplier}
            onChange={(event) =>
              setFormData({ ...formData, supplier: event.target.value })
            }
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
            {errors && <p className='text-red-500'>{errors}</p>}
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" 
              required />
          
            </div>
            {errors && <p className='text-red-500'>{errors}</p>}
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
                  contractAmount(event)
              }
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" 
              required />
            </div>
            {error && <p className='text-red-500'>{error}</p>}
            {errors && <p className='text-red-500'>{errors}</p>}
          </div>
          <div class="mb-5">
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
          <div className='max-w-sm mx-auto overflow-visible z-99999'>
          <Select
           className="overflow-visible z-50"
            defaultValue={selectedOption}
            onChange={(event) =>
              handleChange(event)
            }
            options={options}
            menuPlacement="top"
          />
            {errors && <p className='text-red-500'>{errors}</p>}
          </div>
            <br />
          <TextInput
              name="others"
              className={ showOthers  ? 'hidden' : ''  + "p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}
              value={formData.others}
              placeholder="Please specify"
              onChange = {(event) =>  setFormData({ ...formData, others: event.target.value })}
          
          />

          
      

          </div>
      
        </div>

    </div>
  )
}
