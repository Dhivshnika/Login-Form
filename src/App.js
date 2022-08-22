import './App.css';
import Register from './components/register';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import LoginPage from './components/login_page';

function App() {
  return (
    
    <div className="App">
    <Router>
    <Routes>
    <Route exact path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/login_page" element={<LoginPage />} />
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
