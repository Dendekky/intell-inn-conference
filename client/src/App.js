import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AttendeeForm from './pages/attendform';

const App = () => <Router>
    <div>
    <Route exact path='/' component={AttendeeForm}></Route>
    </div>
    </Router>;
 
export default App;