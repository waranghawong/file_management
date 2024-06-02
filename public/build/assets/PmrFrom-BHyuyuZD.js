import{r as u,j as e}from"./app-f-KFQsJW.js";import{T as d}from"./TextInput-ul-7i9RR.js";function i({formData:t,setFormData:l,error:a}){const c=u.useRef(null),o=u.useRef(null),b=u.useRef(null),n=u.useRef(null),s=r=>g=>{g.key==="Enter"&&r.current.focus()};return e.jsx("div",{children:e.jsx("div",{className:"max-w-sm mx-auto",children:e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"pr_number",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"PR Number"}),e.jsx(d,{ref:c,type:"text",value:t.pr_number,onChange:r=>l({...t,pr_number:r.target.value}),onKeyDown:s(o),required:!0,className:"block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx("label",{htmlFor:"rfq_number",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"RFQ Number"}),e.jsx(d,{ref:o,type:"text",value:t.rfq_number,onChange:r=>l({...t,rfq_number:r.target.value}),onKeyDown:s(b),required:!0,className:"block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),e.jsx("label",{htmlFor:"procurement",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Procurement Project"}),e.jsx(d,{ref:b,type:"text",value:t.procurement,onChange:r=>l({...t,procurement:r.target.value}),onKeyDown:s(n),required:!0,className:"block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),a&&e.jsx("p",{className:"text-red-500",children:a}),e.jsx("label",{htmlFor:"end_user",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"End-User"}),e.jsx(d,{ref:n,type:"text",value:t.end_user,onChange:r=>l({...t,end_user:r.target.value}),required:!0,className:"block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),a&&e.jsx("p",{className:"text-red-500",children:a}),e.jsx("label",{htmlFor:"date",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Date"}),e.jsx(d,{type:"date",value:t.date,required:!0,onChange:r=>l({...t,date:r.target.value}),className:"block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}),a&&e.jsx("p",{className:"text-red-500",children:a})]})})})}export{i as default};
