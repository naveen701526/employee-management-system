import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const params = useParams();
  useEffect(() => {
    EmployeeService.getEmployeeById(params.id).then((res) => {
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setEmailId(res.data.emailId);
    }, []);
  });
  return (
    <div>
      <br></br>
      <div className='card col-md-6 offset-md-3'>
        <h3 className='text-center'> View Employee Details</h3>
        <div className='card-body'>
          <div className='row'>
            <label> Employee First Name: </label>
            <div> {firstName}</div>
          </div>
          <div className='row'>
            <label> Employee Last Name: </label>
            <div> {lastName}</div>
          </div>
          <div className='row'>
            <label> Employee Email ID: </label>
            <div> {emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployeeComponent;
