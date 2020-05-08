import React, {useState} from 'react';
import "bootswatch/dist/cyborg/bootstrap.min.css";
import './App.css';
import UserForm from './components/UserForm';


function App() {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <div className="App">
      <UserForm inputs={state} setInputs={setState} />
    </div>
  );
}

export default App;
