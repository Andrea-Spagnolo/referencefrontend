import Home from './views/Home';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Paths from './models/Paths';
import './App.css';
import Admin from './views/Admin';
import Reference from './views/Reference';
import Value from './views/Value';
import { IonApp } from '@ionic/react';
import Login from './views/Login';
import Register from './views/Register';


function App() {
  return (
    <IonApp>
      <Router>
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path={Paths.Home} element={<Home />} />
          <Route path={Paths.Admin} element={<Admin />} />
          <Route path={Paths.Value} element={<Value />} />
          <Route path={Paths.Register} element={<Register />} />
          <Route path={Paths.Login} element={<Login />} />
          <Route path={Paths.Reference} element={<Reference />} />
        </Routes>
      </Router>
    </IonApp>
  );
}

export default App;
