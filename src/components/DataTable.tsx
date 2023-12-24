import { useState } from 'react'
import { server_calls } from '../api/server';
import Background from '../assets/images/distillery.jpg'
import Modal from './Modal'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import  useGetData  from '../custom-hooks/useGetData';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: .5 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'year', headerName: 'Year', flex: 1 },
    { field: 'variety', headerName: 'Variety', flex: 1 },
    { field: 'price', headerName: 'Price', flex: 1 },
    
]

const DataTable = () => {
    const [ open, setOpen ] = useState(false);
    const { contactData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] = useState<string[]>([])

    
    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Deleted ${selectionModel}`)
        setTimeout(() => {window.location.reload()}, 3000)
    }

  return (
    <>
        <Modal 
        id={selectionModel}
        open={open}
        onClose={handleClose}
        />
        <div style={{backgroundImage:`url(${ Background })`}} 
        className='bg-fixed h-screen'>
            <div className='flex-row'>
                <div>
                    <button onClick={ handleOpen } className='p-3 m-3 bg-amber-800 text-amber-300 rounded hover:bg-amber-300 hover:text-amber-800'>
                        Add A Bottle
                    </button>
                    <button onClick={ handleOpen } className='p-3 m-3 bg-amber-800 text-amber-300 rounded hover:bg-amber-300 hover:text-amber-800'>
                        Update
                    </button>
                    <button onClick={ deleteData } className='p-3 m-3 bg-amber-800 text-amber-300 rounded hover:bg-amber-300 hover:text-amber-800'>
                        Delete
                    </button>
                </div>
            
                <div className={ open ? 'hidden' : 'container mx-10 my-5 flex flex-col'}
                style={{ height: 400, width: '90%'}}
                >
                    <h2 className='p-3 bg-amber-800 my-2 rounded text-amber-300'>My Collection</h2>
                    <DataGrid 
                        className="bg-amber-400 w-5/5"
                        rows={contactData}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        onRowSelectionModelChange={(item: any) => {
                            setSelectionModel(item)
                        }}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default DataTable