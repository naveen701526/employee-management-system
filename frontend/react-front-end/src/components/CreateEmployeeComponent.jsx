import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const CreateEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();
  const saveOrUpdateEmployee = (e) => {
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    EmployeeService.createEmployee(employee).then((res) => {
      navigate('/employees');
    });
    e.preventDefault();
  };
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h3 className='text-center'>Add Employoee</h3>
            <div className='card-body'>
              <form method='POST'>
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

                <button
                  className='btn btn-success'
                  onClick={saveOrUpdateEmployee}
                >
                  Save
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

export default CreateEmployeeComponent;
