import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    EmployeeService.getEmployeeById(params.id).then((res) => {
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setEmailId(res.data.emailId);
    });
  }, []);
  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    EmployeeService.updateEmployee(employee, params.id).then((res) => {
      window.location = 'http://localhost:3000/employees';
    });
  };
  return (
    <div>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Update Employee</h3>
            <div className='card-body'>
              <form>
                <div className='form-group'>
                  <label> First Name: </label>
                  <input
                    placeholder='First Name'
                    name='firstName'
                    className='form-control'
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div className='form-group'>
                  <label> Last Name: </label>
                  <input
                    placeholder='Last Name'
                    name='lastName'
                    className='form-control'
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
                <div className='form-group'>
                  <label> Email Id: </label>
                  <input
                    placeholder='Email Address'
                    name='emailId'
                    className='form-control'
                    value={emailId}
                    onChange={(e) => {
                      setEmailId(e.target.value);
                    }}
                  />
                </div>

                <button className='btn btn-success' onClick={updateEmployee}>
                  Update
                </button>
                <button
                  className='btn btn-danger'
                  onClick={() => {
                    navigate('/employees');
                  }}
                  style={{ marginLeft: '10px' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeComponent;
