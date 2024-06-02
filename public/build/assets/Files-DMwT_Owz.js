import{r as u,W as j,j as e,a as N}from"./app-f-KFQsJW.js";import{M as _}from"./Modal-Bc_ECDAU.js";import{A as C}from"./AuthenticatedLayout-ByrTVaP6.js";import{I as m}from"./InputError-B7Pl1fcw.js";import{T as g}from"./TextInput-ul-7i9RR.js";import"./index.es-DjWEgddm.js";import"./transition-LnAr5rSJ.js";import"./dialog-iWEQd-7Q.js";import"./Dropdown-CBQmE-JR.js";function D({auth:i,get_file:t,subfolder:d,id:x}){const h=t.map(r=>({fileName:r==null?void 0:r.file_name,fileId:r==null?void 0:r.id}));console.log(d);const[b,l]=u.useState(!1),{data:s,setData:a,post:f,processing:p,errors:n,reset:F}=j({file_name:"",file:"",description:"",folder_name:t==!1?"":t[0].folder.folder_name,folder_id:x,subfolder_name:"",subfolder_id:"",uploader_id:i.user.id}),k=r=>{r.preventDefault(),f(route("uploadfile"),{preserveScroll:!0,onSuccess:()=>{l(!1)}})},[y,c]=u.useState(!0),v=r=>{let o=r.nativeEvent.target.selectedIndex,w=r.nativeEvent.target[o].text;r.target.value,r.target.value=="other"?(c(!1),a({...s,subfolder_id:"",subfolder_name:""})):(c(!0),a({...s,subfolder_id:r.target.value,subfolder_name:w}))};return e.jsx("div",{children:e.jsxs(C,{user:i.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Files"}),children:[e.jsx(N,{title:"File Management"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("button",{onClick:()=>l(!0),className:"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button",children:"Add File"})," ",e.jsx("br",{}),e.jsxs(_,{show:b,maxWidth:"2xl",onClose:()=>l(!1),children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Create and Upload New File"}),e.jsxs("button",{type:"button",onClick:()=>l(!1),className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"crud-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("form",{className:"p-4 md:p-5 ",onSubmit:k,enctype:"multipart/form-data",children:[e.jsxs("div",{className:"grid gap-4 mb-4 grid-cols-2",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{for:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"File Name"}),e.jsx(g,{id:"file_name",name:"file_name",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",value:s.file_name,required:!0,onChange:r=>a("file_name",r.target.value)}),e.jsx(m,{message:n.file_name,className:"mt-2"})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{for:"description",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"File Description"}),e.jsx("textarea",{id:"description",onChange:r=>a("description",r.target.value),rows:"4",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write the file description here"})]}),e.jsxs("div",{className:"col-span-2 sm:col-span-1",children:[e.jsx("label",{for:"category",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Category"}),e.jsxs("select",{id:"category",onChange:v,className:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",children:[e.jsx("option",{value:"",children:"Select Sub Folder"}),d.map(r=>e.jsx("option",{value:r.value,children:r.label})),e.jsx("option",{value:"other",children:"New Sub Folder"})]}),e.jsx("br",{}),e.jsx(g,{id:"folder_name",name:"subfolder_name",className:y?"hidden":"p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",value:s.subfolder_name,placeholder:"Sub Folder Name",onChange:r=>a("subfolder_name",r.target.value)}),e.jsx(m,{message:n.subfolder_name,className:"mt-2"})]}),e.jsxs("div",{className:"col-span-2 sm:col-span-1",children:[e.jsx("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",for:"file_input",children:"Upload file"}),e.jsx("input",{className:"mt-1 block w-full block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",name:"file","aria-describedby":"file_input_help",isFocused:!0,type:"file",onChange:r=>a("file",r.target.files[0])}),e.jsx("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)."})]})]}),e.jsxs("button",{type:"submit",disabled:p,className:"text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[e.jsx("svg",{className:"me-1 -ms-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})}),"Submit"]})]})]}),e.jsx("div",{className:"w-full  mx-auto sm:px-6 lg:px-8 space-y-6 p-4 shadow-lg bg-white dark:bg-slate-800 rounded-xl bg-white",children:e.jsxs("div",{class:"grid grid-cols-4 md:grid-cols-6 gap-4",children:[d.map((r,o)=>e.jsx("div",{className:"mt-5 ",children:e.jsx("a",{href:route("show_files",r.value),children:e.jsxs("div",{class:"w-64 h-50 bg-white rounded-lg shadow-md p-4 inline-flex items-center  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",children:e.jsx("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"})})," ",e.jsx("span",{className:"ml-2",children:r.label})]})})})),h.map((r,o)=>e.jsx("div",{className:"mt-5 ",children:e.jsx("a",{href:route("edit_file_info",r.fileId),children:e.jsxs("div",{class:"w-64 h-50 bg-white rounded-lg shadow-md p-4 inline-flex items-center  dark:bg-gray-700 dark:border-gray-600  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[e.jsx("svg",{class:"w-6 h-6 text-gray-800 dark:text-white","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"})}),e.jsx("span",{className:"ml-2",children:r.fileName})]})})}))]})})]})})]})})}export{D as default};
