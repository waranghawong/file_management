import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import SecondaryButton from '@/Components/SecondaryButton';
import useLocalStorage from 'use-local-storage';


export default function ReactDataTable({items,action}) {

    const [theme, setTheme] = useLocalStorage("isDark",false);


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
              <a href={route(action, row.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
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
