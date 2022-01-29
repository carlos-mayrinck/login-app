// IMPORTS 
import { BrowserRouter as Router, Route } from 'react-router-dom';

// STYLES
import './App.css';

// PAGES
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';

function App() {

  return (
    <Router>
      <div className="app-container">
        <Route 
          path="/"
          exact
          component={Login}
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
