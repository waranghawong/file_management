import TextInput from '@/Components/TextInput'
import React, { useRef } from 'react';

export default function PmrFrom({ formData, setFormData }) {
    const prNumberRef = useRef(null);
    const rfqNumberRef = useRef(null);
    const procurementRef = useRef(null);
    const endUserRef = useRef(null);
  
    const handleKeyDown = (ref) => (event) => {
      if (event.key === 'Enter') {
        ref.current.focus();
      }
    };
  
    return (
      <div>
        <div className="max-w-sm mx-auto">
          <div className="mb-6">
            <label htmlFor="pr_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              PR Number
            </label>
            <TextInput
              ref={prNumberRef}
              type="text"
              value={formData.pr_number}
              onChange={(event) => setFormData({ ...formData, pr_number: event.target.value })}
              onKeyDown={handleKeyDown(rfqNumberRef)}
              className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
  
            <label htmlFor="rfq_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              RFQ Number
            </label>
            <TextInput
              ref={rfqNumberRef}
              type="text"
              value={formData.rfq_number}
              onChange={(event) => setFormData({ ...formData, rfq_number: event.target.value })}
              onKeyDown={handleKeyDown(procurementRef)}
              className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
  
            <label htmlFor="procurement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Procurement Project
            </label>
            <TextInput
              ref={procurementRef}
              type="text"
              value={formData.procurement}
              onChange={(event) => setFormData({ ...formData, procurement: event.target.value })}
              onKeyDown={handleKeyDown(endUserRef)}
              className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
  
            <label htmlFor="end_user" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              End-User
            </label>
            <TextInput
              ref={endUserRef}
              type="text"
              value={formData.end_user}
              onChange={(event) => setFormData({ ...formData, end_user: event.target.value })}
              className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
  
            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date
            </label>
            <TextInput
              type="date"
              value={formData.date}
              onChange={(event) => setFormData({ ...formData, date: event.target.value })}
              className="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
    );
  }