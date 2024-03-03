import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
    const [data, setData] = useState([]);
    const handleFetchData = async () => {
      const response = await fetch('http://localhost:8080/tasks/',{
        method: 'GET',
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          'Content-Type': 'application/json',
  }});
      const data =  await response.json();
      setData(data)
  }
  
  useEffect(() => {
      handleFetchData();
  },[])
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id', //normal accessorKey
        header: 'Id',
        size: 200,
      },
      {
        accessorKey: 'title',
        header: 'Title',
        size: 150,
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
      },
    ],
    [],
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowActions: true,
    renderRowActionMenuItems: ({row}) => [
      <MenuItem key="edit">
        <Link to={"/task/"+row.original.id} className='navbar-brand'>Edit</Link>
      </MenuItem>,
      <MenuItem key="delete" onClick={() => deleteTask(row.original.id)} >
        Delete
      </MenuItem>,
    ],
  });

  function deleteTask(id){
    console.log('id is:',id)
    const response =  fetch('http://localhost:8080/tasks/deleteTask/'+id,{
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Content-Type': 'application/json',
        }});
        console.log("deleted....",response)
       
      navigate('/');
      window.location.reload();
}

  return (
    <div>
      <div className='container'>
        <div className='row'>
          
        </div>
        <MaterialReactTable table={table} />
      </div>
    </div>
  );
};

export default Home;
