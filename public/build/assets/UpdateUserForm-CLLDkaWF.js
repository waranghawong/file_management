import{q as h,W as j,j as e}from"./app-f-KFQsJW.js";import{I as m}from"./InputError-B7Pl1fcw.js";import{I as o}from"./InputLabel-CnpATiZu.js";import{P as f}from"./PrimaryButton-DdYpq-yt.js";import{T as n}from"./TextInput-ul-7i9RR.js";import{S as v}from"./SelectInput-CFgek5WM.js";import{q as g}from"./transition-LnAr5rSJ.js";function C({userprofile:t,className:i=""}){h().props.auth.user;const{data:s,setData:r,patch:c,errors:l,processing:u,recentlySuccessful:d}=j({name:t.name,email:t.email,role:t.role}),x=a=>{a.preventDefault(),c(route("users.update",t.id),{preserveScroll:!0})},p=["sub-admin","customer"];return e.jsxs("section",{className:i,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600 dark:text-gray-400",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:x,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"name",value:"Name"}),e.jsx(n,{id:"name",className:"mt-1 block w-full",value:s.name,onChange:a=>r("name",a.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(m,{className:"mt-2",message:l.name})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"email",value:"Email"}),e.jsx(n,{id:"email",type:"email",className:"mt-1 block w-full",value:s.email,onChange:a=>r("email",a.target.value),required:!0,autoComplete:"username"}),e.jsx(m,{className:"mt-2",message:l.email})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"role",value:"Role"}),e.jsx(v,{id:"role",className:"mt-1 block w-full",options:p,value:s.role,onChange:a=>r("role",a.target.value)}),e.jsx(m,{className:"mt-2",message:l.role})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(f,{disabled:u,children:"Save"}),e.jsx(g,{show:d,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Saved."})})]})]})]})}export{C as default};
