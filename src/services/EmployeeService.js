import axios from "axios";

const Springboot_Rest_API = "http://localhost:8080/employee/";


class EmployeeService {

    getAllEmployees(){
   return axios.get(Springboot_Rest_API)
}

}

export default new EmployeeService();