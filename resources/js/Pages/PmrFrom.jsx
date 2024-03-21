import TextInput from '@/Components/TextInput'
import React from 'react'

export default function PmrFrom({ formData, setFormData }) {
  return (
    <div>
        <div className="max-w-sm mx-auto">
            <div class="mb-6"> 
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PR Number</label>
                <TextInput
                type="text"
                value={formData.pr_number}
                onChange={(event) =>
                    setFormData({ ...formData, pr_number: event.target.value })
                    }
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RFQ Number</label>
                <TextInput
                type="text"
                value={formData.data}
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Procurement Project</label>
                <TextInput
                type="text"
                value={formData.procurement}
                onChange={(event) =>
                setFormData({ ...formData, procurement: event.target.value })
                }
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End-User</label>
            
              
                <TextInput
                type="text"
                className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.end_user}
                onChange={(event) =>
                setFormData({ ...formData, end_user: event.target.value })
                }
                />
            </div>
        </div>
    </div>
  )
}
