import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import { createContext, useEffect, useState } from 'react';
import EmployeeService from './services/EmployeeService';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

export const AppContext = createContext(null);

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);
  return (
    <>
      <div>
        <Router>
          <HeaderComponent />
          <div className='container'>
            <Routes>
              <Route path='/' element={<ListEmployeeComponent />} />
              <Route path='/employees' element={<ListEmployeeComponent />} />
              <Route
                path='/add-employee'
                element={<CreateEmployeeComponent />}
              />

              <Route
                path='/update-employee/:id'
                element={<UpdateEmployeeComponent />}
              />

              <Route path='/view/:id' element={<ViewEmployeeComponent />} />
            </Routes>
          </div>
          <FooterComponent />
        </Router>
      </div>
    </>
  );
}

export default App;
