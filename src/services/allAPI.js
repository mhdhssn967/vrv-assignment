import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


//save employee details 
export const saveEmployeeAPI = async (empDetails)=>{
    return await commonAPI("POST",`${serverURL}/employees`,empDetails)
}

// get employee details
export const getEmployeeAPI=async()=>{
    return await commonAPI("GET",`${serverURL}/employees`,{})
}

// delete employee details
export const deleteEmployeeAPI = async (id)=>{
    return await commonAPI("DELETE",`${serverURL}/employees/${id}`,{})
}

// edit employee details
export const updateEmployeeAPI = async (empDetails)=>{
    return await commonAPI("PUT",`${serverURL}/employees/${empDetails.id}`,empDetails)
}