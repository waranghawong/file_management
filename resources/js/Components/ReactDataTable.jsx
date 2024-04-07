import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import SecondaryButton from '@/Components/SecondaryButton';
import useLocalStorage from 'use-local-storage';


export default function ReactDataTable({items}) {

    const [theme, setTheme] = useLocalStorage("isDark",false);

    console.log(items)

    createTheme('solarized', {
        background: {
          default: 'transparent',
        },
        text: {
        primary:  theme ? '#ffff' :  '#00000',
        secondary: '#2aa198',
        },
      });

      const tableCustomStyles = {
        headCells: {
          style: {
            fontSize: '15px',
            fontWeight: 'bold',
            paddingLeft: '10px',
            marginTop: "10px",
            backgroundColor: 'rgb(214 31 105 / var(--tw-bg-opacity))'
          },
        },
        rows: {
            style: {
                fontSize: '15px',
                marginTop: "10px",
            },
        },
       
       

      }

    const columns = [
        {
            name: "id",
            selector: row => '#'+ row.id
        },
        {
            name: "File Name",
            selector: row => row.file_name,
       
        },
        {
            name: "Description",
            selector: row => row.description
        },
        {
            name: "Created at",
            selector: row => row.created_at
        },
        {
            name: "Uploader",
            selector: row => row.user.name,
            sortable: true
        },
        {
            name: "Action",
            cell: (row) => (
                <SecondaryButton className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">DELETE</SecondaryButton>
            )
        }
     
    ];
    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        
    })
  return (
    <React.Fragment> 
        <DataTable 
        columns={columns}
        data={items}
        fixedHeader
        selectableRowsHighlight
        customStyles={tableCustomStyles}
        theme="solarized"
        title="Files" 
        subHeader
            subHeaderComponent={<input type="text" className="form-control" placeholder="search.." value= {search} onChange={ (e) => setSearch(e.target.value)}/>}
        />
    </React.Fragment>
  )
}
