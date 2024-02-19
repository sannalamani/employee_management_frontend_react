import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

const EmployeeListComponent = () => {

    
     const [employees, setEmployees] = useState([])

    useEffect(() => {
     
        getEmployees();
       
    }, [])

    const getEmployees = () => {

        EmployeeService.getAllEmployees().then((Response) =>{

            setEmployees(Response.data)
            console.log(Response.data)

        }).catch((error)=>{
            console.log(error)
        }) 
    }
    
    const deleteEmployee = (e_id) =>{

        
        
        
        EmployeeService.deleteEmployee(e_id).then((Response) =>{
            getEmployees();

        }).catch(error => 
        {
            console.log(error);
        })

        

        
    }

  return (

    
    <div className = "container">
            <h2 className = "text-center"> List Employees </h2>
            <Link to={'/employee/create'}  className='btn btn-primary' >Add Employee</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Employee Id </th>
                    <th> Employee Name </th>
                    <th> Employee Role </th>
                    <th> Employee Salary </th>
                    <th> Employee Email Id </th>
                
                </thead>
                <tbody>
                    {
                        employees.map(

                            employee => (
                                <tr key={employee.e_id}>
                                <td> {employee.e_id} </td>
                                <td> {employee.e_name} </td>
                                <td>{employee.e_role}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.email}</td>
                                
                                <td>
                                <button type='button' className='btn btn-danger' onClick={()=>deleteEmployee(employee.e_id)}> delete </button>
                                </td>
                               
                                
                            </tr>
                             
                        )
                        )
                            }
                    
                </tbody>
            </table>
        </div>
  )
}

export default EmployeeListComponent