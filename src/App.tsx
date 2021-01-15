import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import AirlineTable from './pages/AirlineTable';
import PassengerTable from './pages/PassengerTable';
import { Button } from "antd";
import FormPassenger from './pages/FormPassenger';
import FormAirline from './pages/FormAirline';

interface DetaiBtn {
  [key: string]: string;
}
function App() {
  const btnDetails: DetaiBtn = {
    "Airline Table": "/airline-table",
    "Passenger Table": "/passenger-table",
    "Create Airline": "/form-airline",
    "Create Passenger": "/form-passenger",
  };
  const btns = [];
  for (let property in btnDetails) {
    btns.push(
      <Link to={btnDetails[property]}>{property}</Link>
    );
  }
  const buttons = btns.map(btn => <Button>{btn}</Button>)
  return (
    <Router>
      <div className="App">
      <div className="header-button">{buttons}</div>
       <Switch>
         <Route path="/airline-table">
           <AirlineTable></AirlineTable>
         </Route>
         <Route path="/passenger-table">
           <PassengerTable></PassengerTable>
         </Route>
         <Route path="/form-airline">
           <FormAirline></FormAirline>
         </Route>
         <Route path="/form-passenger">
           <FormPassenger></FormPassenger>
         </Route>
       </Switch>
    </div>
    </Router>
    
  );
}

export default App;
