import React, { useEffect, useState } from 'react'
import DataTable, { createTheme } from 'react-data-table-component'
import SecondaryButton from '@/Components/SecondaryButton';
import { CSVLink} from 'react-csv';
import useLocalStorage from 'use-local-storage';

export default function ReactDataTable({items, action}) {

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

    const columns = [
        {
            name: "id",
            selector: row => '#'+ row.rfq_number.substring(5)
        },
        {
            name: "Pr Number",
            selector: row => row.pr_number,
       
        },
        {
            name: "RFQ Number",
            selector: row => row.rfq_number,
       
        },
        {
            name: "Procurement Project",
            selector: row => row.procurement_project,
            sortable: true
        },
        {
            name: "End User",
            selector: row => row.end_user,
            sortable: true
        },
        {
            name: "Source of Funds ",
            selector: row => row.source_of_funds,
            sortable: true
        },
        {
            name: "Supplier",
            selector: row => row.supplier,
            sortable: true
        },
        {
            name: "ABC",
            selector: row => '₱'+ row.abc,
            sortable: true
        },
        {
            name: "Contract Amount",
            selector: row => '₱'+ row.contract_amount,
            sortable: true
        }, 
         {
           
            name: "Status",
            selector: row => row.status,
            sortable: true
        },
        {
            name: "Action",
            cell: (row) => (
                <a href={route(action, row.id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Details</a>
            )
        }
     
    ];

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

    // const conditionalRowStyles = [
    //     {
    //       when: row => row.status == 'failed',
    //       style: {
    //         backgroundColor: 'green',
    //         color: 'white',
    //         '&:hover': {
    //           cursor: 'pointer',
    //         },
    //       },
    //     },
    //     // You can also pass a callback to style for additional customization
    //     {
    //       when: row => row.status < 400,
    //       style: row => ({ backgroundColor: row.isSpecial ? 'pink' : 'inerit' }),
    //     },
    //   ];

    const [pending, setPending] = React.useState(true);
    const [rows, setRows] = React.useState([]);
    const [data, setData] = useState(items);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState(items);
    
    useEffect(()=>{
        const result= items.filter((item)=>{
         return item.rfq_number.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    },[search]);


  return (
    <React.Fragment>
        <DataTable 
        columns={columns}
        data={filter}
        fixedHeader
        pagination
        selectableRows
        selectableRowsHighlight
        theme="solarized"
        customStyles={tableCustomStyles}
        // conditionalRowStyles={conditionalRowStyles}
        title="PMR List" 
        actions={<CSVLink  data={ items} filename="pmr"  className="mb-3 mt-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Export</CSVLink>}
        subHeader
            subHeaderComponent={<input type="text" className="form-control" placeholder="search.." value= {search} onChange={ (e) => setSearch(e.target.value)}/>}
        />
    </React.Fragment>
  )
}
