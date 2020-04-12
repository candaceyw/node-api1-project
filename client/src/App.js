import React, {useEffect} from 'react';
import './App.css';
import Users from './components/users/Users'
import AddUserModal from './components/users/AddUserModal'
import AddBtn from './components/layout/AddBtn';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <div className="App">
     <Users />
     <AddUserModal />

     <AddBtn />
    </div>
  );
}

export default App;
