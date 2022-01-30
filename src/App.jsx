// IMPORTS 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

// STYLES
import './App.css';

// PAGES
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import { useEffect, useState } from 'react';

function App() {

  const [errorMessage, setErrorMessage] = useState('');

  const [registeredUsers, setUser] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      const {data} = await axios.get('http://localhost:5000/users/');
      setUser(data);
    }

    fetchUsers();
  }, []);

  const handleLoginAttempt = (userData) => {
    if(userData.username.length > 0 && userData.password.length > 0){

      let enabledUser = registeredUsers.filter(registeredUser => (
          registeredUser.username == userData.username && 
          registeredUser.password == userData.password
          ));
      
      if(enabledUser.length > 0){
        alert(`Logado com sucesso. Olá ${enabledUser[0].nickname}!`);
        setErrorMessage('');
      } else {
        setErrorMessage('Usuário ou senha inválidos.');
      }
    } else {
      setErrorMessage("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Route 
          path="/"
          exact
          component={() => {return <Login handleLoginAttempt={handleLoginAttempt} errorMessage={errorMessage} />}}
        />

        <Route 
          path="/cadastrar"
          exact
          component={Cadastrar}
        />
      </div>
    </Router>
  );
}

export default App;
