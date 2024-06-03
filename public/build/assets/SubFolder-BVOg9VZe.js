import{R as c,r as l,j as e,W as g,a as f}from"./app-DxOulJy8.js";import{M as p}from"./Modal-DgIei7bu.js";import{_ as h,A as y}from"./AuthenticatedLayout-DxieT9SF.js";import{I as k}from"./InputError-DesZ2rWU.js";import{P as j}from"./Pagination-B2unsGLx.js";import{T as v}from"./TextInput-CT4Pjniw.js";import{J as w,X as N}from"./index.es-CN2K6-Ex.js";import"./transition-Cljbe9qP.js";import"./dialog-CAzNZUzs.js";import"./Dropdown-u_0gYIV-.js";function _({items:d,action:t}){const[u,m]=h("isDark",!1);w("solarized",{background:{default:"transparent"},text:{primary:u?"#ffff":"#00000",secondary:"#2aa198"}});const s={headCells:{style:{fontSize:"15px",fontWeight:"bold",paddingLeft:"10px",marginTop:"10px",backgroundColor:"rgb(214 31 105 / var(--tw-bg-opacity))"}},rows:{style:{fontSize:"15px",marginTop:"10px"}}},i=[{name:"id",selector:r=>"#"+r.id},{name:"Folder Name",selector:r=>r.subfolder?r.subfolder.folder_name:"",sortable:!0},{name:"File Name",selector:r=>r.file_name},{name:"Description",selector:r=>r.description},{name:"Created at",selector:r=>r.created_at},{name:"Uploader",selector:r=>r.user.name,sortable:!0},{name:"Action",cell:r=>e.jsx("a",{href:route(t,r.id),className:"font-medium text-blue-600 dark:text-blue-500 hover:underline",children:"View Details"})}];c.useState(!0),c.useState([]),l.useState([]);const[o,n]=l.useState("");return l.useState([]),l.useEffect(()=>{}),e.jsx(c.Fragment,{children:e.jsx(N,{columns:i,data:d,fixedHeader:!0,selectableRowsHighlight:!0,customStyles:s,theme:"solarized",title:"Files",subHeader:!0,subHeaderComponent:e.jsx("input",{type:"text",className:"form-control",placeholder:"search..",value:o,onChange:r=>n(r.target.value)})})})}function E({auth:d,get_file:t,subfolder:u}){console.log(t.data[0].subfolder_name_id);const[m,s]=l.useState(!1),{data:i,setData:o,post:n,processing:r,errors:x,reset:S}=g({file_name:"",file:"",description:"",folder_name:t.data[0]?t.data[0].folder.folder_name:"",folder_id:t.data[0]?t.data[0].folder.id:"",subfolder_name:"",subfolder_id:t.data[0].subfolder_name_id,uploader_id:d.user.id}),b=a=>{a.preventDefault(),n(route("uploadfilesubfolder"),{preserveScroll:!0,onSuccess:()=>{s(!1)}})};return l.useState(!0),e.jsx("div",{children:e.jsxs(y,{user:d.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Files"}),children:[e.jsx(f,{title:"File Management"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-8xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("button",{onClick:()=>s(!0),className:"block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button",children:"Add File"})," ",e.jsx("br",{}),e.jsxs(p,{show:m,maxWidth:"2xl",onClose:()=>s(!1),children:[e.jsxs("div",{className:"flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Create and Upload New File"}),e.jsxs("button",{type:"button",onClick:()=>s(!1),className:"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white","data-modal-toggle":"crud-modal",children:[e.jsx("svg",{className:"w-3 h-3","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14",children:e.jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})}),e.jsx("span",{className:"sr-only",children:"Close modal"})]})]}),e.jsxs("form",{className:"p-4 md:p-5 ",onSubmit:b,enctype:"multipart/form-data",children:[e.jsxs("div",{className:"grid gap-4 mb-4 grid-cols-2",children:[e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{for:"name",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"File Name"}),e.jsx(v,{id:"file_name",name:"file_name",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",value:i.file_name,required:!0,onChange:a=>o("file_name",a.target.value)}),e.jsx(k,{message:x.file_name,className:"mt-2"})]}),e.jsxs("div",{className:"col-span-2",children:[e.jsx("label",{for:"description",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"File Description"}),e.jsx("textarea",{id:"description",onChange:a=>o("description",a.target.value),rows:"4",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write the file description here"})]}),e.jsxs("div",{className:"col-span-2 sm:col-span-1",children:[e.jsx("label",{class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",for:"file_input",children:"Upload file"}),e.jsx("input",{className:"mt-1 block w-full block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",name:"file","aria-describedby":"file_input_help",isFocused:!0,type:"file",required:!0,onChange:a=>o("file",a.target.files[0])}),e.jsx("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)."})]})]}),e.jsxs("button",{type:"submit",disabled:r,className:"text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:[e.jsx("svg",{className:"me-1 -ms-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})}),"Submit"]})]})]}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:[e.jsx(_,{items:t.data,action:"edit_file_info"}),e.jsx(j,{class:"mt-6",links:t.links})]})]})})]})})}export{E as default};