import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, [employees]);
  const addEmployee = () => {
    navigate('/add-employee');
  };

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id);
    setEmployees([...employees]);
  };

  const editEmployee = (id) => {
    navigate('/update-employee/' + id);
  };
  const viewEmployee = (id) => {
    navigate('/view/' + id);
  };
  return (
    <div>
      <h2 className='text-center'>Employee Lists</h2>
      <div className='row'>
        <button className='btn btn-primary' onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button
                    onClick={() => editEmployee(employee.id)}
                    className='btn btn-info'
                  >
                    Update{' '}
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => deleteEmployee(employee.id)}
                    className='btn btn-danger'
                  >
                    Delete{' '}
                  </button>
                  <button
                    style={{ marginLeft: '10px' }}
                    onClick={() => viewEmployee(employee.id)}
                    className='btn btn-info'
                  >
                    View{' '}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
