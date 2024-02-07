
import './App.css';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeListComponent from './components/EmployeeListComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    
    <div>
      <Router>
      <HeaderComponent/>
      <Routes>
          <Route exact path='/' Component={EmployeeListComponent}></Route>
          <Route exact path='/employee/' Component={EmployeeListComponent}></Route>
          <Route exact path='/employee/create' Component={AddEmployeeComponent}></Route>
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
