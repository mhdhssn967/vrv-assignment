import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { saveEmployeeAPI } from '../services/allAPI';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '80vw', lg: '440px' },
    bgcolor: 'background.paper',
    border: '2px solid #000',
};
const Add = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [empDetails,setEmpDetails]=useState({name:"",role:"",status:""})
    const [statusRole, setStatusRole] = React.useState('');
    const [statusStatus, setStatusStatus] = React.useState('');

    const handleChangeRole = (event) => {
        setStatusRole(event.target.value);
        setEmpDetails({...empDetails,role:event.target.value})
    };

    const handleChangeStatus = (event) => {
        setStatusStatus(event.target.value);
        setEmpDetails({...empDetails,status:event.target.value})
    };

    const handleuploadEmployee=async()=>{
            const {name,role,status}=empDetails
            if(name,role,status){
            try{
                const result=await saveEmployeeAPI(empDetails)
                console.log(result);
                handleClose()
                setEmpDetails({name:"",role:"",status:""})
              }
              catch(err){
                  console.log(err);
              }
              }
            else{
              alert("Fill the form completely!!")
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
                            <h3>Add new Employee</h3>
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <h6 style={{ marginTop: '20px' }}>Name</h6>
                            <TextField onChange={(e)=>setEmpDetails({...empDetails,name:e.target.value})} style={{ width: '100%' }} id="outlined-basic" label="Enter the name of the employee" variant="outlined" />
                            <h6 style={{ marginTop: '20px' }}>Role</h6>
                             {/* Role selection */}
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl style={{ width: '100%' }}>
                                    <InputLabel id="demo-simple-select-label">Select the role of the employee</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={empDetails.role}
                                        label="Role"
                                        onChange={handleChangeRole}
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
                                <FormControl style={{ width: '100%' }}>
                                    <InputLabel id="demo-simple-select-label">Select the status of the employee</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={empDetails.status}
                                        label="Status"
                                        onChange={handleChangeStatus}
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
                        <button className="actionbtn modadd" onClick={handleuploadEmployee}>Add</button>
                    </div>
                </Box>

            </Modal>
            <button className='actionbtn addbtn' onClick={handleOpen}>Add A New Employee</button>
        </>
    )
}

export default Add