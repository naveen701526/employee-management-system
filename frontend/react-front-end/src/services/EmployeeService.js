import axios from 'axios';
const EMPLOYEE_API_BASE_URL = 'http://localhost:9277/api/v1/employees';

class EmployeeService {
  getEmployees = () => {
    return axios.get(EMPLOYEE_API_BASE_URL);
  };

  createEmployee = (employee) => {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  };

  updateEmployee(employee, employeeId) {
    return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
  }
  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  }

  deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
  }
}

export default new EmployeeService();
