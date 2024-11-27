import React, { useEffect, useState } from 'react';
import './Home.css'
import { useLocation } from 'react-router-dom';
import Add from '../components/Add';
import { deleteEmployeeAPI, getEmployeeAPI, updateEmployeeAPI } from '../services/allAPI';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 440,
  bgcolor: 'background.paper',
  border: '2px solid #000',
};
const Home = () => {

  const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  const location = useLocation();
  const user = location.state?.user;
  const [employees, setEmployees] = useState([])
  const [editEmployees, setEditEmployees] = useState([])


  const getAllEmployeeDetails = async () => {
    try {
      const result = await getEmployeeAPI();
      if (result.status >= 200 && result.status < 300) {
        setEmployees(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await deleteEmployeeAPI(id);
      getAllEmployeeDetails();
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getAllEmployeeDetails()
  }, [employees])

  const [editstatusRole, setEditStatusRole] = React.useState('');
  const [editstatusStatus, setEditStatusStatus] = React.useState('');

  const handleChangeEditRole = (event) => {
    setEditStatusRole(event.target.value);
    setEditEmployees({...editEmployees,role:event.target.value})
};

const handleChangeEditStatus = (event) => {
    setEditStatusStatus(event.target.value);
    setEditEmployees({...editEmployees,status:event.target.value})
};

const handleEditEmployee=(details)=>{
  setEditEmployees(details)
  handleOpen()
}
const updateEmployee=async()=>{
  try{
    const updatedResult=await updateEmployeeAPI(editEmployees)
    console.log(updatedResult);
    if(updatedResult.status>=200 && updatedResult.status<300){
      getAllEmployeeDetails()
      handleClose()
    }
  }
  catch(err){
    console.log(err);
    
  }
}


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='m-3'>
            <Typography id="modal-modal-title" variant="h6" component="h1">
              <h3>Edit Employee</h3>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <h6 style={{ marginTop: '20px' }}>Name</h6>
              <TextField value={editEmployees.name} onChange={(e) => setEditEmployees({ ...editEmployees, name: e.target.value })} style={{ width: '400px' }} id="outlined-basic" label="Enter the name of the employee" variant="outlined" />
              <h6 style={{ marginTop: '20px' }}>Role</h6>
              {/* Role selection */}
              <Box sx={{ minWidth: 120 }}>
                <FormControl style={{ width: '400px' }}>
                  <InputLabel id="demo-simple-select-label">Select the role of the employee</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={editEmployees.role}
                    label="Role"
                    onChange={handleChangeEditRole}
                  >
                    <MenuItem disabled default></MenuItem>
                    <MenuItem value={'Developer'}>Software Developer</MenuItem>
                    <MenuItem value={'System Administrator'}>System Administrator</MenuItem>
                    <MenuItem value={'Data Analyst'}>Data Analyst</MenuItem>
                    <MenuItem value={'Quality Assurance (QA) Tester'}> Quality Assurance (QA) Tester</MenuItem>
                    <MenuItem value={'Project Manager'}>Project Manager</MenuItem>

                  </Select>
                </FormControl>
              </Box>

              <h6 style={{ marginTop: '20px' }}>Status</h6>
              <Box sx={{ minWidth: 120 }}>
                <FormControl style={{ width: '400px' }}>
                  <InputLabel id="demo-simple-select-label">Select the status of the employee</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={editEmployees.status}
                    label="Status"
                    onChange={handleChangeEditStatus}
                  >
                    <MenuItem disabled default>Role</MenuItem>
                    <MenuItem value={'Active'}>Active</MenuItem>
                    <MenuItem value={'Inactive'}>Inactive</MenuItem>
                  </Select>
                </FormControl>
              </Box>

            </Typography>
          </div>
          <div className='me-2 mb-2' style={{ display: 'flex', justifyContent: 'end' }}>
            <button className="actionbtn modclose" onClick={handleClose}>Close</button>
            <button className="actionbtn modadd" onClick={updateEmployee}>Update</button>
          </div>
        </Box>

      </Modal>
      <div
        style={{ width: '100%', marginTop: '50px' }}
        className="d-flex flex-column align-items-center mt-5"
      >
        <h1>Employee Management App</h1>
        <h2>Logged in as {user}</h2>
        {user == 'Admin' &&
          <Add />
        }<div className='tablemain' style={{marginTop: "1%",overflow:'hidden',borderRadius:'15px',border: '1px solid black',width:'80vw'}}>
        <table
          style={{
            textAlign: 'center',
            width: '100%',
            borderRadius: '8px', 
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: 'solid 0.5px',
                height: '50px',
              }}

            >
              <th
                className="p-2"
                style={{ backgroundColor: 'rgb(255, 205, 205)' }}
              >
                ID
              </th>
              <th
                className="p-2"
                style={{ backgroundColor: 'rgb(255, 205, 205)' }}
              >
                Name
              </th>
              <th
                className="p-2"
                style={{ backgroundColor: 'rgb(255, 205, 205)' }}
              >
                Role
              </th>
              <th
                className="p-2"
                style={{ backgroundColor: 'rgb(255, 205, 205)' }}
              >
                Status
              </th>
              {user == 'Admin' && (
                <th
                  className="p-2"
                  style={{ backgroundColor: 'rgb(255, 205, 205)' }}
                >
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {employees &&
              employees?.map((details) =>
                <tr key={details.id} style={{ borderBottom: 'solid 0.5px' }} className='trow'>
                  <td>{details.id}</td>
                  <td>{details.name}</td>
                  <td>{details.role}</td>
                  <td className={details.status == 'Active' ? 'text-success' : 'text-danger'} >{details.status}</td>
                  {/* conditional render according to user */}
                  {
                    user == 'Admin' && (
                      <td>
                        <button className="actionbtn editbtn" onClick={()=>handleEditEmployee(details)}>Edit</button>
                        <button className="actionbtn deletebtn" onClick={() => deleteEmployee(details.id)}>Delete</button>
                      </td>
                    )}
                </tr>
              )}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default Home;
