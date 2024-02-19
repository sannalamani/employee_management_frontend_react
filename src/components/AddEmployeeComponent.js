import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import {  useState  } from 'react'

import EmployeeService from '../services/EmployeeService'



const AddEmployeeComponent = () => {
  const [e_name, setName] = useState('')
  const [e_role, setRole] = useState('')
  const [salary, setSalary] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate();

 


    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {e_name,e_role,salary,email}

        EmployeeService.createEmployee(employee).then(Response => {

            navigate('/employee/');
            console.log(Response.data);

        }).catch(error => {

            console.log(error);
        })

        

        
        
    }

    

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "Name"
                                        className = "form-control"
                                        value = {e_name}
                                        onChange = {(e) => setName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Role :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Role"
                                        name = "Role"
                                        className = "form-control"
                                        value = {e_role}
                                        onChange = {(e) => setRole(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Salary"
                                        name = "Salary"
                                        className = "form-control"
                                        value = {salary}
                                        onChange = {(e) => setSalary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Email Id :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {email}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button  className = "btn btn-primary" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employee" className="btn btn-outline-danger" > Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent