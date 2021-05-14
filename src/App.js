import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUsers';


const App = () => {
    return (
        <Router>
        <div className="App">
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/addUser" component={AddUser}/>
                <Route exact path="/editUser/:id" component={EditUser}/>
                
                <Route component={NotFound}/>
            </Switch>
        </div>
        </Router>
    );
}

export default App;