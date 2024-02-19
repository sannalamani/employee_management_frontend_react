import axios from "axios";

const Springboot_Rest_API = "http://localhost:8080/employee/";


class EmployeeService {

    getAllEmployees(){
   return axios.get(Springboot_Rest_API)
}

    createEmployee(employee){

      

         return (axios.post(Springboot_Rest_API+"create",employee))
         
    }

    deleteEmployee(e_id){

      console.log(e_id)

    return (axios.delete(Springboot_Rest_API+e_id))
    }
      };
    const service_obj = new EmployeeService()

export default service_obj;